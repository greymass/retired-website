---
title: 'An EOS Smart Contract for Block Producer Information'
date: "2018-07-20"
author: "Greymass"
featured: true
---
There is a long road ahead of us on EOS with both developing and enforcing Block Producer standards. However, one improvement that many of us can agree on right now, is that it's time we all started putting our information on-chain, rather than only on our websites.

Currently, most Block Producers are following a standard "bp.json" format ([see here](https://github.com/eosrio/bp-info-standard)), to explain extended information about their candidacy. For example, [you can see ours here](https://greymass.com/bp.json). However, with this information only being on a candidates website, we run the risk of issues such as public defacing, DNS changes, non-verifiability, and more.

The solution to these issues is simple: store this information on-chain, signed by the producer themselves. Doing so brings multiple new benefits as well: we can have dApps parse all block producer candidates' json files, we will have a verifiable history of changes, and finally we allow validators to have a single consistent place to look up all candidates' publicly posted information (rather than scraping individual websites).

In order to help facilitate the transition to storing this information on chain, we have created, purchased RAM for, and deployed a new smart contract `producerjson` that enables this. We now open it for peer review, feedback and suggestions, and if desired -- immediate use.

### See The Contract

The contract code is open source here:
https://github.com/greymass/producerjson

As you will see, the code itself is fairly simple -- it does not attempt to validate the contents of the producer's json at this time. This choice was made in order to allow external validators to be as strict or relaxed as they choose to be when grading a given producers information, as well as allow quick changes to the BP standard format without a contract update.

### Try It Out

Pushing your `bp.json` file on chain is a simple two step process. Just grab your `bp.json` file, and push it to the blockchain with a cleos command like our example:
```
cleos push action producerjson set '{"owner":"teamgreymass", "json": "'`printf %q $(cat bp.json | tr -d "\r")`'"}' -p teamgreymass@active
```
&nbsp;
[Here's the result of that action, on the blockchain.](https://bloks.io/transaction/8fc6206c74cbd6acbf17dfb2177783686f8faffa6b9c87bd30f59ee6646b1708)

As you can see, your information will be published to the chain in the `producerjson` table right away. You can see yours and everyone else's information with one simple command:
```
cleos get table producerjson producerjson producerjson
```
&nbsp;
It takes about 1.5 kB of RAM to store a bp.json, which is not expensive at all -- this is less than creating a new account. Due to it being so cheap and easy, we hope everyone will join us in putting their information on-chain, organized and verifiable for the public to see.


### Future Contract Changes

If this standard takes off, we are happy to convert this contract account into a multi-sig account and allow shared control with other top Block Producers. This would slow down any required changes to the contract, but also ensure the longevity of it.

Any feedback is welcome, and we'd love to see any recommendations on how to modify the contract. Feel free to comment below, or contact us on telegram!

---
---

This project is an effort lead by Team Greymass, a Block Producer candidate for EOS. If you like what we're doing, don't forget to vote for `teamgreymass` on EOS!

![](https://steemitimages.com/0x0/https://greymass.com/logo.png)
