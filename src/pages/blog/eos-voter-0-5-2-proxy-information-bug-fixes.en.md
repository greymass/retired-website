---
title: 'eos-voter 0.5.2 - Proxy Information + Bug Fixes'
date: "2018-09-18"
author: "Greymass"
---
Today we released a small upgrade to the eos-voter tool, featuring many bug fixes and a new interface to browse and select a BP Voting Proxy (based on the work by AlohaEOS and their regproxyinfo contract). We are pretty deep into the 0.6.0 release, but decided to release a minor build to address the issues plaguing users currently.

---

## Post Overview

1. Changes
2. What is eos-voter?
3. Where to download eos-voter
4. Feature Overview
5. Coming Soon
6. File Signatures

---

## 1 - Changes

**0.5.2 Changelog**

The following features have been released as part of the 0.5.2 eos-voter release.

- **Browse Proxy Information**: Added a new "Proxies" tab to the Producer Voting section, which allows browsing of the vote proxies registered through the `regproxyinfo` contract by [AlohaEOS](https://www.alohaeos.com/) (https://github.com/AlohaEOS/eos-proxyinfo)
- **Register Proxy Information**: After an account registers as a proxy, it is then given the opportunity to create a proxy profile through the `regproxyinfo` contract by [AlohaEOS](https://www.alohaeos.com/) (https://github.com/AlohaEOS/eos-proxyinfo)
- Fix for Contacts List when no memo is specified
- Fix for missing authorizations (experienced on EDNA)
- Lowered validation on RAM values during account creation (4000 -> 2600)
- Improvements on Error Handling
- Added "Staked to Others" onto the balances section
- Fixes to transfer memos, longer strings and better key protection (thanks to [lukap3rcic](https://github.com/lukap3rcic))
- Improving contract data types detection (thanks to [smlu](https://github.com/smlu))

---

## 2 - What is `eos-voter`?

`eos-voter` is a desktop wallet application build for the EOS blockchain, which can be downloaded and run on your computer. `eos-voter` is free to use and open-source, and is designed to be a way to help secure your account while using the EOS blockchain. When using `eos-voter`, your private keys never leave the application as transactions are signed locally.

To date the `eos-voter` tool has seen over 61,000 downloads in one of the largest efforts to help connect EOS stakeholders with the EOS mainnet!

(`eos-voter` is a temporary application name and we are in the process of rebranding to a much better name!)

Previous updates for more information:

- [2018/08/17 - eos-voter 0.5.0 -Permission Management + Contacts (+0.4.0 feature overview)](https://steemit.com/eos/@greymass/eos-voter-0-5-0-permission-management-contacts-0-4-0-feature-overview)
- [2018/07/07 - eos-voter 0.3.0 - Multiple Accounts, RAM, Account History and Proxy Voting](https://steemit.com/eos/@greymass/eos-voter-0-3-0-multiple-accounts-ram-account-history-and-proxy-voting)
- [2018/06/25 - eos-voter 0.2.1 - Custom Tokens + Cold/Watch Wallets](https://steemit.com/eos/@greymass/eos-voter-0-2-1-custom-tokens-cold-watch-wallets)
- [2018/06/17 - eos-voter 0.1.6 - A better welcome experience + tutorial](https://steemit.com/eos/@greymass/eos-voter-0-1-6-a-better-welcome-experience-tutorial)
- [2018/06/02 - Annoucing eos-voter, a block producer voting tool and light wallet](https://steemit.com/eos/@greymass/announcing-eos-voter-an-eos-block-producer-voting-tool-and-light-wallet)

### Greymass Initiative

`eos-voter` is an application being developed and led by members of the @greymass team. Greymass is an EOS block producer candidate (`teamgreymass`) on the EOS blockchain. For more information about Greymass, please visit our website ([greymass.com](https://greymass.com)) or read our [Steemit Blog](https://steemit.com/@greymass).

---

## 3 - Download `eos-voter` by Greymass

As of 2018/09/18, `v0.5.2` is the most recent release.

The most recent version can always be downloaded from our GitHub releases page:

[https://github.com/greymass/eos-voter/releases](https://github.com/greymass/eos-voter/releases)

- **MacOS User**: Download either the DMG (`mac-eos-voter-***.dmg`) or ZIP (`mac-eos-voter-***.zip`) file.
- **Windows User**: Download the EXE (`windows-eos-voter-***.exe`) file.
- **Linux User**: Download either the SNAP (`linux-eos-voter-***-_amd64.snap`), DEB (`linux-eos-voter-***-_amd64.deb`), or AppImage (`linux-eos-voter-***-x86_64.AppImage`) file.
- **Linux (ARM/Raspberry Pi)**: Download the DEB (`linux-eos-voter-***-armv7l.deb`) file.

Further useful links:

- **eos-voter (Telegram)**: [https://t.me/eoswalletgreymass](https://t.me/eoswalletgreymass)
- **Bug Reports (GitHub)**: [https://github.com/greymass/eos-voter/issues](https://github.com/greymass/eos-voter/issues)
- **Source Code (GitHub)**: [https://github.com/greymass/eos-voter](https://github.com/greymass/eos-voter)
- **Greymass Website**: [https://greymass.com](https://greymass.com)
- **Greymass Twitter**: [https://twitter.com/@greymass](https://twitter.com/@greymass)

---

## 4 - Features

### Browse Proxy Information

Having the time to research and decide on 30 block producers is not an option for everyone, which is why many people choose to use a Proxy to cast their votes. This new section will display all proxies registered through the [regproxyinfo](https://github.com/AlohaEOS/eos-proxyinfo) smart contract developed by [AlohaEOS](https://www.alohaeos.com/). 

This smart contract allows those who choose to act as a proxy to publish basic information about themselves and their voting philosophies, to pitch themselves those who wish to use a proxy.

Across the top of the "Producer Voting" section two different tabs now exist, the "Block Producers" tab, which has been the default display since the application launched, and a new "Proxies" tab, which will allow you to browse available proxies.

![screenshot 38](https://jesta.us/eos/eosvoter38.png)

While using the Proxies section, each proxy is displayed with two buttons:

- A purple magnify button (like producers) that lets you view more information about a specific proxy (pictured below).
- A grey button to select this proxy as your proxy.

A search box is also available, which will search the name (not account name) that the proxy has specified.

![screenshot 39](https://jesta.us/eos/eosvoter39.png)

Clicking on the purple button will display all the information the proxy has entered into the regproxyinfo contract.

For example, here's @lukestokes proxy profile:

![screenshot 40](https://jesta.us/eos/eosvoter40.png)

It's our hope that by providing this additional information, it will help more users make informed decisions about which proxy they should use.

### Register Proxy Information

For those who wish to become a proxy, and publish their information into the [regproxyinfo]((https://github.com/AlohaEOS/eos-proxyinfo)) smart contract developed by [AlohaEOS](https://www.alohaeos.com/), we have integrated a form into the Register Voting Proxy section (Tools -> Register Voting Proxy).

Upon registering as a proxy, a second form will be displayed that then allows the proxy to provide additional information to those on the hunt for a proxy.

This information does consume some of the originating accounts RAM - as all contract do. When unregistering as a proxy, this information will be removed from the contract and return the utilized RAM.

![screenshot 41](https://jesta.us/eos/eosvoter41.png)

---

## 5 - On the horizon...

Greymass has a number of additional features planned to build a modern wallet experience. A rough roadmap of the upcoming features includes:

- 0.6.0: Referendum Voting + Ledger Support
- 1.0.0: Rebrand + Website + New User Interface

As an open source project, we encourage all others to help in these efforts!

### Supporting Greymass

Greymass is a self-funded organization that accepts no outside funding. There are currently three ways you can help support Greymass in an effort to bring tools like `eos-voter` to life:

- Contribute to the code - [https://github.com/greymass/eos-voter](https://github.com/greymass/eos-voter)
- Contribute to the translations - [https://crowdin.com/project/eos-voter](https://crowdin.com/project/eos-voter)
- Vote for `teamgreymass` as in your Block Producer selections.

---

## 6 - Download Signatures

With each release we will be publishing shasum (512) signatures so you can ensure the integrity of the files you are downloading. This footer on the post serves as immutable reference to the shasum data to validate these files, which key be validated as [signed by jesta on keybase](https://keybase.io/jesta).

```
-----BEGIN PGP SIGNED MESSAGE-----
Hash: SHA512

shasum -b -a 512 linux-eos-voter-0.5.2-amd64.deb
fbeb348c4af96d117e1e0a9234a6b436a5c5dcdf48b2024645cdea0501bbbd3ebb671dfb95c73f63e8f0ddea9e605032afc89d23df8e8d446c68c4122e158998 *linux-eos-voter-0.5.2-amd64.deb
shasum -b -a 512 linux-eos-voter-0.5.2-amd64.snap
e5e1e84045510a4e610fd3e6c434795ad658dd7d530cf56f3da2d26d5639b5beeed5a1a3f6ae153958e0be0fb7226ce8948bb34106795ca798142f42b96eb193 *linux-eos-voter-0.5.2-amd64.snap
shasum -b -a 512 linux-eos-voter-0.5.2-arm64.deb
c2d1f283327e0edaf0c538518598d913d506f9d6ebe9775e8cc74939c01f90e808173ce10529bb68c77a479899dba482b8a23b68d80b581ce0bf309fe27a4555 *linux-eos-voter-0.5.2-arm64.deb
shasum -b -a 512 linux-eos-voter-0.5.2-armv7l.deb
85dbe1c5e6ef70c22ac43237751c1c2a1282260b93fbfb194316e9a7c3d2aed99b01bd760f35b7b9168c73b0879c373c2a6eeab77670df03c935bd8c0f406414 *linux-eos-voter-0.5.2-armv7l.deb
shasum -b -a 512 linux-eos-voter-0.5.2-i386.deb
8c7ddb6969fbc53125ebc2869350f6455613906c66282fbb8bd7823a5d47bc7316f9607255ad7e814da6404c943d9467f426f9b2c5221cee98c836155a9775b7 *linux-eos-voter-0.5.2-i386.deb
shasum -b -a 512 linux-eos-voter-0.5.2-x86_64.AppImage
0e41926e7a131a37d8381a5dfbae6473969c9894d1b958ce7b7f0168a5cfb83637916d9ae1e684075bbb8564d6f22c283dcac7ea45adf6fe84bca497b5475a16 *linux-eos-voter-0.5.2-x86_64.AppImage
shasum -b -a 512 mac-eos-voter-0.5.2.dmg
71b88ff2e75b651767143323cec7057a766fd35fd9a8e8a0ecf98251d35fd5794099c293e1dbee5a90e7141a6fa063d5d08d65e1f4c40a4f3916bf71388f4585 *mac-eos-voter-0.5.2.dmg
shasum -b -a 512 mac-eos-voter-0.5.2.zip
33073469eeb7234d9262fdfe40e7d3f0199265e831cbc20d88986d02918ba6a295bc7533fd7d878ad18c03ae4d6d28b34d98976fe11f20f09dab94eb03de147e *mac-eos-voter-0.5.2.zip
shasum -b -a 512 win-eos-voter-0.5.2.exe
48461512a74cd1d0f9b6f7ed8009b7625900e4c1f26d57dcd8b369cf15ce8a806a0bd305f17a814a09a91ee0abc0872e451673319475b9828f2ab4d9da92f9ad *win-eos-voter-0.5.2.exe
-----BEGIN PGP SIGNATURE-----
Version: Keybase OpenPGP v2.0.77
Comment: https://keybase.io/crypto

wsFcBAABCgAGBQJboYkHAAoJECyLxnO05hN9Xn8P/iy/dSbQ3yrSKbhQnXdb/seH
7V7q/9ndvulZHZUuMPTb3vSbKjdff49THKuWXrEw+owyhAywDkv+nUB+F7slNnFp
pJ4V/V4r0l2QNb34feo0k15WlcmV8LzAxvH4fPf2VllMiLHNJvmA6afFt5WpMPjl
W7iJI6upise1ceAfzwhPKYC3vdAgvcEmR2rmdaMPATnid7u61vnJnfmTt5DBOsj2
Qt7cSOQy9zURMywMcQ08uPojSIIGQgSyjiWn9MNWJ5n3yyXnQ5adbV8/po25HS3s
ihlt29kjwR9luf70SfkjWZT6kJGBa3gN5MFt8zJxnTkwjdCJhd8ugH2Brq3nTOD5
z3f+D8lWjFVSB+n78YWjIEc4SN29CSkJnXVZGxKEsOhYE3+/JDLm9lE53LsHNFBp
R1/YAS6t7LkiDeY0VnnOUAJ1jZPzq+hgoNmOFS93GWlSQT9wjgj8bu0akzKij4+x
y/o6TnHbp8DVFxzZvszARLMLBEpcSaM+dUwnha0O+1JlZhhE/lEuUk8VIjqbl7AT
yincUP9FIJLeC35vYcyFObht4VGKuq5OWm7coK/TXFB9SFc4+7cDRTKTnDHByLHc
wNyzad8kkwcGZ+O/kZdGtyHyy5FR84mI1NE1t6BVHQrJY5IKuunsKTg8RG6P7iEe
GuYChabPGlWXyG9Z23Iz
=T+K4
-----END PGP SIGNATURE-----
```
