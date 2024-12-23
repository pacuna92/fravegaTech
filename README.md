# fravegaTech
Challenge QA Automation

## Prerequisites
Before installing and running the project, make sure you have the following requirements installed on your machine:

**Node.js** 
(version 14.x or higher). You can download it from https://nodejs.org/

**Playwright** 
To read the playwright documentation visit https://playwright.dev/docs/intro.

## Steps to install the project

1. Clone the repository https://github.com/pacuna92/fravegaTech.git
2. Open a terminal and navigate to fravegaTech folder.
3. Excute the following command "npm install".
4. Set the following variables in the .env file:
    TEST_UI_BASE_URL=https://www.fravega.com/
    TEST_API_BASE_URL=https://gorest.co.in/public/v2
    GOREST_API_TOKEN=YOUR_TOKEN
Note: Visit https://gorest.co.in/ to get a valid token. 

## Commands
- To run all tests in Chrome: npm run test:ui:chrome
- To run all tests in Firefox: npm run test:ui:ui:firefox
- To run all tests in all browsers: npm run test:allBrowsers
- To run all tests (ui and back): npm run test:all

# Structure project
📁 FravegaTech/
├── 📁 tests/ 
|   ├── 📁api                                 # Folder with api tests
│       ├── 📄 createUser.spec.ts             # Create a user
│       ├── 📄 getUSerById.spec.ts            # Get a user by id
│       ├── 📄 getUsers.spec.ts               # Get a user list
|   ├── 📁 ui                                 # Folder with ui tests
|       ├── 📁 e2e                            # Folder with e2e tests
|           ├──📄searchProduct.spec.ts        # Search and add to cart a valid product 
│   ├── 📁 helpers/                           # Reusable functions and utilities
│       ├── 📄 assertions.ts                  # Common validations
│       ├── 📄 createUser.ts                  # Method to call the api of create user
│       ├── 📄 getUserById.ts                 # Method to call the api of get user by id
│       ├── 📄 getUsers.ts                    # Method to call the api of get user  
│   ├── 📁 fixtures/                          # Test data
│       ├── 📁 fravega/                       # Test data for ui
│           ├── 📄 products.ts                # Product test data and urls 
│           ├── 📄 zipCode.ts                 # Zip code test data
│       ├── 📁 goRest/                        # Test data for api 
│           ├── 📄 dataCreateUser.ts          # Test data for createUser.spec.ts 
│   ├── 📁 utils/                             # General Utilities
│       ├── 📄 emailGenerator.ts              # Function to generate unique emails
├── 📄 playwright.config.ts                   # Playwright config
├── 📄 .env                                   # Environment  variables
├── 📄 package.json                           # Project dependencies and scripts
