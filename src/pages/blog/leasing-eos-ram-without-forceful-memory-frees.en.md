---
title: 'Leasing EOS RAM with Zero Fees and No Forceful Memory Frees'
date: "2018-07-05"
author: "Greymass"
---
![](https://greymass.com/logo.png)

## Abstract
In this post, we address the EOS RAM issue by outlining a design where we enable a user to have *persistent* data, but do not guarantee the *liveness* of that data (e.g. the ability to quickly read and write to their data). This design follows how traditional computer architecture works: “hot” data is placed into main memory, and “cold” data is stored on disk. By making users pay in a renewing fuel (similar to CPU/Bandwidth time) to “activate” their data, we ensure that those using real system memory actually have a desire to use it. In this way, the users of the system itself say which data is meant to be “hot” and which is meant to be “cold”. As data storage for “cold” data is cheap and abundant, it is possible to have terabytes of this data stored on disk, and reserve the usage of real system memory to just what is activated and in use, or “hot”. Because there is no “buying” or “selling” of RAM, speculation becomes useless.

The leasing system could be designed to be feeless (only consuming a renewable fuel like CPU time), automatic, and transparent to the user, enabling seamless switching of a user’s data from “cold” to “hot” when they have enough fuel allotment to use system resources and request to do so, and retaining their data in a frozen state if they do not.

With this system, it would become possible to store data for over one billion accounts with only 64 GB of system memory and 6 TB of hard disk -- though not all users would have the ability to use the system at the exact same time. As more users actively use the system, and hardware becomes cheaper, the RAM and DISK can still easily be expanded over time -- but this will not affect speculation, and only serve to alleviate users being bottlenecked due to actual high utilization.

This design comes from the intuitive answer to the question: *"If Alice doesn't touch her account for a year, should her account data really remain duplicated globally in every single severs memory? Or can we store it on disk?"*

---

## 1. Current Model: Permanent Acquisition of Scarce Resource, RAM.
In the present model on EOS we allow permanent acquisition of RAM to an account, paying a price determined by the Bancor algorithm. It has become clear that due to the speculation of a scarce resource with low supply and potentially high demand, speculators will consume as much supply as possible without actually utilizing the resource, but simply to hoard and sell to people for a higher price. With over 50 GB of RAM being purchased but less than 1 GB of RAM actually being written to at this time, it is abundantly clear that utilization is extremely low and that prices are being set solely by speculation.

Furthermore, physical memory itself is not always needed for storage of EOS’ RAM. If a user creates an account, but then does not use their account for a whole year (and thus the data associated with the account is never written to during this year), the RAM is in fact not “live”, and is not well utilized if kept in system memory. In databasing, this is typically referred to as the temperature of data, where “hot” data is accessed frequently, and “cold” data is accessed infrequently. Moreover, most data in the real world exhibits a power-law nature of access patterns, where some select data is extremely live (read from/written to frequently), but a long tail of data is rarely accessed. Thus, the mapping of EOS’ RAM to physical systems which enforces both persistence and liveness of all data, does not map well to actual data usage.

Finally, the argument of “just add more physical RAM” can be dangerous. The lever that top BPs can pull to increase RAM should be a network-wide decision, as it impacts every single node in the system -- not just all producers, but also all API nodes, all seed nodes, all historical full nodes, and so on, for both present and future. Pulling this lever, while temporarily alleviating the RAM pain, would only further centralize the nodes to the positions currently in power due to their ability to afford high-specced servers, and raise the barrier to entry for new nodes to join -- an extremely dangerous path to take for DPoS. Because of this, large amounts of RAM should not be added to a system all at once, but instead added slowly over time. This approach ensures that newcomers to the system are able to join and the old groups are able to be replaced if needed.

The current EOS model has been designed with the ability to purchase RAM as property. While leasing models have been proposed before, these ideas have typically been rejected due to the concept of “forceful freeing” (eviction), that is to say, what happens to a user’s data when their lease is up and they do not renew. Freeing the data associated with that user is an option, but not a desirable one, as it destroys property. Instead, this proposal explores a way to enable leasing while avoiding the requirement of freeing data upon lease expiry.

## 2. RAM Leasing: Separate Liveness from Persistence
For this proposal, we separate the notion of RAM, currently a persistent live storage, into two separate components: 1) live storage, with read-write permission, and 2) persistent, backed-up storage, with only activation permission. This model intends to reflect the intuitive reality of computer architecture and data access, to both remove speculation in the RAM market (by using system leases rather than ownership), as well as enable a more dynamic usage of RAM. At a high level, this system can be explained as a hierarchical system, where persistence is guaranteed, but liveness is not -- essentially, if you don’t use your data, it gets flushed to disk, just like how a real OS manages real memory.

To do this, first we move to the model of leasing the scarce RAM resource from the system. Next, we enable access to a second persistent layer in the system, a less scarce resource which we call DISK. 
These resources are described as follows:

