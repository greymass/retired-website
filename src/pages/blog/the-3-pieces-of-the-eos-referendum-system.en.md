---
title: 'The 3 pieces of the EOS Referendum System'
date: "2018-07-07"
author: "Greymass"
---
Currently the discussion involving any sort of on-chain governance/referendum system is focused on the Smart Contract and the User Interfaces aspects of the project alone. Ultimately while this approach will work, it presents a number of problems involving the trust required in 3rd parties to represent the resulting data accurately.

To achieve an MVP quality governance protocol for a project such as EOS, this approach must be changed. Governance, referendums, and their proposals are an important enough part of EOS that trust shouldn’t be required in verifying results. This document outlines the addition of a 3rd component, involving **nodeos plugins**, to help bring verifiable results to everyone using the core EOSIO software.

The proposed system is broken down into 3 independent components that can all be worked on somewhat independently:

- **An EOS smart contract**: A contract deployed to EOS in which "proposals" can be submitted (by select parties) and all stakeholders can submit "votes" in relation to them.
- **An EOS plugin (nodeos)**: A set of chainbase indexes and APIs in which proposals are indexed with details, votes aggregated, results tallied, and information surfaced via standard HTTP APIs.
- **User Interfaces**: Any tool that integrates the write capability of the EOS Smart Contract and is able to read from the nodeos API plugin in order to render proposals.

These 3 components are used in parallel by all participants utilizing the referendum system to eliminate the need for any 3rd party components.

