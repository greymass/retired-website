---
title: How Vote Incentivization Monopolizes Delegated Proof of Stake
date: 2019-10-24
author: Greymass Team
featured: true
---
# How Vote Incentivization Monopolizes Delegated Proof of Stake

<figure><img src="https://steemitimages.com/640x0/https://i.imgur.com/BByrwTp.jpg" alt=""></figure>

---

Written by **Scott Sallinen**, *cofounder* of **Greymass**.

---

In an article I wrote almost a year ago called [How Vote Incentivization Degrades Delegated Proof of Stake](<https://steemit.com/dpos/@anyx/how-vote-incentivization-degrades-delegated-proof-of-stake>), I explored a very crucial aspect of DPoS: how voter kickbacks (explicitly or implicitly) degrades the security of the system. In that post, I focused on the effect of “racing to the bottom,” whereby elected candidates (who receive inflation) compete on offering larger kickback incentives to their voters, ending up in a situation where the inflation is de-facto useless, as it is returned directly into the hands of those whose value was being inflated away in the first place. If you haven't read this article first, please do so -- it is an important first step in this discussion.

Another article related to this discussion: [Inflation, Centralization, and DPoS](<https://steemit.com/eos/@greymass/inflation-centralization-and-dpos>), explores another facet of DPoS centralization issues by exposing how inflationary rewards, if handed to the same entities, can entrench their control of a system over time.

I will explore here the missing link between these two previous articles -- how vote incentivization *monopolizes* Delegated Proof of Stake. I will examine not only how the race to the bottom degrades security, and not only how inflation leads to centralization all on its own, but how vote incentivization (be it vote buying or trading) will in itself lead to a crystalline structure of monopolized leadership.

While this post is inspired by observations of DPoS, especially the EOS Mainnet, the outcomes are applicable to any system and should serve as a warning to systems with elected and paid consensus leaders.

To lead the discussion, I want to make a very clear distinction: inflation is not as much of a "reward" as it is a redistribution of value -- someone must be devalued to provide value to someone else. When considering inflation "rewards," one must also consider who pays that "reward."

<figure><img src="https://steemitimages.com/0x0/https://cdn.steemitimages.com/DQmUXG9m4BpzWRtAZ5MnUW8GEKrTqKFnsXQ8QxZxVjEdPrn/inf.gif" alt=""></figure>

### The Game Theory of Voting for Kickbacks

Suppose we take a simple game-theory dilemma. We have two participants, Charlie and David, voting for two separate candidates in a ballot. Candidate Alice says that if they're elected, they'll print some money (inflation) and use it for governance tasks. Candidate Bob, however, says that if they're elected, they'll take half the printed money and return it to their voters. Pretend in the event of a tie, both get elected and co-govern -- but Bob only rewards people who voted for him. The voters' dilemma appears as follows:

<figure><img src="https://i.imgur.com/DUBjWwt.png" alt=""></figure>

Let's break down these choices. Recall that inflation is a means of redirection of value: the units in the chart abstractly show where value is being redirected.

If Charlie and David agree to elect Alice, they agree to the specified inflation rate -- perhaps they agree that Alice produces value. They each, proportionately and fairly, pay Alice.

However, if one voter (say, Charlie) chooses to vote for Bob, and the other voter -- David -- does not, they pay the price: Charlie avoids having to pay for governance (i.e. by avoiding having their value eroded by inflation), leaving the burden only on David, as they did not choose Bob. What a terrible deal for David! Even worse, eventually David's vote will not even matter, as his value is inflated away.

David has two choices here: also vote for Bob, or accept the fact that if others do, they are taking his value away from him. However, if David does vote for Bob (perhaps recasting his vote), we see that the relative standing would not change. In effect, all that this does is reduce the effective inflation rate, but without a change in inflation location.

To understand this, look closer at quadrant 1 (top left) and 4 (bottom right): these are actually quite similar -- just all numbers offset by a factor of half. Indeed, this matches our expectations: If Bob creates 100 units of currency and gives 25 to David and 25 to Charlie, (whereby these participants were equal and the only participants in this economy), David and Charlie still remain the same relatively standing: from their original N% of the total, each move to N% + 25 of the new total. Bob could have instead simplified things by printing only 50% of what Alice did, and simply keeping that amount for himself.

The result is almost the same -- except for two key differences. This first is a bit silly: perhaps David and Charlie now owe taxes when Bob gives them part of the inflation, in which case they would be certainly better off having Bob simply print the smaller amount in the first place. But the bigger key difference is that Bob has undermined Alice, forcing voters to either lose value by voting for Alice instead of Bob, or join in voting for him.

This returns us to the argument from our previous article: inflation distributed proportionately is equivalent to no inflation at all. The "Bob pays out to everyone" scenario is a waste of effort: in effect, if all voters receive a proportionate return, then the system is equivalent to one with reduced inflation (by the return percent). In our example, when both voters vote for Bob, the "effective global inflation" is reduced by half.

*Here we define ****effective inflation**** as the reduced form of inflation, whereby we discount/ignore inflation that is returned proportionately.*

So this brings us to the voters' dilemma, that reminds us a bit of the [Prisoner's Dilemma](<https://en.wikipedia.org/wiki/Prisoner%27s_dilemma>): if someone else is voting for a candidate with kickbacks, and you are not, then the source of their value extraction is *you*.

There is also no free lunch: you're not "getting a reward" by voting for a candidate offering kickbacks. There is no "reward," you are participating in a round-about scheme of reduced inflation while contributing to the entrenchment of system control, which we will see next.

### Continuous Voting Leads to Entrenchment

In the event of continuous voting like in DPoS, we have a larger problem. Rather than single decision ballot voting -- whereby participants may agree to an effective inflation rate -- in continuous voting you can immediately observe other voters' behavior. In this sense, you would be party to a system that already has an elected group and effective inflation. Unless your single vote can change the entire structure, you are limited to a simple decision tree:

*Decision Tree 1*

- Vote for a new party that offers you *better* kickbacks, (which means a lower effective inflation rate), protecting your own value *better* at the expense of everyone else, or
- Vote for the current elected parties to maintain their effective inflation rate, or
- Vote for a smaller kickback rate and accept your individual value decreasing faster.

<!-- -->

In effect, unless everyone can collectively agree on a stable position, there is always an individually-determined winning move: vote for the highest kickback return, whereby others who do not vote in the same way are the ones penalized. When divided or making an individual decision, the greedy choice is a clear winner.

The winners of this entrenchment phase are essentially "[First Past the Post](<https://en.wikipedia.org/wiki/First-past-the-post_voting>)." The first groups (collaboratively or not) that identify their ability to entrench themselves are likely to enter and maintain an entrenched position simply by being first, becoming a "local minima" in the race-to-the-bottom. Then, keeping their position is only a matter of being competitive: increasing their rates to ensure voters won't greedily change votes to seek better returns.

Worse, however, is moving past the stage of entrenching and into the stage of monopolization. Once a collective of candidates (coordinated or not -- a local minima) have entered all available paid positions, an individual voter has an even worse choice. A vote for a candidate outside a paid position, no matter their promised kickback (e.g. even attempting to move towards a more "global minima" in the race-to-the-bottom), provides no return. The end result of this phase is simple: promised kickbacks, even 100%, when of nothing, don’t matter. And as such, an individual has little choice:

*Decision Tree 2*

- Vote within the current collective to prevent at least some of your value being inflated away, or
- Vote outside the collective and have your value inflated away.

<!-- -->

In this case, the current collective continues to be reinforced by individual voters' optimal behaviour. **Only altruistic behaviour -- at a real, tangible value cost -- can change the direction of the system or undo any entrenchment.** Reliance on others' altruism while you maintain a greedy position is a losing game.

**Comment on Vote "Trading" vs. "Buying"**

Vote trading can be summarized as two parties -- acting as both voter and candidate -- each buying each others' votes and simply removing the redundant step of transferring intermediate value. While one party may be slightly more advantageous during the barter (i.e. the parties are not of equal voting weights) it simply means one party is realizing a "loss" compared to market value.<br>

That is all. There is no mathematical difference between trading and buying.

### The End Result

<figure><img src="https://steemitimages.com/640x0/https://www.sunstar.com.ph/uploads/images/2018/05/16/52134.jpg" alt=""></figure>

Candidates compete for return/kickback rates, entrenching themselves as the de-facto controllers of consensus. At some point in time, newcomers are no longer able to compete, as voters would have to individually suffer value loss to even attempt to elect them. Instead, individual voters protect their value by voting for those already entrenched, crystalizing the previous structure. Eventually voters no longer have a choice, driven into a corner of protecting their own value or not, and individually snowball the system into creating a monopoly on power.

This reinforced position then has consolidated inflationary power, whereby the *effective inflation* over time is still only given to the consensus participants -- leading into [asymptotic consensus convergence](<https://steemit.com/eos/@greymass/inflation-centralization-and-dpos>) and even further control. With this effect in play, over time the monopoly slowly removes the need for the individual voter to vote for them -- as inflation gives them the power by taking it from the voter. This means the monopoly can now begin to *increase* effective inflation rates (by decreasing the kickback value) without decreasing their capacity for control. This allows further value extraction at the expense of the individual voter.

The individual voter, divided and conquered, will end in a position worse than where they started. In greedily seeking a reduced extraction of their value at the expense of other voters, they hand their power to the monopoly that's offering them exactly what they are asking for. By handing over their power, they eventually cede their value, as the monopoly becomes free to extract it.

### Potential Solutions

The only "true" solutions to this problem are to either remove inflation entirely, or to have secret ballots so that a candidate is unable to provide kickbacks. Since we often desire some reward for consensus leaders, and since a secret ballot is hard if not impossible to implement on a blockchain (as you would need a verifiable election without being able to in any way reveal, prove, or discover who voted for whom), these solutions are out of reach. As such, bar either of these, any system whereby someone is paid for their efforts in any form could devolve with corruption via kickbacks. There is no way to enforce anti-corruption without judgement and governance, which most cryptocurrency systems do not have.

In general, in order to prevent monopolization of candidates, there must be a chance for newcomer candidates to have an equal opportunity to become elected compared to the current set of elected participants. There is no way this is possible once the vote-buying race to the bottom has started, and newcomer candidates have nothing to offer for kickbacks.

The only potential aid is to make vote buying a difficult or unreasonable path by instead offering an easier and simpler path that voters may choose to achieve their true goal -- protecting their value. This can be done by having a global inflation rate vote. Then, a voter can be comfortable in their chosen rate, selecting candidates they believe to use the inflation rate in a productive way.

Rather than punish a voter based on their vote choice, all voters should be equally benefitted; we should target *universal inflation rates* rather than vote buying. Create a system where the effective inflation rate -- an artifact of racing to the bottom -- can be chosen instead as the real inflation rate. This makes decisions easier for the voter: they do not have to continuously track vote buying schemes, chasing return rates. Instead they simply make a decision on what they expect governance positions to cost, voting to decrease it if they believe that value is too high. They are then free to simply choose candidates that they believe add value or are otherwise trusted entities.

System-built-in voting "rewards" that are given to a voter *regardless of whom they vote for* is another accessible method of targeting an incentive for voters to participate, and can be added in addition to a vote on a universal inflation rate. The key difference between a kickback and a reward to all voting participants is that it allows new participant candidates to have an equal opportunity to be elected. This type of incentive or inflation is orthogonal to others, as it is a special case -- the source of the inflation is non-voters, the destination is voters, and the effect is balanced (equivalent to no added inflation at all) if all participants vote.

If you as an individual voter or as a candidate are participating in a vote buying scheme, you are not "being rewarded" or "rewarding your voters." You are at best only reducing the effective inflation rate, and otherwise extracting value from anyone not participating in your scheme -- all while explicitly cooperating in the entrenchment of a monopoly. This is not a philosophical argument, it is a mathematical certainty.

