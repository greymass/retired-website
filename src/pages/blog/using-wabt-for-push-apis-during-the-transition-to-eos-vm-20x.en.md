---
title: "Using WABT for \"push\" APIs during the transition to EOS-VM (2.0.x)"
date: 2020-02-23
author: Greymass Team
featured: true
---
# Using WABT for "push" APIs during the transition to EOS-VM (2.0.x)

Recently - there have been a number of reports of APIs with poor performance, including our own (eos.greymass.com). This is largely in part due to migration process that's currently underway, with Block Producers gradually moving away from the old runtimes (WABT, WAVM, etc) over to the new EOS-VM runtime.

Because of this, we have now entered a transition period where API performance may be strained in odd ways until the upgrade is complete. To the everyday EOS users - please bear with us during this process, and to the API operators, the below may help explain the situation and help resolve issues with transactions being abandoned.

### APIs accepting transactions

During this transition there is a situation which impacts any API that is responsible for accepting transactions through the push calls (`/v1/chain/push_transaction`, etc). If one of these APIs were to upgrade to EOS-VM before the producers, the following scenario could potentially occur:

- A user with 1 EOS staked as CPU signs a transaction to vote for a block producer. 
- This user then submits the signed transaction to an API with EOS-VM enabled.
- The API responds saying the transaction was executed locally.
- The user then looks at their history, only to find the transaction missing as if they had never submitted it in the first place.

<!-- -->

What (we suspect) happened to this transaction is:

- It was accepted by an EOS-VM API, where locally the 1 EOS staked as CPU provided sufficient resources to complete the transaction. 
- The transaction was then relayed from the EOS-VM API to its peers. 
- All of the non EOS-VM peers who received this transaction **reject it** as invalid, since under the previous runtimes (WABT, WAVM, etc) the 1 EOS staked as CPU is an insufficient amount to cover the costs of the transaction.
- The transaction then expires without ever making it into a block.

<!-- -->

API servers responsible for accepting transactions at this point are able to upgrade, but **should not** upgrade to EOS-VM until the vast majority (preferably all) Block Producers are also running EOS-VM. If they do - they risk the above happening to the users submitting to these API endpoints.

### Operating in a mixed mode as a temporary solution

During this transition period, one solution is to run multiple nodes behind a single URL and route traffic accordingly between the two. The requests which involve pushing transactions into the network should be routed to a node running the a legacy runtime (WABT), and all other requests should be routed to a node running the new runtime (EOS-VM).

By routing the push calls into a WABT node, the API itself will attempt to bill the transaction at the legacy speeds, and reject a borderline transaction like in the example above. The transaction won't simply disappear, the user will actually receive an error message stating they have insufficient resources.

To accomplish this, the API endpoint will actually need to use two API servers, one we will call "write" (accepts transactions) and one we will call "read" (to service all other requests).

### The "write" node (WABT)

This server will be responsible only for push transaction calls, such as:

```
/v1/chain/push_transaction
```

The nodeos instance itself should be running one of the legacy runtimes like WABT:

```
wasm-runtime = wabt
```

This configuration will prevent the edge case as described above, as transactions performed by low-resource users will be rejected on the edge (at the API) instead of being mysteriously lost in the P2P network.

### The "read" node (EOS-VM)

This node is where all requests default to, and is running EOS-VM. Within it's configuration, it should specify:

```
wasm-runtime = eos-vm-jit
```

Since without accepting transactions this instance is not responsible for estimating billing, it can gain the benefits of EOS-VM and avoiding this specific issue.

### Routing between the two nodes

The routing between these two nodes shouldn't be difficult to implement, so long as you have some sort of load balancer handling connections. We use nginx for this purpose, and the relevant portion of our configuration now looks something like this:

```
upstream nodeos-read {
  server 127.0.0.1:7777; # path to READ node running EOS-VM
}

upstream nodeos-write {
  server 127.0.0.1:8888; # path to WRITE node running WABT
}

server {
  location / {
    proxy_pass http://nodeos-read;

    location ~* v1/chain/(push_transaction|push_transactions|send_transaction) {
      proxy_pass http://nodeos-write;
    }  
  }
}
```

With this setup, we are now routing any push transaction calls into a nodeos instance running WABT and all other calls to other endpoints running EOS-VM. It covers the 3 primary push calls:

- /v1/chain/push\_transaction
- /v1/chain/push\_transactions
- /v1/chain/send\_transaction

<!-- -->

### After the transition

Once all Block Producers are upgraded to EOS-VM, none of this will be required any longer. The location block from the above example for `push_transaction` can be removed, and the instance of nodeos running WABT will be no longer needed. The API can now push transactions through the EOS-VM enabled instance without concern of this issue.