**Note**:  *[A copy of this is also available on Google Docs](https://docs.google.com/document/d/1O8s5N60DLCkEz4CKthTGzIYo5TkbMcj8aW6Eb3njXzk/edit?usp=sharing) with an outline.*


# 1. The EOS Smart Contract
The **EOS Smart Contract** portion of the referendum system achieves consensus on actions of each participant involved, including but not limited to:

- The submission of a new proposal (post action).
- The removal of a proposal (remove action).
- The voting on a proposal (vote action).
- (not implemented, non-MVP) The potential ratification of a proposal (rafity action, oracle-like?)

The contract itself only exists to process incoming consensus related actions and ensure their validity, nothing more. 

**Note**: The [`eosio.forum` contract (by EOS Canada)](https://github.com/eoscanada/eosio.forum) currently covers these actions and pretty much accomplishes everything the contract itself needs to.

**Non-MVP**, but the only exception to this is the potential of a **ratify** action, which could provide a potential oracle-like approach to actually recording the final results, formalizing the competition, and recording those results forever as a consensus based action.  

### Resource Usage
Each of these actions, as performed by users, utilizes their local accounts stake/resources (RAM/CPU/NET) to submit actions into the smart contract (and thus consensus). 

### Action Validation
Each new proposal submitted will be valid until a specific block height (current_height + X, where X = seconds of proposal validity * 2), and actions submitted in relation to a proposal voting period before or after the allowed heights will be rejected.

# 2. The EOS (nodeos) plugins
The bulk of digesting the consensus data related actions is performed within a **pair** of **EOS (nodeos) Plugins**. These plugins could be bundled with the EOSIO core software and enabled by all willing node operators, as an offering to their data consumers and/or related applications.

## Dual Plugin Architecture
To follow the standards set out by the existing EOSIO plugins, two individual plugins could be created to provide the necessary data to participants:

1. **forum_plugin**: A plugin to index and aggregate the proposals and votes accordingly.
1. **forum_api_plugin**: A plugin to provide a set of HTTP APIs to access the **forum_plugin**.

## Plugin #1 - forum_plugin

This plugin is responsible for integrating with **chainbase** and using one of it’s index containers to maintain the current state of each proposal. This plugin can be enabled, and with a replay of the blockchain, the status and results of all proposals can be generated to verify their validity. 

#### Proposal Data Schema

Each proposal index entry would consist of data such as:

- **approval**: boolean based on whether the results exceed the threshold currently. 
approved: The height at which approval rating was exceeded, used to determine how long it’s been “approved”.
- **confirmed**: boolean, This field displays true after the proposal has been approved for the set duration. Set to false unless `current_height - approval height > X`, where `X > number of blocks to confirm decision (seconds * 2)`. 
- **created**: The height at which the proposal was created.
- **expires**: The height at which the proposal expires, derived from `created + X`, where `X = the maximum duration of a proposal`.
- **proposal**: An embedded copy of the original proposal action. 
- **results**: An aggregated/summarized list of all votes, bucketed by response type, with either totals or percentages for each option.
- **voters**: An indexed list of all voters for this proposal, with their response.

#### Example JSON

```
{
  approval: false,
  approved: false,
  confirmed: false,
  created: 100000,
  expires: 200000,
  proposal: {
    post_uuid: 'proposal-1',
    title: 'Make EOS great again'
    content: '... explanation ...',
    json_metadata: { ... }      
  },
  results: {
    approve: 10000,
    reject: 20000
  },
  voters: [
    {
      account: 'jesta',
      proposition: 'UUID',
      proposition_hash: 'ABCDEF...',
      vote_value: 'approve'
      weight: 10000
    },
    {
      account: 'anyx',
      proposition: 'UUID',
      proposition_hash: 'ABCDEF...',
      vote_value: 'reject'
      weight: 20000
    },
    ... more voters ...
  ]
}
```

### Secondary Indexes

In addition to the primary index that the APIs will use, additional indexes could be created to establish the relationships of data, providing faster data processing potential. An example of one of these indexes would be:

- **voters to proposals**: when a user updates their staked resources, a method to quickly look/update their votes within the proposal index will be needed. Each proposal they have participated on will need to have it’s totals updated.

### Index Processing Logic

The plugin itself will have conditional logic on how to update the indexes based on the activity within each block that relates to a proposal. A similar type of functionality currently exists within the producers plugins, in which indexes are updated based on the delegatebw actions within the system contract. 

This conditional logic includes (and is not limited to):

- Any proposal related action made before the created block height that references the specific **UUID** will not be indexed.
- Any proposal related action made between the **created** height and the **expires** height will be applied to the indexes normally.
- Once the **expires** block height has been passed, no new proposal related actions can occur, freezing the results in time.
- If the **results** approval value exceeds the defined requirements, and the approved is false/undefined, the **approved** value is set to the height of the action that caused caused it to exceed the threshold.
- If the **results** approval value falls below the defined requirements, and the **approved** is an integer (height), it is set to false/undefined to reset it’s approved duration.
- Once `current_height - approved > X` (`X > number of blocks to confirm decision`), the **confirmed** flag will flip to **true**.
- Once the **confirmed** flag is set to **true**, the proposal is approved and no further actions can impact the index of this proposal.


### Action Processing

This plugin would watch for actions on the following contracts::actions to maintain it’s local state. During a replay of the blockchain, each of the following actions would be acted upon to maintain this state:

- *forum::post*
  - observes new proposal creations and creates index entry
- *forum::remove* 
  - observes proposal removal request and removes index entry (+votes)
- *forum::vote*
  - observes vote actions and updates indexes accordingly.
- *system_contract::delegatebw*
  - observes the modification of resources, update indexes (votes) from the account
- *system_contract::undelegatebw*
  - observes the modification of resources, update indexes (votes) from the account

**For MVP**, these proposals and their indexes will be maintained indefinitely for historical purposes. However, in the future adding some sort of pruning/removal mechanism for old referendums might be a valuable addition to the nodeos configuration.

## Plugin #2 - forum_api_plugin
This plugin is responsible for returning results based on HTTP requests in relation to the specific referendum data within the **forum_plugin** indexes. 

The plugin itself should only be responsible for pagination, sorting, querying and returning results. The indexes themselves should be considered immutable at this point and all logic otherwise should be in the **forum_plugin**.

#### Example Response

```
{
  results: [
    {
      approval: false,
      approved: false,
      confirmed: false,
      created: 100000,
      expires: 200000,
      proposal: {
        post_uuid: 'proposal-1',
        title: 'Make EOS great again'
        content: '... explanation ...',
        json_metadata: { ... }      
      },
      results: {
        approve: 10000,
        reject: 20000
      },
      voters: [
        {
          account: 'jesta',
          proposition: 'UUID',
          proposition_hash: 'ABCDEF...',
          vote_value: 'approve'
          weight: 10000
        },
        {
          account: 'anyx',
          proposition: 'UUID',
          proposition_hash: 'ABCDEF...',
          vote_value: 'reject'
          weight: 20000
        },
        ... more voters ...
      ]
    },
    { 
      ... more proposals ...
    }
  ],
  more: true
}
```

#### API Endpoint Examples
- `/v1/forum/get_proposals`
  - Parameters
    - **start** - index in which to start on
    - **limit** - number of results to return
  - Returns
    - **results** - Returns a list of all non-expired proposals (paginated) sorted by total staked weight voted overall.
    - **more** - boolean if more results exist
- `/v1/forum/get_expired_proposals`
  - Parameters
    - **start** - index in which to start on
    - **limit** - number of results to return
  - Returns
    - **results** - Returns a list of all proposals (paginated)
    - **more** - boolean if more results exist
- `/v1/forum/get_proposal `
  - Parameters
    - **UUID** - Unique identifier of proposal
  - Returns
    - **result** - Individual data for specified proposal.
- `/v1/forum/get_proposal_votes`
  - Parameters
    - **UUID** - Unique identifier of proposal
  - Returns
    - **result** - Array of all votes cast for specific proposal.

    
# 3. The User Interfaces

The specific implementation of any UI/app is beyond the scope of this document. However, the design of the overall architecture impacts the available designs of the user interfaces, and those topics are worth mentioning.

This contract/plugin design approach allows any user interface to both enable participation and consistently retrieve results, all without the need for a 3rd party connection or application. Ultimately the goals of EOSIO core software should all fit within this model, and all stakeholders should need to participate is an instance of **nodeos** and some sort of **transaction signer**. 

The reason behind this design is to further decentralize the participation requirements for stakeholders involved in the EOS ecosystem. Governance is a core pillar of the blockchain and deserves treatment that goes above and beyond.

### Core Software (cleos)

Using this approach, **cleos** itself could be updated to allow commands such as:

- **cleos get proposals** - list active proposals with a title and UUID.
- **cleos get proposal [UUID]** - view the details/current results of an individual proposal.
- **cleos system voteref [account] [UUID] [value]**- vote on a proposal.
- **cleos system unvoteref [account] [UUID]** - remove a vote on a proposal (frees RAM)

### Community Software

All community applications that enable activity on the EOS blockchain can also follow this same pattern to allow retrieval and actions taken against proposed referendums.

The core of the information is available directly through nodeos, which provides the minimum required information to inform stakeholders. Additional layers of information could be broken out and displayed on community powered websites that further analyze this data (like is done with Producer Voting these days) and further integrations can be accomplished with existing wallet/app software. 

### An example of UX

In this hypothetical situation, Alice is creating a proposal referendum, in which Bob will participate in voting on.

1. Alice creates a proposed referendum through the EOS Smart Contract by signing a forum::post transaction and submitting it to the blockchain.
2. Bob uses any User Interface to request current proposals, which are retrieved using the forum_api_plugin from a nodeos instance running the forum_plugin.
3. Bob is returned a list of active proposals, along with a brief description (title) and a unique identifier (UUID).
4. Bob notices Alice’s proposed referendum of proposal-1, and fetches the details of the referendum through any User Interface. 
5. After reviewing the details of the proposal, Bob decides to support the referendum by signing a forum::vote transaction signalling support (by UUID) and submitting it to the EOS Smart Contract.
6. Alice uses any User Interface to retrieve her proposal to check the results, and can view the overview of it’s support, as well as seeing Bob’s newly created vote.

# 4. Completing and releasing a MVP

This 3-part implementation has challenges that have yet to be overcome in terms of the effort involved in crafting each of its components. Recognizing the level of effort and the people who will need to be involved in this process will be a team effort, led not by one set of people, but by many. 

An incredible effort has been put forth so far to consider EOS’s governance problems and determine the best path forward - it is our hope that this document will help further those efforts and establish a roadmap towards a minimum viable product for EOS governance and the stakeholders who will participate.

### Finding Appropriate Talent

One of the first steps in accomplishing and building this system into a working product is going to be identifying teams and individuals who can contribute to its construction and ultimately its success. Currently many of the required talents that will be needed are sorely missing, and as a community we will need to scout out and reward those people who help make it a reality. 

- **Smart Contracts**: **C++ Developers** experience with **Smart Contracts** who can refine the actions that all stakeholders will be performing. Both [EOS Canada with their Smart Contract](https://github.com/eoscanada/eosio.forum) and [EOS42 with their Smart Contract](https://github.com/eos42/eos-referendum) thus far have done a great job establishing the groundwork for this system to thrive.
- **Plugins**: For plugins there is a strong need for **C++ Developers** experienced with **chainbase** who are able to build the **nodeos plugins** to index the data properly and return the results via the HTTP APIs. So far this role is yet unfilled and we (as a community) will need to find the appropriate teams.
- **User Interfaces**: **Web/Application Developers** experienced implementing blockchain-based web solution to bring the contracts/plugins the last mile to the stakeholders. A number of teams have been focused on these interfaces and made great strides, including the folks behind [Scatter](https://get-scatter.com/), [EOS Tribe](https://eostribe.io/), [EOS Rio](https://eosrio.io/), [GenerEOS](https://www.genereos.io/), and our team at [Greymass](https://greymass.com). 

Apologies to anyone who was missed in this list, there are so many groups involved it’s hard to keep track the entirety of everyone's involvement.

Based on the list above, the role of **plugin development** is the most dire need to accomplish what this system sets out to do. 

### Reducing Scope Creep and focusing on Fundamentals

In an effort to connect stakeholders with some form of governance model for EOS as soon as humanly possible, a strong focus needs to be on removing any unnecessary hurdles and focusing on only what’s needed to create this product. To that extent the focus should be on accomplishing a very simple proposal system at first, which can then be expanded upon and built out further in the future. 

At the core the most simple of interfaces, contracts, and plugins should be developed. Any feature that isn’t directly critical to creating a decentralized proposal/referendum system should be shelved and considered in as a future addition. Some examples of non-MVP features are outlined throughout the document, and additionally to keep things simple, initial features should be limited to their most basic requirements, while still maintaining a verifiable and decentralized set of data that EOS stakeholders can trust.

# 5. Additional Thoughts

Some additional thoughts that didn’t quite make their way into the above document, but are important points of discussion/debate:

### Reducing Clutter/Spam

- The nodeos plugin could by default return proposals that have only exceeded a certain threshold of support. This reduces the potential thread of spam and could potentially open up the submission of proposals to anyone willing to use the RAM to create one. All proposals could theoretically be be retrieved by UUID still. 
- Spam in this system could also be deterred simply by the RAM usage it will require of each post and vote. Perhaps even enforcing a minimum size limit on the content, say 16kb, that would create a “cost” for submitting a proposal (refundable once RAM is freed).

### Verifiability of Results

- Results are verifiable by anyone simply by running nodeos with the proper configuration (and replaying the blockchain), no external trust is required in verifying. You can simply query your node once the indexes are built to verify the result of any proposal.
- All block producers should be encouraged (required?) to enable these contracts/plugins on their API/Full Nodes, allowing any stakeholder to retrieve this data. It should be the duty of a block producer to help propagate important governance related information to their constituents. The more independent API operators offering this data, the more verifiably legit that information becomes.

### Upgrade Path of a Plugin

By aggregating results in a plugin (as opposed to a smart contract), upgrades and improvements to the APIs and data structure can be done through a software upgrades and without the need of upgrading the contract itself (and potential consensus requirements).

### Freeing up Resources via Ratify

If some sort of “final action” is required at the end of a proposal/referendum, perhaps block producers/oracles could issue a ratify action of some kind to the eosio.forum contract that involves publishing the verifiable results within an action, while simultaneously approving it. This could be the final action close out the proposal, record it for permanence, and then freeing up the RAM used by all the previous actions (post/vote) by the participants.

### (Opinion) Lack of native APIs restricts freedom

One major concern involving User Interfaces arises with the lack of nodeos native APIs for fundamental EOS processes, which is the freedom to use the blockchain in the manner you deem most secure. For some this is the command line, for others it’s cold storage, and for many it’s a graphical user interface tied into their primary OS. 

For any core part of the EOS experience this freedom needs to be respected. Users need to be able to use the tools that they trust the most, and should be able to retrieve the data from an API server in which they also trust (then switch servers just to verify). A reliance upon independent implementations built by various 3rd parties, without the freedom to choose something else, impedes a user’s freedom in that choice.  

### (Opinion) An analogy to this entire situation, “what life would be like without a plugin”...

The best analogy to this situation can be drawn from block producer voting. 

Imagine if you could vote for block producers, but you were unable to retrieve a list of the top block producers, or how many votes they had, directly from any of the nodesos APIs. Imagine if you entirely had to depend on external block explorers to tally this information for you with no way to prove it easily.  

What sort of impact would that have had on EOS so far? What about on the adoption and activation of the EOS blockchain in those early days? These sorts of questions are arguably similar to the sort of issues the referendum system could experience without on-chain APIs to retrieve results.