---
title: Integrating Fuel using eosjs v20+
date: 2019-12-19
author: Greymass Team
featured: true
---
# Integrating Fuel using eosjs v20+

<figure><img src="https://i.imgur.com/wQFuoY5.png" alt=""></figure>

---

With the [recent release of Fuel](<https://decentium.org/teamgreymass/greymass-fue1>), we figured it was only appropriate to start creating individual posts that cover exactly how to integrate. This post will cover the steps needed to integrate Fuel into an existing application using eosjs v20+.

### Overview

The integration itself isn't complex, and only requires a few steps.

- **Add the **[AuthorityProvider](<https://gist.github.com/aaroncox/102a70a9a6a37a9c2a90b6fabfbc86e7>)** for Fuel into eosjs during initialization**
- **Prepend a **[Specific Action](<https://gist.github.com/aaroncox/59c93b4014ae1afb39890660a02fe777>)** during the creation of a transaction**
- **Pushing the transaction**

<!-- -->

Each of these steps is outlined below in more detail and with the reasoning behind them.

### The Authority Provider

Due to how the `transact` method in eosjs v20+ validates the transaction before submitting, a custom Authority Provider is currently required to allow the transaction to bypass one of the validation checks before submitting.

Source: [https://gist.github.com/aaroncox/102a70a9a6a37a9c2a90b6fabfbc86e7](<https://gist.github.com/aaroncox/102a70a9a6a37a9c2a90b6fabfbc86e7>)

```
// A custom cosigner AuthorityProvider for EOSJS v2
// This provider overrides the checks on all keys,
// allowing a partially signed transaction to be
// broadcast to the API node.

const { convertLegacyPublicKeys } = require('eosjs/dist/eosjs-numeric');

class CosignAuthorityProvider {
  async getRequiredKeys(args) {
    const { transaction } = args;
    // Iterate over the actions and authorizations
    transaction.actions.forEach((action, ti) => {
      action.authorization.forEach((auth, ai) => {
        // If the authorization matches the expected cosigner
        // then remove it from the transaction while checking
        // for what public keys are required
        if (
          auth.actor === 'greymassfuel'
          && auth.permission === 'cosign'
        ) {
          delete transaction.actions[ti].authorization.splice(ai, 1)
        }
      })
    });
    // the rpc below should be an already configured JsonRPC client from eosjs
    return convertLegacyPublicKeys((await rpc.fetch('/v1/chain/get_required_keys', {
      transaction,
      available_keys: args.availableKeys,
    })).required_keys);
  }
}
```

What this code does is iterate over the authorizations for every action within the transaction, and find any mentions of the Fuel permission. When found, it temporarily strips it out of the transaction to continue validating that the required keys exist to perform the transaction.

The user doesn't have these keys - so without this eosjs would return an error upon broadcast stating the user was missing some keys required to complete the transaction.

Once you have this established someplace in your code, all you need to do is pass it into the constructor of the eosjs **Api**, like you would the Rpc, signatureProvider, etc.

```
const rpc = new JsonRpc('https://eos.greymass.com')
const eos = new Api({
  // Pass in new authorityProvider
  authorityProvider: new CosignAuthorityProvider(),
  rpc,
  // ... the rest of your configuration
})
```

### Prepending a Fuel action into each transaction

For every transaction you'd like to have Fuel cosign for, it needs a special action as the first action of the transaction. Let's look at what a typical token transfer within eosjs would look like.

```
const transaction = {
  actions: [{
    authorization: [{
      actor: 'firstuser',
      permission: 'active',
    }],
    account: 'eosio.token',
    name: 'transfer',
    data: {
      from: 'firstuser',
      to: 'seconduser',
      quantity: '1.0000 EOS',
      memo: '',
    }
  }]
}

api.transact(transaction, {
  blocksBehind: 3,
  expireSeconds: 30,
})
```

This is a transaction with a single action, and as is, would be billed to the first authorizer of the first action within the transaction. This would currently be the **firstuser** account since it's the first and only authorization.

To modify this transaction so Fuel covers the resource costs, we would just need to **prepend** a new action into the actions within the transaction. This new action would need to be:

```
{
  authorization: [{
    actor: 'greymassfuel',
    permission: 'cosign',
  }],
  account: 'greymassnoop',
  name: 'noop',
  data: {}  
}
```

This is a **noop** action, which does nothing. It's injected as the **first action **in the transaction, so that **greymassfuel** becomes the first authorizer and assumes the billing cost of the rest of the transaction.

The final code now looks like this:

```
const transaction = {
  actions: [{
    authorization: [{
      actor: 'greymassfuel',
      permission: 'cosign',
    }],
    account: 'greymassnoop',
    name: 'noop',
    data: {}  
  }, {
    authorization: [{
      actor: 'firstuser',
      permission: 'active',
    }],
    account: 'eosio.token',
    name: 'transfer',
    data: {
      from: 'firstuser',
      to: 'seconduser',
      quantity: '1.0000 EOS',
      memo: '',
    }
  }]
}

api.transact(transaction, {
  blocksBehind: 3,
  expireSeconds: 30,
})
```

Two actions, the first for Fuel to cover the resource costs, and the second (and beyond) being the actions the user wishes to perform.

### Pushing the Transaction

The above code will both sign and push the transaction to the API specified, but it's important to note that for Fuel to work, the transaction must be pushed to our API servers to receive a valid signature. Without the additional signature, the transaction would be rejected and the error would state that it's missing the authorization from the **greymassfuel** account.

The code shown in the first section about injecting the authority provider covers this, but does not touch this specifically.

```
const rpc = new JsonRpc('https://eos.greymass.com')
const eos = new Api({
  // Pass in new authorityProvider
  authorityProvider: new CosignAuthorityProvider(),
  rpc,
  // ... the rest of your configuration
})
```

The JsonRPC server itself must be **https://eos.greymass.com **for Fuel transactions to work.

### Additional Steps

While the above covers the integration completely from the signing side, there are a number of other steps that can be done to improve the user experience.

1. **Using Fuel only when required: **one method of using Fuel, which EOSAuthority.com has adopted, is to only attempt to use Fuel for a user when the user doesn't have sufficient resources of their own to complete the transaction. This can be done by intercepting the error returned from the APIs after trying a non-Fuel transaction, and then re-attempting the transaction using Fuel afterwards.
2. **Allow users to toggle Fuel on/off:** another option, which we are doing within our own Anchor wallet, it allow users to turn Fuel on and off at will.
3. **Handling Errors: **our APIs return additional details within errors when a user exceeds their quotas, or if the transaction itself is malformed for some reason. Feel free to appropriate handle them, exactly like you would from eosjs, to let the end user know exactly what went wrong in their transactions.

<!-- -->

### More Examples

We have published two repositories with examples on Github which can provide more insight into how to integrate Fuel.

1. Using eosjs: [https://github.com/greymass/greymassfuel-eosjs-demos](<https://github.com/greymass/greymassfuel-eosjs-demos>)
2. Using Transit: [https://github.com/greymass/greymassfuel-transit-demo](<https://github.com/greymass/greymassfuel-transit-demo>)

<!-- -->

Questions? Feel free to reach out to us in our new [Fuel telegram channel](<https://t.me/greymassfuel>).

