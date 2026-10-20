---
title: "Bandit Writeups: OverTheWire CTF Documentation Platform"
summary: "Full-stack web application built with Next.js 15, Prisma ORM, and PostgreSQL (Neon) for documenting Linux security challenges and command-line techniques."
role: "Full-Stack Developer"
tech: ["Next.js 15", "TypeScript", "Tailwind CSS", "Prisma ORM", "PostgreSQL", "Neon", "Vercel"]
repo: "https://github.com/idzafic1/bandit-writeups"
demo: "https://bandit-writeups.vercel.app"
order: 4
featured: true
status: "completed"
highlights: [
  "Next.js 15 App Router with responsive dark mode UI",
  "PostgreSQL database on Neon with Prisma ORM",
  "Categorized security techniques and level documentation",
  "Strict fair-play policy: all challenge passwords redacted"
]
---

## Overview

A modern, fast documentation platform built to structure, search, and present analytical solutions and command-line methodologies for the OverTheWire Bandit Linux security wargames.

## My role

Full-stack developer. Designed the database schema in Prisma, implemented the Next.js frontend with Tailwind CSS, built administrative CRUD endpoints, and deployed the production app to Vercel.

## Approach

- **Architecture**: Next.js 15 App Router with TypeScript for type-safe server and client components.
- **Data Modeling**: PostgreSQL on serverless Neon with Prisma ORM, establishing relations between games, levels, and security techniques (such as SUID exploitation, base64 decoding, cron tasks, and SSH tunneling).
- **Fair-Play Design**: Enforced strict sanitization guidelines where challenge passwords and flags are redacted in favor of teaching analytical methodology and shell commands.

## Results

- Fully deployed, production-ready web application hosted at [bandit-writeups.vercel.app](https://bandit-writeups.vercel.app).
- Structured reference platform providing practical guidance on Linux command-line security, file permissions, and privilege escalation concepts.

## What I learned

Building documentation platforms around security challenges requires balancing educational clarity with community fair-play standards, alongside managing serverless connection pooling to relational databases like PostgreSQL.
