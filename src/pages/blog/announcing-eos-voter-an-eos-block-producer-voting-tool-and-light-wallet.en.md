---
title: 'Announcing EOS-Voter, an EOS Block Producer Voting Tool & Light Wallet'
date: "2018-06-02"
author: "Greymass"
featured: true
---
![](https://greymass.com/logo.png)

With the launch of EOS just around the corner, we wanted to release the current iteration of our EOS light
wallet into the world.

It was recently discussed in some articles, such as [_EOS Is Coming, If Anyone Can Figure Out How to Vote_](https://www.coindesk.com/eos-coming-anyone-can-figure-vote/), that there is a big gap between the current release of software and the ability of the masses to get involved and actually use it. This highlights the issue of accessibility, since it is currently necessary to have an advanced understanding of EOS in order to be able to perform simple tasks such as voting for block producers.

Our mission at Greymass is to build tools to help everyone understand and use EOS, and further, bring this ease-of-use to the masses. We are proud to present the first of our planned EOS tools: an EOS Voting desktop application. Eventually this open source software will act as the foundation for our full GUI Light Wallet, which will have many other useful tools for EOS stakeholders  -- but in the meantime, we wanted to get it in the hands of users for launch. Currently, it allows you to stake your EOS and vote for producers, which is the most important facet of securely launching and approving the main EOS network.

# A Note on Security
It goes without saying that in the cryptocurrency world, security (specifically of your private keys) is a primary concern. 

Since our voting tool is a standalone application, your keys will never leave your computer. Your keys (if you choose to store them), are encrypted with AES-256 encryption and stored on your own device. Operations are only signed locally, never externally. The only connection that the application makes is to your desired API node -- one that you choose yourself. This is a far more secure solution than voting through a website interface.

Finally, everything we do at @greymass is open source and always will be. You can check for yourself that everything we say is true -- as they say, _“Trust, but verify.”_
[The source code is available here. We encourage advanced users to build it themselves!](https://github.com/greymass/eos-voter)

---
---

# EOS Block Producer Voting & Wallet

`eos-voter` is a limited-functionality release of an open-source light wallet that is being designed for the EOS blockchain. This application can be used to connect to a remote EOS API endpoint to perform producer voting actions and a few basic wallet commands.

### Features

- **CPU/Bandwidth Staking**: Stake your EOS as either Bandwidth or CPU. This grants rights to resource usage on the network, in addition to the combined amount staked conveying weight while voting for block producers.
- **Block Producer Voting**: Select which block producers to support and cast your vote. Please note that the block producer voting UI is not a research tool; it is a simple interface that provides a secure way to vote.
- **Local Wallet**: Set a password while importing your private key to create a local wallet. Your key will be encrypted locally using this password. This password will be required each time you need to unlock the wallet.
- **Temporary Usage**: If you prefer not store your keys within the application, simply choose not to set a password. When the application quits, your key will be forgotten.

### Security: Private Keys

When using `eos-voter`, all transactions are signed within the application and your key is never transmitted. If a local wallet password is specified, the application will also save and encrypt your key for future use, using AES-256 encryption.

## Get eos-voter

### Download the Latest Release

The latest release will always be available on the releases page of this repository:

[https://github.com/greymass/eos-voter/releases](https://github.com/greymass/eos-voter/releases)

If you are a...

- **MacOS User**: Download either the DMG (`eos-voter-***.dmg`) or ZIP (`eos-voter-***-mac.zip`) file.
- **Windows User**: Download the EXE (`eos-voter-***.exe`) file.
- **Linux User**: Download either the SNAP (`eos-voter-***-_amd64.snap`) or DEB (`eos-voter-***-_amd64.deb`) file

### Build it Yourself

If you'd rather build the application yourself, please ensure you have nodejs, npm/yarn already installed locally.

**Note**: If you are configuring this Electron application under a Windows development environment, it will take some extra steps that are not outlined here.

```
git clone git@github.com:greymass/eos-voter.git eos-voter
cd eos-voter
yarn install
```

Then either:

- MacOS: `yarn package`
- Linux: `yarn package-linux`
- Windows: `yarn package-win`
- All: `yarn package-all`

The files built will be located in the `releases` folder within the root folder.

### Running Development Mode

```
git clone git@github.com:greymass/eos-voter.git eos-voter
cd eos-voter
yarn install
yarn dev
```

---
---

# Tutorial: How To Use the Voting Tool

### Step 1: Connect to an API node
![](https://i.imgur.com/hRhbx9C.png)

The first page you you will see when opening the app is a splash page that asks you for an API node. You can insert any trusted community API node here, or even use your own node if you have one.

For launch, Greymass will be hosting the API node https://eos.greymass.com, which you will be able to use here right away.

_Note: eos.greymass.com will point to the main network when it comes online. If you want to test things on the Jungle testnet, you can connect to http://eos.jesta.us/._

### Step 2: Input Your Credentials
![](https://i.imgur.com/bq0vD6i.png)

![](https://i.imgur.com/hZdbEMW.png)

Next up, you will need to input your credentials: specifically, your account name and your private key. Don’t know your account name? No problem, the app can look it up for you!


![](https://i.imgur.com/fFNmyDn.gif)

### (Optional) Step 3: Save Your Encrypted Credentials
![](https://i.imgur.com/fKjCMLH.png)

Once you have input your account name and private key, you can choose to have them saved and encrypted to your device so that you don’t have to re-enter them later. The next time you unlock your wallet, it will be ready to go! But if you don’t want to do this, no worries -- you’ll still be able to use your wallet by inputting your credentials at the beginning of each session.

### (Optional) Step 4: Stake Some EOS
![](https://i.imgur.com/xmx7fcn.png)

![](https://i.imgur.com/mdWxsEH.png)

When the main network is launched, you may need to stake some of your EOS in order to vote for producers. To do this, head over to the Wallet tab and choose an amount of EOS to stake. 

_Note: the main network will have staked the majority of your EOS. You will likely not want to stake anything more!_

_Note: the combined amount of staked EOS across CPU and Bandwidth will determine the weight of your vote(s)._

### Step 5: Vote for Some Producers

![](https://i.imgur.com/Uqly4Dj.png)

![](https://i.imgur.com/Aoqcg9B.png)

Now you’re ready to vote for Block Producers. Head back to the Voting page, and select your favourite producers here.


### (Optional) Step 6: Check out our Splash Page
![](https://i.imgur.com/n4RpW8R.png)

You’re done! If you like, you can click on our logo in the top right corner. On this splash page, you’ll find more info about this tool, and about our organization.

If you like this application, don’t forget to vote for us as one of your selected, trusted Block Producers -- we’ll let you know our Block Producer name when the mainnet launches!

---
---

### Credits

The development of this application is being led by members of the [Greymass](https://greymass.com) team in an effort to connect EOS with its stakeholders. 
Everything is open source; we encourage the community to help contribute!

[For discussion or questions about this app, feel free to join us on telegram.](https://t.me/joinchat/FOalLw_PXyvyDq6x-9m9qw)
