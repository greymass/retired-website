---
title: 'eos-voter 0.2.1 - Custom Tokens + Cold/Watch Wallets'
date: "2018-06-25"
author: "Greymass"
---
While hardware wallet (trezor and ledger) integrations are underway by a number of groups, we decided to take this opportunity to tackle secure signing from a more simple angle: a cold/watch wallet configuration. Version 0.2.1 of our eos-voter tool includes a number of new features including:

- Tracking custom token balances that aren't a part of the `eosio.token` contract and allowing transfers. Simply enter the account name and symbol.
- An improved welcome experience to help guide users through the new wallet modes.
- "Hot Wallet" Mode: An online wallet mode that stores encrypted private keys, which is able to sign and broadcast transactions.
- "Cold Wallet" Mode: An offline wallet mode that stores encrypted private keys, which is able to sign transactions, but not broadcast. Designed to be run on a completely/always offline computer in conjunction with a "Watch Wallet".
- "Watch Wallet" Mode: An online wallet mode that does not store private keys, which is able to broadcast signed transactions, but not sign. Designed to be run on an online computer in conjunction with a "Cold Wallet".
- Russian Language Support (totaling 7 languages now)
- An ARM build for support of microPC architecture.
- Key Generation tool (using eosjs/eosjs-ecc) in the new tools section.

To date the `eos-voter` tool has seen over 14,000 downloads in one of the largest efforts to help connect EOS stakeholders with the EOS mainnet!

---

## What is `eos-voter`?

`eos-voter` is a desktop wallet application build for the EOS blockchain, which can be downloaded and run on your computer. `eos-voter` is free to use and open-source, and is designed to be a way to help secure your account while using the EOS blockchain. When using `eos-voter`, your private keys never leave the application as transactions are signed locally.

(`eos-voter` is a temporary application name and we are in the process of rebranding to a much better name!)

Previous updates for more information:

