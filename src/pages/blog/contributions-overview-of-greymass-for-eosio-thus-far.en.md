---
title: 'Contributions overview of Greymass for EOSIO, thus far.'
date: "2019-08-16"
author: "Greymass"
---
OKEx, a digital asset exchange many of you are familiar with, recently launched a block producer voting program for their clients. This initiative will allow the OKEx clients, who hold EOS within their exchange, to participate in the block producer elections on-going on EOS.

[https://www.okex.com/pages/pro/eos-race](https://www.okex.com/pages/pro/eos-race)

All OKEx users are eligible to vote every 12 hours until the 20th of August.

Through this program OKEx asked each block producer to submit information about themselves, their achievements within the space, and how they contribute to the success of the EOS ecosystem. Today we'd like to publicly share what we came up with for our submission as to why EOS stakeholders should consider voting for Greymass (`teamgreymass`).

We have struggled recently in BP rankings, dropping from our all time high in the top 21 last year, now down into the mid-50s. _Every vote matters_, so we appreciate your time in considering us and your support should you choose to vote for Greymass as a block producer on the EOS network. Thank you!

_The remainder of this post will be the Greymass information, in the format requested by OKEx, highlighting the data we feel is important._

---

### Greymass Contribution Summary

**Server Locations**

- North America
    - Michigan (United States)
        - Full server rack of Greymass-owned infrastructure 
            - ~$80,000 USD invested in high-end hardware
    - Beauharnois (Canada)
        - Dedicated Server Rentals
- Europe
    - Falkenstein (Germany)
        - Dedicated Servers Rentals

**Core Team Location**

- North America (with additional team members in Europe and Asia)

**Your achievements in blockchain education, social impact and community development (Please specify events/examples and indicate the size of community)**

- [Greymass Newsletter](https://greymass.substack.com/) - a bi-weekly newsletter covering the EOSIO ecosystem. 600 subscribers. 
- Telegram Communities we operate:
    - [eos-voter](https://t.me/eoswalletgreymass) (Greymass Wallet) channel of 1100 members 
    - [TeamGreymass](https://t.me/teamgreymass) community chat of 210 members
- Regular participation (as attendants and speakers) at international EOSIO community events. 
    - Participated as a Judge in EOSIO Hackathon (20+ participants, 100s in attendance)
    - Participated in 2019 EOS Governance Panel at the 2019 BP Summit.

**Your capabilities/advantages in blockchain technology (Please specify events/example)**

- The Greymass team has over 3 years of experience governing and operating DPoS software (starting in 2016). Our team is (or has been) involved in governance for EOS, Steem, Decent, WAX, Insights, Muse, and many other blockchains. We publicly make our stances known on current issues, recently with:
    - [Retiring the eosio.savings account](https://blog.greymass.com/eos/@greymass/greymass-stance-on-the-retiresaving-proposal)
    - [Evolving the eosio.token contract](https://blog.greymass.com/eos/@greymass/greymass-support-of-the-tokenauction-referendum-proposal)
    - [Establishing a Worker Candidate System](https://blog.greymass.com/eos/@greymass/a-simple-system-to-support-blockchain-workers-in-dpos)
- Members of the Greymass team have been involved in the blockchain space since 2013, with a large amount of R&D being done across dozens of blockchains.The team is comprised of experienced software developers, research scientists, and systems administrators ranging from a variety of technology-based industries. This knowledge is used to help evaluate solutions to potential problems within the EOSIO ecosystem, such as:
    - [Proposing alternatives to the current RAM implementation](https://blog.greymass.com/eos/@greymass/leasing-eos-ram-without-forceful-memory-frees)
    - [Studying the centralizing forces caused by Inflation](https://blog.greymass.com/eos/@greymass/inflation-centralization-and-dpos)
    - [Considering the effects of competition within resource billing on EOS](https://blog.greymass.com/eos/@greymass/performance-and-transaction-billing-on-eos-a-cooperative-effort-not-a-competitive-one)
- Greymass has specialized DPoS systems administrators that operate one of the most used [publicly available EOS API clusters](https://blog.greymass.com/eosio/@greymass/the-value-of-public-apis-and-a-look-inside-one-of-the-largest-greymass) in the ecosystem (via [https://eos.greymass.com](https://eos.greymass.com)), serving between 200-350 million API requests per day and powering many popular dApps. 
    - Single HTTPS endpoint with intelligent routing based on geography and request  type, which forwards individual requests to specialized/optimized hardware suited for each task.
    - Geographically load balanced servers spread across North America, Europe, and soon in south-east Asia.
    - Support for all EOSIO v1 API methods, including the native full history API and additional calls via [eosio-api-ext](https://github.com/greymass/eosio-api-ext).
    - Serves as a testbed for our research and development towards API and EOSIO scaling solutions.

**Developed user tools and related contributions**

- We created [eos-voter](https://github.com/greymass/eos-voter), which was [one of the first](https://blog.greymass.com/eos/@greymass/announcing-eos-voter-an-eos-block-producer-voting-tool-and-light-wallet) EOSIO desktop wallets to launch during the EOS mainnet genesis, with over 142,000 downloads, and are currently working on the next evolution of this wallet called [Anchor](https://blog.greymass.com/eos/@greymass/the-future-of-the-greymass-wallet-beta-version-available-now).
- Built and implemented [Light History](https://steemit.com/eos/@greymass/introducing-light-history-nodes-for-eos) ([github](https://github.com/greymass/eos/tree/hapi-limited)), a solution that allows EOS node operators to maintain partial history on a server at a fraction of the cost of operating under full history. Many block producers and independant node operators now either run this as their history solution or as part of a larger multi-layered history solution.
- Created the EOSIO Signing Request protocol (specification [EEP-7](https://github.com/greymass/EEPs/blob/eep-x/EEPS/eep-7.md)) and associated tooling to foster the creation of a new type of dApp ecosystem. This signing protocol allows requests to be transported natively through http handlers within a device, shareable by QR codes, or sent as plain text through any communication medium. To facilitate this we have created the following:
    - eosio-signing-transport library/sdk for app integration ([github](https://github.com/greymass/eosio-signing-transport), [npm](https://www.npmjs.com/package/eosio-uri))
    - [eosio.to](https://github.com/greymass/eosio.to) - a HTTP alternative to display and share signing requests ([example](https://eosio.to/gWNgZGRkAIFXBqEFopc6760yugsVYWCA0ZIwBgwwNmycGBer1nsKpBQA))
    - a [GUI for creating/editing Signing Requests](https://github.com/greymass/eosio-uri-builder) ([example](https://greymass.github.io/eosio-uri-builder/gWNgZGRkAIFXBqEFopc6760yugsVYWCA0ZIwBgwwNmycGBer1nsKpBQA))
    - integrated signing request protocol into the [Anchor 0.9.0 beta](https://github.com/greymass/eos-voter/releases/tag/v0.9.0-anchor)
- Greymass was one of the organizations involved in the creation of the Referendum system deployed on EOS (the [eosio.forum](https://bloks.io/account/eosio.forum) contract).
    - We proposed the [3-pieces that make up the referendum system](https://steemit.com/eos/@greymass/the-3-pieces-of-the-eos-referendum-system).
    - We helped create the specification which the smart contract was built upon.
    - The referendum system was integrated into eos-voter as of [0.5.3](https://github.com/greymass/eos-voter/releases/tag/v0.5.3).
- Built additional EOSIO API endpoints via [eosio-api-ext](https://github.com/greymass/eosio-api-ext) to add additional functionality to optimize API calls.
- Established the [Producer JSON Smart Contract](https://github.com/greymass/producerjson) for on-chain BP.json information.
- Deployed an [Account Setup Smart Contract](https://github.com/greymass/smart_account_creator) to allow for easy account creation. 

**Examples of how you foster the diversity of EOS and blockchains (e.g. diversity of your company)**

- Greymass consists of a diverse set of members from all over the globe. While we are headquartered in one area for legal purposes, we think of ourselves as a team without borders or boundaries. 
- Every initiative Greymass takes on is built to run on any EOSIO-based blockchain, as we try not to specifically develop software/tools/prototypes for any individual blockchain. 
- Each end user product we tackle has support for multiple languages to further extend the reach of EOSIO products. An example of this is that eos-voter currently offers crowd-sourced support for multiple languages to help on-board users which speak all languages.
- Greymass seeks to provide global access to all EOSIO blockchains we participate in through geographically diverse offerings of P2P, API, and other data services.

**Your expectations for OKEx in the governance and development of EOS**

Our expectations of OKEx are that they take on the responsibilities we believe all block producers must share, which is to:

- make decisions off what is best for the blockchain over what is best for their organization.
- participate in global conversations around the operations, health, and evolution of the blockchain and its ecosystem.
- participate in community debates around governance of the blockchain, making positions and decisions widely known.
- invested in the long term success of the blockchain.
- be available to the community to collect feedback and to determine the will of stakeholders.
- be available to audit and test new EOSIO code and smart contracts upgrades.
- participate in both technical and non-technical upgrades to the chain itself.

Beyond that is all value-add, in which we hope OKEx uses their specialities to help foster growth and innovation within the EOSIO space.

<center>![https://greymass-cdn.s3.amazonaws.com/greymass-500x500.png](https://greymass-cdn.s3.amazonaws.com/greymass-500x500.png)</center>