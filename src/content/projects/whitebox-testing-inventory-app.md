---
title: "White-Box Testing & Code Tuning: Inventory Console App"
summary: "Structural testing, McCabe cyclomatic complexity analysis, control flow graphs, and performance code tuning for a C# .NET inventory system."
role: "Academic QA project"
tech: ["C#", ".NET", "White-Box Testing", "McCabe Complexity", "Unit Testing", "Code Metrics"]
repo: "https://github.com/idzafic1/inventoryConsoleApp"
report: "https://github.com/idzafic1/loadTestPetStoreAPI/blob/main/docs/reports/whitebox-testing-and-refactoring-report.pdf"
order: 2
featured: true
status: "completed"
highlights: [
  "McCabe cyclomatic complexity & control flow graph mapping",
  "100% basis path, branch, and condition coverage",
  "Performance tuning: LINQ replacement, StringBuilder, caching",
  "Martin Fowler-aligned refactoring verified by Code Metrics"
]
---

## Overview

A quality assurance and code optimization project evaluating a C# .NET inventory management console application through rigorous white-box testing methodologies, computational complexity measurement, and systematic performance refactoring.

## My role

Academic QA project.

## Approach

- **Complexity Mapping**: Generated control flow graphs (CFG) for core inventory methods (`AnalizirajObavjestenja`, `AnalizirajPerformanseNarudzbi`, `AnalizirajStanjeInventara`, `AnalizirajDobavljaca`) and computed cyclomatic complexity V(G) = E - N + 2P.
- **Path & Condition Coverage**: Derived basis path test suites verifying every execution path, condition combination, loop boundary, and exception handler.
- **Performance Code Tuning**: Applied targeted C# optimizations in performance-critical execution paths:
  - Replacing string concatenation with `StringBuilder` to eliminate intermediate heap allocations.
  - Caching `DateTime.Now` and collection `Count` outside loop boundaries.
  - Pre-allocating list capacities to avoid repeated internal buffer resizing.
  - Eliminating heavy LINQ allocations in favor of optimized procedural loops.
- **Refactoring & Metrics Verification**: Cleaned design code smells (Long Method, Feature Envy, Primitive Obsession) and validated improvements via Visual Studio Code Metrics (Cyclomatic Complexity, Maintainability Index, Class Coupling).

## Results

- Formulated 100% basis path and condition test coverage across evaluated business logic methods.
- Measurably reduced execution time and memory footprint in data aggregation routines through loop hoisting and collection tuning.
- Verified significant improvements in Maintainability Index (MI) and reductions in Cyclomatic Complexity post-refactoring.
- Detailed in a 60-page report: [White-Box Testing & Refactoring Report](https://github.com/idzafic1/loadTestPetStoreAPI/blob/main/docs/reports/whitebox-testing-and-refactoring-report.pdf).
