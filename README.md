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
npx wdio wdio.conf.ts --suite smoketest_full  
```

### Run Specific Tests

You can target specific test files using:

```
npx wdio wdio.conf.ts --spec loginCorrectCredentials.e2e.ts
```

----------

## Test summary

This repository contains six e2e tests, three of them comprise the mandatory part of the assignment, while the other three are additional tests for a more robust smoke test suite.

**Login flow:**
1.  **loginCorrectCredentials.e2e.ts**: (required) The standard_user should be able to log in.
2.  **loginLockedOut.e2e.ts**: (required) The locked_out_user should not be able to log in.
3.  **loginIncorrectCredentials.e2e.ts**: (bonus) User with incorrect credentials should not be able to log in.
4.  **attemptAccessStorePageWhileNotLoggedIn.e2e.ts**: (bonus) User should not be able to access the store page while not logged in.

**Purchase product flow:**
1.  **purchaseProducts.e2e.ts**: (required) The user should be able create an order as described in test requirements.
2.  **removeProductFromCart.e2e.ts**: (bonus) The user should be able remove a product from the cart.
