---
title: 'eos-voter 0.5.0 - Permission Management + Contacts (+0.4.0 feature overview)'
date: "2018-08-17"
author: "Greymass"
---
Yesterday we released 0.5.0 of our eos-voter tool which is slowly reaching a fully featured wallet. This post will outline the changes in the last two versions, some brief information about what this application is, and then descriptions and screenshots of some of the more prominent features.

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

**0.5.0 Changelog**

The following features have been released as part of the 0.5.0 eos-voter release.

- **Permission Management**: A new simple permission management interface can now be found in the Tools section of the app.
- **Contacts (Address Book)**: An contacts list for your own personal use is available in the Tools section of the app.
- **New Setting: Resources Available vs Resources Used**: Toggle the UI within the Wallet section to display CPU/Network and RAM as either "Available" or "Used".   
- **New Setting: Wallet Autolock**: Change this setting to automatically lock your wallet after a set duration of inactivity.
- **New Setting: Skip Link Warnings**: Change this setting to remove the warning about external links.
- **Improved Transfer Screen**: When transferring tokens, you can now either manually input the account name, use a list of known exchanges, or use an account name from your contacts list.
- **Improved Error Handling**: Added some explanations on some of the more cryptic error messages. Let us know if you find any confusing errors you'd like improved.
- **Bug Fixes**: Fixed bugs preventing certain fields in contracts from being populated correctly within the Smart Contract Interface tool.

**0.4.0 Changelog**

Since we didn't release a blog post with the 0.4.0 changes a couple weeks back, briefly we will summarize them below:

