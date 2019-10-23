---
title: 'Greymass Infrastructure'
date: "2018-05-15"
author: "Greymass"
---
![](http://greymass.com/logo.png)

---

In this post, we want to detail out the current state of our hardware and infrastructure that we will be launching Greymass with, as well as our future expansion and scaling plans as we move forward.

# Current Infrastructure

Our current infrastructure for Block Production consists of the following main servers:

| Type     | Located | Cores | Core Type | RAM  | Network | Style |
|----------|------|-----------|-----------|----------|-------------|-------|
| Primary  | Vancouver,  Canada | 60&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    | E7-4870   | 1.5 TB&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  | Fiber&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   | Bare Metal |
| Backup   | Michigan, USA     | 40    | Xeon 5115 | 1.5 TB | Fiber   | Bare Metal |
| Tertiary | Kansas, USA       | 32    | E5-2670   | 96 GB  | Fiber   | Bare Metal |

In addition to the above, we have a Private Cloud (owned, colocated) 3-host kubernetes cluster for research and development.

Finally, server migration is also being established in Michigan, United States in a T3 data center. We will explain this further in our next section.

# Infrastructure Plans

With the ultimate goal of redundancy, our strategy is to distribute our infrastructure globally. An event in one country/region should not have an impact on our ability to produce blocks and help in the propagation of the network.

The initial hardware being allocated towards block production and other essential services has been pulled from our personal/existing resources. These assets are a mixture of privately owned bare metal hardware, dedicated rentals, and some secondary services running on cloud hosts. 

We have already begun in the creation of our next generation environment to provide a more enterprise-grade data-center solution. Our first lease was recently signed with a prominent T3 data center, providing us a full rack worth of server space, redundant power, and connectivity with over a dozen independent providers. Additional leasing options will be explored as time progresses to help decentralize our assets while still providing the security provided by owning your own resources.

The process of acquiring our new hardware for data center #1 is also progressing nicely, which will form our new infrastructure backbone as we scale past June 3rd. Approximately $20k USD has been invested in new hardware (2x servers + network + power), which is configured and will soon be deployed, and another $70k USD (2x high-end servers + SAN) is expected to be following shortly after. 

Ultimately, future acquisition of hardware and data-centers that we establish will depend on our success as an organization. 


# Testnet Presence

Both @jesta and @anyx have launched servers on the latest community testnet, on the servers that will form our primary and backup. Our telegram usernames are `jestagram` and `any_x` respectively.

For the latest community testnet, you can find our nodes at:
anyx.io
eos.jesta.us