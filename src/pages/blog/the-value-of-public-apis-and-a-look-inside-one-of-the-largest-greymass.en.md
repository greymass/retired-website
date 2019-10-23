---
title: 'The value of public APIs and a look inside one of the largest - Greymass'
date: "2018-10-02"
author: "Greymass"
---
Take a moment to think about your favorite EOS apps. Do you know which networks power them? Which API nodes they connect to? Don't feel bad if you don't — after all, API nodes aren’t really a hot topic. Like a lot of back-end technology, people don’t pay attention unless something breaks. But high-quality infrastructure and API nodes play a crucial role in EOS ecosystem, allowing for the development of apps and the movement of data across the network. 

Here at [Greymass](https://greymass.com), we have always put a premium on having products that provide value and the back-end technology to support them. You may know us primarily for our project [eos-voter wallet](https://github.com/greymass/eos-voter), but we have also put a large amount of time and energy into ensuring that our API nodes are of the highest possible quality, with up-to-date technology that allows it to serve a significant portion of the EOS community. 

## Developer Adoption

Developers have noticed this, and more and more are choosing to utilize the Greymass API node over others. So, your favorite apps? There’s a high likelihood that Greymass servers are (in whole or in part) powering them. Listed below are a small fraction of the apps that either give their users the option to use our servers, or publicly state they use the Greymass API node (in alphabetical order):

- [Bloks](https://bloks.io/) by [EOS CAFE](https://www.eoscafecalgary.com/) and [HKEOS](https://www.hkeos.com/): Bloks allows you to explore and search the EOS blockchain for transactions, accounts, tokens, prices and other activities in the EOS ecosystem.
- [DEOS Games](https://deosgames.com/): DEOS Games is a group of game enthusiasts that are eager to create truly fair, fast and decentralized games.
- [DEXEOS](https://dexeos.io/): Decentralized Exchange based on EOS.
- [EOS Bet](https://www.eosbet.io/): Fully Trustless and instant gambling on the EOS blockchain.
- [EOS Lynx](http://eoslynx.com/): The first EOS wallet built for everyday use.
- [EOS Toolkit](https://eostoolkit.io) by [GenerEOS](https://www.genereos.io/): EOSToolkit is the premier free, open source interface for managing EOS accounts. Create, transfer, stake, vote and more with Scatter! 
- [EOS Tracker](https://eostracker.io): EOS Block explorer 
- [eos.win](http://eos.win/dice): EOS Lucky Games.
- [MyEOSKit](https://www.myeoskit.com): EOS Block explorer and tools by [EOS ASIA](https://www.eosasia.one/).

## Understanding the value of APIs

But you may be wondering, ***what do EOS API servers actually do***? To answer that, let’s take a step back and examine one of the buzzwords that everyone has been throwing around lately: dApps. dApps, or decentralized applications, don’t connect to a centralized server like traditional apps do. Instead, they connect to an API back-end that’s powered by a peer-to-peer network. 

When a dApp utilizes this network, regardless of whether the dApp connects to a public endpoint or a self-hosted/personal server, the user experience and available data remain the same. This is what makes the dApp decentralized, because you are not forced to rely on any one entity or organization to host your data on their servers.

EOS is home to many dApps, including wallets, exchanges, explorers, games, and bots. These dApps are all dependent on EOS API servers to interact with the blockchain. The dApps both read and write data to the API nodes, and the API nodes then make this data available across the entire EOS network.

For your favorite dApps to actually function - they need an API to connect traditional web technologies into the blockchain itself.

### Public APIs and enabling EOS Developers

Regardless of the kind of dApp that they’re building, developers can create dApps faster (and thereby increase the number of use cases for the EOS blockchain, which increases its value) if they have a strong existing API network to work with. Needless to say, this is because the developers can do a better job if they’re focusing on building their applications, not on back-end and network challenges. 

Developers should aim to create dApps that will work when connected to any API server, which is easier if all the servers on the EOS network are of high quality. Of course, if a developer’s app is a success, then they should consider dedicating a portion of the resources they receive from its success to maintaining their own servers. But if they don’t need to worry about servers during the actual development process, the entire EOS ecosystem benefits.

### The Greymass API Network

Because we are acutely aware of the value that good API servers contribute, Greymass runs a network of some of the best public API servers on the EOS network. This allows us to serve a good portion of the network, and strengthen it overall. We are proud of what we’ve built, and of how many people have chosen to base their projects on our efforts. The number of developers who have chosen to utilize our servers is the greatest vote of confidence that we could ask for. 

We enjoy working with developers to optimize our servers for their projects so that every dApp can operate at peak performance, and we encourage developers to reach out to us with any requests they may have. Developers and users alike are welcome to chat with us in our TeamGreymass telegram channel (which is different than our wallet channel), which you can find here:

[https://t.me/teamgreymass](https://t.me/teamgreymass)

In return, we only ask that developers using the Greymass network give us recognition for our efforts by promoting the fact that their dApps run on the Greymass APIs.


## Greymass API Statistics

Now, we’ve made some pretty big claims so far. We said that we operate a good portion of the network, but how much of EOS actually runs on our APIs? 

To answer this question, we sampled our internal data over a 2-week period. With peaks near **4k/requests/sec** and an average over **2.2k/requests/sec** our servers successfully fulfilled over **2.7 billion API requests** and transferred over **3 TB of data** to users across the globe while running at only a small fraction of our currently available, and constantly expanding, capacity.

#### API Usage by Day

The below chart outlines the number of requests made to our APIs as well as the total bandwidth used each day.

![Greymass API - Usage by Day - API Requests and Bandwidth per Day](https://greymass.com/infra-2018-by-day.png)

#### Day-by-day

To put those numbers in sequence, below is a table with the same information. The highest traffic day in our sampling was over **273 million API requests** on the 11th of September, while the highest bandwidth usage was **450GiB transferred** on the 18th.

| Date      | Requests (Millions) | Bandwidth (GiB) |
|-----------|---------------------|-----------------|
|  9/7/2018 | 128.46              | 93.6            |
|  9/8/2018 | 66.36               | 62.04           |
|  9/9/2018 | 74.33               | 85.47           |
| 9/10/2018 | 182.30              | 147.33          |
| 9/11/2018 | 273.28              | 185.91          |
| 9/12/2018 | 246.01              | 183.26          |
| 9/13/2018 | 215.16              | 268.9           |
| 9/14/2018 | 212.13              | 298.53          |
| 9/15/2018 | 197.29              | 259.88          |
| 9/16/2018 | 203.99              | 193.17          |
| 9/17/2018 | 226.28              | 245.42          |
| 9/18/2018 | 223.42              | 450.02          |
| 9/19/2018 | 230.26              | 297.2           |
| 9/20/2018 | 228.04              | 268.1           |

#### Geographic Breakdown

The requests originated from all over the world, with Asia being the most popular origin at **51.6%** the overall traffic, more than both North America and Europe combined.

![Greymass API - Geographic Breakdown - API Requests by Region](https://greymass.com/infra-2018-by-region.png)
 

#### API Request Breakdown

For those more technically oriented, we have also broken down the requests by type. The `get_info` API call led the pack, followed by both `get_table_rows` and `get_actions` in second and third respectively. 

![Greymass API - Request Breakdown - API Requests by Method](https://greymass.com/infra-2018-by-api.png)

## Evolving API Infrastructure

While the numbers are impressive by blockchain API standards, it's our plan to continually improve our capacity and grow  alongside EOS. Since launch we have quietly continued to improve our processes, deploy new server assets, and contribute to the EOSIO software core itself. We have no plans to stop now and are considering additional projects to continue strengthening the public endpoints we offer as part of our mission to provide public resources.

For example, last week we deployed a new server with some of the best hardware available as an upgrade to our account history node. By the end of 2018 it is our hope to have purchased and deployed a number of similar custom built servers to further extend our API infrastructure's reach, enabling more developers and dApps an easy on-ramp into the EOS ecosystem. 

## EOS APIs as a Public Service

As you can see, our contribution to the operation of the EOS network is significant. But why do we do it? Well, to begin with, it offers a lot of benefits to developers and to the network at large. It’s useful, it adds value, we're experienced in this type of work, and we *wanted* to do it. But primarily, we operate API nodes because we believe that it is our duty to do so as a block producer. 

It is not enough for block producers to simply produce blocks — producers gain value from these transactions, and if they value the platform’s longevity (i.e. they’re not just out to make a quick buck), then it’s important for them to reinvest this value in EOS’ growth and infrastructure. Block producers should be responsible for running the network and providing access to the blockchain, because part of our role is fostering the growth and development of dApps. 

Yet many block producers don’t operate sufficiently fast API resources, and some don’t operate any at all. While we do not want to unduly criticize these block producers, we feel strongly that operating API nodes should be a widespread expectation of block producers. Otherwise, how is there a guarantee that the producers are working in EOS’ best interests, rather than their own self-interest? In the future, we might even be in favor of API nodes being a requirement under the Ricardian contracts that govern EOS.

### Fostering the growth of API infrastructure

To help foster a healthy distribution of available API servers we plan on sharing the findings of our work, helping establish best practices, and contributing to the software itself that enabled these public endpoints. The purpose of this initial API post is to educate and inform the masses of what we feel is an important role block producers play in the EOS ecosystem.

While we deliberately chose not to go into too much technical detail in this article - we hope to begin sharing this information with other EOS enthusiasts through the [EOS Mechanics](https://eosmechanics.com/) initiative, which we are proud to be a part of alongside with [Aloha EOS](https://www.alohaeos.com/) and [EOS Titan](https://eostitan.com/). 

But for now, we are simply happy to say that Greymass provides this valuable service to the community. The community - not corporations - controls the EOS blockchain, so do your part and vote for block producer candidates who return real value to the ecosystem. If you appreciate our contribution of fast, high-quality API nodes to the EOS network, make sure to vote for us as a block producer ([**teamgreymass**](https://www.alohaeos.com/vote#teamgreymass))!