- DISK is a resource available innately, much like CPU and Bandwidth, through staked EOS. DISK is the persistent layer to RAM and is not written to directly, but rather, acts like a “backup” to the RAM that you use. It should be noted that unstaking EOS from DISK will not be possible if it would free more DISK than you are using -- you would need to free your storage usage first to be able to unstake.
- RAM is acquired through system leasing. A user can acquire a lease, and the price of doing so utilizes a cost respective to the current RAM available to be leased (e.g. via the Bancor algorithm, similar to how it is done to date). Note that a user cannot acquire a lease for an amount of data larger than their DISK: as all RAM must be backed by DISK.

*Note that some physical memory persistence within the blockchain itself will still be needed, such as keeping in physical memory all account/contract names, but this data is relatively small compared to all account/contract data. (Technically speaking, this is like keeping pointers in memory, while the actual structures reside on disk).*

## 3. How to Pay for a Lease
The best way to pay for leasing RAM from the system, avoiding the concept of fees entirely, could be by expending a renewable fuel similar to one’s CPU and Bandwidth allotment. Acquiring a system lease on RAM would thus deplete an auto-renewing resource, this fuel, at an amount relative to the lease price -- noting that high system utilization means higher fuel prices -- earning you time to use your data in RAM. In this way, while a high RAM usage may require significant staked resources in order to have enough fuel to pay to activate the DISK into RAM, this staked resource allotment of fuel recovers over time and isn’t a true “fee”.

As system utilization of RAM increases, and thus a lease’s fuel cost increases via the Bancor algorithm, it may become prohibitively expensive for a user to activate their DISK into RAM at a certain point in time -- e.g. they would not have enough fuel allotment to pay for the activation lease. This user has two options: 1) wait for system utilization to decrease, and thus lease prices to decrease, or 2) stake more EOS to increase the total amount of available fuel they have to use. In effect, while a user still has permanent property over their own data, a user may not be able to use it in a lively manner when the system is bottlenecked -- similar to how the current CPU and Bandwidth are restricted based on staked EOS.

Furthermore, in this model the acquiring of a lease could be done automatically. When an action is desired, an automatic lease could be requested, and if the user’s resources are able to pay for it, it will succeed. If not, the lease would not go through, and data would not move -- telling the user they do not have enough staked resources to use the system due to the current system utilization.
(e.g. This is similar to how a TX will report failure due to not enough CPU allotment, a TX can report failure due to not enough fuel allotment to bring DISK to RAM.)

## 4. Determining RAM and DISK
To explain how a user can use RAM and DISK, we will use the following example parameters:
 - 64 GB EOS RAM (as system memory, this costs ~$1000)
 - 6 TB EOS DISK (as disk drives, say 2 hdds RAID0, this costs ~$400) 

Notably, the amount of disk space available is two orders of magnitude larger than physical memory -- a typical ratio in modern computers. As we allocate DISK resources on a “per EOS” basis, with 1 billion EOS in existence, 1 EOS staked in storage allows you the right to 6 KB of DISK. Thus, an example user with 1 EOS staked in storage in this model is able to lease up to 6 KB of RAM -- this is an oversubscription of their more “true” RAM quota (which would only be a scarce 64 Bytes), but this is allowed as the price of leasing is dynamic. That is to say, allowed assuming the user is willing and able to pay the fuel for the lease, which may be cheap if few leases are outstanding, or expensive when outstanding leases approach system RAM capacity. However, as leases will expire, a user may opt to wait if prices are prohibitively expensive for their use case.

To explain maximum capacity, suppose this 1 EOS user does lease 6 KB of RAM, and stores completely this amount of data. If they were to fail to renew their lease, their account data would become temporarily frozen into persistent storage, DISK. As such, the maximum of this 6 TB of storage would only be reached if all EOS users cycled through leases and continuously stored data (though, this scenario is perhaps unlikely). As a user cannot unstake from DISK if it would cause them to exceed their allowed storage, it would not be possible to transfer around EOS to oversubscribe DISK. If a user does not wish to pay for such a large lease of data, they can always free their used RAM to reduce the size of the RAM-backed DISK, and thus also reduce the cost of the lease required to activate their data.

## 5. Examples of Account and Contract Usage
### Account Creation and Use:
- Alice creates an account for Bob. Alice stakes EOS (transfers to Bob) for RAM, CPU, and DISK (say, 6 KB worth). Alice pays for a small lease of RAM (say 2.5 KB for some unit of time) for Bob.
  - Bob has the right to use 2.5 KB of RAM for this unit of time. Renewing this lease can come from several different options: 
  - Alice (or anyone else) may pay Bob’s lease each unit of time. (Useful for app subsidized accounts.)
  - Bob can pay his own lease for the 2.5 KB each unit of time if Alice no longer pays.
  - Bob can refuse to pay his lease. In this case, upon expiry of his lease, his account is no longer live in RAM, but rather becomes frozen to DISK. Bob has no more rights to write data in regards to his account.
    - At a future date, Bob can pay for a new lease to re-activate liveness of his account, moving it back to RAM, and enable use of it.

