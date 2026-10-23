---
title: "Petstore API Quality Assurance & Load Testing Suite"
summary: "Automated API functional testing and multi-scenario performance benchmarking with k6 and Apache JMeter, backed by 147 pages of formal QA documentation."
role: "QA / Performance Engineer"
tech: ["Postman", "Newman", "k6", "Apache JMeter", "JavaScript", "Bash"]
repo: "https://github.com/idzafic1/loadTestPetStoreAPI"
report: "https://github.com/idzafic1/loadTestPetStoreAPI/blob/main/docs/reports/api-and-performance-testing-report.pdf"
order: 1
featured: true
status: "completed"
highlights: [
  "65 Newman API requests (366 assertions passed)",
  "13,750 requests across 4 k6 scenarios",
  "1,510 JMeter requests with APDEX 0.919",
  "Bottleneck identified on /pet/findByStatus",
  "147 pages of formal QA documentation"
]
---

## Overview

Comprehensive quality assurance, verification, and performance evaluation suite for the Swagger Petstore REST API v2, spanning automated functional contracts, multi-tier load testing, and empirical latency benchmarking.

## My role

Sole author and QA engineer. Responsible for authoring Postman collections, automating test execution via Newman CLI, scripting k6 multi-scenario load profiles, configuring Apache JMeter thread groups with APDEX metrics, and compiling formal verification reports.

## Approach

- **Functional & Boundary Testing**: Created Postman test suites executing 65 requests with 366 assertions covering Store, Pet, and User modules, testing input validation, data boundaries, and session authentication.
- **k6 Performance Scenarios**: Implemented JavaScript load test suites covering 4 distinct concurrent scenarios: baseline smoke testing, ramping load (up to 50 VUs), stress testing, and instantaneous traffic spikes.
- **Apache JMeter Benchmarking**: Configured 4 Thread Groups across 1,510 requests to analyze latency distributions, throughput under load, and calculate overall APDEX index scores.
- **Automated Metric Persistence**: Developed shell automation (`autoRun.sh`, `save-results.sh`) capturing JSON metrics through k6 `handleSummary` hooks and compiling historical response trends into visual dashboards.

## Results

- **Newman Functional Tests**: 65 requests executed, 366 assertions passed with a 100% pass rate. Uncovered backend business logic defects including acceptance of negative order quantities and unvalidated status enums.
- **k6 Load Benchmark**: 13,750 total requests across 4 scenarios with sustained 27.86 req/s throughput, 0.31% error rate, and 151 ms average latency.
- **Apache JMeter APDEX**: Achieved an overall APDEX score of 0.919 across 1,510 requests.
- **Bottleneck Discovered**: Isolated severe latency degradation on `GET /pet/findByStatus` under concurrent 50-thread stress (latency jumped to 1,180 ms), pinpointing unindexed database filtering under load.
- **Documentation**: Delivered 147 pages across two formal academic reports:
  - [API & Performance Testing Report (87 pages)](https://github.com/idzafic1/loadTestPetStoreAPI/blob/main/docs/reports/api-and-performance-testing-report.pdf)
  - [White-Box Testing & Refactoring Report (60 pages)](https://github.com/idzafic1/loadTestPetStoreAPI/blob/main/docs/reports/whitebox-testing-and-refactoring-report.pdf)

## What I learned

Percentile distributions (P90, P95) and scenario breakdowns expose critical system bottlenecks that global average latencies mask. In addition, functional contract validation must always precede load testing to verify that systems enforce business constraints before they are evaluated for throughput.
