---
title: 'Consistency in configuration of public EOS “Full Nodes”'
date: "2018-06-13"
author: "Greymass"
---
![Greymass](https://greymass.com/logo.png)

With the EOS mainnet launch underway, we need to start looking beyond launch at how block producers service the greater community of users and dApp developers. 

One of the ways block producers have pledged to do this is by providing what is commonly known as an "API Endpoint" or a "Full Node". These are publicly available resources deployed to provide access and information about the EOS blockchain. These endpoints are then used by developers to build websites and applications that interact with the core EOS protocols. 

This pledge to support the network is a great initiative, but in order to truly decentralize the network and provide the end-users with the best possible experience, a minimum configuration will have to be established. This document sets out to start the process of discovery on this topic.

## Defining the Full Node

A "full node" in the context of many other blockchains simply means "all the plugins". This is probably what most block producers today would respond to you if you asked how they were planning on deploying their full nodes. This is largely because the demand for access to these EOS resources is very low right now and the ecosystem itself is just getting on its feet. 

Very soon though there will be a flood of requests for different kinds of information to be surfaced through these services. In anticipation of this demand - we propose that **a minimum standard configuration** be put forth that all public node operators should meet to qualify as one of these publicly available servers. 

This standard will not be related to networking or hardware configuration, but a method of configuring the account history plugin.

## Account History

In a system with customizable smart contracts, the scope of something like the account history plugin could grow to be enormous. Block.one saw this coming and gave node operators a tool to deal with this, `--filter-on`, and then stripped the account history plugin bare by default. 

When a system is run with the account history plugin, without any additional configuration, only a very basic set of information is actually indexed and exposed through the APIs. The problem with this is no history of EOS token transfers or any of the system contracts are actually returned. If a user is using a mobile or desktop wallet and connects to one of these unconfigured nodes their entire history will be empty. Even more confusing is the situation where a user switches an app between two different API endpoints and is shown different types of operations.

To prevent these types of situation - a minimum configuration is needed to establish consistency.

## Fundamental system responsibilities

The basis of the configuration listed below makes the assumption that the following contracts are critical to the operation of the network. Each of these contracts should be maintained in full, with full history for every account. There can still be room to blacklist specific bad actors from indexing, but by default accounts should be included.

These contracts are:

- `eosio` - The system contract.
- `eosio.token` - The EOS token contract.
- `eosio.msig` - The multisig contract.
- ... (feel free to propose more)

This configuration will allow all token holders a basic history and access to the internals of what makes EOS tick.

## Relevant nodeos parameters

The following is an example piece of the `config.ini` that a nodeos operator would use to comply with this proposed standard.

---

***Edit/Changes***

- removed `eosio:setabi:` and `eosio:setcode:` per [4068#issuecomment-396800119](https://github.com/EOSIO/eos/issues/4068#issuecomment-396800119)

---

***Draft***

```
# Plugins required
plugin = eosio::chain_plugin
plugin = eosio::chain_api_plugin
plugin = eosio::history_plugin
plugin = eosio::history_api_plugin

# History of EOS token transfers
filter-on = eosio.token:transfer: 

# Creation of tokens
filter-on = eosio.token:issue: 
filter-on = eosio.token:create: 

# History of multisig transactions
filter-on = eosio.msig:propose:
filter-on = eosio.msig:approve:
filter-on = eosio.msig:unapprove:
filter-on = eosio.msig:cancel:
filter-on = eosio.msig:exec:

# System Contract Operations
filter-on = eosio:newaccount:
filter-on = eosio:updateauth:
filter-on = eosio:deleteauth:
filter-on = eosio:linkauth:
filter-on = eosio:unlinkauth:
filter-on = eosio:canceldelay:
filter-on = eosio:onerror:
filter-on = eosio:buyrambytes:
filter-on = eosio:buyram:
filter-on = eosio:sellram:
filter-on = eosio:delegatebw:
filter-on = eosio:undelegatebw:
filter-on = eosio:refund:
filter-on = eosio:regproducer:
filter-on = eosio:setram:
filter-on = eosio:bidname:
filter-on = eosio:unregprod:
filter-on = eosio:regproxy:
filter-on = eosio:voteproducer:
filter-on = eosio:claimrewards:
filter-on = eosio:setpriv:
filter-on = eosio:rmvproducer:
filter-on = eosio:setalimits:
filter-on = eosio:setglimits:
filter-on = eosio:setprods:
filter-on = eosio:reqauth:
filter-on = eosio:setparams:
```

### QoL change to `filter-on`

This configuration is quite verbose, but to help address this we have opened [issue/4068 ](https://github.com/EOSIO/eos/issues/4068) on GitHub as a way to simplify the configuration options involved the `filter-on` parameter.

## Try it

We have this configuration running on our full node available here:

https://eos.greymass.com

Try it out and lookup your account history.

```
./cleos -u https://eos.greymass.com get actions your_account_name
```

You can also look at our block producer account and see the `regproducer` actions we issued when submitting our candidacy.

```
./cleos -u https://eos.greymass.com get actions teamgreymass
```

## Contribute and help formalize

This configuration of the account history plugin is an example of what this standard should eventually become. Arguments could be made for the addition of more contracts or the removal of others - and that conversation needs to be hashed out. We hope that starts now.

We encourage all block producers who plan on supporting the network with full nodes to think about this subject and join the conversation. Consensus must be reached between the block producers to create a seamless and consistent experience across the EOS network.