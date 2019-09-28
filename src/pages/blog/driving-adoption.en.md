---
title: "Driving Adoption: a look at the internet, the web, and now crypto."
date: "2019-09-02"
author: "Jesta"
---

This post attempts to put thought behind the question of “how do you drive adoption of blockchain”, primarily focused on EOS (and EOSIO), but could also be applied to many other Distributed Ledger Technology (**DLT**) ecosystems. The perspective I hope to bring is that of a 20 year veteran of the web industry and as someone who has been involved in the crypto space for the past 4 years. It’s my belief that DLTs are on a similar trajectory that we saw from the web, and that hopefully we can apply some of that knowledge to help accelerate adoption within this new industry.

## Internet adoption was driven by the invention of the Web

In the early to mid 1990s, the internet was a much different place and the average person had no reason to use it. This wasn't due to the lack of promise the internet held, but rather due to the fact that it was largely inaccessible to the public and remained a playground for power users. It wasn't until the creation of the web and web-browser that the average person had a desire to use the internet, since this combination of advancements suddenly allowed them to easy access a vast network filled with consumable data.

Even at this stage of the internet, web 1.0 only created a trickle of adoption, and real adoption wouldn't happen until well into the next decade with what is known as web 2.0. This evolution took years of research and development, massive amounts of both failed and successful experiments, and the exploration of new methodologies and standards which finally allowed the internet to morph into something that the average person wanted to use in their everyday life.

Today we see a very similar adoption pattern unfolding within one of the newest pieces of the internet, systems built upon DLT (Distributed Ledger Technology).

### Learning from this history of Adoption

The history of the web may be able to provide insights to help understand DLTs future, especially if you believe that they will become as integral to the internet as the web has itself. DLTs, much like the web, will likely have to go through these same types of growing pains in order to achieve the same levels of adoption.

Luckily for DLTs (like EOS), similarities exist in the challenges faced by these two innovations, and it's very likely that the lessons learned from years of developing the web can be applied to help DLTs overcome these hurdles much faster.

This post will dive into three major topics related to the history of the internet/web, and how a DLT could improve its rate of adoption with steady improvements to:

- Onboarding
- Open Standards
- Education

Each of these topics have already had extensive research and development poured into them in order to bring the web to the masses, much of which can be adopted and specifically tailored to work with new DLT technologies and advancements. _This list is not meant to be all inclusive_ and it’s very likely that plenty more valuable topics exist which can also provide new insights.

### Onboarding

The term onboarding refers to the process of bringing a new person into the existing system and getting them completely setup to use it. Onboarding, both for the web and DLTs, begins at account creation. In the early days of the internet, ISPs were one of the major driving forces onboarding new internet users. ISPs took on this responsibility, covered the upfront costs, then packaged it for resale to their new customers. They were incentivized to foster adoption through new subscription fees of a new business model.

EOS doesn't have the same incentive/business model, since connectivity to the chain is open and the data is free, but it still requires an upfront cost to create an account to use it. Very few businesses are willing to provide the service of account creation today, and many other organizations are unable to do so due to regulations involving DLT-based tokens.

For EOS specifically, this is in part due to the fact that it operates with an "account model" instead of a basic "key pair model" (like Bitcoin). New users must pre-fund the creation of an account, to which their key pairs are attached, in order to exist on the network and begin performing actions. The creation of each account requires a commitment of resources (RAM for EOS) that must be purchased by an already existing account on the network.

In many jurisdictions, this process ends up involving a transfer of property (the EOS/RAM) between two entities, and is likely subject to laws involving money transmission. With this regulatory hurdle in play, and without changing how EOS works, those in the best position to fill this critical role today are **custodial entities** (e.g. exchanges) who are already compliant with local regulations due to the nature of their business.

We need custodial entities to start offering this piece of the onboarding process, somewhat similar to the role that ISPs of the early internet did. Some non-custodial entities can help accomplish this simply by contributing to building out the software/processes - but ultimately it hinges on the willingness of the custodial entities to offer it to their clients. To illustrate how this collaboration could potentially play out, we could see something similar to:

