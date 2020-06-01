---
title: "Anchor for Mobile - a portable EOSIO Authenticator"
date: 2020-05-26
author: Greymass Team
description: "Anchor is coming to mobile and the iOS public beta starts today. Join Greymass in this test and provide feedback to help shape the product."
image: "https://greymass.com/screenshots/mobileframe-0003.png"
featured: true
---
# Anchor for Mobile - a portable EOSIO Authenticator

Just over a month ago [we announced the released of Anchor for Desktop](<https://greymass.com/en/blog/anchor-an-eosio-wallet-and-authenticator/>) and have since been working with developers to integrate it into as many projects and platforms as possible. In the same announcement post we also offered a glimpse of the vision we have for EOSIO blockchain interactions using the [EOSIO Signing Request](<https://github.com/eosio-eps/EEPs/blob/master/EEPS/eep-7.md>) protocol.

Today we’re excited to announce the next piece of this puzzle by bringing the Anchor experience to mobile devices.

<figure><img src="https://greymass.com/screenshots/mobileframe-0003.png" alt=""><figcaption>The main interface for Anchor (iOS) in dark mode.</figcaption></figure>

The portable version of Anchor isn’t your typical wallet, it’s been developed from the ground up to act as an **authenticator** first. This means it was designed as a utility app and serves as a portable trusted device to use with external media and applications (aka “dApps”).

There are two primary ways that Anchor can be used to interact with EOSIO blockchains:

- Users can **sign individual transactions** from any medium scanning a QR code or clicking an HTML hyperlink. Using these methods allows for secure interactions with websites, invoices, or any other media where a one-time interaction makes sense.
- Users can **sign-in** to any compatible EOSIO application to create a secure and persistent session. Once this link is established, any future actions taken in that application which require an EOSIO transaction will then be relayed to Anchor for the user to review and approve.

<!-- -->

***Fun fact***:* This blog post was created by an EOS application called *[Decentium](<https://decentium.org>)*. We signed in using the Anchor mobile app, wrote this post, and then approved the transaction to publish this post on the EOS blockchain using our mobile device.*

These flexible methods allow for new and exciting ways to leverage EOSIO for both businesses and developers, while working to reduce friction that typically hinder adoption by end users.

Interested in trying it?

### Join the iOS Beta

If you have an iOS device running version 13+, we’d invite you to join our TestFlight beta program and **try it today**. Simply click the following link from your mobile device to get started:

[https://testflight.apple.com/join/huZddLBu](<https://testflight.apple.com/join/huZddLBu>)

The current build of the beta (16) supports the following EOSIO networks:

- **Live Networks**: EOS, FIO, Lynx, Telos, and WAX.
- **Test Networks**: Block.one Testnet, FIO, Jungle 2/3, Lynx, Telos, and WAX.

<!-- -->

**NOTICE TO ALL TESTERS**: This is a beta product, things can and will go wrong. We’d recommend you either use an account of little/no value or a testnet account. Also make sure you have backups of your keys stored externally in safe location, as breaking changes during the beta may cause data loss within the application.

As a note to the Android users out there - hang tight, we’re working on bringing Anchor to your platform as well. The initial groundwork is being laid to bring the same experience over from iOS.

### Get started: Import an existing EOSIO account

With Anchor for mobile, we aimed to streamline the account import process as much as possible. The entire import process is shown in the short animation below.

<figure><img src="https://greymass.com/screenshots/mobile-importing-accounts.gif" alt=""><figcaption>Importing an account into Anchor (iOS)</figcaption></figure>

When you tap to import and account, you’ll be prompted for your private key. You can either type it, paste it, or scan a QR code containing the private key.

Anchor will then scan for any existing accounts on all supported EOSIO networks and allow you to select which account to import.

Once an account is selected the final optional step allows you to associate a pin to the account and/or use the biometrics of the device to restrict access.

You’re now ready to authenticate with any compatible EOSIO application and use Anchor to sign transactions! If you have more than one account on more than one network, simply repeat this process to load any additional accounts.

Note: The initial release of Anchor for mobile will only support the import of existing accounts and will not have account creation. Creating accounts is a feature we are working to bring to both mobile and desktop, which you can expect updates on in the future.

### Are you an Anchor Desktop user?

If so, you can easily import an account into the mobile wallet from your desktop wallet using the new QR Code feature we have [added in Anchor (1.0.3)](<https://github.com/greymass/anchor/releases/tag/v1.0.3>).

To do this, go into the “Manage Wallets” section of the desktop application, and with the wallet unlocked, click the “View Wallet” option on the account you’d like to import. There is a new button in the private key area you can use to display a QR Code, which can be scanned by Anchor mobile import process to immediately import that private key and get started!

<figure><img src="https://greymass.com/screenshots/mobileframe-0007.png" alt=""><figcaption>The primary interface, session management, and account import for Anchor (iOS) in light mode.</figcaption></figure>

### Sign-in to applications using Anchor

The experience for an Anchor sign-in can work in two distinct ways:

- On the same mobile device Anchor is installed on, you can use it to sign in locally with other installed apps or even web apps in your mobile browser.
- On a second device without any installed wallets, such as a desktop computer or tablet, you can use the mobile app to sign in remotely by scanning a QR Code with your device camera.

<!-- -->

**Using Anchor mobile on the same device**

If you visit a website that’s integrated Anchor for desktop already, the same processes work if you visit using your mobile device. Simply use the app or website, go through their sign in process, and when the Anchor prompt appears click the “Open Anchor App” button right below the QR Code. Your device will swap to the Anchor mobile app and ask you to prove your identity.

When this is complete you’ll be redirected back and logged into the app/website. From there on out you’ll be able to interact with that application using your EOSIO account. Each time a request is made you’ll be able to approve it from your mobile wallet and securely sign transactions.

**Using Anchor mobile with another device**

If you’ve used Anchor for desktop already, you probably noticed the QR Code that’s displayed when you first signed in to an external application. That QR Code is what you can use to link an application to your mobile wallet. Simply scan the QR Code with your mobile wallet and you’ll be prompted to prove your identity and setup a session for future use.

Once completed you’ll be able to use the application on the secondary device, while all requests will then be routed to the mobile device for approval.

### A flexible user interface

For the iOS test version we are announcing today - we built the entire experience using the native UI kit. This means the app supports both light and dark modes, can be used on an iPhone or iPad, and also supports landscape mode for iPad users who use their tablet as more of a miniature laptop.

Our goal is to keep things as simple as possible while also maintaining enough flexibility so Anchor fits every use case.

<figure><img src="https://greymass.com/screenshots/mobileframe-0001.png" alt=""><figcaption>The light and dark mode versions side by side.</figcaption></figure>

### Mobile Security

Mobile security isn’t perfect (nothing is), but we use the latest technologies to create the most secure mobile experience possible. Anchor on your mobile device uses the [secure enclave](<https://www.howtogeek.com/339705/what-is-apples-secure-enclave-and-how-does-it-protect-my-iphone-or-mac/>) components of the device for key storage, which makes it incredibly hard for attackers even with physical access to your device to compromise your account.

### Ready to try it out?

Both the EOSIO Signing Request protocol and Anchor are still relatively new, so the applications compatible with it are still somewhat limited. Here’s a short alphabetical list of a few applications you can help test it with today, using either the desktop or mobile wallet:

- [app.telos.net](<https://app.telos.net/login>) [for Telos]: A portal into the Telos ecosystem and governance.
- [bloks.io](<https://bloks.io/>) [for [EOS](<https://bloks.io/>), [Telos](<https://telos.bloks.io/>), [WAX](<https://wax.bloks.io/>)]: A block explorer and feature rich wallet.
- [Decentium](<https://decentium.org/>) [for EOS]: Decentium is a decentralized publishing and tipping platform where authors own their content and earn money and exposure through endorsements.
- [eosrate.io](<https://eosrate.io/>) [for EOS]: A system that allows users to rate Block Producers on various metrics.
- [eosx.io](<https://eosx.io/>) [for [EOS](<https://eosx.io/>), [Telos](<https://telos.eosx.io/>), [WAX](<https://wax.eosx.io/>)]: A block explorer and feature rich wallet.
- [fio-register](<https://greymass.github.io/fio-register/>) [for FIO]: A FIO address and domain registration tool.
- [genpool.io](<https://genpool.io/>) [for EOS]: The first EOS vote rewards exchange.
- [greymass.com](<https://greymass.com/>) [for EOS, FIO, Telos, WAX]: The official Greymass website!

<!-- -->

More and more applications supporting Anchor will be coming online soon.

If you’re a developer and are interested in integrating Anchor with your application, feel free to reach out to us. We’re more than happy to help guide and help you during the integration process. You’ll only have to integrate once both desktop and mobile, since they use the same protocol!

### Connect with Greymass, the creators of Anchor

If you’d like more information, have questions, or even need help - feel free to reach out to our team through one of the following methods:

**If you’re an Anchor user**:

- Anchor Wallet (Telegram): [https://t.me/anchorwallet](<https://t.me/anchorwallet>)
- Greymass (Telegram): [https://t.me/greymass](<https://t.me/greymass>)
- Greymass (Twitter): [https://twitter.com/greymass](<https://twitter.com/greymass>)

<!-- -->

**If you’re a developer wanting to build around these ideas**:

- Anchor Developers (Telegram): [https://t.me/anchorwalletdev](<https://t.me/anchorwalletdev>)
- Anchor Link (Telegram): [https://t.me/anchor\_link](<https://t.me/anchor_link>)
- EOSIO Signing Request Protocol (Telegram): [https://t.me/eosio\_signing\_request](<https://t.me/eosio_signing_request>)

<!-- -->

**About Greymass**

Greymass is block producer on various EOSIO networks (including EOS, FIO, Telos, and WAX) and is funded purely by the inflation we receive fulfilling this role. To support our work you can vote for our block producer account, teamgreymass, which directly impacts the amount of inflation we are allocated. Every vote matters and we truly appreciate the support that has been shown to our organization since the genesis of these powerful blockchains.

