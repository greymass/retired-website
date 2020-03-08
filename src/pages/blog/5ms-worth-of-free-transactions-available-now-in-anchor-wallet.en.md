---
title: "5ms worth of free transactions available now in Anchor wallet"
date: 2020-01-03
author: Greymass Team
featured: true
---
# 5ms worth of free transactions available now in Anchor wallet

Almost a week ago, we quietly [released Anchor 1.0.0-RC2](<https://github.com/greymass/eos-voter/releases/tag/v1.0.0-rc2>), which now has built-in support for our newest project, [Fuel](<https://decentium.org/teamgreymass/greymass-fue1>).

Anchor is the evolution of the wallet we've been working on since EOS launched: eos-voter (aka "Greymass Wallet"). Fuel is the first iteration of our idea on how to best deal with the current resource situation on EOS while waiting for changes to the network itself. These two products now work together to help EOS accounts use the network while they may not have enough CPU/NET themselves.

### Using Fuel from within Anchor

In order to use Fuel in Anchor, one condition must be met: you must use our API endpoint at `https://eos.greymass.com`. By default, Anchor uses this API endpoint, so if you haven't changed it in the past Anchor is probably already using it. If you run into problems with Fuel not working and would like to check the API node, instructions are provided in the next section.

Using Fuel itself is incredibly simple, it just needs to be enabled using the Fuel logo in the upper right. It can also be disabled from the same context menu. Once enabled (and after you start using Fuel), this menu will also display the quota you have available and how much you've used of your daily quota.

<figure><img src="https://i.imgur.com/OJz123n.gif" alt=""><figcaption>Enabling and disabling Greymass Fuel within Anchor</figcaption></figure>

You can tell if Fuel is enabled if the logo is colored, and it will be black and white when disabled.

**That's it**, Anchor now uses Fuel. While Fuel is enabled, any transaction you perform in the wallet (or using the EEP-7 signing protocol) will have its resource costs covered.

### 5ms worth of free transactions

Fuel is designed to give every account 5ms worth of free transactions, per day. This is typically enough to perform a couple transactions. To give you a sense of how much different transactions use, here are some ballpark estimates of some typical transactions:

- An EOS token transfer uses somewhere between 0.7ms to 1.2ms.
- When unstaking or staking tokens, it typically uses somewhere between 1ms up to 3ms.
- Voting for block producers uses around 0.8ms to 1.5ms.

<!-- -->

### Beyond the 5ms free transactions

We are designing Fuel to be a solution to replace the need for users to stake their own EOS, similar to the design goals of how REX operates. Soon users will be able to spend EOS to purchase resource usage quotas within Fuel, which can then be used on-demand whenever the user wishes to perform transactions. Keep an eye on our social media and/or blog for updates when this becomes available.

### Checking the API used for Anchor

To double check if you are using this API, you'll use the "Manage Blockchain" feature, and click the gear icon on the EOS blockchain. Then check the "Default node" field to ensure it is using the appropriate API. The animated gif below shows how exactly to check and where to find this information.

<figure><img src="https://i.imgur.com/Sbfqu5e.gif" alt=""><figcaption>Checking the API node of a blockchain</figcaption></figure>

### Migrating from eos-voter (aka "Greymass Wallet")

For those who already use eos-voter, we set out to make the migration process to Anchor as simple as possible.

Both applications are installed separately, meaning you can have both eos-voter and Anchor installed to the same computer without the risk of one overwriting the other. You can even run them at the same time since they both use their own configurations. If one works better for you, you can continue on using it while we continue to improve Anchor. At some point we will stop updating eos-voter completely, and encourage everyone to make the transition to this new wallet.

To move your accounts and settings from eos-voter to Anchor only requires creating a backup and then restoring it into the new application. To do this, you would:

1. Open eos-voter, go into Tools and then Manage Wallets. From this interface, click the purple "Save Backup" button in the upper right. Save that file to your computer, it's a backup of your entire wallet and is encrypted using the password you use in your wallet.
2. Open Anchor, and during the initial setup process, select the "Restore Backup" option. You'll be prompted to select a backup file, and just select the file you saved in the first step.

<!-- -->

You may be prompted to "Upgrade" your wallets, which simply requires entering your existing wallet password (from the backed up wallet). Once this is complete, your new Anchor wallet will be completely setup with the same accounts and settings you were using in eos-voter.

### Stay Connected

If you have questions or want to keep up to date with what's happening with Anchor, Fuel, or Greymass in general, feel free to use one of the methods below.

- [@greymass](<https://twitter.com/greymass>) (Twitter): General updates from our team about all of our products and services.
- [@anchorwallet](<https://t.me/anchorwallet>) (Telegram): A telegram channel dedicated to the Anchor wallet. Updates, support, and discussion around this new wallet.
- [@greymass](<https://t.me/greymass>) (Telegram): The Greymass telegram channel, general discussion about EOSIO and all of our products and services.
- [@greymassfuel](<https://t.me/greymassfuel>) (Telegram): A channel for Fuel questions, both for end users and for developers who wish to use Fuel in their applications.

<!-- -->

