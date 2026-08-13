**Labels:** advanced, enhancement

## Problem

The address field currently accepts literally any non-empty text — there's no sanity check at all, which means obviously-malformed input (e.g. a single character, or text with spaces) is silently accepted.

## Context

This is an **educational tool, not a wallet** — full cryptographic address validation (checksums, bech32 decoding) is explicitly out of scope and would mislead students into thinking this app does more than it does. The goal is a lightweight, forgiving sanity check. Logic lives in [`src/app.js`](../src/app.js).

## Expected behavior

Obviously-malformed input is flagged with a clear, non-blocking inline warning. Legitimate-looking addresses (Bitcoin-style strings, Lightning-style `name@domain.com` addresses) are never falsely rejected.

## Acceptance criteria

- [ ] A basic sanity check runs on the address field (e.g. minimum length, no embedded spaces).
- [ ] Warning is inline and non-blocking (a warning, not a hard error that prevents submission).
- [ ] No false positives against: a plausible BTC-style address, a plausible Lightning address (`name@domain.com`).
- [ ] Garbage/very short input is correctly flagged.
- [ ] CI passes.

## Hints

Resist the urge to implement real Bitcoin address validation — that's a deliberate non-goal. See [`tasks/advanced.md`](../tasks/advanced.md) Issue 7.
