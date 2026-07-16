![Playwright Tests](https://github.com/GideonChris/playwright-learning/actions/workflows/playwright.yml/badge.svg)

#Playwright Automation Framework

A Test automation framerwork built with Playwright and JavaScript, implementing industry best practices.

##Tech Stack
 - Playwright
 - JaveScript
 - Node.js
 - GitHub Actions CI/CD
 - Allure Reports

##Project Structure 
    - Playwright-learning/
    - pages/ - Page Object Model Files
    - tests/ - Test Spec Files
    - data/ - Test data files
    - fixtures.js - Custom Playwright Fixtures

##How to Run Tests
    Install Dependencies: 
        npm install
    Install Browsers: 
        npx playwright install
    Run All Tests: 
        npx playwright test
    Run in Headed ModeL
        npx playwright test --headed
    View HTML report
        npx playwright show-report

##Test Coverage
    - Form Interactions
    - Multi Tab testing
    - Data driven testing
    - Cross Browser testing 
    - Waits and Dynamic elements

##CI/CD
    Tests run automatically on every push to main branch via GitHub Actions. 