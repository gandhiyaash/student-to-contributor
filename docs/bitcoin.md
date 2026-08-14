# Bitcoin, in About 5 Minutes

You don't need to know anything about Bitcoin to do this workshop. This is just enough context to understand *why* the demo app looks the way it does.

## The mental model

Traditional money moves through a single trusted middleman:

```text
Traditional money

Person
  ↓
Bank
  ↓
Bank database
  ↓
Person
```

The bank keeps the one official record of who has what. You trust the bank to keep it accurate and to let you access your funds.

Bitcoin removes the single middleman and replaces it with a network of independent computers that all agree on one shared record:

```text
Bitcoin

Person
  ↓
Bitcoin network
  ↓
Independent computers
  ↓
Shared transaction history
  ↓
Person
```

**Bitcoin is a system for transferring value over the internet using a network of computers following a shared protocol, rather than relying on one central institution to maintain the ledger.**

That's genuinely the core idea. Everything else (mining, wallets, the Lightning Network) is implementation detail on top of that idea.

## Addresses (and what this app uses as a theme)

A Bitcoin address (or a Lightning address, which looks like an email) is just an identifier you share so someone can send you value — similar in spirit to a bank account number, except anyone can generate one instantly, for free, without asking permission from anyone.

This workshop's Coin Catcher game doesn't use real addresses at all — coins are just the visual theme for something to catch. It's a game exercise, not a wallet, and never touches the real Bitcoin network.

## Why this matters for an open-source workshop

```text
Bitcoin
   ↓
Protocol
   ↓
Software
   ↓
Open source
   ↓
Developers
   ↓
Review
   ↓
Testing
   ↓
Releases
```

Bitcoin itself is defined by a protocol, but that protocol only exists in the real world as open-source software — Bitcoin Core and other implementations. No company owns it. It improves because volunteer and paid developers all over the world propose changes, review each other's code, test relentlessly (money is on the line), and ship releases the same way you're about to practice today: issue → branch → PR → review → merge.

The habits you build in this workshop — small focused PRs, careful review, testing before shipping — are the literal habits that keep a global monetary network running correctly.

## Deliberately not covered here

These are real and important, but out of scope for a 5-minute mental model. Look them up later if curious:

- UTXOs and how balances are actually tracked
- Cryptographic signatures and private keys
- Mining and proof-of-work mechanics
- Lightning Network internals
- Consensus rule details

## Further reading

- [bitcoin.org](https://bitcoin.org) — general, beginner-oriented overview.
- [Mastering Bitcoin (free online book)](https://github.com/bitcoinbook/bitcoinbook) — the standard deep-dive technical reference.

- [Bitcoin Developer Documentation](https://developer.bitcoin.org/) — A practical introduction to Bitcoin's blockchain, transactions, wallets, and other technical concepts.
