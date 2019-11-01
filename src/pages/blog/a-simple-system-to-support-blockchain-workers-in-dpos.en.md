---
title: 'A simple system to support blockchain "Workers" in DPoS'
date: "2019-05-09"
author: "Greymass"
featured: true
---
Within EOSIO chains today, and even across the greater DPoS spectrum, it is common practice for the system to dedicate a portion of its economic rewards to a fund earmarked for improvements. This is typically done through either fees during on-chain actions, or directly with token inflation. 

EOSIO-based chains primarily fund themselves through inflation, since fees are not required for typical network operations. This inflation comes in various forms, either being allocated slowly over time through "block rewards", in tranches through "worker proposals", or even during genesis with "strategic partners", a "development fund", or a "pre-mine".

No matter which of these inflation techniques is used, they all share the same property: they add tokens to the overall supply, and are given to entities without a direct exchange of value. This is done with the expectation that those entities will contribute effort and value back into the system.

Through this post, we hope to explore new methods to create value with these systems and to stimulate discussion on various ways the same goals could be accomplished. 

The EOS mainnet will be the primary subject matter, though the ideas discussed within could be easily to transported to other environments and other EOSIO-based blockchains.

**Note**: If you as a reader understand how EOSIO chains allocate inflation, the history up until this point, and the value that said inflation can provide - feel free to skip the next 3 sections of this post and jump immediately to the heading titled  **“Worker Candidates” (akin to “Block Producer Candidates”)** to get directly into the new system we are proposing.

### The desire for a self-sustaining ecosystem

The idealistic goal of DPoS systems (like EOS) is to create, encourage, and sustain a workforce for the benefit of the network. EOS already has one collection of entities like this: the Block Producers (BPs).  BPs fill the critical role of operating the network and participating in governance. These block producers are paid by the network through inflation.

What most ecosystems of this magnitude have realized is that you need more than just one dedicated group of entities maintaining the network. Not only do you need block-producing validators, but you also need individuals and organizations who are not involved directly in block production and governance who can contribute necessary products and services. These are entities that aren't focused on the politics and operation of the blockchain’s consensus, but instead are directed towards other critical projects that enhance an already operational network.

In this article, we will explore a number of ways this could be accomplished. First, however, it's important to understand exactly how inflation is allocated within EOS today.

### Existing Inflation within EOS 

A number of prior and on-going inflation events have occurred within the EOS mainnet, which are as follows:

