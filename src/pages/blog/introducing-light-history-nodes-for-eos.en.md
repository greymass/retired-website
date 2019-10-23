---
title: 'Introducing Light History Nodes for EOS'
date: "2018-11-29"
author: "Greymass"
---
The state of History API nodes on the EOS network is a growing concern. While we are all exploring long-term solutions, such as our [recent sponsorship of the development of a new History Plugin,](https://medium.com/@cc32d9/eos-history-database-project-82365a0a0cbf) in the interim, problems continue to arise.

Over the past few weeks, the EOS ecosystem has ground to a halt several times due to the lack of these History API nodes. [A few weeks ago, our main History API went offline for a brief period of time, which you can read more about here](https://www.reddit.com/r/eos/comments/9y9i21/greymass_weekly_producer_update_20181118/). Over this previous weekend, we brought our History API node down for approximately two hours while upgrading a switch in our datacenter. During this period of time, applications on the EOS network once again ground to a halt as the only other providers of History API nodes failed under the extreme pressure that they were now bearing. 

Many block producers have been forced to shut down their History API's due to growth and cost concerns. Some examples:

- [In this post here, EOS Asia mentions their discontinuation of their history nodes, while proxying their API traffic to us.](https://medium.com/@eosasia/eos-asias-history-api-announcement-db6e66de97e7) 
- [In this post here, EOS 42 lays out their concerns of the state of History nodes, looking to explore the new, in-development State History Plugin. Notably, this producer also proxied their history requests to us previously.](https://medium.com/@eos42/scalable-full-history-nodes-b4eccf113d57) 

Simply put -- our API nodes have become a lifeboat for the entire EOS network. In an effort to breathe life and continued longevity into applications, we have put major infrastructure effort into maintaining our support for these systems. But with growing requirements, we have been forced to come up with new solutions to the problem.

Over the past few weeks, we have been investigating actual application usage needs, and building a new architecture to support them.

# Understanding Application Needs

We talked to some application developers that use our infrastructure, such as those behind [EOS Lynx](https://eoslynx.com/) -- a leading Mobile wallet, and [bloks.io](https://bloks.io) -- the absolute best (in our opinion at least) block explorer for EOS, as well as our own users of the Greymass 'eos-voter' wallet.

Indeed, many applications have experienced poor user experiences, failed client requests, and even downtime due to the failures in history API nodes.

In our investigation, we noticed that application needs are typically lumped into three categories:

1. Getting account key information (`get_controlled_accounts` and `get_key_accounts`)
2. Getting recent account history (`get_actions`, typically in the range of 1 to 100 latest items)
3. Getting extended, but recent account history (`get_actions` up to a range of 1000 latest items)

A fourth category exists, but is extremely less common: Scraping total account history. 

As a simple way to understand these needs, if you are an average user, using a wallet or block explorer, and looking at your history, you typically only look at the first page or two of your history items. You have some memory of what you did a few weeks ago -- you are mostly concerned with what happened recently.

# A New Architecture Design: Light History

We are proud to announce a new architecture we've been working with for the past few weeks. This design breathes life to the original, deprecated history plugin, bringing it back as a "Light History" plugin, configured to maintain only recent actions and traces. This is known as a "retention policy", and is specified on a per-account basis. For example, you can specify a policy of 100 items, and each account will only be able to retrieve the last 100 items for their account. 

These nodes are much less resource intensive, yet still serve out a lot of valid traffic -- as the majority of API requests fit within a good retention policy. Further, support for this layer will free up the processing power on the few full history nodes that still exist.

Finally, regardless of the retention policy, getting account key information (`get_controlled_accounts` and `get_key_accounts`) is available by default.

## Routing Requests Based on Requirements

While a retention policy can act like a cache, we can determine requests that would not be fillable by the API. Our design intelligently catches anything it knows would be outside of the retention policy and throws an http 416 instead of a traditional `nodeos` http 500.

Using this information, request routing can be set up to forward requests which are unfulfillable locally, towards a full history node or otherwise a node with a larger policy. In this way, our approach sort of acts like an "edge caching layer" found in many traditional web API setups.

# Resource Requirements

While the growth of "super history" has grown to require multiple terabytes of data, a light history with a reasonable retention policy has orders of magnitude less requirements.

As of a few days ago, different retention policies had the following resource requirements:

10 items: Total: 6.7G. Breakdown:
```
703M    /eos/history_index
3.0G    /eos/history
3.1G    /eos/state
```

100 items: Total: 29G. Breakdown:

```
3.9G    /eos/history_index
22G     /eos/history
3.1G    /eos/state
```

1000 items: Total: 71G. Breakdown:

```
11G     /eos/history_index
58G     /eos/history
3.1G    /eos/state
```

# Setup Instructions

You can find the open source branch here:

https://github.com/greymass/eos/tree/hapi-limited

Due to the nature of the changes, requiring some modifications to the `chain` plugin as well as to the `history` plugin, it is recommended to build directly from the branch.

```
git clone https://github.com/greymass/eos.git hapi
cd hapi
git checkout hapi-limited
git submodule update --init --recursive
./eosio_build.sh -s "EOS"
```

You will also need to specify a few new options in the `config.ini`:
 
**Database Storage Location**
 
```
history-dir = 
history-index-dir = 
```

These are set up similar to `data-dir`, and specifies the location of their respective DBs. They can be placed on different disks to distribute IO load.

**Note**: For optimal performance it's recommended that both `history-index-dir` and `data-dir` are placed in a high performance filesystem.
 
**Database Size**
 
```
history-state-db-size-mb = 
history-index-state-db-size-mb = 
```

These are set up similar to `chain-state-db-size-mb` and determines the history size limits.

**History Length**

```
history-per-account = 
```

This determines the retention policy per account. Notably, at this time the policy cannot be changed, and requires a replay to be built.

**Adding the History Plugin**

To add the plugin itself, you will need to add something like this:

```
plugin     = eosio::history_api_plugin
filter-on  = *
filter-out = eosio:onblock:
# ... (other filters as desired)
```

For a full overview of the options explained above, an example is available here:

https://gist.github.com/aaroncox/2d24a6db5b6f330a6c7103dacfe19cc0

## Proxy Layer

In order to direct requests to the appropriate resources, a proxy layer needs to exist in front of nodeos to handling routing. Currently we use nginx across our entire infrastructure, and the configuration we use looks like this: 

```
location / {
  # Required to intercept errors
  proxy_intercept_errors on;
  
  # Directive to force 416 responses upstream
  error_page 416 = @more_history;
  
  # Local Light History API
  proxy_pass http://127.0.0.1:8888;
}

location @more_history {
  # Address of the server to route to if unable to fulfill the request
  proxy_pass http://1.1.1.1:80;
}
```

In this case, we simply catch an error 416 (the light history API explaining that it cannot service the request locally), and forward it to a different node that will hopefully be able to service the request. The destinations could be layered like an onion, offering a larger and larger retention policies before forwarding it to a full history node.

A full example of the nginx configuration can be found here:

https://gist.github.com/aaroncox/0394c457215677d7e6432f9b3a180bc3

# A Note on Proxying

While we have been happy to support the EOS network, it is important that producers are public when they are unable to service requests to their APIs. We have noticed lately that many producers are proxying their requests to our API endpoints. We know who you are. 

We encourage anyone who is doing this to simply be public about such proxying. Privately and quietly offloading your duties to another producer can be disingenuous if the public believes you are the one offering the service.

For example, you can set up your History API to pass the request to our API if you are unable to service it locally, but this should be denoted publicly that your are doing so, and are reliant on Greymass infrastructure.


# Reminder: Support the Block Producers you feel have an impact

Voting matters, and Block Producers depend on your vote to continue sustaining their organizations. We'd encourage everyone to recast their votes every couple weeks at minimum (voting decay is real) and consider voting for the producers that you feel are performant, reliable, trustworthy, and provide the most impact to the overall EOS ecosystem.