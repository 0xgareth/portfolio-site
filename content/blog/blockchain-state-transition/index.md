---
title: "Blockchain is a state machine"
date: "2022-02-07T22:40:32.169Z"
description: "Notes on understanding blockchain to be a rules-based state transition system."
minread: 3
type: blog
tags: 
  - programming
---

This is the first of a few posts in which I intend to distill my learning of blockchain development. I figured this activity will help me to contextualise concepts, and I find the process of explaining helps to cement understanding and identify gaps.

This is not intended to be a resource that can be read to garner a complete understanding of blockchain, it is simply a record of my reading/exploration.

### What is blockchain

To put it simply, blockchain is a type of shared database, where information is held in blocks. Each new block of information that’s created is added to the previous one - hence the name blockchain (chain of blocks).

The technical definition of blockchain is “a peer-to-peer, distributed ledger that is cryptographically secure, append-only, immutable, and updateable only via consensus or agreement among peers”:
- Peer-to-peer - no central controller of the network (or chain), meaning participants talk to each other directly, and make updates without needing a third party to manage/facilitate updates and communication.
- Distributed ledger - a ledger that is shared across the peers in the network, where each peer holds a copy of the ledger
- Cryptographically secure - cryptography is used to secure the ledger against tampering and misuse, doing so by ensuring data integrity and providing data origin authentication
- Append-only - data can only be added to the end of the chain, in time-sequential order. Meaning, historical data is practically impossible to change (infeasible is the correct term, but beyond the scope of this post).
- Updateable via consensus - this important concept gives blockchain the power of decentralisation, meaning no central authority is required to run or manage the network. Instead, updates to the chain (i.e. the creation and appending of a new block) can only be performed if 1. they conform to strict criteria defined by the blockchain protocol and 2. consensus is reached amongst all participants of the network. Consensus is achieved by a variety of consensus algorithms

All of this means that by using blockchain to record or manage communication, data, transactions, etc, we can achieve decentralisation, resulting in no third party controlling the network, whilst also (almost) guaranteeing the integrity of the data by preventing tampering and misuse (e.g. deleting historical records or duplicating transactions), despite the absence of a central authority.

### Blockchain is a state transition system

Understanding that blockchain is a state transition system helped me to grasp the bigger picture. To put it simply, the current state is represented in the most recent block, with each block having a record of all previous blocks. Now for us to make changes to the ledger, we need to transition to the next state (append a new block to the chain). For that to happen, consensus on the new state must be reached amongst participants of the network via the chosen consensus algorithm. If consensus is not reached, the block is ignored/dropped and not added to the chain. The process is a more complex, but that’s how it works at a super high level.

This differs from typical systems, where state and data are managed by a central authority. Although strict rules can be introduced to limit how the state can be changed, the central authority ultimately has the power to control, remove, and modify the current, and any historical states.