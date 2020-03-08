---
title: "Migrating to Anchor from eos-voter (\"Greymass Wallet\")"
date: 2020-02-29
author: Greymass Team
featured: true
---
# Migrating to Anchor from eos-voter ("Greymass Wallet")

This post will explain how users of the eos-voter wallet (commonly referred to as "Greymass Wallet") can migrate to our new rebranded wallet, ***Anchor***. It is recommended that all eos-voter users upgrade to Anchor, and is expected that as time progresses eos-voter will stop working properly with EOSIO chains. The eos-voter wallet will no longer be developed and all wallet development efforts are now focused Anchor.

For those who already use eos-voter, we set out to make the migration process to Anchor as simple as possible. It's a three step process for those with eos-voter already installed, consisting of:

1. Install the latest release of Anchor
2. Launch eos-voter and create a new backup
3. Launch Anchor and restore the backup

<!-- -->

### Installing Anchor

Installing Anchor is a similar process, one which you can do by visiting our Github releases page and grabbing the most recent version. All releases are located in one of these two places (they will automatically redirect regardless of which you use):

[https://github.com/greymass/anchor/releases](<https://github.com/greymass/eos-voter/releases>)

[https://github.com/greymass/eos-voter/releases](<https://github.com/greymass/eos-voter/releases>)

The "Assets" section below the "Signatures" for each version can be expanded to find the downloader for your operating system. If you are using:

- **Windows** \- Download the `win-anchor-X.X.X.exe` (**EXE**) file.
- **macOS** \- Download the `mac-anchor-X.X.X.dmg` (**DMG**) file.
- **Linux** \- Download the `linux-anchor-X.X.X.deb` (**DEB**) or `linux-anchor-X.X.X.AppImage` (**AppImage**) file, depending on your distribution.

<!-- -->

Both Anchor and eos-voter are individual applications and can installed separately, meaning you can have both installed to the same computer without the risk of one overwriting the other. You can even run them at the same time since they both use their own independent configurations.

Once you have the appropriate file, run it to start the Anchor installation process.

### Creating a backup in eos-voter

Many versions ago we created a backup process that allows you to create a file on your computer that saves your accounts, keys, and settings. This backup is encrypted using your wallet password to help protect the contents of the file from those who would gain access to your computer.

We are now using this backup process to help users migrate over to Anchor.

To perform a backup, you'll need to perform these steps, which are also illustrated in an animated gif below:

1. Launch eos-voter
2. Click "Tools" in the top menu.
3. Click "Manage wallets" in the left menu.
4. Click the purple "Save Backup" button in the upper right.
5. Select a location and save the file.

<!-- -->

<figure><img src="https://i.imgur.com/FelUojM.gif" alt=""><figcaption>Creating a backup in eos-voter</figcaption></figure>

With that file saved, you now have a password encrypted backup of your wallet in the folder you selected to save it in. This file will be used in the next step.

### Restoring the backup in Anchor

For purposes of users performing this migration, we made sure that eos-voter backups work easily within the setup of Anchor. The next step needed in the process is simply to restore the backup you created in the previous step within Anchor.

To do so, follow these steps, and again an animated GIF below will illustrate these steps.

1. Launch Anchor
2. From the initial setup screen, choose "Restore Backup". 
3. Select the file created in the previous step.
4. If prompted to "Upgrade Wallets", click the button and enter the password for the wallet you used in eos-voter.

<!-- -->

<figure><img src="https://i.imgur.com/0a1TOUD.gif" alt=""><figcaption>Restoring a backup in Anchor</figcaption></figure>

### You're ready to start using Anchor

That's it, your wallet should now be configured using the same accounts, keys, and settings that you had previously configured in eos-voter.

If you encounter any problems or need help - please reach out to our developers on telegram:

[https://t.me/anchorwallet](<https://t.me/anchorwallet>)

Our team will be happy to try and assist with whatever you may need.

---

**About Greymass**

Anchor is an initiative brought to you by [Greymass](<https://greymass.com>). Greymass is block producer on various EOSIO networks (including EOS, Telos, Wax, and Insights) and is funded purely by the inflation we receive fulfilling this role. To support our work you can vote for our block producer account, [teamgreymass](<https://bloks.io/account/teamgreymass>), which directly impacts the amount of inflation we are allocated. Every vote matters and we truly appreciate the support that has been shown to our organization since the genesis of these powerful blockchains.