### User Pays for Contract’s RAM:
Suppose we have some CryptoPets style contract, where you own a pet and can feed it or sell it.
- Charlie creates a contract called CryptoPets. User data (who owns what kind of Pet) is stored in user RAM.
- Dave obtains a Pet, and feeds it daily. The Pet is in Dave’s leased RAM.
- Emma obtains a Pet, but stops playing and doesn’t use her EOS account for some time. Emma’s leased RAM ends, but her data remains backed up on her stake-guaranteed DISK. 
  - At some point in the future, if Emma wishes to sell her Pet, she may acquire a new RAM lease. This re-activates all her DISK back into RAM, allowing her to read/write it once again -- and thus, enables her to sell her Pet.

### Owner Pays for Contract RAM:
Suppose we have a data-store app, where authorized users can change entries in a table.
- Frank, the app owner, creates the app and leases the RAM required for the table.
- George, an authorized user, can read and write during the lease time.
- If the lease ends, the table is flushed to DISK.
- Frank, perhaps when realizing that the lease ended unintentionally, can acquire a new lease to re-activate the table.
- George can once again read and write to the table, without lost data.

## 6. Speculation
Speculation is curbed implicitly by using leases instead of ownership of system RAM. Furthermore, real data becomes a stake-weighted resource similar to CPU and Bandwidth, and as such, purchasing the ability to lease more RAM -- the option itself, before the actual lease -- would require purchasing and staking more EOS towards storage.

The market for leasing may have some slight speculation in it -- a user might speculate it is better to acquire a lease now, if they anticipate they will use it soon and the price will go up soon (as leases themselves can still use the Bancor algorithm to determine the right price for a given lease). However, not using a lease is simply a waste of time for a true speculator, as there is no longer any concept of selling. You merely acquire the right to use the liveness of RAM for your data for a certain amount of time.

## 7. Consensus
Consensus does not require all data in RAM if it is not actually being accessed. For example, if we know a balance of an account is not allowed to change (as it is frozen on DISK, and not in RAM), but we maintain the effects of that account’s impact (e.g. as part of the sum of all balances to determine total supply), we do not need the account’s actual balance data to be accessed -- simply speaking, any transaction attempting to modify an account’s data would be rejected if that account was not in RAM. 

The only valid transactions (e.g. a ‘write’ to the blockchain) must either use RAM, or activate DISK into RAM (e.g. a lease acquiry). Thus, in this system, you never need to read or write from disk to create a block -- all active consensus state is in RAM.

## 8. Performance Implications
If a user wishes to activate DISK (e.g. renew an expired lease, and the account had previously used data), this data needs to be moved into physical memory. At first this might sound like a performance bottleneck --  however, we can quite easily alleviate this by disallowing transactions updating their data for a certain amount of time, perhaps as a function of the data size. In this way, the lease transaction activating data into memory will occur first, signalling all nodes to move that data into memory from disk. A large buffer could be given, for example, 2 blocks per MB of data leased. Nodes thus have sufficient time to asynchronously load data into memory from disk while still processing all other transactions. Only after the buffer time has passed is the account able to read/write their data. Since leases should be designed with reasonably large quantities of time, a small wait time to unfreeze an account should be acceptable for user experience, and because loading into memory from disk can occur asynchronously with the processing of other transactions, performance and maximum TPS of the network will not be impacted.

Although consensus nodes are not required to read the frozen DISK data unless re-leased, API nodes may indeed wish to offer the ability to read and serve this data upon RPC requests. However, because RPC read requests can be parallel and asynchronous for frozen data, it will only increase the delay in responding to that specific user’s request by the time it takes to read from disk. To speed these queries up, API operators may even opt to keep the data on fast NVME drives.

## 9. Further Thoughts on Alternative Lease Payment Methods
While the use of a renewable resource as a fuel for payment of RAM time seems like a good option, there are other forms of payment for leasing that could be used instead, which we will explain briefly.

### Direct Fee to the System
A potential different way to acquire a lease from the system would be via a real fee -- directly pay liquid EOS from a user’s account. This method is intuitive, but goes against the principles of EOS -- the ability to use one's account “for free”, and thus is not ideal.

### Payment by Inflation
If users were to pay the system a fee for a lease of RAM, this fee (if burned) would increase the value of EOS for all holders -- but relatively more for those not using a lease (as they are not the ones paying fees). 
To avoid the cost of “paying” for a lease, we could instead choose to have some part of this fee paid for by some form of inflation, which could be given to those who stake but do not activate their RAM -- i.e. who are not currently holding a lease. However, this model requires more thought, as a basic implementation implies that all leases have the same cost, which they should not -- each lease price should be determined dynamically based on how utilized the system currently is.

---

### This proposal was designed by Team Greymass, a Block Producer candidate for EOS. If you like what we're doing, don't forget to vote for `teamgreymass` on EOS!