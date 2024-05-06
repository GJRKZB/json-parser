# JSON Parser Project

## Overview

This project is a custom JSON parser written in TypeScript, designed to demonstrate parsing techniques that are fundamental to understanding data manipulation and compiler construction. The JSON parser is developed step-by-step, starting with basic functionality and incrementally adding support for more complex JSON structures.

## Challenge Description

The challenge involves building a JSON parser from scratch, focusing on both lexical and syntactic analysis:

- **Lexical Analysis:** Breaking down a sequence of characters into meaningful chunks, called tokens.
- **Syntactic Analysis:** Analyzing the tokens to ensure they adhere to JSON's formal structure.

The parser development is divided into several steps, each adding complexity:

1. **Step 1:** Parse empty JSON objects (`{}`).
2. **Step 2:** Handle simple JSON objects with string keys and values (`{"key": "value"}`).
3. **Step 3:** Extend parsing to include booleans, nulls, and numbers.
4. **Step 4:** Add support for nested objects and arrays.
5. **Step 5:** Robust testing and error handling.

## Technologies Used

- **TypeScript:** Main programming language.
- **Node.js:** Runtime environment to execute the parser outside the browser.
- **Jest:** Testing framework for automated testing.

## Getting Started

To get started with this project, clone the repository and install its dependencies:

```bash
git clone https://github.com/GJRKZB/json-parser.git
cd json-parser-ts
npm install
```