- **A genesis inflation event**: 10% of the supply (100mm) was allocated to the [b1](https://bloks.io/account/b1) account, owned by Block.one, the corporation that wrote the original version of the open-source EOSIO software. This stake vests over 10 years and serves as an incentive for Block.one to continue contributing to the open source EOSIO ecosystem.
- **A per-block inflation schedule**: The system contract itself was designed to create a 5% inflation rate over the course of a year, divided further into various buckets for those contributing to EOS. 

In addition, EOS generates further network funding through fees accrued from [RAM trading](https://bloks.io/account/eosio.ramfee) and [premium name auctions](https://bloks.io/account/eosio.names), though these funds do not come from inflation.

Setting aside both the discussions on the fee-based commons fund and the genesis event for now, the primary topic of focus we are looking at here is the **per-block inflation schedule**. First we’ll take a look at how it works today, and later we’ll explore how it could be changed to better the EOS ecosystem. 

##### Current Utilization of the per-block inflation

The per-block inflation schedule, a total of 5% inflation per year, is currently divided as follows:

- 80% (of 5%): Deposited into the [eosio.saving](https://bloks.io/account/eosio.saving) account
- 20% (of 5%): Split into two pools as rewards for the Block Producers:
  - 25% (of the 1%) aka **bpay**: Paid to Block Producers per Block they produce (top 21 only).
  - 75% (of the 1%) aka **vpay**: Paid to Block Producers based on the % of the vote they receive (top ~90 only).

The stakeholders of EOS, via staked-weighted voting, are ultimately in control of the 1% inflation that goes to block producers simply by casting their vote. The elected producers are awarded those newly minted coins for their service - validating blocks and operating the network. 

The remaining 4% of inflation accrues to the [eosio.saving](https://bloks.io/account/eosio.saving) account, with varying opinions on how utilize its value. It has been the subject of much debate since the inception of the EOS mainnet, and the EOS accrued in this savings account since genesis was recently burned through a BP vote

Some of the proposals for the 4% allocation of inflation have included:

**Worker Proposal Systems (WPS)**

Worker Proposals is a general system design that's been the primary focus of this discussion to date for awarding the remaining 4%, but has yet to really gain ground in terms of adoption on the EOS mainnet.

Despite the EOS mainnet lacking a worker proposal system, we already see a strong desire for a system to fill this role. It’s seen currently as "non-traditional block producer" entities climbing the ranks as EOS Block Producers, with some actually becoming active producers with a 1/21 say in consensus matters. 

Many of these entities go this route because the system provides them with no other option, and stakeholders vote for them because they see the value in the non-block producer roles they fill. The problem then becomes one in which we have disinterested and unqualified entities acting as block producers in the governance systems, ultimately with partial control of consensus, squeezing out other entities who are more willing and capable to act as block producers. 

Worker Proposals could alleviate this situation by creating an alternative opportunity, but these systems are complicated to build and end up being time consuming to both stakeholders involved in voting and entities applying for funding.

**Voting Incentives (Staking Rewards)**

Another popular suggested use for these funds has been to establish an incentive to participate in voting. This system would generate what's traditionally known as "staking rewards" for token holders that stake their tokens and then participate in voting either by setting a proxy or voting for a certain amount of producers.

This suggestion goes beyond what REX offers in its implementation, since REX also requires you to lease your tokens to be eligible for the rewards. Users who would rather stake and use the network resources provided by those tokens are not included in rewards from REX. 

Unfortunately voting incentives don’t solve the problem of rewarding workers, so we'll leave the discussion on this topic for another day.

**Complete Removal**

Aside from finding use cases for this inflation - recently there has even been a debate on whether or not to simply burn the funds and turn off that portion of inflation. While the recent burn removed the savings that had accumulated since genesis, it did not turn off the faucet of funds flowing into the eosio.saving account.

We supported the recent burn, as we felt that having such a large fund without a clear plan in place to allocate it could lead to potential conflicts. However, we'd rather find a use for part of that inflation, rather than remove it completely, in order to avoid some of the concerns we cited in our recent post about [Inflation, Centralization, and DPoS](https://steemit.com/eos/@greymass/inflation-centralization-and-dpos). 

**The list continues…**

There are many more proposals for this yet unused source of inflation, many with enough merit that warrant some serious thought. With a decent understanding of how we got here, we should focus back in on how we could use this inflation to provide funding to valuable participants in the network who are not acting as block producers.

Instead of inventing a new system, why not use one we already (mostly) understand? This is where we get into a new idea we’d like to introduce and call “Worker Candidates”.

## “Worker Candidates” (akin to “Block Producer Candidates”)

What if instead of using a proposal system (tranche/grant-based), we instead moved to a per-block reward system that mimics the existing system to elect BPs? 

This approach takes a system which is already working today to also elect a pool of general "workers" that aren’t responsible for the same things block producers are. These “workers” could be individuals, entire organizations (like the BPs), or even smart contracts with a defined purpose. These entities campaign to illustrate their value, just as a BPs do, and stakeholders get to decide who and what is elected into this pool.

The system itself could be funded using a fixed portion of the total inflation, one that is deemed appropriate by the stakeholders, to create a worker rewards pool much like already exists for the block producers. Elected workers would then be able to claim rewards as BPs already do today.

At the technical level, the system could work exactly like the "per-vote rewards" (`vpay`, short for "vote pay") that rewards workers based on the amount of votes they receive, elected by the same body of voters that is electing the block producers.

> **Important Note**: We’d like to stress here that this discussion is focused on the creation of a new rewards pool, not in determining the overall inflation numbers or distribution ratio. The future fate of both the overall inflation rate and the eosio.saving account are completely separate topics, ones we would prefer not to get caught up in for the purpose of this system. **The system itself could work with a variety of different number combinations, and the overall inflation rate is inconsequential.**

An already familiar structure could be adopted by altering the inflation we reviewed above:

- 50% (of 5.0%): Deposited into the eosio.saving account
- 30% (of 5.0%): Paid to Workers based on the % of votes they receive.
- 20% (of 5.0%): Split into two pools as rewards for Block Producers
  - 25% (of the 1.0%) aka **bpay**: Paid to Block Producers per Block they produce (top 21 only).
  - 75% (of the 1.0%) aka **vpay**: Paid to Block Producers based on the % of the vote they receive (top ~90 only).

This introduces two major changes: 

A new group of elected "workers" to provide value to the network
The reallocation of 1.5% future inflation (or 30% of the total inflation) from the eosio.saving account into the worker rewards pool. 

As we learned previously from our post about [Inflation, Centralization, and DPoS](https://steemit.com/eos/@greymass/inflation-centralization-and-dpos), the ratio between Block Producers and non-Block Producers should be properly aligned to promote decentralization, or at the very least to prevent trends towards centralization. The numbers in the example above were chosen so that sum of worker funds (1.5%) was greater than the sum of the producer funds (1.0%), in order to avoid consolidating power with the parties in control of consensus. Realistically, both numbers could be either higher or lower - so long as overall worker funding is equal or greater than that of the block producers.

### Worker Candidate Elections

Like Block Producers, Worker Candidates could be elected in real time, allowing stakeholders to control all inflation emissions. These continuous elections would foster serious competition to become a worker candidate, similar to that of block producers, encouraging the best-in-breed candidates to rise to the top. 

This also simplifies the system for both stakeholders and potential candidates when compared with a traditional “worker proposal system”. Candidates aren’t required to submit specific proposals, define an amount of funding, or set a timeframe - they simply present themselves alongside their offerings in an effort to rally the community behind their work. As entities deliver value, stakeholders will support them with their vote. If these entities fail to deliver, the voters can decide to remove their votes and no longer support candidates. Voter participation is also simplified, as voters choose to support specific entities, rather than vetting proposals on a project-by-project basis.

This setup creates the same level of expectation that is placed on block producers for their work, and comes with the same challenges that block producers already face.

Behind the scenes, the number of worker candidates awarded will act much like block producers - with a defined minimum percentage of the vote required in order to claim any rewards. The minimum percentage, overall inflation, and any other requirements can be modified by the stakeholders through pressure on the block producers, who ultimately control all of the system contracts. These numbers can be tweaked to increase or decrease the number of worker candidates the system can support.

### Ideally, All elected entities are unique

It is important that individual entities do not participate as both Workers and BPs. This is something that can only be enforced by the voters, but we’d highly recommend that the EOS community develop a strong social norm around this idea. Block Producers are expected to only run one candidate, and Workers too should also only be allowed (by voters) to run one candidate. This ideal should carry across both pools of elected entities, and each entity should either only have one Block Producer Candidate *OR* one Worker Candidate. Not multiples of one type, and not one of each - entities should be uniquely either a Worker or a Block Producer.

While this concept has proven to be unenforceable within our current systems, we feel it’s still an important concept to convey to stakeholders. The reason for this is that multiple candidacy would create a centralizing force on the network; any entity running multiple types of candidates would be “double dipping”, which could allow them to further entrench themselves in multiple rewarded positions. It would result in single entities accruing long-term consolidation of power in the network, as we demonstrated [in this article](https://steemit.com/eos/@greymass/inflation-centralization-and-dpos).  

Achieving this will require a sufficient level of transparency from these new workers as well as Block Producers. Ownership disclosure of a worker entity will be just as important as ownership disclosures for BPs in order to ensure that we know who is behind the worker entity and who will benefit from the rewards granted.

Fortunately, we have a good start on how to accomplish this using many of the same techniques that Block Producers already use, with the standardization of a “Worker Info” JSON entry, both on-chain and on their website, defining the composition of the organization. 

Ultimately, as with Block Producers, policing Worker Candidates will be up to the stakeholders.

### So who would become Worker Candidates?

We imagine these candidates would be largely comprised of groups you already see in EOS today, currently acting as organizations and/or block producers. These worker candidates will be the ones passionately and successfully adding value to EOS, while not having the desire or capability to be a responsible block producer. 

Take, for example, the Scatter team — a business entity providing an incredible value for the EOS ecosystem with a singular mission: to build the Scatter suite of products and to enable dApps. If you as a stakeholder agree the network should support Scatter, you could vote for them to be a worker candidate. If elected, they would then be rewarded by this new pool of rewards, all without the need to submit specific worker proposals or to take on the infrastructure and governance responsibilities of being a block producer. They could then simply be elected by the stakeholders to do what they do best and nothing more. 

An organization like the Scatter team could also grow beyond this need for support from the network. Once an entity establishes its own successful business model, it could then retire its worker candidate and continue to serve the network while standing on its own feet.

Another example of what would be a good fit as a worker candidate are the various DAO/DAC initiatives, like [the EOS DAO](https://medium.com/eos-new-york/the-eos-dao-progress-on-chain-99fc4a47e4ac). Decentralized organizations like this provide unique benefits to the network through various initiatives in which adequate funding can be used to both support their organization and fund external projects that fit their objectives. That objective could be funding development, infrastructure, protocols, or even to incubate and help guide new projects. Simply having a worker candidate system enables these organizations to grow and add value back into the ecosystem.

Worker candidates are also an option for current block producers who would rather focus  exclusively on their product(s) and not have to deal with governance and consensus issues. It could also help block producers who end up with a situation where a conflict of interest arises with a product or service they create, potentially one where the best decisions for their business would collide with a decision best made for the network. These block producers have an opportunity now to shift from being a block producer candidate to a worker candidate, relinquishing their position in governance and consensus to focus on their business. 

The use cases for worker candidates could also include:

- Exchanges
- Media Outlets
- Developers
- Scholarships/Grants
- Infrastructure Providers
- Communities/Outreach Programs

Any non-BP entity that adds value to the ecosystem in the eyes of a stakeholder should be eligible to run as a worker candidate.

### Does this impact Block Producer Candidates?

It does - hopefully in a positive manner. Not only does this give some block producers the opportunity to shift away from technical and governance positions, but it also cleans up the playing field for the participants on the governance side by removing entities that end up elected and refuse to actively vote or otherwise participate as a Block Producer. 

Simply introducing worker candidates into the ecosystem creates a clearer path in understanding the roles and responsibilities of the two different elected groups:

- Block Producer Candidates’ number one priority is the blockchain itself, with all other projects being secondary.
- Worker Candidates’ number one priority is adding value to the chain through products and services.

It's not to say that Block Producer Candidates cannot also add value to the chain through products and services to remain competitive, but they are responsible for dropping all other activities when the chain itself demands attention. This clarification on responsibilities sets a precedent that Block Producers, first and foremost, act in the best interest of the network and serve as its custodians.

### The impact on other proposals involving fees and inflation

The introduction of a Worker Candidate rewards pool, derived from a portion of inflation, is not meant to act as a replacement for any sort of proposal/approval system or governance body, nor should it detract from any other proposal that seeks to use inflation to achieve other goals.

Currently EOS has two rewards pools that are funded through inflation: the eosio.saving account and the EOS Block Producers. 

This proposal would add a 3rd pool, but it does not mean that a 4th, 5th or 6th pool could not exist and operate completely outside of this system. Steem inflation, for example, is divided up into 4 pools, creating a system which encourages decentralization over time to various parties for different efforts.

This Worker Candidate rewards pool is meant to act as one pool of inflation, specifically dedicated to rewarding, through inflation, the most valuable non-block producer organizations we can attract.

### Conclusion

It is our belief that having an opposing force, in terms of the allocation of inflation, is critically important to systems like EOS. Rewarding workers is a logical step in achieving this goal and adds a system which provides a secondary source of inflation to counter the current single source of inflation (Block Producer rewards). 

Introducing “Worker Candidates” and utilizing a system EOS stakeholders are already familiar with is one option of many to achieve this goal, and in our opinion is one of the most simple implementations to get something off the ground in the short term. Many of the same benefits and pitfalls within how Block Producers are elected are known at this point, and the experience we have under this structure will help accelerate the rate at which we can proceed.

Should the stakeholders of the EOS mainnet be receptive to this idea - we are willing to contribute to further defining the concept and helping with its implementation. If not, at the very least we hope to have provided a way to think “outside of the box” on how best to achieve some balance in how inflation could be used to benefit the network.  

We recognize that this idea has both great potential and serious risks. It is our hope to kickstart a conversation with the community about the benefits, drawbacks, and tradeoffs of such a system. As we see more EOSIO-based chains launch in the future, this framework may serve as a helpful way for various projects to think about how to fund their systems and how to make their chains competitive. 

We'd welcome everyone interested to join in and discuss this topic in a new Telegram channel we created specifically about this topic:

[https://t.me/wcsvps](https://t.me/wcsvps)

<center>
![gm-vert-small.png](https://cdn.steemitimages.com/DQmYmutmtKdawRyv7S7A3AM1LbejWc3JZeHFAJpVS79ZHvN/gm-vert-small.png)
</center>
