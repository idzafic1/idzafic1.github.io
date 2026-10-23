---
title: "AegisVault: Post-Quantum Cryptographic File Vault"
summary: "Desktop application in C#/.NET implementing NIST FIPS 203/204 post-quantum cryptography (ML-KEM-768, ML-DSA-65), AES-256-GCM streaming, and Argon2id KDF."
role: "BSc thesis project"
tech: ["C#", ".NET 10", "WPF", "Caliburn.Micro", "ML-KEM-768", "ML-DSA-65", "AES-256-GCM", "Argon2id"]
repo: "https://github.com/idzafic1/AegisVault-Kriptografija"
order: 3
featured: true
status: "completed"
highlights: [
  "Hybrid PQC architecture: ML-KEM-768 & ML-DSA-65 (NIST FIPS 203/204)",
  "AES-256-GCM authenticated 8 MB chunk streaming",
  "Argon2id key derivation function for brute-force resistance",
  "In-memory PQC key pinning and cryptographic zeroing"
]
---

## Overview

AegisVault is a secure desktop application built in C#/.NET 10 (WPF / Caliburn.Micro) designed for local storage and encryption of sensitive files using next-generation post-quantum cryptography (PQC) and classical hybrid cryptographic standards. Developed as a practical BSc thesis project on cryptographic algorithm application for sensitive data protection.

## My role

BSc thesis project.

## Approach

- **Hybrid Post-Quantum Architecture**: Utilizes .NET 10 PQC primitives: **ML-KEM-768** for asymmetric key exchange and file-level key encapsulation, and **ML-DSA-65** for digital signature validation (*Encrypt-then-Sign*).
- **AES-GCM Streaming**: Implements authenticated AES-256-GCM chunk streaming (8 MB blocks with unique Nonce and Tag per block) using `ArrayPool` for buffer management during file processing.
- **Argon2id Key Derivation**: Derives the Key Encryption Key (KEK) from the user's master password via Argon2id (64 MB memory, 4 lanes, 3 iterations) to resist GPU brute-force attacks.
- **Memory Pinning & Zeroing**: Decrypted private PQC keys (`sk_kem`, `sk_sig`) are pinned in RAM via `GCHandle` to prevent garbage collection relocation, and wiped using `CryptographicOperations.ZeroMemory` upon session termination to mitigate cold-boot exposure.

## Results

- Complete implementation of NIST FIPS 203 (ML-KEM) and FIPS 204 (ML-DSA) standards within a responsive C# desktop client.
- Streaming encryption and decryption processing files in 8 MB chunks.
- Strict signature verification before decapsulation in the file decryption workflow.
