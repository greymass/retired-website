---
title: "Anchor, an EOSIO Wallet and Authenticator"
date: 2020-04-16
author: Greymass Team
description: "Today we’re excited to announce the official release of the replacement to our previous wallet eos-voter, named Anchor."
image: "https://raw.githubusercontent.com/greymass/anchor/master/internals/img/anchor-ss1.png"
featured: true
---
# Anchor, an EOSIO Wallet and Authenticator

Nearly two years ago, [Greymass](<https://greymass.com/>) set out to help [activate the EOS blockchain by building tools](<https://greymass.com/en/blog/announcing-eos-voter-an-eos-block-producer-voting-tool-and-light-wallet/>) to connect stakeholders with the first public EOSIO blockchain. This included launching an unbranded open-source wallet simply called **eos-voter** (commonly referred to as the “Greymass Wallet”). This tool helped EOSIO in many ways get to where it is today - but it’s time for it to be retired.

Today we’re excited to announce the official release of its replacement, **Anchor**.

---

<figure><img src="https://i.imgur.com/l4XWQ07.png" alt=""></figure>

---

Anchor is an open source, multi-account, multi-chain, EOSIO wallet offering secure key storage and many of the tools you’ll need in your day-to-day usage of these platforms. It also offers authenticator features that allow you to use Anchor to sign in and interact with compatible EOSIO applications and dapps.

In this introductory post, we’ll outline the following.

- Where to get the Anchor desktop wallet
- The major features being introduced in Anchor 1.0.0
- The bigger picture of where Anchor fits into the Greymass vision of EOSIO

<!-- -->

### Anchor (Desktop) is available for download now

The [first release](<https://github.com/greymass/anchor/releases/tag/v1.0.0>) of our new desktop wallet has been published to Github while we finish the product pages on the [greymass.com](<https://greymass.com/>) website. For download instructions, refer to this page on our official Github repository:

[https://github.com/greymass/anchor#readme](<https://github.com/greymass/anchor#readme>)

**Important**: Ensure you are downloading ONLY from our official page located at: [github.com/greymass/anchor](<http://github.com/greymass/anchor>). Look at the URL bar in your browser, because if you visit the wrong URL and download a fake version, your account could be compromised and tokens lost.

*For eos-voter users:* If you are currently an eos-voter user, we have [published a guide on how to migrate to Anchor from eos-voter](<https://greymass.com/en/blog/migrating-to-anchor-from-eos-voter-greymass-wallet/>).

We’d like to invite both users and developers of any EOSIO-based ecosystem to download it and give it a try. The application offers native support for EOS, FIO, Telos, WAX, and a number of other compatible blockchains.

### Features introduced in Anchor 1.0.0

<figure><img src="https://raw.githubusercontent.com/greymass/anchor/master/internals/img/anchor-ss1.png" alt=""></figure>

Anchor has the essentials you’d expect in any EOSIO wallet: transferring tokens, managing staked tokens and RAM, block producer and proxy voting, key/permission management, and hardware wallet support with Ledger devices.

For those previously familiar with eos-voter, the first thing you’ll likely notice is that the user interface has been completely redesigned. This new interface will serve as the canvas for new features as we continue to expand the capabilities of the app.

A few of the more notable changes to the interface include:

- An **Account Overview** panel as the new home screen that gives a brief overview of all accounts loaded for the currently selected blockchain. This section also has a sidebar on the right which we’ll be using to let you know of important actions you may want to take.
- The introduction of the **Resources** section, which is an overview of network resources for your account as well as control for RAM, staking, and REX rentals.
- A **new setup process** after initial installation to help setup any available EOSIO blockchain. It offers easy access as well to restore wallet backups and more advanced features like setting up a cold wallet.

<!-- -->

While we did spent a lot of time reimagining the user interface, what’s changed under the hood between our initial eos-voter release and Anchor is far more significant. A brief list of the major changes is as follows:

- [Support for the EOSIO Signing Request (ESR) protocol](<https://github.com/greymass/EEPs/blob/master/EEPS/eep-7.md>) to allow authentication and app integration. You can give it a try on [greymass.com](<http://greymass.com/>) or any other ESR compatible site. With Anchor installed you simply need to Sign-in.
- [Greymass Fuel is available directly in the wallet](<https://greymass.com/en/blog/5ms-worth-of-free-transactions-available-now-in-anchor-wallet/>) to provide an alternative to REX along with a minimum of 5ms free CPU per account, per day. This resources system works with all the tools in the wallet, as well as requests from any authenticated apps.
- An overhaul of the wallet engine, which allows for better storage and multiple wallets to be unlocked at the same time for quick switching with less password prompting.

<!-- -->

This is just a small sample of what we’ve been up to. A complete list of everything changed cannot possibly fit into a post like this. The changes between eos-voter 0.7.12 (our last release) and Anchor 1.0.0 consists of [776 individual commits](<https://github.com/greymass/anchor/pull/835>) and somewhere around 45,000 lines of code being changed over the course of the last year.

We still have a lot more in the pipeline to make Anchor even more useful and user friendly. From here on out we plan to publish regular releases with improvements as we continue to build out the broader ecosystem we have envisioned for the EOSIO space.

### Where Anchor fits into the Greymass vision of EOSIO

For those of us here at Greymass, Anchor is just a small piece of a much larger puzzle we’re working to put together. The goal is to bridge the gap between developers, their applications, and their users - in a safe, private, and flexible manner for all parties involved. In the most simple of terms, this is the “**user layer**”, and has been at the core of all of our work.

To quote [our post announcing the initial eos-voter release](<https://greymass.com/en/blog/announcing-eos-voter-an-eos-block-producer-voting-tool-and-light-wallet/>):

*Our mission at Greymass is to build tools to help everyone understand and use EOS, and further, bring this ease-of-use to the masses.*

In order to make progress on this front over the past 2 years, we’ve had to expand our thinking beyond Anchor as a single product, and put more thought towards the foundational pieces of the ecosystem. We have been tackling this challenge on 5 different fronts, both from the perspective of the end user and that of an application developer.

To summarize these efforts, below is a breakdown of these different areas, and our efforts in each.

- **Authenticators/Wallets**: This is where [Anchor](<https://github.com/greymass/anchor>) fits, as well as any other signature provider that chooses to incorporate the new user layer technologies we have been working on. This includes considering any and all device types, whether it be a computer, a mobile device, or any other form of hardware that could interact with the blockchain.
- **APIs/Services**: Our approach has always been to use the already established standards and improve upon them when possible. When possible we’ve used native EOSIO APIs (chain/history/etc) and [built additional endpoints](<https://github.com/greymass/eosio-api-ext>) when required. The user layer required rethinking how communication between wallets and apps occurred, being off-chain, which led us to develop a callback relay services like [Buoy (JS)](<https://github.com/greymass/buoy-nodejs>). We also had to deploy a service layer ([Fuel](<https://greymass.com/fuel>)) to deal with network resources and cosigning, which led us to a [prototype cosigner API](<https://github.com/greymass/eosio-cosigner-nodejs>).
- **Demos/Examples**: We believe one of the best ways to help developers understand is often functional demos and examples of a technology. To this end we have published a [basic demo for interacting with ESR](<https://github.com/greymass/eosio-signing-request-demo>), as well as demos on how to integrate with [anchor-link](<https://github.com/greymass/anchor-link-demo>), [ual-anchor](<https://github.com/greymass/ual-anchor-demo>), and [Transit](<https://github.com/greymass/greymassfuel-transit-demo>). These 3 key demos should be enough for any developer to integrate Anchor and ESR into their existing applications. We have also started on a documentation portal to serve as a hub for all this information so that developers will be able to find everything easily.
- **SDKs/Libraries**: The initial release of [eosio-signing-request](<https://github.com/greymass/eosio-signing-request>) enabled any application to work at a low level with the ESR protocol. This effort then led into the creation of a [Swift library](<https://github.com/greymass/swift-eosio>) to enable iOS mobile device compatibility and most recently discussions for an Android/Java library. At a higher level, [anchor-link](<https://github.com/greymass/anchor-link>) was introduced to allow developers an easy integration path with identity requests and to establish persistent sessions. We then were able to utilize anchor-link to release the [ual-anchor authenticator](<https://github.com/greymass/ual-anchor>) and the [transit provider](<https://github.com/eosnewyork/eos-transit/tree/master/packages/eos-transit-anchorlink-provider>), which allow developers using Block.one’s [universal-authenticator-library](<https://github.com/EOSIO/universal-authenticator-library>) or [EOS New York’s Transit](<https://github.com/eosnewyork/eos-transit>) to easily tie this all into their own applications.
- **Standards/Protocols**: The [ESR (EOSIO Signing Request) protocol](<https://github.com/greymass/EEPs/blob/master/EEPS/eep-7.md>) as well as the [Anchor Link protocol](<https://github.com/greymass/anchor-link/blob/master/protocol.md>) are both open standards we established for wallet and app integrations. These were published so that any wallet could adapt the techniques we use to create a standardized experience that gives the end user a choice in which application they entrust their private keys with.

<!-- -->

Nearly every link above in the various sections represents both code and documents we’ve had to create beyond Anchor itself to bring our vision of the user layer to life. The Anchor desktop wallet taps into each and every one of these in some form, creating an experience we believe brings us closer to mass adoption. Anchor is one single tool among many that we are building to enable a more smooth, secure, and easy flow of user interactions on various blockchains.

Today’s release of Anchor represents a significant milestone in the overall process, but is simply one piece of a much more complex initiative.

We still have a ways to go on this journey in order to achieve success and we hope you’ll join us. You can expect more blog posts, interviews, and other types of media as we start talking more about what’s next.

Please don’t hesitate to reach out with questions or topics you’d like us to cover.

### Connect with us!

If you’d like more information, have questions, or even need help - feel free to reach out to our team through one of the following methods:

**If you’re an Anchor Wallet user**:

- Anchor (Telegram): [https://t.me/anchorwallet](<https://t.me/anchorwallet>)
- Greymass (Telegram): [https://t.me/greymass](<https://t.me/greymass>)
- Greymass (Twitter): [https://twitter.com/greymass](<https://twitter.com/greymass>)

<!-- -->

**If you’re a developer wanting to build around these ideas**:

- Anchor Link (Telegram): [https://t.me/anchor\_link](<https://t.me/anchor_link>)
- EOSIO Signing Request Protocol (Telegram): [https://t.me/eosio\_signing\_request](<https://t.me/eosio_signing_request>)

<!-- -->

### About Greymass

Greymass is block producer on various EOSIO networks (including EOS, FIO, Telos, and WAX) and is funded purely by the inflation we receive fulfilling this role. To support our work you can vote for our block producer account, teamgreymass, which directly impacts the amount of inflation we are allocated. Every vote matters and we truly appreciate the support that has been shown to our organization since the genesis of these powerful blockchains.