- For **custodial entities (e.g. BPs who are Exchanges)** to contribute to onboarding, they should be focused on the first steps of bringing new account holders into the EOS network. They should create a straightforward path for their clients, starting with any currency they support, that leads all the way through the complete process of account creation on the EOS network.
- For **non-custodial entities (e.g. BPs like Greymass)** to contribute to onboarding, they should be focused on standardizing the process across all custodial entities, creating specifications for custodians to follow, SDKs and software libraries for custodians to use, and user interfaces ready for the handoff as every new token holder moves from being under the care of a custodian to a self-sovereign account on the network.

It’s important that these two types of organizations within the space come together to standardize this process, so that no matter which custodian brings in a new user, and no matter which on-chain user interface the user chooses to use, they'll all provide a similar experience and create a welcoming user experience that shows them the potential of EOS. This experience for users is one of the key barriers to user adoption we face today, and the solution requires precision execution to get it right. If done improperly, EOS may end up in a situation where certain interfaces are required to use certain custodians, and the users will be pigeon-holed into a specific experience much like AOL users were in the early days of the internet.

Speaking for Greymass, a non-custodial entity, we already contribute to projects that push forward the technology needed to make a onboarding processes better, a few of which are:

- [Anchor (a desktop wallet)](https://blog.greymass.com/eos/@greymass/the-future-of-the-greymass-wallet-beta-version-available-now): Allows users without accounts to securely generate key pairs and find an available account name, which can be easily shared through an encoded payload/link.
- [The `setupaccount` Smart Contract](https://github.com/greymass/smart_account_creator): A no-fee smart contract that takes care of account creation with only a simple EOS token transfer when combined with a specially formatted memo.
- [EEP-7 Signing Protocol](https://github.com/eosio-eps/EEPs/blob/master/EEPS/eep-7.md): A protocol for wallet/(d)app communication, which exchanges can use to help craft transactions for users in relation to deposits, withdraws, and account creation.

Greymass is also very open to working with a coalition of other custodial/non-custodial organizations that want to create open standards around these processes and develop a somewhat familiar user experience to any new EOS user. The end user of any ecosystem is what truly gives it value, and every effort should be put forth to make their experience as welcoming as possible.

### Open Standards

In the early days of the web, it was incredibly common for nothing to work properly. Websites existed which only worked with specific browser (sometimes versions), incompatible scripting engines caused crashes and unusable pages, and some widely adopted software pushed on users never really worked well at all (looking at you, Internet Explorer). More and more plugins were developed to add features to this mess (flash?), security holes opened (flash...), and the internet for the most part was an unpleasant experience.

Sound like any DLT projects you've tried to use? It happens in all of them, EOS included.

This sort of situation is common in the beginning stages of new technologies, and is ultimately solved as the technical community starts to standardize how things are done. This allows for a more consistently functional platform and allows innovations that can then improve not only one product, but every product built using these standards.

Standardization was one of the major contributing factors to the mass adoption of the web, as they enabled more rich applications to be created that actually worked regardless of what software was being used to access it. Standards created an ecosystem where:

Any device connected to the internet could offer a similar experience on the web.
Developers no longer had to modify their code specifically to support a segment of their users.
The end users of the system could finally stop worrying about how to access something, and could instead just start using it.

These types of improvements are exactly what DLT-based applications are going to need and the process of standardization has to start today. EOS has the opportunity to help lead the charge on this, and it will be up to **technical-minded organizations** within the ecosystem to make it happen. It’s going to take time and effort, as standards like these for the web require many iterations over long periods of time. It won’t be cheap either, as top talent doesn’t come with a low price tag.

We need standards to be established around all of the technical components that make up the system, including: APIs, wallets, contracts, UIs, communication protocols, explorers, and the DLT stack itself.

Block.one has been a champion in regards to standards over the past year, as they've been continuously experimenting and releasing code offering better solutions to developers than existed before. They have created a number of specifications which are beneficial to developers, which allow them to build more effectively. This is something all technical-minded organizations in the space should also embrace, building in a way to not only solve an issue for yourself, but for everyone else in the future who will encounter the same issue.

Many technical-minded organizations (like Greymass) are already taking this approach and are offering openly available specifications to the community. As Greymass designs new systems and prototypes, we try to take the time to consider “how would someone else use this”, and then build each system accordingly. Some examples of what we have explored so far are:

- [The Light History API](https://blog.greymass.com/eos/@greymass/introducing-light-history-nodes-for-eos): Providing a cost effective way to offer native history API access.
- [EEP-7 Signing Protocol](https://github.com/eosio-eps/EEPs/blob/master/EEPS/eep-7.md): Providing a device agnostic standard for signer/(d)app communication.
- Wallet/Key Backup Format: We are starting to build a standard and interoperable way for users to securely backup/restore their keys between any wallet provider.
- Account Creation Request Codes: Defining these codes and standardizing them across wallets will allow users to more easily create accounts for each other, regardless of which wallet they use.
- Offline Transaction Files: A format that allows an unsigned transaction to be created, which can then be loaded on another device for signing.

Approaching these topics with standards in mind will help developers build more efficiently and reduce the chaos that results when none of the products in an ecosystem play nicely together. Embracing a culture of standard will more likely also help keep developers engaged and using the technology, since they can spend less time fighting with their own code, and end up spending more time building out features that drive adoption of their (d)apps, and ultimately the growth of the entire system.

### Education

Judging by the other two topics covered in this article, you probably already can assume that during the early days of the internet, the majority of people had no idea what the terminology around the internet actually meant. This brings us to the third topic to cover, the general education of users on key concept they need to understand.

People interacting with the web needed to learn a few new things, like what a link was, website addresses, email addresses, and how to securely manage passwords (which 30 years later we might be finally figuring out). This process will be no different when it comes to DLTs and the lead up to their adoption, both for the end user and for the developers entering the space. We have to assume that account names, ricardian contracts, and key pairs are all topics that everyone will need to understand at some basic level.

As much as possible these complexities need to be abstracted away from the end user, but until they are, education on these topics will be key for all early adopters. The point we are at right now one is in which we are "_teaching the teachers_", which is a common stepping stone for any new technology. At this point, those capable of making topics easy to understand (the teachers) are just now themselves figuring out how things work. Only then can they begin actually teaching the world what they need to know.

It will take **all organizations** involved in EOS to make this possible, where we can finally reach the point where the students become the teachers. This is up to all of us, from every corner of the world, to come up with ways to make things easier to understand and reduce any sort of cognitive load that might be placed upon the average person. Writing blog posts, making videos, engaging in social media, one-on-one chats with each other, or developing easy to understand software - until the point we all understand what we need to understand.

Greymass takes pride in the fact that we help teach the world this new technology. Whether it be through educating the account holders that use our end user products, engaging in discussion with other developers on best practices, collaborating with systems administrators on how best to run the chain, or engaging with nearly everyone who reaches out to us on social media - we try, and we need everyone else to try.

## To conclude...

We started writing this document as part of a thought experiment to answer a question in regards to adoption. This question was asked by one of the major EOS proxies, [madeofstarks](https://www.alohaeos.com/vote/proxy/madeofstarks), when in telegram said:

> what do you think is the best way to increase EOS usage?

To wrap a **TLDR** around the answers given above, I present the following answer:

> The best way to increase usage in EOS is by making the onboarding process more accessible, standardizing the best practices we know of in order to make the lives of developers easier, and educate the community in a simple set of knowledge and skills that will help them participate in products using this emerging technology.

Through this document I have tried to illustrate how one technology, the web, was brought to levels of global adoption and how we might be able to gain wisdom from that history.

It’s my hope that we can all contribute in our own ways to adoption, and that in the end we’re able to accomplish something truly incredible. It’s going to take a village though, made up of stakeholders, BPs, exchanges, critics, and other organizations in the space. Everyone will have  to do their part and we’ll need to support the organizations that can make this happen.

So, as a:

**stakeholder**, you need to support Block Producers that drive these initiatives and engage with businesses that also drive adoption.
**block producer**, you need to reinvest a portion of your rewards to contribute towards adoption, based on the proficiencies of your organization.
**custodial entity**, you need to help onboard your clients into the ecosystem itself, since ultimately it will drive adoption and the value of the investment you’re helping foster.
**developer**, you need to help build software and standards that not only solve your own problems, but the problems of future generations.
**content creator**, you need to create content that helps the general public understand how and why things work the way they do by conveying some basic knowledge.

##### Author

My name is Aaron Cox, I also go by jesta, and I’m one of the founding members of Greymass.

Greymass is block producer on various EOSIO networks (including EOS, Wax, and Insights) and is funded purely by the inflation we receive fulfilling this role. To support our work you can vote for our block producer account, `teamgreymass`, which directly impacts the amount of inflation we are allocated. Every vote matters and we truly appreciate the support that has been shown to our organization since the genesis of the EOS blockchain.
