# Ubiquiti QA Engineer test assignemnt

This repository contains end-to-end tests for Ubiquiti's QA engineer test assignment using **WebdriverIO** with **Mocha**, written in **TypeScript**.

----------

## Prerequisites

Before setting up the project, make sure you have the following installed:

-   Node.js
    
-   npm
    

----------

## Setup Instructions

1.  Clone the repository:
    
    ```
    git clone https://github.com/JanisKatinskis/Ubiquiti-e2e.git
    ```
    
2.  Navigate into the project folder:
    
    ```
    cd Ubiquiti-e2e
    ```
    
3.  Install dependencies:
    
    ```
    npm install
    ```
    

----------

## Running Tests

The tests are organized in two test suites:
1. "smoketest_main" - contains the tests required in the assignment.
2. "smoketest_full" - contains all tests, including bonus tests.

Test suite can be run using:
```
npx wdio wdio.conf.js --suite smoketest_full  
```

### Run Specific Tests

You can target specific test files using:

```
npx wdio run wdio.conf.js --spec ./test/specs/example.spec.js
```
