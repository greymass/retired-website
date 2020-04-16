---
title: "Greymass Fuel: a turn-key solution to cover the resource costs of app users"
date: 2019-12-12
author: Greymass Team
description: ""
image: "https://jesta.us/images/greymassfuel-logo.png"
featured: true
---
# Greymass Fuel: a turn-key solution to cover the resource costs of app users

Just about a month ago [on Twitter](<https://twitter.com/greymass/status/1194348555684593664>) we started talking about a new product we are calling “Fuel”. Today the project is in a stable state and we are excited to start talking about it in a more formal capacity.

Before we get lost in the details of this article, if you’d like to contact us you can do so by joining our [new Fuel Telegram channel](<https://t.me/greymassfuel>), reaching out to us [on Twitter](<https://twitter.com/greymass>), or sending an email to [team@greymass.com](<mailto:team@greymass.com>).

---

<figure><img src="https://jesta.us/images/greymassfuel-horizontal.png" alt=""><figcaption>Fuel by Greymass</figcaption></figure>

---

### What is Fuel?

Fuel is a product developed by [Greymass](<https://greymass.com/>) with the goal of being a turn key solution for application developers involved in the EOSIO ecosystem who wish to cover the resource costs (NET/CPU) of their end users.

The integration into an existing EOSIO application is simple and straight forward, so much so that we’ll list it out to start with:

- **Add the **[AuthorityProvider](<https://gist.github.com/aaroncox/102a70a9a6a37a9c2a90b6fabfbc86e7>)** for Fuel into eosjs v20+**: This special Authority Provider must be included with eosjs to submit the partially signed transaction and get a proper response (this requirement will soon be removed).
- **Prepend a **[Specific Action](<https://gist.github.com/aaroncox/59c93b4014ae1afb39890660a02fe777>)** to any transaction**: The first action of any transaction must match this `greymassnoop:noop` action authorized by `greymassfuel@cosign`.
- **Have the end user sign the transaction**: Use Anchor, Scatter, or any other wallet to create the signature for the end user.
- **Push the partially signed transaction**: Push this transaction just like you normally would to the our specialized API servers, and await the response.

<!-- -->

That’s all that is required.

No additional server/infrastructure need to be setup by the developers to get running. Immediately they will be able to use Fuel to cover the resource cost of their users. This is due to the fact that the Greymass API infrastructure handles everything required for the entire process to take place while still supporting all normal EOSIO functions.

**Beyond apps and their end users**

As it turns out, Fuel is also flexible enough to handle a lot more than its original purpose, and is also capable of:

- Allowing any account to deposit funds and tap into our on-resource-use billing system as an alternative to REX.
- Allowing any account to include a “transaction fee” in any transaction, which then will use Fuel to cover the resource costs.

<!-- -->

To take advantage of any of these features, Fuel must be integrated into the products and platforms you use. It is our plan to integrate these features into the products we develop, like Anchor, and we look forward to working with anyone else interested in integrating these features into their product(s).

### Using Fuel

Fuel can be used within applications today using a variety of different options:

- **Free Quotas**: If you operate an application that requires infrequent use from your users, you are free to tap into the “Free Quota” provided to all accounts through Fuel. Simply integrate it into your application and it’ll access the shared resource pool to provide **5*****ms***** CPU + 5*****kb***** NET** (subject to change) per account, per day, for your end users. We would only ask that you provide some branding and a link within your project for Fuel to help us raise awareness of our product.
- **Leasing from Fuel**: Should your application need to cover more than just a transaction or two a day, you can pay us directly for additional resources. This additional CPU/NET will be billed on a usage basis and deducted in real time from a credit balance you maintain with the service. You can specify specific accounts, contracts, actions, and quotas for how these resources should be used.
- **BYOR** (*Bring your own Resources*): If you already have adequate network resources and just need the infrastructure, we can also offer our services at a set monthly/yearly rate. You retain full control of these tokens and the associated voting rights and would just need to delegate rights to the CPU/NET resources or follow instructions we provide on how to create a fuel specific account. You can also specify specific accounts, contracts, actions, and quotas for how these resources should be used. You provide the network resources, we’ll provide the infrastructure and code.
- **Transaction Fees**: If you just want to perform transactions without the need of having resources or rentals, you can provide a transaction fee along with your transaction to have Fuel cover the costs for you. This is great for situations where you don’t want to stake and manage your own resources, and don’t mind instead paying a fee for usage. This feature will need to be integrated into your wallet provider or each application for you to take advantage of it.

<!-- -->

Each of these ways to utilize our platform fits the needs of different users interacting with different products. We are happy to have a conversation to help you figure out what is best for your needs.

### The Costs

Fuel works currently off of a **per-millisecond** billing system based on the actual usage ultimately reported by the block producers. Our system follows the lifecycle of a transaction, estimating its cost before submission, recording the response during submission, and ultimately confirming the cost after the transaction becomes irreversible.

These end result of these costs can be verified on-chain by analyzing each matching transaction and the receipt of its costs. We also provide a [special set of API endpoints](<https://gist.github.com/aaroncox/4a6d21814db878dc3acc3435d3e98e95>) in which you can query this data directly from our servers.

As of today, we currently are offering the following rates for **EOS**:

- **Leasing from Fuel**: 0.0035 EOS per MS.
- **Transaction Fee Rate**: 0.0050 EOS per MS.
- **BYOR**: A flat rate of 50 EOS/month.

<!-- -->

The rates above were based off a multiplier against the current REX rates with a premium added for the additional value our platform provides.

These rates are subject to change as we are still in the very early phases of developing the overall business model. We encourage feedback on this cost structure as we move forward, as this is uncharted territory and we may be the first to offer a per-millisecond billing structure to compete with REX.

### Signing Up

**For Users/Apps who want to rent infrastructure/resources:**

At this early stage, most of the features within Fuel are a manual process and will require you to work with our team to get completely setup. We are developing automated systems to optimize this experience, but wanted to get the product out first for those interested in becoming early adopters.

We’d encourage you to reach out to us by joining our [new Fuel Telegram channel](<https://t.me/greymassfuel>), reaching out to us [on Twitter](<https://twitter.com/greymass>), or sending an email to [team@greymass.com](<mailto:team@greymass.com>).

**For Token Holders who are interested in leasing resources:**

If you have at minimum 100,000 EOS and are interested in leasing your resources through our platform, we are interested in discussing the options with you. Our goal is to be able to provide a competitive APR to that of REX with similar benefits.

For this initial round we are looking to create bespoke deals with large token holders, however in the long term we’d like to open this market up to anyone with a much lower minimum balance. This will come about as soon as we automate the process and it no longer requires us to manually coordinate these agreements.

### Additional EOSIO Blockchains

We are open to expanding Fuel to other EOSIO blockchains. The EOS blockchain was just a logical first choice to begin with due to its size, our existing infrastructure, and the current resource situation on the network.

For other EOSIO-based blockchains, depending on the size of the network, we will have to expand our infrastructure in order to support its deployment. We will assess additional blockchains as they are brought to our attention and the explore whatever opportunities are opportunities available. Feel free to reach out.

### Explanation: The Economic Model

To begin with we have developed a very simple economic model, which is similar to REX in many ways, yet drastically different in others. This model is subject to change as we are still exploring all the various configurations possible.

This model can best be illustrated as such:

---

<figure><img src="https://jesta.us/images/fueleconomy.jpg" alt=""><figcaption>The economic model of Fuel</figcaption></figure>

---

The Fuel service acts as the hub in this model, in which:

- **Token Holders** who are seeking rewards can delegate resources to Fuel for a portion of the revenue the service generates.
- **Apps / Users** who are seeking resources can pay for the service to cover resource costs of their transactions and optionally that of their users.

<!-- -->

This is very similar to the model which REX operates under, where the two parties involved are only dealing in **resource usage rights**. In both REX and Fuel:

- **Lenders**: Retain full voting rights of their tokens, while sacrificing resource rights (CPU/NET) of those tokens in exchange for rewards.
- **Renters**: Gain resource rights (CPU/NET) of leased tokens by paying a cost, gaining no voting rights from those tokens.

<!-- -->

There are however some distinct differences between REX and fuel, which include:

1. The way transactions are billed: <br>

\- REX requires the resources to be covered by the account performing the transaction. <br>

\- Fuel natively allows a 3rd party to cover the resources for the transaction.
2. The service location differs:<br>

\- REX is a decentralized service operating on EOSIO blockchains.<br>

\- Fuel is a centralized (publicly auditable on-chain) service operated by Greymass.
3. For renters, the terms of the lease:<br>

\- REX offers 30-day fixed terms in a “use it or lose it” situation.<br>

\- Fuel offers pay-as-you-go terms to prevent the waste of excess resources.
4. For renters, guaranteed resource availability:<br>

\- REX guarantees the resources you have leased are available 24/7 for your usage.<br>

\- Fuel does not guarantee resources are available 24/7 for your usage.
5. For renters, resource usage spikes:<br>

\- REX grants you a maximum amount of resources you can use each day.<br>

\- Fuel grants you resources which can be on-demand.
6. For lenders, minimum maturation terms:<br>

\- REX has a maturation of 4-days to withdraw and a potential lock up period of up to 30-days (if the tokens in an active rental situation).<br>

\- Fuel has a maturation of 7-days to earn rewards, no maturation for withdraw, and no lock up period. Tokens can be withdrawn at any time, and only tokens that have been delegated for 7-days will be rewarded.

<!-- -->

Each application has differing needs, and so each application will have to make a determination as to which service is best suited for their purposes.

**An Analogy**

To put this in perspective, let's create an analogy to something a bit less abstract than network resources: **car rentals**. Imagine a scenario where there was one car rental agency in town and these were their terms:

- You can rent a car but it has to be for 30 days at a time.
- To rent a car you must full pay the 30 days fee in advance.
- The overall cost is based on your highest single usage day.

<!-- -->

While these conditions are ideal for circumstances, they do not really work well for someone on a week long trip or someone who just needs the car for a day. The above terms are essentially how REX operates.

Fuel operates outside of this system and acts more like a ride sharing app, where the consumer is no longer bound to a long term lease and could instead rent a car for an afternoon or a day, only paying for what they use.

For some people, it may be more economical to rent a car for 30 days (like REX), but not every situation warrants a long rental and instead would make more sense in a short term agreement (like Fuel).

Both can coexist and play off each other quite nicely.

**Fuel usage in the wild…**

Fuel has a built-in free resource model which allows any account to use 5ms of CPU per day (subject to change). A handful of apps have already integrated Fuel to help cover the resource costs of their users:

- [EOSAuthority Wallet](<https://eosauthority.com/>) detects when an account has depleted their own resources, and then attempts to use Fuel to complete the transaction.
- [EOS Nation Proxy](<https://proxy.eosnation.io/>) uses Fuel to cover the sign-up action when joining their proxy.
- [BOID](<https://app.boid.com/>) uses Fuel to cover some resource reoccurring costs for their users.
- [Decentium](<https://decentium.org/decentiumcrw/fuel-for-youb>) has integrated Fuel so the bloggers of the platform always have enough resources to post at least once a day.

<!-- -->

### Contact us

We are interested in talking about Fuel, and would encourage you to join in the discussion by joining our [new Fuel Telegram channel](<https://t.me/greymassfuel>), reaching out to us [on Twitter](<https://twitter.com/greymass>), or sending an email to [team@greymass.com](<mailto:team@greymass.com>).

Thank you for your interest and we look forward to hearing from you!

