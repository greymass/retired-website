---
title: 'eos-voter 0.3.0 - Multiple Accounts, RAM, Account History and Proxy Voting'
date: "2018-07-07"
author: "Greymass"
---
This release features a number of "quality of life" improvements in addition to a few core EOS protocol integrations that have been in high demand. These new features include:

- Multiple Accounts: Import multiple accounts and swap between them easily. Hot wallets can import Hot/Watch wallets, Watch Wallets can import Watch wallets, and Cold Wallets an import more Cold wallets. This feature is available under "Tools -> Manage Wallets". Accounts can be switched from this section as well as from a new dropdown in the upper left.
- Account History: Each wallets history is now displayed on the wallet panel under the "History" section. Many different kinds of actions are formatted to show relevant details, and any unhandled transaction type will display it's full action JSON. Clicking on the transaction ID will open a link to a block explorer to further confirm those details.
- RAM Buy/Sell: A "Buy RAM" and "Sell RAM" button has been added to the wallet allowing easy access to this resource. Prices are estimated (though may change) on the confirmation screen presented before submitting the action. A notice of the 0.5% fee and the ricardian contract are both also displayed prominently.
- Set a Voting Proxy: Support for the producer proxy voting system. Easily set another account as your proxy to represent you, and the voting interface will load the votes of the representative of your choosing (read-only).
- Register as a voting Proxy: Register an account as a voting proxy, which will allow other accounts to set that account as their proxy.
- Additional Tools: The blockchain global properties and chain state files are now visible from within the tools section.

To date the `eos-voter` tool has seen over 28,000 downloads in one of the largest efforts to help connect EOS stakeholders with the EOS mainnet!

---

## What is `eos-voter`?

`eos-voter` is a desktop wallet application build for the EOS blockchain, which can be downloaded and run on your computer. `eos-voter` is free to use and open-source, and is designed to be a way to help secure your account while using the EOS blockchain. When using `eos-voter`, your private keys never leave the application as transactions are signed locally.

(`eos-voter` is a temporary application name and we are in the process of rebranding to a much better name!)

Previous updates for more information:

