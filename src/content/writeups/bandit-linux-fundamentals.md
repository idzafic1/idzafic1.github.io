---
title: "Bandit Levels 0 to 5: SSH & Linux Fundamentals"
platform: "OverTheWire Bandit"
level: "Levels 0-5"
date: 2024-10-01
tags: ["Linux", "SSH", "Bash", "File Permissions", "Security"]
summary: "Notes on command-line security basics, hidden files, file permissions, and decoding data."
---

Passwords and flags are intentionally omitted. This note focuses on concepts, tooling, and analytical methodology.

## Objective

Connect to the challenge target via SSH, investigate file hierarchies, identify hidden artifacts, and navigate restricted file permissions using native POSIX utilities.

## Methodology & Commands Used

1. **Remote connection:** Establish secure shell sessions on the challenge port.
2. **Directory reconnaissance:** Inspect directory contents and metadata to identify hidden artifacts.
3. **Stream inspection and decoding:** Read files safely and decode obfuscated data when required by the challenge.

## Key Learnings

- Understanding POSIX file ownership and permission bits.
- Handling special characters in command-line arguments safely.
- Recognizing binary versus human-readable file types.