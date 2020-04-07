---
title: 'Inflation, Centralization, and DPoS'
date: "2019-04-24"
author: "Greymass"
---


![](https://cdn.steemitimages.com/DQmS131dxdxSjU3UKrrEJT7CJUBMNZJkuCrgyqLwX1KHAvp/mXkfdToSwHy717SyTJHRsb6HY62chsj1ZCaMXwgRwhe9yMk4gNRDsqF3yQ8viERHTjhZCZPmpeusCiJ4YG9AzNmg8w5rYCQNMZDDA7m6N.png)

In recent weeks, the EOS community has been engaged in a number of conversations around topics related to the inflation of the EOS token supply. We believe these to be important discussions, as inflation can have a direct impact on the security, distribution, and incentive structure of any given blockchain. When it comes to EOS in particular, we believe that the framing of the inflation debate has been overly simplistic. Inflation can be good, bad, or neutral, depending on where it flows and how it is used. The details of specific implementations are important to consider.

In this post, we’d like to outline concerns around EOS inflation that we believe haven’t been addressed in-depth. Our goal with this post is to demonstrate that there may be tangible benefits to EOS inflation that *does not* flow directly to validators (consensus participants), and tangible downsides to inflation that flows *only* to these participants. We hope that this contributes to the community conversation around these issues, and we look forward to hearing voter feedback and discussing these issues further.

----


# Centralization Effects of Cryptocurrencies

Cryptocurrencies are simple to analyze, mathematical structures of mini-economies with differing properties, often pre-defined and deterministic. Bitcoin, for example, will issue only 21 Million "units" before ceasing all inflation. This makes analysis quite unique -- we can analyze these closed-body economic systems exactly and with high fidelity, observing properties such as money velocity and distribution on a total scale as all information is public. In this post, we will seek to analyze the property of *centralization over time*.

There are many contributing factors in which a cryptocurrency system can have centralization forces – beyond the ones we think of commonly, such as accumulation of wealth. In Bitcoin, for example, we already observe miner centralization to select, large pools. In Proof of Stake (and the delegated variant) we see a similar phenomena; with a small, technically capable pool of potential consensus participants, the ability to decentralize is constrained by the number of capable parties. This debate continues to be on-going with Bitcoin. Proponents of "small blocks" argue that large blocks will forever burden newcomers with too much data, while proponents of "large blocks" argue that technology is advancing and the "forever burden" decreases with time and technological progress. In reality, the correct trade-off is likely somewhere in-between. Startup costs and long-term costs certainly can increase the centralization of the system, as newcomers are unable to afford to validate the system and the pool of potential consensus participants shrinks. Yet finding a correct balance between a technological cost that does not burden newcomers, and a system usable enough that it doesn't drive newcomers away in the first place, is a fine line to walk.

In Proof of Work systems, present rewards do not affect future rewards, as the ability to achieve a PoW is an external factor. This is what makes PoW systems "permissionless" – their consensus mechanism is not a closed-body system, and external input (in the form of electricity and 'work') is required. With DPoS systems, we have an interesting reward structure that is quite different compared to Proof of Work. In many DPoS systems the supply is not fixed but rather inflationary. This means that present rewards can actually affect future rewards. *If we award those responsible for consensus with rewards that give more influence over consensus, then the system’s decentralization can be affected in the long-run.*


# Inflationary Rewards

To understand this problem, we need to take a step back and refresh our understanding of how exactly a property like inflation works in a closed-body system. As an example, suppose we have two people, Alice and Bob, each of whom have 100 units of currency. If Alice and Bob are both given 100 more units each, and each now has 200 units, has anything changed? In a closed body system, we have done absolutely nothing -- Alice had 100/200 units (50% of the currency) and now has 200/400 units (still 50% of the currency). Inflation that is uniform has no effect other than accounting of units. In the “percentage of currency supply” reference domain, inflation can only move the percentages. If instead we give 100 units to Alice but do not give Bob any more, then Bob still has his original 100, but Alice has 200. We've "inflated away" Bob's value— he has gone from owning 1/2 of the supply to owning just 1/3rd, and Alice has gone from owning 1/2 to owning 2/3rds.

![](https://cdn.steemitimages.com/DQmUXG9m4BpzWRtAZ5MnUW8GEKrTqKFnsXQ8QxZxVjEdPrn/inf.gif)

Of course, the unit count (the number itself) also has psychological effects -- perhaps too complex to discuss simply here, and a topic for another time. The important takeaway here is that *we must think about inflation as changing the percentage of ownership of the total supply. With inflation, for each win, there must be equal but opposite loss.*

So how does this actually affect blockchain systems? In DPoS, control of consensus is determined by votes from the supply. In a simplistic form, those with the most supply of the currency will de-facto control consensus. And yet we reward consensus participants with rewards that inflate away those not in control of consensus. Imagine that Alice, Bob, and Charlie each own 1 unit of currency, for a total supply of 3. If they elect Alice and she inflates the supply by 1 and awards that to herself, she now has two votes (compared to 1 each for Bob and Charlie). Alice voting for herself is now impossible to overrule. When consensus is controlled in a closed-body way, eventually the present control of system snowballs into future increased control.

We can call this a form of "asymptotic convergence", whereby the supply collected by a specific entity, as a percentage of total outstanding supply, increases asymptotically in a closed-body system (i.e., it slowly gets closer and closer). While we have only used inflation as an example, this effect would also occur with fixed or variable fees, as well as with variable inflation, though the math would change slightly.


# Asymptotic Consensus Convergence

When the supply of tokens is responsible for consensus, and the inflation is given to those presently in charge of consensus, then inflation can lead to centralization in the system over time. This is this asymptotic *consensus* convergence, whereby the control of consensus itself asymptotically converges.

Of course, real-world systems are far more complex than the simple examples we have given. The consensus rewards are not always hoarded in full. To understand the effect, let’s make an analogy to physics. Suppose we have a box in the middle of a warehouse. If a constant force is applied to a box in a single direction, the box will move in that direction. If the force is opposed,  the box will not move. In this analogy, the asymptotic consensus convergence is a fixed force applied in the direction of centralization towards the current elected set of consensus participants. This force can be opposed, but it would need to be voluntary. If the consensus participants always sell all their rewards (externalizing their value), the force is opposed in full.

However, if any of the consensus participants collect any of the reward, the box moves -- just a little bit. The more that do, the more the box moves. The force can be defined in terms of the reward:

![`\frac{(1 + reward) ^{years} -1}{(1 + reward)^{years}}`](https://cdn.steemitimages.com/DQmPYZKgDwaSBWCGwU1NBSanR4Ca5TweGbpscaXr6485D4L/CodeCogsEqn.gif)


As an example, this would yield a curve that looks like the following, if we suppose a reward (via inflation) of 1% per year:



![MSP62415f3ag5a86ecfe5b000041aaifcfha0ag3f4.gif](https://cdn.steemitimages.com/DQmcGdNQCgzU6Ru8zwy5vL62v61QgdXuc16DZP5QPwjpbGg/MSP62415f3ag5a86ecfe5b000041aaifcfha0ag3f4.gif)
`https://www.wolframalpha.com/input/?i=(1.01%5Ey+-1)%2F(1.01%5Ey)+for+y%3D0+to+100`


In the above, we see the percentage of control in the system (that is to say, the control of the newly generated supply compared to the new total supply) go from zero to just under 10% in 10 years, and about 60% after 100 years. What this means is that, in that amount of time, the maximum rate the box could move in our analogy is at worst that amount (just by this force). We use the analogy of a force for a very important reason: opposing the force as an impulse only delays the immediate outcome, and does not prevent future effects -- in our example, consider opposing someone pushing a box constantly with a single kick: while it may delay them temporarily, it does not oppose their constant pushing.

While this doesn't sound like a problem today, the numbers should be concerning. In EOS, the top producer is presently elected by only about 12% of the supply. However, there is a multiplicative factor of 30 for votes in EOS: should a group of 30 agree, they can collectively amplify their votes (by vote trading) by that factor. In this case, a collective could achieve this dominance in, at worst, [5 months](https://www.wolframalpha.com/input/?i=(1.01%5Ey+-1)%2F(1.01%5Ey)+%3D+122%2F30%2F1000), entrenching themselves in a position only solvable by getting more of the supply to vote for a different group (and hoping that new group is more altruistic in their voluntary efforts of opposing the centralization force). This is not a ticking time-bomb with a sudden explosion; rather, this is a slow and painful drowning, struggling to breathe while the air slowly escapes.

In reality, the math gets complex quite fast when taking into account competing groups vying for a single dominating control of consensus. However, with some effort it can be proven that the largest collective (specifically, the set receiving the most votes from the current dominant set) eventually will win. This leads to a bit of a prisoner’s dilemma for those not within the largest collective — if you elect to join the dominating group, you may get 'rewarded.” If you refuse, and they are able to form with others, you will get nothing.


# Counterbalancing the Centralization Force


![3918952803.jpg](https://cdn.steemitimages.com/DQmfTAxMttZEipjTj1NXy7wf3hRe7UvRCzDM8SnTAxJKqrU/3918952803.jpg)


If you're concerned about centralized participants forming an entrenched position due to inflation, then this argument has succeeded. Yet, we should consider not just how this problem exists, but how it could be solvable.

There are a few drastic measures that one could take. One example would be removing inflation to consensus participants altogether. This would indeed solve the problem, but it would remove the incentive for node operators to work for the network in the first place. As another attempt to solve the problem, a separation of token properties could be made: tokens that are voting capable (of fixed supply), and tokens that are utility tokens (of inflationary supply). In theory, the consensus participants are only paid out in minted utility tokens, and thus do not collect voting influence over time. However, this doesn’t actually work! We’ve just moved the problem to a different domain, so long as they can swap these tokens on the market.

Removing the inflation of voting rights completely is not the only solution, however. In fact, if a secondary source of inflation were added that went to a different source -- a force in an equal but opposite direction -- the centralization force could be balanced (or even result in net decentralization)!

In our equation above, the reward refers to the amount of the supply the consensus participants are receiving relative to the total supply. If we increase the total supply in another way that is specifically *not* going to the consensus participants, then their dominance over the system would not increase. Let’s go back to our previous example with Alice, Bob, and Charlie: Suppose each had 1 unit and Alice gained her extra unit just as before. But now, suppose Charlie also received 1 extra unit as well for a different reason -- Alice would have her extra vote checked and balanced. This would be in the form of additional inflation, for a different purpose. As with all inflation, there are winners and losers: in this case Bob is the loser by being "inflated away" -- but perhaps he was also the least engaged or otherwise not participating in the system itself.

Figuring out good reasons for a secondary, balancing force of inflation is, however, a hard problem. As we recall with the original problem of inflation -- in which, if we consider only the percentage of ownership rather than arbitrary unit counts -- inflation is simply a tool to move the percentage in the direction of one entity at the expense of another. Thus, we need to pick a winner (a new reward to some who are specifically not part of the consensus participants), and we need to pick new losers. You might think of an obvious solution -- we could just choose the winners to be everyone who is not a BP! But this would be an exact counterbalance and would be equivalent to not rewarding the BPs in the first place.

If you've been following the logic, then you know exactly where this is going next: worker proposals. Indeed, a clear solution to this problem is a secondary source of inflation that is guided by token holders into the hands of non-block producing entities that increase the value of the ecosystem. This could include funding to apps and services, grants and scholarships, and other expenses that could be made in the goal of improving the value of the network as a whole. It would be important to strongly encourage that block producers do not double dip into this fund, for if they do, the point becomes moot. With this secondary source of inflation, the centralization force would be countered, and could in fact become a force for decentralization. If the inflation to the community is greater than the inflation towards only the consensus participants, then, while the consensus participants may still be well paid for their efforts, their position is no longer the most attractive source of revenue.

There are many ways in which a worker proposal system could work, but consider a very simplistic approach: duplicate the block producer structure, but only assign pay by weight (vpay) and no pay for blocks (bpay). This secondary set of organizations would be elected separate from BPs, are not part of determining consensus, and gain their own inflation -- voted in place by the token holders. This would fit well for organizations that do not have technical or governance expertise, and could then spend all their time focusing on what they are good at; be it community outreach, marketing, scholarships, or other EOS business ventures. In fact, with this structure (or one like it), the consensus participants become further beholden to the community decisions, as more voting power is transferred into the hands of the community over time.

---

# Summary

In this post, we've highlighted three important points that need to be considered when using inflation in a closed-body consensus system (like DPOS).  

1. Inflation itself is simply a tool to generate winners and losers in terms of ownership of total supply.
2. If we award those responsible for consensus with rewards that give more influence over consensus, we end up entrenching those presently in power with more power.
3. Thinking about solutions that prevent power consolidation is important, and one of the best ways to avoid it is with a counter balance -- ensuring that a single party or group is not the sole recipient of network rewards.

As the EOS community continues to debate the pros and cons of different configurations of EOS inflation, it’s important to remember the long-term and second-order effects that changes to this system can have. While direct decreases to the amount of inflation can seem like a positive outcome for token value, they should only be done in a way that ensures that the long-term health of the network remains sound. We believe that short term actions can create market movements in price, but long-term thinking drives true value creation. In order to achieve that, we must carefully consider how changes to critical parameters can affect the network’s centralization.

We look forward to engaging in further community debate around these topics in order to work together to diagnose and solve the hardest problems facing EOS.


---
---
# Clarification Update

Since the first release of our post, there has been a lot of generated discussion and feedback, which we think is great! However, there are a few repeated comments on our post that often misunderstand either the terminology or the math. This brief update seeks to help clarify some of this.


First, there is some confusion on the use of the term "closed body", with many arguing that "EOS is not a closed body". To be fair, those with this position would be correct if we used the term "isolated system", however "closed body" has important distinctions. In physics, in an isolated system neither matter nor energy can escape or enter the system. However, in a closed body system, only matter is preserved (and extraneous energy is often only modeled). To make this analogous with our EOS system, the EOS tokens are like matter: tokens do not escape or enter the system from a non-observed point; we can track with perfect fidelity the location of tokens. However, the *wealth* of the system functions like energy, with external factors at play. As much as we all wish we could use simple levers to control wealth, the only tools we have are for controlling tokens. Thus, our investigation looks at the token distribution, not wealth or economic activity -- which are external variables. To further clarify why inflation is still a centralization force regardless of wealth, perhaps consider the following: *even if no one sold tokens to consensus participants, they could still eventually control the supply.* This is why closed-body analysis is still useful; it can be done independent of external factors.

From this misunderstanding, the argument typically drawn is that the consensus participants will sell some fraction of their tokens rather than keep them all. This position (despite being unrelated to the use of closed body analysis) does hold merit in regards to affecting the rate of centralization over time. Yet, as we have not seen anyone discuss the math yet, lets do just that.
The equation for this effect would look as follows:


![`\frac{\sum_{p=1}^{P}{(\frac{r_p-e_p}{P*r_p})}*((1 + reward)^{years} -1)}{(1 + reward)^{years}} `](https://cdn.steemitimages.com/DQmbnTCLVopdSiSMZ87od3QMCZPTKJMwsMfko71NS3wqsJ3/CodeCogsEqn%20(5).gif)



With _r<sub>p</sub>_ being the individual participants' (of size _P_) reward, and _e<sub>p</sub>_ being how much of that is expenses (and not withheld). As we can see, this confirms our previous statement that, _if_ _r<sub>p</sub>_ == _e<sub>p</sub>_ ∀ _p_ ∈ _P_, then the system is stable. However, when _e<sub>p</sub>_ is less than _r<sub>p</sub>_, the effect remains: the asymptotic convergence approaches the ratio of (_r<sub>p</sub>_ - _e<sub>p</sub>_)/_r<sub>p</sub>_ rather than _r<sub>p</sub>_ itself, like a damping factor. As an example, if all participants have a ratio of 1/2, the curve would instead look <a href="https://www.wolframalpha.com/input/?i=(1%2F2)((1.01)%5Ey+-+1)%2F(1.01%5Ey);+for+y%3D0+to+100))">like this</a>, with an asymptotic convergence towards 50% of the supply rather than 100%.

Finally, the breakdown into individual participants is important here: although the asymptotic convergence ratio is towards the sum of all participants, the participants could eventually greedily choose individual/new participants that increase control. For example, suppose half the participants had a ratio of 1/2, but the other half had a ratio of 1 (holding everything). This example has a convergence ratio of 3/4 in total, but interestingly, the set that held more can eventually replace the set that held less. <a href="https://www.wolframalpha.com/input/?i=(1)((1.01)%5Ey+-+1)%2F2%2F(1.01%5Ey)+-+(1%2F2)((1.01)%5Ey+-+1)%2F2%2F(1.01%5Ey)+%3D+0.12">This is because the set that withholds more of the inflation can eventually outvote the set that held less.</a>
To summarize: consensus participants not withholding their rewards only delay the process, and further, hand control over to those willing to withhold more.


Finally, there are some questions about how initial distribution can affect the results. Once again, lets expand our formula to include initial distribution as a factor (don't worry, this change is simple):



![`\frac{\sum_{p=1}^{P}{(\frac{e_p}{P*r_p})}*((1 + reward)^{years} -1) + (\sum_{p=1}^{P}{i_p})}{(1 + reward)^{years}} `](https://cdn.steemitimages.com/DQmULGEHvKX5pGdaMv45yAQCmEnvLGwiEGQYsUbBkyb5gCo/CodeCogsEqn%20(4).gif)


Here, we've introduced a constant term _i<sub>p</sub>_, a participants' individual initial ownership (for the purpose of the formula, this would be represented as fraction of initial total supply). As can be immediately noted, this summed factor can only end positive, and can only work to <a href="https://www.wolframalpha.com/input/?i=(1%2F1((1.01)%5Ey+-+1)+%2B1%2F20)%2F(1.01%5Ey)+with+y+%3D+0+to+100">accelerate the timeline</a> of asymptotic convergence. Indeed, this matches our intuition; *taking into account initial distribution can only worsen the situation, it does not make things better.*
