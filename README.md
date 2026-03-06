# Playwright POM + Keyword Example

## Install
npm install
npx playwright install

## Run Test
npm test

## Run UI Mode
npm run test:ui

## Show Report
npm run report

Playwright Automation – NokCash Flow

This repository contains automation tests and test design artifacts for the NokCash top-up flow on the Lottery Plus website.
The project demonstrates UI automation using Playwright with a Page Object Model (POM) structure, along with test design documentation and algorithm problem solving required for the assignment.

⸻

Project Overview

The objective of this project is to:
	•	Automate the NokCash top-up user flow
	•	Apply Page Object Model (POM) for maintainable UI automation
	•	Implement test scenarios derived from test design methodologies
	•	Integrate GitHub CI to automatically run tests
	•	Provide supporting artifacts such as test case documentation and algorithm solutions

⸻

Project Structure
playwright-pom-keyword
│
├── .github/workflows        # GitHub CI pipeline
│
├── pages                    # Page Object Model (UI locators and actions)
│   └── nokcash.page.ts
│
├── keywords                 # Business-level reusable actions
│
├── tests                    # Test scenarios
│   └── nokcash.spec.ts
│
├── utils                    # Test data
│
├── playwright.config.ts     # Playwright configuration
├── package.json
├── tsconfig.json
└── README.md

⸻
Test Design Methodology

The test cases for the NokCash flow were designed using the following techniques:
	•	Happy Path Testing
	•	Boundary Value Analysis (BVA)
	•	Equivalence Partitioning
	•	Negative Testing
	•	UI & Data Validation

Test coverage includes:
	•	Navigation to NokCash page
	•	Amount input validation
	•	Minimum amount validation
	•	Order summary verification
	•	Payment flow navigation
	•	Error handling

Test Case Documentation

All designed test scenarios are documented in the following Google Sheet:

⸻

Test Case Document
https://docs.google.com/spreadsheets/d/1qVe0M_kUVbCEKVb1qbM8sCuicHCLZH4r2pLvhtmgJTw/edit?usp=sharing

The document contains:
	•	Test ID
	•	Test case name
	•	Steps
	•	Test data
	•	Expected results
	•	Priority
	•	Automation status

⸻

Algorithm Assignment

As part of the assignment, the Two Sum problem from LeetCode was implemented and submitted.

Submission Link:
https://leetcode.com/problems/two-sum/submissions/1937420401/

The solution demonstrates problem-solving ability and efficient algorithm design.