- [2018/06/25 - eos-voter 0.2.1 - Custom Tokens + Cold/Watch Wallets](https://steemit.com/eos/@greymass/eos-voter-0-2-1-custom-tokens-cold-watch-wallets)
- [2018/06/17 - eos-voter 0.1.6 - A better welcome experience + tutorial](https://steemit.com/eos/@greymass/eos-voter-0-1-6-a-better-welcome-experience-tutorial)
- [2018/06/02 - Annoucing eos-voter, a block producer voting tool and light wallet](https://steemit.com/eos/@greymass/announcing-eos-voter-an-eos-block-producer-voting-tool-and-light-wallet)

### Greymass Initiative

`eos-voter` is an application being developed and led by members of the @greymass team. Greymass is an EOS block producer candidate (`teamgreymass`) on the EOS blockchain. For more information about Greymass, please visit our website ([greymass.com](https://greymass.com)) or read our [Steemit Blog](https://steemit.com/@greymass).

---

## Download `eos-voter` by Greymass

As of 2018/07/07, `v0.3.0` is the most recent release.

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

# Multiple Accounts

One of the most requested features we've fielded questions about is multiple accounts. Today we're proud to release our 0.3.0 with support for an unlimited number of individually encrypted wallets and quick access to swap between them. 

We have added a new section to the "Tools" area of the application that allows you to manage all of your individual wallets. From this interface you can import new accounts, swap accounts, or remove existing accounts.

![screenshot 20](http://jesta.us/eos/eosvoter20.png)

## Wallet Mode Mixing

This system also allows some mixing of different types of wallets, depending on the level of security you require from these accounts. This mixing is as follows:

- A **Hot Wallet** can import any number of additional Hot and Watch wallets. The additional watch wallets proved to be the perfect solution for keeping an eye on accounts you don't want to actually import. Cold wallets may not be imported (they are meant to be offline).
- A **Watch Wallet** can import any number of additional Watch wallets, but cannot import any Hot/Cold wallets. This is because the watch wallet is not encrypted and is designed to have relaxed security.
- A **Cold Wallet** can import any number of additional Cold Wallets, but since it's offline, will not support Hot or Watch wallets.

### Quickly Switching Accounts

Switching accounts can be done from anywhere within the application using the dropdown in the menu bar. 

The icon next to each account represents the type of account it is:

- Green ID Card: Hot Wallet (can create + sign + broadcast)
- Orange Eye: Watch Wallet (can create + broadcast)
- Blue Snowflake: Cold Wallet (can sign)

Switching to a watch wallet is immediate, and switching to a Cold or Hot wallet will require the local wallet password to be re-entered in order to decrypt and swap wallets.

![screenshot quick switch](http://jesta.us/eos/quickswitch.gif)

### Importing an Account

To illustrate how simple the process of importing a new Hot Wallet is, we've created a short animated gif showing the usage of a private key to import a new account, and then the process to remove it. 

![screenshot adding wallet](http://jesta.us/eos/addingwallet.gif)

# Account History

Within the wallet section we have added a full history of the actions on each account. 

Many of these actions are formatted and displayed in a context-specific statement briefly explaining what the action performed was. Any action we haven't recognized within the application will be rendered as full JSON.

Each entry also displays a partial transaction ID on the right most column, which if clicked, launches your web browser to a block explorer to view the precise details.

**Note on History Items**: Depending on the API node you've chosen to connect with, your account history may vary. Some API nodes choose to filter account history on specific conditions, which will cause some actions to not be displayed. You can always verify your account history by viewing the account on a block explorer of your choosing (that supports account history).

![screenshot 23](http://jesta.us/eos/eosvoter23.png)

# RAM Buy/Sell

The wallet actions section has 2 new buttons, one for Buying RAM and one for Selling. Using these controls will allow you to use your liquid EOS to trade RAM using the built-in market that uses the Bancor algorithm.

![screenshot 17](http://jesta.us/eos/eosvoter17.png)

Enter the amount (in kBs) you wish to purchase and click the button to continue. 

**Note**: We will likely be changing this to BYTES in the next minor release. Trying to use a larger notation is likely more confusion than is required by the UI. 

![screenshot 18](http://jesta.us/eos/eosvoter18.png)

The confirmation screen will display an **estimated** cost for this purchase/sale and the values of your account after the action is completed. The prices fluctuate due to it's use of the Bancor algorithm, so once the action is complete the price paid may have changed slightly.

![screenshot 19](http://jesta.us/eos/eosvoter19.png)

# Proxy Voting

The Producers Voting section has a new option that allows you to proxy your votes to another account. The weight of the staked EOS on your account will then be applied to the votes cast by the proxy you've selected.

**Note**: By setting a proxy voter for your account, any existing votes you may have cast will be cleared/removed. 

Click the blue "Set Voter Proxy" button to get started.

![screenshot 24](http://jesta.us/eos/eosvoter24.png)

The prompt will ask for the account name of the proxy you'd like to use. 

**Note**: The account must have previously run the "Register Proxy" command (`regproxy`) to be an eligible proxy. Instructions on that below.

![screenshot 25](http://jesta.us/eos/eosvoter25.png)

## Viewing the votes of your Proxy

Once a proxy account is set, if you view the "Producer Voting" section of the app, the votes that your proxy have cast will be displayed in a read-only mode. This overview will allow you to easily keep tabs on the account you are proxied to, ensuring that your staked EOS is being used to represent your values.

![screenshot 26](http://jesta.us/eos/eosvoter26.png)

# Registering as a Proxy

For accounts that wish to be a proxy, we have added a simple interface within the Tools section of the application that allows the toggling of this mode.

**Note**: This flag is required on an account before any other accounts is allowed to proxy to it.

![screenshot 21](http://jesta.us/eos/eosvoter21.png)

After registered, the UI changes to display an Unregister command, should you choose to no longer allow other accounts to proxy it.

![screenshot 22](http://jesta.us/eos/eosvoter22.png)

---

## On the horizon...

Greymass has a number of additional features planned to build a modern wallet experience. A rough roadmap of the upcoming features includes:

- 0.4.0: Account Creation
- 0.5.0: Account Permissions
- 0.6.0: Multisig

As an open source project, we encourage all others to help in these efforts!

### Supporting Greymass

Greymass is a self-funded organization that accepts no outside funding. There are currently three ways you can help support Greymass in an effort to bring tools like `eos-voter` to life:

- Contribute to the code - [https://github.com/greymass/eos-voter](https://github.com/greymass/eos-voter)
- Contribute to the translations - [https://crowdin.com/project/eos-voter](https://crowdin.com/project/eos-voter)
- Vote for `teamgreymass` as in your Block Producer selections.

---

## Download Signatures

With each release we will be publishing shasum (512) signatures so you can ensure the integrity of the files you are downloading. This footer on the post serves as immutable reference to the shasum data to validate these files.

```
shasum -b -a 512 linux-eos-voter-0.3.0-i386.deb
383d2e030ee927c76c54eeb6c6ce13913a0e39cb97a2ba297af15fab45913f96545b2025b986115d01a8ecab14e964749370990789e68ccdb19a6c5210933f5d *linux-eos-voter-0.3.0-i386.deb

shasum -b -a 512 linux-eos-voter-0.3.0-amd64.deb
1228f22a4edbfe689a30780b9f018bbe1de81e58384350f74039e56d10ec65cca747f7c91971df43d1fe92365fc7f38ebeceafb3b2bee750c267a021564ab6c0 *linux-eos-voter-0.3.0-amd64.deb

shasum -b -a 512 linux-eos-voter-0.3.0-arm64.deb
fd2786f97971a5a94c1e35ca3a95b6ba8c9d916906ca372e4d705dc7b6cd9f0298921725a6df3e6348cb31efc321bb5578086f8f7171a9af15b6dc0045ae59fd *linux-eos-voter-0.3.0-arm64.deb

shasum -b -a 512 linux-eos-voter-0.3.0-armv7l.deb
21be6be8e70020b2655bdcadaf399a2440d3e4c9988619d8a9d6c81e16151271ad1d5568452a219d02f2e9ff196e79e349f7ec876be0570e424165e3b0cc3c5d *linux-eos-voter-0.3.0-armv7l.deb

shasum -b -a 512 linux-eos-voter-0.3.0-amd64.snap
a8ac848ee23a67ec1749316d1d4fbd81c19525c6a39fc1b22da89676f26d0ceec35689ae3b6feaccec5e6e515466d8b087ede1c057d4b01fb97295faeff80dd4 *linux-eos-voter-0.3.0-amd64.snap

shasum -b -a 512 linux-eos-voter-0.3.0-x86_64.AppImage
e55be02a047054de711bf40d3feb238d12485a7f8f4329c4735ce434205f49ff47e95fa0ed32d42a7ee16bb3db7f8f1602530ecb5ef009331af2d91016ae79d8 *linux-eos-voter-0.3.0-x86_64.AppImage

shasum -b -a 512 eos-voter-0.3.0-mac.zip
19e5c689e51c9eb46037f179ef0d93e99b5c02d20d0d8b96171f13082b17253a2a6c53ad759d55807e8546e18f1fe90ace6b84d7ee98e157ccf5e858c1210f4d *eos-voter-0.3.0-mac.zip

shasum -b -a 512 win-eos-voter-0.3.0.exe
ca143a59ceee7b656254a4ee1c0bb3834ab54fd633a87dc3a4d742a3bec56ce0a0ba4ed4384e2c8571d36075acda6ef4cdf47df4e490efe798b8a95345aa1bd8 *win-eos-voter-0.3.0.exe

shasum -b -a 512 mac-eos-voter-0.3.0.dmg
63a962436a6ad63cc7a054d9ca0efa2c0d5c355f5f7b83161d10d1129be234407f46e7a96bcd8bfd107a8b7b05ccb8f0e95457ac38e3b6060985868d4457fdb7 *mac-eos-voter-0.3.0.dmg
```