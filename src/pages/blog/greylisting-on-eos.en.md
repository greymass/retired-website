---
title: 'Greylisting on EOS'
date: "2018-08-13"
author: "Greymass"
---
![](https://steemitimages.com/0x0/https://greymass.com/logo.png)

As of [EOSIO release 1.1.0](https://github.com/EOSIO/eos/releases/tag/v1.1.0) (notably almost a month ago), support was added to "greylist" accounts.

[[nodeos] Support for greylisting accounts, preventing access to the unclaimed resources in an uncongested chain (#4368)](https://github.com/EOSIO/eos/issues/4368)

The reason why this was added, according to [Bart (wanderingbort)](https://github.com/wanderingbort), is as follows:

> "...a malicious actor can impose a higher load on an idle network than their stake should allow. Congestion mechanics will prevent this from being a sustainable situation but, accounts which repeatedly abuse this feature should lose access to it."
> 
> "Note, this would not prevent an account from transacting on chain nor would it impede the burst mechanics built into the system. It would only deny access to the additional resources that result from an idle chain in a "relaxed" state."

Simply put, the goal of the greylist is to constrict access to perform actions beyond what is granted to an account based on their stake weighted limits. 

To be clear, *this is not a system of censorship* (which could be done with a blacklist), but instead simply disallowing an account to go beyond their normal limits when the chain is underutilized.

Why would this be used? Perhaps an analogy helps illustrate its need.

# A non-technical analogy

Imagine that every day, you have lunch in the EOS cafeteria. The size of the lunch you receive, your resources, is determined by how many tokens you have staked. Every day, the kitchen in the cafeteria produces enough food so that if every person were to come claim their allowed lunch, there would be enough food for everyone. 

At the end of the lunch hour however, what ends up happening is that not everyone came and ate all their food. Perhaps they were not very hungry, or perhaps they were doing something else. So, the kitchen has leftovers. 

With these leftovers, the cafeteria allows anyone to come and get a second helping, beyond their allocated amount, in case they were hungrier than their allotment provided.

However, an unfortunate situation can occur with the leftovers: a single account can queue up programmatically, eating up all the leftovers before anyone else has a chance to get seconds. Worse is if that account queues up for the leftovers, takes them all, then dumps it in the floor in front of you, when you just wanted a little more porridge.

As the kitchen staff observes these individuals consuming all the leftovers, and  sometimes wasting them, they could choose not to serve additional leftovers to these specific people. They would create a **greylist** of who these people are, and refuse them any of the leftovers. They aren't banning them from the cafeteria, nor are they refusing to feed them - they are just preventing these people from claiming seconds.


# Which accounts should be placed on the greylist?

It is important to differentiate which accounts should be restricted from using beyond their normal limits, and which could be allowed. Being mostly a subjective choice, where each producer is able to decide their own list (as it is not a consensus feature), we believe each producer should be clear about their choices of whom to place on this list. To better explain our choices and our arguments, we will first present two different types of reasons why anyone might greylist an account, and explain how we will choose our list.

## What metrics should define restriction?
Here are some example of metrics one might use to determine greylisting.

**Subjective metrics**
1. "Unrealistic" usage (nothing "important" in the transactions)
2. "Unnecessary" blockchain bloat

These subjective metrics are often touted as "Network spam".

**Objective metrics**
1. Malicious or poorly written software that doesn't back off when detecting low resources
2. TX's that are sent to multiple API endpoints rather than to a single one

Objective metrics like these are an attempt to address malicious behaviour: someone trying to step on your toes to get the leftovers before anyone else has a chance to.

# Our position on greylisting

Understanding the above reasons why an account might be placed on any producers greylist, here we outline the argument for our decisions: we will only follow the objective metrics, rather than the subjective ones.

The reason for this is as follows. It is impossible to determine what is "important" or not, as this is a subjective metric that depends on the individual. In the same lines, it is also hard to determine if blockchain bloat is "necessary" or not -- to one individual it might be useful for them, but for another it will not be. When placing an account on our greylist, we will only choose those that can be demonstrated to be performing clear violations of objective metrics.

As a concrete example, we will take the account `blocktwitter` (also `chaintwitter`). It is clear that their usage applies to subjective metrics: many would argue several gigabytes of transactions, comprising of 192 million actions, which is ~95% of all EOS transactions to date, are not important. These transactions all say "WE LOVE BM", which is fairly unnecessary and probably do not need to be immutable forever. However, we need to look at the objective metrics.
1. This account has malicious or poorly written software. When a transaction is rejected by our API node, citing that they are out of resources, the account _immediately tries again_ by sending a new transaction, without even waiting for the next block. Their software should detect that the next transaction would not be accepted before sending it.
2. This account multicasts transactions to multiple endpoints. While unclear if intended to be a DOS attack, it is clear that this is done to attempt to avoid (1), i.e., the rejecting of new transactions when it becomes clear that usage has been exceeded.

This account has continuously been performing these actions for over a month, and is the root cause of the inability for the average user to perform "regular" EOS actions -- their behaviour has completely removed anyone else's ability to use from the leftovers.

For these reasons, we have decided to greylist the two accounts `blocktwitter` and `chaintwitter`. As a reminder, this is not a form of censorship -- they will still get their lunch just like everyone else. If they would like a bigger lunch (more "LOVE BM" messages), we recommended that they stake more EOS to do so, and not consume the community leftovers.

# A call to action to other Block Producers

At the moment, we are the first top Block Producer to test greylisting in production. As such, during the period in which we produce blocks there will be more room for others to use the leftover resources -- but this single reduction may not be significant enough to better allocate global resources. We recommend other Block Producers to consider the above metrics we present, as well as their own, and consider greylisting accounts with objectively malicious behaviour. 

Finally, we would also push for development of better resource allocation strategies to avoid the need for this system entirely. An objective blanket that applies to all users will be a better solution compared to the need for Block Producers to be reactive.