- **Account Creation**: Allows the creation of new accounts using an existing imported account.
- **Producer Information**: Each producer in the voting interface now can display more information with the purple button next to their name.
- **Smart Contract Interface Tool**: A dynamic interface that allows the viewing and usage of any smart contract.
- **ABI Bundling for Cold Storage Signing**: v0.4.0 brings a change to the file format used for cold storage signing that now allows the signing of any transaction (custom tokens, referendums, etc) with a Cold Storage Wallet! Any unsigned tx created with 0.4.0+ will also require a cold storage wallet of v0.4.0+ to sign it, trying to sign with a lower version will not work.
- **Tools - Default Page**: The default page when you click Tools will now also be the home for all of your wallet application settings.
- **A Choice in Block Explorers**: A new application setting has been added that allows you to choose which block explorer you'd like all explorer links to open to. If you have an explorer you want added to the list, open a github issue requesting it!
- **In-memory key obfuscation**: Private keys that are stored in your devices RAM while the wallet is unlocked are now obfuscated using a light encryption pass to strengthen the security of your account. While this won't defend against all compromised systems, it will defend against basic memory scanners that are searching your computer for private keys sitting in RAM. Thanks to @nsjames (developer of [Scatter](https://scatter-eos.com)) for the recommendation!
- **More formatting for Action History items**: A number of additional operation types have been added to the Action History section of the wallet and now have custom formatting (instead of large JSON displays).
- **New Languages**: Thanks to our small but growing community of contributors on [the crowdin translation platform](https://crowdin.com/project/eos-voter), Estonian and Spanish have been added, and a number of additional languages have improved coverage.
- **No owner keys allows**: We have explicitly disabled the usage of owner keys (except in instances of genesis accounts, where owner = active) in this build, since both the owner key should be kept offline and currently there are issues with signing while using the owner key. In one of the next builds, we will reintroduce owner key imports, but only for temporary usage when modifying active permissions.
- **Bug Fix**: A bug preventing the removal of custom tokens from the tools section has been corrected.

---

## 2 - What is `eos-voter`?

`eos-voter` is a desktop wallet application build for the EOS blockchain, which can be downloaded and run on your computer. `eos-voter` is free to use and open-source, and is designed to be a way to help secure your account while using the EOS blockchain. When using `eos-voter`, your private keys never leave the application as transactions are signed locally.

To date the `eos-voter` tool has seen over 61,000 downloads in one of the largest efforts to help connect EOS stakeholders with the EOS mainnet!

(`eos-voter` is a temporary application name and we are in the process of rebranding to a much better name!)

Previous updates for more information:

- [2018/07/07 - eos-voter 0.3.0 - Multiple Accounts, RAM, Account History and Proxy Voting](https://steemit.com/eos/@greymass/eos-voter-0-3-0-multiple-accounts-ram-account-history-and-proxy-voting)
- [2018/06/25 - eos-voter 0.2.1 - Custom Tokens + Cold/Watch Wallets](https://steemit.com/eos/@greymass/eos-voter-0-2-1-custom-tokens-cold-watch-wallets)
- [2018/06/17 - eos-voter 0.1.6 - A better welcome experience + tutorial](https://steemit.com/eos/@greymass/eos-voter-0-1-6-a-better-welcome-experience-tutorial)
- [2018/06/02 - Annoucing eos-voter, a block producer voting tool and light wallet](https://steemit.com/eos/@greymass/announcing-eos-voter-an-eos-block-producer-voting-tool-and-light-wallet)

### Greymass Initiative

`eos-voter` is an application being developed and led by members of the @greymass team. Greymass is an EOS block producer candidate (`teamgreymass`) on the EOS blockchain. For more information about Greymass, please visit our website ([greymass.com](https://greymass.com)) or read our [Steemit Blog](https://steemit.com/@greymass).

---

## 3 - Download `eos-voter` by Greymass

As of 2018/08/17, `v0.5.0` is the most recent release.

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

### Permission Management

A new permissions section has been added to the Tools area of the application. Within this new tool, you can:

- View your existing permissions
- View which key is currently loaded into the wallet
- Update an `active` key using your `owner` or `active` key.
- Update an `owner`/`active` key with your `owner` key. 
- Advanced permission management will be added to this section as certain improvements to EOS are made.

![screenshot 27](https://jesta.us/eos/eosvoter27.png)
![screenshot 28](https://jesta.us/eos/eosvoter28.png)

### Contacts

A customizable contact list has been added to the Tools area of the application. Within this section you can manage a list of frequently used account names. 

- Maintain a list of account names, with custom labels, and default MEMO fields.
- A search interface for your contacts.
- These contacts can be selected from the "Transfer" screen.
- This information is stored locally in your wallet and is not broadcast to the blockchain.

![screenshot 29](https://jesta.us/eos/eosvoter29.png)
![screenshot 30](https://jesta.us/eos/eosvoter30.png)

### Account Creation

From within the Tools section, you can now create (and pay for) additional accounts to be created, either for yourself or for those you know in need of an account. This initial release of account creation is very minimal and expects you to understand how to generate key pairs, how staking works, and how RAM impacts the new account. Future versions will improve to make this interface and user flow more friendly.

![screenshot 31](https://jesta.us/eos/eosvoter31.png)

### Producer Information

In the Producers Voting section, a new button has been added to each producer which can be used to view further information about them. When the button is colored purple, it means there's information available to view about this producer. The grey buttons are producers who have not yet published their information on-chain. The information itself is retrieved from a smart contract (`producerjson`) on-chain (no external connections for your wallet).

![screenshot 32](https://jesta.us/eos/eosvoter32.png)
![screenshot 33](https://jesta.us/eos/eosvoter33.png)

### Smart Contract Interface

Added to the Tools section of the app, this tool allows you to view and interact with any smart contract deployed on the EOS blockchain. Enter the contract address to load the ABI, and from there you can perform any actions, view any table/scope, and view the raw ABI of the contract. A warning will be displayed the first time you attempt to access this tool - since if used improperly, could do any number of potentially damaging things to an account.

![screenshot 34](https://jesta.us/eos/eosvoter34.png)
![screenshot 35](https://jesta.us/eos/eosvoter35.png)
![screenshot 36](https://jesta.us/eos/eosvoter36.png)

### New Customizable Settings

The main section of the Tools section now contains additional configurable options, which can be seen below:

![screenshot 36](https://jesta.us/eos/eosvoter37.png)

---

## 5 - On the horizon...

Greymass has a number of additional features planned to build a modern wallet experience. A rough roadmap of the upcoming features includes:

- 0.6.0: Multisig
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

shasum -b -a 512 linux-eos-voter-0.5.0-amd64.deb
59cab9caed4ccbfac9b4cdb943e464c710e4012e0e6132a74a1c537bbe581e9d383183bf02aef026834753067a48ce04fb0341175fe2ffeaf67d0be9eac0b481 *linux-eos-voter-0.5.0-amd64.deb
shasum -b -a 512 linux-eos-voter-0.5.0-amd64.snap
3b58c7eea6bbce47a437c15d8694c65937cbf3bf13b16d674d64eedd8e74d0e02e7d2e5f52094cbff93e97da1be53599104ce7c12cc81d0f2e93cc2411598e0e *linux-eos-voter-0.5.0-amd64.snap
shasum -b -a 512 linux-eos-voter-0.5.0-arm64.deb
deaeef2212769808d486cea2cda6a2453be8e0b422a7779c83a74106a3362b5912fc01be44df07f5a74da0023c304eeace188592f4dfdd38f8f7d980b55516bf *linux-eos-voter-0.5.0-arm64.deb
shasum -b -a 512 linux-eos-voter-0.5.0-armv7l.deb
555ef8da0202e508665c95be300b723e2e5e0678d3e6e2a32336e6d80665341a618c30688a40db6bf1eabc7496f0b10780ff4b16888736520c5755a4556bf2d7 *linux-eos-voter-0.5.0-armv7l.deb
shasum -b -a 512 linux-eos-voter-0.5.0-i386.deb
e3e3d38bc4f8b98484d412f4bcb22fd3e453f50ec79e85a33005295d7891ecfc4db06c81054ddc6843a399bec727917808629e42acd3277fe2ce835d0a880bc4 *linux-eos-voter-0.5.0-i386.deb
shasum -b -a 512 linux-eos-voter-0.5.0-x86_64.AppImage
e3412b0016b7e90f4a8293b0068788fe656edb652202bce0c150d9e658c8c77f182585bdbd10b995d31c495d818c65ab7140230c1766db44f688d25013f6e50c *linux-eos-voter-0.5.0-x86_64.AppImage
shasum -b -a 512 mac-eos-voter-0.5.0.dmg
8207d0197a3890707e3e545e105314e26b809d741ad60fced73f23e69f30b0548adc1a5ac8cc1c6b65d5d1f93e812dd2f9b8be40495c4c7df788a2d36050e838 *mac-eos-voter-0.5.0.dmg
shasum -b -a 512 mac-eos-voter-0.5.0.zip
e71c5e0d2312ea8b8ed175b26f43410f171742b2a7060fcaf5478dd9cda861cd1d67d06600b266c517b11118a5bbcaaa8ce470bb2d6bfbe118c0836ef88506e2 *mac-eos-voter-0.5.0.zip
shasum -b -a 512 win-eos-voter-0.5.0.exe
3a41ffd33e4acf94ea391c0ab3006c928eb2840b5c2187d8eb703bd66ae6c782fe39abeccb959638a7c7ea895e13f5c7277bab85cbf574b54249488694c571e5 *win-eos-voter-0.5.0.exe
-----BEGIN PGP SIGNATURE-----
Version: Keybase OpenPGP v2.0.77
Comment: https://keybase.io/crypto

wsFcBAABCgAGBQJbdhs1AAoJECyLxnO05hN9PQgP/1U0pJl8Z3JqokIHL2qeyt23
9a+bXHl9lwXlqyCdLfN3AMJay5+k1VmMeENG9mqcrTIZ/cS7bVDUMzL/B1nuV0NL
ioAeMCD59CYO/lUenY+ap0W72VDr5nZ+DotxBm1q9NMROh7FZNzRTMlD2s6VUQr3
iYs1K54l/3frK20xHVtnjv791xSPoVxoDTc6tlm4Nph7KRr1PD6Lwsc79yh8lTHm
u5G4xEYkyJp5i2yaFU6XOi51hP8rb0AskL2/KtSZWXIlKf+D6r/3Y5l3y6O2y3F4
rCO0k27IrkjNfo8AxLRVYtRJHhv6RjN5eiJucll2EadAnAiTrlTxcMVqqM6OUv3G
bczcXJwYiBx6Cc87WdQEBDA17zKklWEmtM+8OtqE81BjZbHSiOjqm5LCJduc/Xmy
inCL1iry8NsJ0XeoxVE3Wpfne7319Ujc6BebxmQQrx/4xXQIcaLjOil7eDC3c4PI
u/1Rdy41WpPrmitJffce8b6jAK+eC4g5SC3Jbb69Mz5CMFz11g0tj/ItqvNTumTF
p5Yereg772hWAte+DRQxpmL3K48MaoCO+5/TjC4D4rb6oMZgtsNnqRs3cIBetbVg
25RglmbZj3lH+p2kWZPRtId/x1Ch3VAt7vrQvU1eFuLf2WqNtAZfoAyCHTnkM2b8
5C5cKNJi2ktMY+iUdmOs
=mEQD
-----END PGP SIGNATURE-----
```