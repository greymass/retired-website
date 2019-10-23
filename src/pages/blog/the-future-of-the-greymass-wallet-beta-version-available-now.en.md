---
title: 'The future of the "Greymass Wallet" - beta version available now.'
date: "2019-05-21"
author: "Greymass"
---
Since the genesis of the EOS blockchain, [Greymass](https://greymass.com) has dedicated significant efforts to building upon and improving [our open-source desktop wallet, eos-voter](https://github.com/greymass/eos-voter) (commonly referred to as "Greymass Wallet"). Given our prior years of wallet development experience, as well as the trust from the crypto community that we have built over the years, we felt this was a way we could contribute to the ecosystem beyond our primary responsibilities as a block producer.

To date, we have had over 130,000 downloads of eos-voter, have built out support for seven different blockchains, and have connected thousands of stakeholders to various EOSIO networks. It is an effort that has been well worth the time and energy we’ve poured into this flagship product. 

After many months of reimagining, rebranding, and experimentation, we are proud to release the first BETA version of what eos-voter is now becoming... 

## Introducing: Anchor

<center>
 ![Imgur](https://i.imgur.com/U972tzQ.png)  
</center>
<br/>

Anchor is built upon the same principals we embraced while developing eos-voter, ones which we will always maintain and defend. We care deeply about protecting the security of your account, the privacy of your identity, and your freedom to use the wallet as you choose. We’ve built the necessary tools to make it all possible, and we’ve presented them in a way that makes them user-friendly and intuitive.  The name Anchor itself is symbolic of these ideals, as anchors are tools to help vessels secure their position in constantly shifting waters.

The biggest non-technical change of all is the shift in branding. We’ve chosen to do this because it's our goal to move away from the idea of a "Greymass Wallet" and to start a new narrative — one in which Anchor is a neutral "EOSIO Signature Provider" that Greymass helps to create. To date, we've acted as the developers of this application and the custodians of the community's trust in its security and function. But we hope that this project can transcend Greymass and become something that is developed, maintained, and improved by a wide variety of individuals and teams. We welcome new developers to join in and contribute to this dApp, and we will be happy to share in the credit and recognition it brings.

## 0.9.0 - Beta Release

While we aren't yet ready for the 1.0.0 release today, we are releasing a 0.9.0 version that will serve as a pre-release (beta) to start collecting feedback, discovering bugs, and allow developers to start integrating with a new signing protocol we are working to establish.

This beta version is available on our GitHub page as a pre-release, and can be downloaded/installed alongside your existing eos-voter installation. **It will not overwrite or interact with your eos-voter installation**, so no need to worry about the beta causing problems with your main wallet! If you'd like to use your main wallet, the backups from eos-voter are compatible with Anchor.

You can download and install it from here:

[https://github.com/greymass/eos-voter/releases/tag/v0.9.0-anchor](https://github.com/greymass/eos-voter/releases/tag/v0.9.0-anchor)

> NOTE: Only install from our GitHub page. Refer to this post for the URL and never trust URLs shared in random chats, forums, or other online media. Phishing links are getting more clever by the day and have successfully spoofed this URL.

Currently there are a number of features (like staking, REX, and the RAM market) which are not yet enabled, as the user interfaces are not yet ready for testing. We will be releasing updates over the coming weeks to enable them one by one as we creep towards the 1.0.0 release.

We welcome anyone interested in helping us with this test to also join our new Telegram channel:

[https://t.me/anchorwallet](https://t.me/anchorwallet)

If you're a developer and are interested in dApp integration, signing protocols, or development of the wallet itself, we have a channel for that, as well:

[https://t.me/anchordevs](https://t.me/anchordevs)

## What's new?

The beta itself has hundreds of improvements over eos-voter, and we’re super excited for the community to experience it. There are far too many updates to dive into in detail for this introductory post, but here’s a quick overview of the major changes:

- Redesigned User Interface with a new wallet backend
- New “Account Overview” screen for a quick glance at all accounts
- New transaction signing protocol for app/dApp integration
- Simplified setup process to configure multiple blockchains

Beyond some of the more notable features above, we spent a lot of time reworking much of the code to make the Anchor platform easier to build on in the future. Many of these enhancements, such as the ability to have multiple accounts unlocked at once, enable new features and interfaces that weren’t possible before.

To show off a bit of what Anchor looks like and can do now, here's a brief rundown of some of the new features built into the application.

#### An overview of all your accounts

Managing multiple accounts can be difficult, especially when you're using multiple blockchains. To help with that we've reimagined the home screen within the app to become an overview of the accounts you're interested in. 

![Overview](https://i.imgur.com/npf1ZaP.png)

This new interface will display multiple overviews of all the accounts you have configured:

- **System Token**: Information relating to the native token of the blockchain you have selected.
- **Tokens**: A matrix of all tokens you have chosen to track versus the accounts you have loaded.
- **Resources**: The status of resource consumption across all accounts.
- **Governance**: Data surrounding the governance activities each account is involved in.

We plan to add interactive elements to the overview as time progresses, placing actions you may want to perform in the context of the overview to make it even easier to manage any account.

#### Signing Requests, from dApps to Anchor

One of the biggest game changers with the release of Anchor is our ability to sign requests from external applications, using a new [EOSIO Signing Request standard/draft](https://github.com/greymass/EEPs/blob/eep-x/EEPS/eep-7.md) we have been working on. This new system allows for requests from any medium without the need for direct communication between the application and your wallet. We think that this standard opens up entire new possibilities and user behaviors for EOSIO applications. We’re extremely excited to share it with the community. 

The process is quite simple. Once a request is triggered — either through an app, a service, or even through a sharable link — the user will be prompted to sign the request within the application. This interface currently appears as follows:

![Signing Request](https://i.imgur.com/OpGXGXO.png)

The details of the request are displayed alongside controls for the user to select which account they'd like to use to sign. The interface itself in this beta release is still somewhat technical in nature, but we plan on iterating over time to make the experience easier and more secure for the everyday user.

Eventually, we imagine that this will be used by a wide variety of services, applications, and individuals. Users will be able to prompt any wallet to perform any arbitrary action, while still offering the end user the ability to review, confirm, or deny the request. 

As an example of how flexible this standard is, imagine that you’re chatting with a proxy on Telegram. After hearing about their voting philosophy, you tell them you’d like to proxy your vote to them. They can send you a simple link that will automatically open your wallet and trigger a request to proxy your vote to them. You’ll then be able to review and confirm this action in a single step. Now imagine this being possible not just for proxy voting, but for any type of action that takes place on EOSIO chains. 

We can’t wait to see what people build. 

#### New Wallet UI

One of the interfaces we are revamping for the Anchor release is that of the wallet controls. This section is still under construction, as a number of the interfaces are not yet enabled. 

We built eos-voter so that users could have a secure desktop wallet ready for mainnet launch. As such, we focused more on creating a working product than we did on refining the interfaces themselves. The goal with Anchor is to take those functional components and make them far more usable. 

When visiting the Wallet section of the application:

![Wallet](https://i.imgur.com/NXqHxmB.png)

We are now immediately presenting users with the most common actions they'd want to perform with their assets. As the beta versions progress through the 0.9.x series, we will be continually adding to this section to enable the features you'd expect out of any wallet. Our goal is to make it so that users have access to the full suite of EOSIO software features through an easy-to-use interface.

#### Governance Interface

This interface should be rather familiar to anyone who has used eos-voter (Greymass Wallet) previously, with just a few slight tweaks to the design. We continue to offer users the ability to easily vote for BPs, delegate their vote to a proxy, and participate in referendum.  

![Governance](https://i.imgur.com/H2FHpmh.png)

We plan on revamping these interfaces in the future as the governance model continues to evolve. Users will have access to all of the existing governance tools from eos-voter, and we’ll continue to add and refine more as time goes on.

#### Tools, so many tools.

We built a **lot** of various tools in eos-voter, and we still are working to find homes for all of them throughout the other interfaces. Until a specific tool has an appropriate home, we are presenting them all through the Tools interface for easy access.

![Tools](https://i.imgur.com/ETdyqBt.png)

We have attempted to organize the different tools under categories that make sense, but we know that there are major improvements to be made for this user experience.. 

Consider this the "junk drawer" for now, and know that throughout the course of development we will slowly be migrating these utilities into their proper home throughout the rest of the application.

## Moving Forward

Greymass joined this grand EOS experiment as a block producer and decided our top priority was to help connect stakeholders with the network we help operate. Beyond our primary responsibilities as a block producer, our focus has been on: wallets, APIs, infrastructure, and standards that bind them all together. 

We have now spent our first year building out a dApp, Anchor, which has given us great insight into how all of these components work together. The vast majority of our free time has gone into this product, but that will likely shift after we reach the 1.0.0 milestone.

With all of the experience we have gained being an "API consumer", we are now planning to start focusing harder on the "API provider" side of things. We have identified many opportunities to improve the backend software, improvements that if made would make platforms like Anchor even more powerful and efficient. 

Year 1 for Greymass was the year of the wallet, and year 2 looks to be the year of protocols, specifications, and APIs. We will continue to improve upon the Anchor codebase moving forward and it will always be one of our priorities - but we see a strong need for more attention on the backend side that power these dApps.

If you'd like to support us in these efforts - we'd humbly ask for your vote as a block producer, under the account name `teamgreymass`. Every vote matters, and we rely on the block producer pay to fund our open-source initiatives (like Anchor), to pay for our APIs and infrastructure, and to make sure our focus is on providing the most valuable services to the EOS mainnet. We appreciate every voter who has given us their support, and we continue to be grateful for the opportunity to serve this community!