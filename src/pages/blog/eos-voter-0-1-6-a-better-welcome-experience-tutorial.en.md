---
title: 'eos-voter 0.1.6 - A better welcome experience + tutorial'
date: "2018-06-17"
author: "Greymass"
---
The Greymass team has been working hard this week to address many of the confusing issues surrounding the usage of EOS and our wallet/voting tool (`eos-voter`). Today marks the release of 0.1.6 of the Greymass voting tool, which includes a number of new features including:

- Added ranks and icons next to all producers, with icons for Active Producers (green blocks) and Backup Producers (yellow block).
- A brand new guided "Welcome Experience" to guide users through setting up their wallet.
- Expanded EOS Token Balance to show available/liquid, staked, unstaking, and total.
- Italian Language Support (total of 6 languages now)
- [0.1.6 release notes in full can be viewed here...](https://github.com/greymass/eos-voter/releases/tag/v0.1.6)

To date the `eos-voter` tool has seen over 7000 downloads, in one of the largest efforts to help connect EOS stakeholders with the network!

---

## What is `eos-voter`?

`eos-voter` is a desktop wallet application build for the EOS blockchain, which can be downloaded and run on your computer. `eos-voter` is free to use and open-source, and is designed to be a way to help secure your account while using the EOS blockchain. When using `eos-voter`, your private keys never leave the application as transactions are signed locally.

(`eos-voter` is a temporary application name until we have the opportunity to create a fully branded and memorable experience)

Previous updates for more information:

- [2018/06/02 - Annoucing eos-voter, a block producer voting tool and light wallet](https://steemit.com/eos/@greymass/announcing-eos-voter-an-eos-block-producer-voting-tool-and-light-wallet)

### Greymass Initiative

`eos-voter` is an application being developed and led by members of the @greymass team. Greymass is an EOS block producer candidate (`teamgreymass`) on the EOS blockchain. For more information about Greymass, please visit our website ([greymass.com](https://greymass.com)) or read our [Steemit Blog](https://steemit.com/@greymass). 

---

## Download `eos-voter` by Greymass

As of 2018/06/16, `v0.1.6` is the most recent release.

The most recent version can always be downloaded from our GitHub releases page:

[https://github.com/greymass/eos-voter/releases](https://github.com/greymass/eos-voter/releases)

- **MacOS User**: Download either the DMG (`eos-voter-***.dmg`) or ZIP (`eos-voter-***-mac.zip`) file.
- **Windows User**: Download the EXE (`eos-voter-***.exe`) file.
- **Linux User**: Download either the SNAP (`eos-voter-***-_amd64.snap`), DEB (`eos-voter-***-_amd64.deb`), or AppImage (`eos-voter-***-x86_64.AppImage`) file.

Further useful links:

- **eos-voter (Telegram)**: [https://t.me/eoswalletgreymass](https://t.me/eoswalletgreymass)
- **Bug Reports (GitHub)**: [https://github.com/greymass/eosvoter/issues](https://github.com/greymass/eosvoter/issues)
- **Source Code (GitHub)**: [https://github.com/greymass/eosvoter](https://github.com/greymass/eosvoter)
- **Greymass Website**: [https://greymass.com](https://greymass.com)
- **Greymass Twitter**: [https://twitter.com/@greymass](https://twitter.com/@greymass)

---

# Guide: Getting Started

This guide will walk through the various steps to configure an existing EOS account with the `eos-voter` tool. 

A few concepts that should understand about EOS before proceeding:

- **EOS is account based**: Unlike many other cryptocurrencies with HD wallets, EOS is an account based system. This means that applications like `eos-voter` are simply tools to interact with your existing account, and not wallets with their own independent keys (like Bitpay or Electrum). The private keys for each account are reused to access these accounts until you decide to change them.
- **EOS keys should be backed up**: Keeping your private keys in a wallet like `eos-voter` provides an encrypted space on your computer for secure storage, but that doesn't mean you shouldn't backup your keys. Remember to keep a copy of your keys someplace safe (encrypted volume, offline, paper) in the event that your local wallet stops working. You can always reimport your keys into another wallet to access your account.

This guide will cover the following steps:

1. Connecting to the EOS blockchain
2. Setting up an account
3. Importing the private key
4. Encrypting the wallet with a password

---

## Step #1 - Defining your connection

Upon initially opening `eos-voter`, you will be promoted to choose a node (API server) to connect to for access into the EOS network. This server should be:

- Run by a party that you trust (or yourself), or at the very least a reputable block producer.
- Use HTTPS only. If you choose to use HTTP, you will be warned, and there's the possibility that someone could observe your traffic and expose you to unnecessary risks.

Greymass runs it's own node located at `https://eos.greymass.com` which you are free to use. A list of community submitted nodes is also available [on our GitHub repository](https://github.com/greymass/eos-voter/blob/develop/nodes.md).

**Note**: By default, `eos-voter` does not provide any connections to the EOS network. The tool itself will never connect to any URL except the one you specify through this interface in an effort to protect your security and privacy.

![screenshot 1](http://jesta.us/eos/eosvoter1.png)

### 1/A - Choosing a language

At this first step an option to change the application's language is also available. `eos-voter` currently supports 6 languages, and can support any number as we gain support from the community in it's translation. 

If you'd like to assist in the translation of `eos-voter`, please join us on Crowdin!

Localization Project: [https://crowdin.com/project/eos-voter](https://crowdin.com/project/eos-voter)

![screenshot 2](http://jesta.us/eos/eosvoter2.png)

### 1/B - HTTP Warning

While using an `http://` server is not forbidden, `eos-voter` will clearly display a warning that this is not recommended. 

In the case that you are using your own local API server and are not concerned with the privacy/security aspect, feel free to proceed!

![screenshot 3](http://jesta.us/eos/eosvoter3.png)

### 1/C - Connecting

With a valid URL entered, click the blue "Connect to Server" button.

![screenshot 4](http://jesta.us/eos/eosvoter4.png)

---

## Step #2 - Specify the account to use

**Note:** The "Skip Import" button that appears below the language selector will allow you to use the app to view blockchain information without setting up an account. 

At this point you can specify either an account name or a public key associated with an account.

![screenshot 5](http://jesta.us/eos/eosvoter5.png)

### 2/A - Using an account name

Once you have entered an account name, click "Lookup Account" to validate the account and proceed.

![screenshot 6](http://jesta.us/eos/eosvoter6.png)

### 2/B - Lookup by Public Key

If you are unsure what the account name is (from the ICO process), you can also enter a public key (starts with `EOS...`) in this stage. 

![screenshot 7](http://jesta.us/eos/eosvoter7.png)

### 2/C - Accounts matching Public Key

If a public key was entered, the UI will turn purple and return a list of accounts that match the entered public key. Select the matching account and click "Select Account".

![screenshot 8](http://jesta.us/eos/eosvoter8.png)

---

## Step #3 - Importing a Private Key

The third step of this process allows for a secure interface to import the private key for the selected account. The key entered should match the Public Key displayed in the grey box below the form.

Once the key has been entered, click "Compare Keys" and `eos-voter` will determine if the key provided is valid for the selected account.

**Note**: Keys will never leave the `eos-voter` application or your computer. All transactions from within the application are signed locally and broadcast to the network, never exposing your private key. `eos-voter` however is only as secure as your computer.

![screenshot 9](http://jesta.us/eos/eosvoter9.png)

---

## Step #4 - Choosing to create a wallet or using the app temporarily

The fourth and final stage is for you to determine how you want to use `eos-voter`. There are two options:

- **Saving a local wallet**: Check the checkbox and enter a strong password. This will encrypt your private key and allow you to Lock/Unlock your wallet for access with a password. 
- **Running in temporary mode**: Uncheck the checkbox to run `eos-voter` in a temporary authorization mode. As soon as you quit the application, it will discard your private key (but still remember the account and server). You will have to enter the private key everytime you want to use `eos-voter`.

![screenshot 10](http://jesta.us/eos/eosvoter10.png)

### 4/A - Temporary

If the temporary mode is selected, some basic information about this mode is displayed.

![screenshot 11](http://jesta.us/eos/eosvoter11.png)

---

### Congratulations! 

You are now directed into the application, where you can:

- Vote for up to 30 Block Producers
- Transfer EOS (or any other token) to other accounts.
- Update the amount of EOS you have staked in both CPU and Network.
- View Balance information for all tokens (including airdrops)
- View information about Staked EOS balances in CPU and Network.
- View the RAM usage of your account.

---

## On the horizon...

Greymass has a number of additional features planned to build a modern wallet experience. These features include:

- Account Creation
- Multiple Accounts
- RAM Market Access
- Premium Name Bidding
- Account Transaction History

As an open source project, we encourage all others to help in these efforts!

### Supporting Greymass

Greymass is a self-funded organization that accepts no outside funding. There are currently three ways you can help support Greymass in an effort to bring tools like `eos-voter` to life:

- Contribute to the code - [https://github.com/greymass/eosvoter](https://github.com/greymass/eosvoter)
- Contribute to the translations - [https://crowdin.com/project/eos-voter](https://crowdin.com/project/eos-voter)
- Vote for `teamgreymass` as in your Block Producer selections.

---

## Download Signatures

With each release we will be publishing shasum (512) signatures so you can ensure the integrity of the files you are downloading. This footer on the post serves as immutable reference to the shasum data to validate these files.

```
shasum -b -a 512 eos-voter\ Setup\ 0.1.6.exe
2ebb82264d79407e195b7b40a4ce348b2faf512dbec8de25fe4fd3dea73aa8aaa59f80d89befec0a3a8e1abe412465a9f16dfc5655422ac760a64bca3dfdf452 *eos-voter Setup 0.1.6.exe

shasum -b -a 512 eos-voter-0.1.6.dmg
2ccd96843bdc4d2fa866ce98479e5ef4374c9828077521c25ab3a2bb528b6dd60e890e6787440c5479e57f22aa192fcf9e443997dd519eb442226aded240611e *eos-voter-0.1.6.dmg

shasum -b -a 512 eos-voter-0.1.6-mac.zip
4a99e29669494c2f551f1a03bcd64cf74337b3c3409a1a0d5071d672233e58925b1d9cafc05165d13b1f4f7b942523bf16237aee291663a2e023dbd7ea153045 *eos-voter-0.1.6-mac.zip

shasum -b -a 512 eos-voter-0.1.6-x86_64.AppImage
a2179b9f9ce2f2e3e9dd4c353541eb7b19c52accf87086293ae198203130fff3a5d9d534cf30536ec631562a21a39fe7bd2021599f29402184608d49e4fc1be2 *eos-voter-0.1.6-x86_64.AppImage

shasum -b -a 512 eos-voter_0.1.6_amd64.deb
90b07efe663801c8cac0e4514b770134a67af41af3c07cf43295b806d388db1b620a3f2058e8b995f95cfa76f0eff539c8d3cdef964cfd0456e72fcc3c515473 *eos-voter_0.1.6_amd64.deb

shasum -b -a 512 eos-voter_0.1.6_amd64.snap
a18899000dfff5eee61dce6f6b6e799b028ecc5fc1ff6edbaf67b5dc2e08409500e1563df0aa5743d42adebfc69de59dae569802c80294424c2208bfe8d34c0f *eos-voter_0.1.6_amd64.snap
```