- [2018/06/17 - eos-voter 0.1.6 - A better welcome experience + tutorial](https://steemit.com/eos/@greymass/eos-voter-0-1-6-a-better-welcome-experience-tutorial)
- [2018/06/02 - Annoucing eos-voter, a block producer voting tool and light wallet](https://steemit.com/eos/@greymass/announcing-eos-voter-an-eos-block-producer-voting-tool-and-light-wallet)

### Greymass Initiative

`eos-voter` is an application being developed and led by members of the @greymass team. Greymass is an EOS block producer candidate (`teamgreymass`) on the EOS blockchain. For more information about Greymass, please visit our website ([greymass.com](https://greymass.com)) or read our [Steemit Blog](https://steemit.com/@greymass).

---

## Download `eos-voter` by Greymass

As of 2018/06/25, `v0.2.1` is the most recent release.

The most recent version can always be downloaded from our GitHub releases page:

[https://github.com/greymass/eos-voter/releases](https://github.com/greymass/eos-voter/releases)

- **MacOS User**: Download either the DMG (`mac-eos-voter-***.dmg`) or ZIP (`mac-eos-voter-***.zip`) file.
- **Windows User**: Download the EXE (`windows-eos-voter-***.exe`) file.
- **Linux User**: Download either the SNAP (`linux-eos-voter-***-_amd64.snap`), DEB (`linux-eos-voter-***-_amd64.deb`), or AppImage (`linux-eos-voter-***-x86_64.AppImage`) file.
- **Linux (ARM/Raspberry Pi)**: Download the DEB (`linux-eos-voter-***-armv7l.deb`) file.

Further useful links:

- **eos-voter (Telegram)**: [https://t.me/eoswalletgreymass](https://t.me/eoswalletgreymass)
- **Bug Reports (GitHub)**: [https://github.com/greymass/eosvoter/issues](https://github.com/greymass/eosvoter/issues)
- **Source Code (GitHub)**: [https://github.com/greymass/eosvoter](https://github.com/greymass/eosvoter)
- **Greymass Website**: [https://greymass.com](https://greymass.com)
- **Greymass Twitter**: [https://twitter.com/@greymass](https://twitter.com/@greymass)

---

# Tracking custom tokens

EOS has been live for a little over a week now and we are starting to see new custom token contracts launching. While none of these are on the `eosio.token` account and available through normal balance calls, you can now configure `eos-voter` to use these contracts.

**Note**: These contracts will not work if they deviate from the standard structure that `eosio.token` uses. Future standards for these types of contracts will be added as they become available. For now though - if a token is not compatible with the `eosio.token` contract, they will not be compatible with `eos-voter`.


### The Add Custom Token button

The new Add Custom Token button is located on the Token Balances panel of the Wallet.

![screenshot 14](http://jesta.us/eos/eosvoter14.png)

Enter the contract account and asset symbol.

An example of one of these contracts is the `EOSDAC` token on the `eosdactokens` account. Enter these details to begin tracking this token.

- Contract Account: `eosdactokens`
- Contract Asset Symbol: `EOSDAC`

![screenshot 15](http://jesta.us/eos/eosvoter15.png)

Confirm the addition of the token to make use of it.

![screenshot 16](http://jesta.us/eos/eosvoter16a.png)

---

# Cold & Watch - New wallet modes

`eos-voter` can now operate in 3 different modes providing new methods to secure your account. These new wallet modes are designed for advanced users who need the ultimate in security for their accounts. For normal users, the wallet will continue to operate in a "Hot Wallet" mode as it always has.

To fully understand the differences in these modes of operation, you will need to understand the following steps in submitting a transaction to the blockchain:

- **Creating Transactions**: Creating a transaction is the process of determining which actions/operations you would like to perform.
- **Signing Transactions**: Signing a transaction is when a private key generates a unique signature for a transaction that authorizes those specific actions, which then proves the request is authentic.
- **Broadcasting Transactions**: Broadcasting a transaction is the act of sending the signed transaction to the network for addition to the blockchain.

Most wallets (including `eos-voter` in "Hot Wallet" mode) do all of these steps without really showing you the process. Many times a transaction will be **created** and presented to you in a confirmation prompt, and when you confirm, the transaction is then **signed** and then **broadcast**.

Cold & Watch Wallets both break these steps into multiple parts allowing for increased security. Below is a breakdown of wallet type by feature:

| Wallet Type  | Network | Key Storage | Create Txs | Sign Txs | Broadcast Txs |
|--------------|---------|-------------|------------|----------|---------------|
| Hot Wallet   | Online  | Encrypted   | Yes        | Yes      | Yes           |
| Watch Wallet | Online  | NONE        | Yes        | NO       | Yes           |
| Cold Wallet  | NONE    | Encrypted   | NO         | Yes      | NO            |

There are a number of different configurations these new wallet modes can be set up in. The next few sections of this article will outline the workflow for using a Cold & Watch wallet.

## Hardware Configurations

While a Cold Wallet is arguably on par with a hardware wallet in terms of security, it is more of a manual process and requires additional setup.

### Dual device setup

To securely use a Cold/Watch wallet combo, optimally you will need 2 computers. One computer to run the Cold Wallet, and another to run the Watch Wallet.

- **Cold Wallet**: A computer that once the private key is imported, is never again connected to any network/internet. The Cold wallet keeps your keys secure from hackers by never allowing them access. Physical security is still a concern, but removing the persistent online threat is a huge step towards securing an account.
- **Watch Wallet**: A computer that is connected to the internet/blockchain and never has access to your private keys. If compromised by an attacker, this machine contains no private keys to steal.

The way this can be setup varies from person to person based on the hardware they have available. Here are few examples of what others typically use for devices:

- **Cold Wallet Hardware**: An old laptop, a Raspberry Pi, a mini-PC or an old desktop. Any computer will work well, the key is just to never allow it access to connect to the internet and insure anything you copy to/from the machine is not infected with Malware.
- **Watch Wallet Hardware**: Your primary computer, a low security environment.

**Note**: Always keep multiple backup copies of your private keys offline in secure places. Don't depend on a single hardware device to store your keys forwever. Hardware fails.

### Alternative setups

While a Cold Wallet mode is offered via the GUI in `eos-voter`, there are a number of other ways these new modes can be utilized even without using `eos-voter` as the cold wallet. The transaction creation, signing, and broadcast steps are all compatible with other EOS related tools that offer similar functionality.

For example, one could use...

- `eos-voter` Watch Wallet + `cleos`. Create unsigned transactions from the `eos-voter` GUI interface, sign them on an offline computer with `cleos`, then broadcast them with `eos-voter`.
- `eos-voter` Watch Wallet + offline HTML signing application. Create unsigned transactions from the `eos-voter` GUI interface, sign them on an offline computer with one of the many offline signing apps, then broadcast them with `eos-voter`.

---

## Using `eos-voter` in Watch and Cold wallet modes

Once you have decided on your hardware setup, install `eos-voter` on the independent devices as you normally would, then follow the setup process to configure each device. The next 3 portions of this post will walk through the various steps involved in the setup with animated gifs illustrating the process.

### Setting up a Watch Wallet and creating an unsigned transaction

Setting up a Watch Wallet is very similar to setting up a Hot Wallet, except you don't enter the private key and wallet password. The below animation shows:

1. The entry of a server to connect to.
2. The entry of an account name.
3. Disabling Transaction Signing on Step #3 of the import process.
4. Setting up the Watch Wallet.
5. Selecting a few random producers to vote for.
6. Previewing the transaction, and submitting the votes.
7. Prompted with an unsigned transaction, then saving it to the disk (`tx-**-**.json`) with the "Save" button.

At the end of this, an **unsigned transaction file** (as JSON) has been saved to the computers local disk, which will then need to be transferred to the machine running the Cold Wallet.

![setup watch wallet](http://jesta.us/eos/watchwallet.gif)

### Setting up a Cold Wallet to sign the unsigned transaction

The next step is ensuring your cold wallet is offline (from here on out), has `eos-voter` installed, and has access to your private key.

Instead of entering a server to connect to, the user will instead:

1. Click "Setup Cold Wallet" to bypass the server connection.
2. Enter the account name to sign transactions for.
3. Enter the private key for that account to sign transactions with.
4. (Optional) Save/Encrypt the private key with a local wallet password.
5. Load the **unsigned transaction file** (`tx-**-**.json`) from disk.
6. Review the details of the transaction using the information displayed to ensure it's correct.
7. Sign the transaction and save the **signed transaction file** (`signed-**-**.json`) to disk.

When this is completed, a **signed transaction file** (as JSON) has been saved to the disk with a approval signature based on your private key. This file can then be transferred back to the Watch Wallet, while leaving your private key on the cold storage device.

![setup cold wallet](http://jesta.us/eos/coldwallet.gif)

### Use the Watch Wallet to broadcast the signed transaction

The last and final step is to return to the Watch Wallet computer. From the Wallet Tab of the application,

1. Click on the purple "Broadcast Signed Transaction" button.
2. Load the **signed transaction file** (`signed-**-**.json`) from disk.
3. Review the details of the transaction using the information displayed to ensure it's correct.
4. Click "Broadcast Transaction" to send the signed transaction to the EOS network.

At this point you will be prompted with the transaction ID, which you can click on to view the transaction on a block explorer.

![broadcast via watc wallet](http://jesta.us/eos/watchwalletbroadcast.gif)

---

## On the horizon...

Greymass has a number of additional features planned to build a modern wallet experience. These features include:

- Account Transaction History
- Multiple Accounts
- Account Creation
- RAM Market Access
- Premium Name Bidding

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
shasum -b -a 512 linux-eos-voter-0.2.1-i386.deb
e713e624711d2ee3d36a3b8ab9b3bf8ad59be1e4c179c2bb78a3bac5b146b2be32fbf859bfcb5e60ba658e8aca89d026d4856942765e0f44bfe11dcaf0ac33f9 *linux-eos-voter-0.2.1-i386.deb

shasum -b -a 512 linux-eos-voter-0.2.1-amd64.deb
d785502fdf8d31c8b6cea10ef8c64a516621fd92282903fd2cabe4fb0e090f4afcbbf7473ee730e46e6c8dc02c31e850162b2fb4c6ed587f89773bb499238385 *linux-eos-voter-0.2.1-amd64.deb

shasum -b -a 512 linux-eos-voter-0.2.1-arm64.deb
eec1efa387c01a18a7ea6f23936ba22396d67d0706de9d40c171117825d463d216f4d0207ff0902372eb2e46022d5bd588ee214802ba88d64b112847df311777 *linux-eos-voter-0.2.1-arm64.deb

shasum -b -a 512 linux-eos-voter-0.2.1-armv7l.deb
55b97236ac80f1f4565b4d74c33e20d6c35e7fbf8ea12f71c023a1a1a5d99412e0496d95efae61dbfb66a4880f2a09940754d653647608cc0d832de271e2d61e *linux-eos-voter-0.2.1-armv7l.deb

shasum -b -a 512 linux-eos-voter-0.2.1-amd64.snap
3c2cc744eb4c54be508f95cf89ec4b4c05ba81c3d05e15f7689df5d69fa2b8a607a6abcd5934a2f34202342b5bfa052a545ec252822a292e9c160094424182ad *linux-eos-voter-0.2.1-amd64.snap

shasum -b -a 512 linux-eos-voter-0.2.1-x86_64.AppImage
e475bf94f6629e5841b57baab10837c3720bb89270db7e53393464305a76b46c9b87d66b8f57c6caacc78291494d65c0f891b59ac0f099eb9b31946b851fff0b *linux-eos-voter-0.2.1-x86_64.AppImage

shasum -b -a 512 mac-eos-voter-0.2.1.zip
5692fe1c8c4860f0dff1a5df444258aefc1959709febcddf025e4387e99aa9554d71c6a9839c9ac15d5e0d9e2e79eaf03265a9060dc20325bb03c3c374fd9783 *mac-eos-voter-0.2.1.zip

shasum -b -a 512 win-eos-voter-0.2.1.exe
a7fa929d14820c5534a2b633146dc223396705c9059130504c450fecd061ad789f0c9338c58946cb0a19dac73045d430e1598c387338390f7c1d589cbd50a475 *win-eos-voter-0.2.1.exe

shasum -b -a 512 mac-eos-voter-0.2.1.dmg
bc3a28ae0354bb677fb5a775f1c4d5d624fae519bad5f49f3d9d70161d2e0c2dd19cef6a24b25ec0e0823bf1aafda7a422a9c2178c3bf784138173818b63d6b6 *mac-eos-voter-0.2.1.dmg
```