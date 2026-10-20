---
title: "AegisVault: Post-Quantum Cryptographic File Vault"
summary: "Desktop application in C#/.NET implementing NIST FIPS 203/204 post-quantum cryptography (ML-KEM-768, ML-DSA-65), AES-256-GCM streaming, and Argon2id KDF."
role: "Security Engineer & Developer"
tech: ["C#", ".NET 10", "WPF", "Caliburn.Micro", "ML-KEM-768", "ML-DSA-65", "AES-256-GCM", "Argon2id"]
repo: "https://github.com/idzafic1/AegisVault-Kriptografija"
order: 3
featured: true
status: "completed"
highlights: [
  "Hybrid PQC architecture: ML-KEM-768 & ML-DSA-65 (NIST FIPS 203/204)",
  "AES-256-GCM authenticated chunk streaming with O(1) RAM usage",
  "Argon2id key derivation function for brute-force resistance",
  "In-memory PQC key pinning and cryptographic zeroing"
]
---

## Overview

AegisVault is a secure desktop application built in C#/.NET 10 (WPF / Caliburn.Micro) designed for local storage and encryption of sensitive files using next-generation post-quantum cryptography (PQC) and classical hybrid cryptographic standards. Developed as a practical Bachelor's thesis project on cryptographic algorithm application for sensitive data protection.

## My role

Sole designer and developer. Researched NIST post-quantum standards, implemented hybrid cryptographic workflows, architected the MVVM application in WPF, and conducted memory security analysis.

## Approach

- **Hybrid Post-Quantum Architecture**: Utilizes .NET 10 PQC primitives: **ML-KEM-768** for asymmetric key exchange and file-level key encapsulation, and **ML-DSA-65** for digital signature validation (*Encrypt-then-Sign*).
- **AES-GCM Streaming**: Implements authenticated AES-256-GCM chunk streaming (4 MB blocks with unique Nonce and Tag per block) using `ArrayPool`, enabling large-file processing with $O(1)$ memory consumption (~8–12 MB RAM peak).
- **Argon2id Key Derivation**: Derives the Key Encryption Key (KEK) from the user's master password via Argon2id (64 MB memory, 4 lanes, 3 iterations) to resist GPU brute-force attacks.
- **Memory Pinning & Zeroing**: Decrypted private PQC keys (`sk_kem`, `sk_sig`) are pinned in RAM via `GCHandle` to prevent garbage collection relocation, and wiped using `CryptographicOperations.ZeroMemory` upon session termination to mitigate cold-boot exposure.

## Results

- Complete implementation of NIST FIPS 203 (ML-KEM) and FIPS 204 (ML-DSA) standards within a responsive C# desktop client.
- Efficient streaming encryption capable of processing multi-gigabyte files within constrained memory bounds.
- Strict signature verification before decapsulation to prevent chosen-ciphertext attacks (CCA).

## What I learned

Cryptographic protocol design requires strict defense-in-depth: choosing resilient quantum-safe algorithms is only the first step. Proper memory lifecycle management—such as GC pinning and zeroing plaintext buffers—is essential to protect secrets from operating-system level inspection.
