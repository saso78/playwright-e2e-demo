# Playwright E2E Demo

This is a demo end-to-end (E2E) test automation framework built with [Playwright](https://playwright.dev/) and TypeScript.  
It uses Page Object Model (POM) design principles to structure tests clearly and maintainably.

The tests target public web applications like [Automation Exercise](https://automationexercise.com/) and [Guru99 Demo Sites](https://demo.guru99.com/test/newtours/), serving as real-world examples for showcasing automation skills.

## 🔧 Tech Stack

- [Playwright](https://playwright.dev/)
- TypeScript
- Node.js
- Page Object Model (POM)
- Dotenv (for environment config)
- GitHub Actions (CI) *(planned)*

## 📁 Project Structure
```
.
├── tests/ # Test specs
├── pages/ # Page objects
├── utils/ # Helper functions
├── config/ # Config files (e.g., environment variables)
├── data/ # Static test data
├── playwright.config.ts
├── README.md
└── package.json
```

## 🚀 Getting Started


# Install dependencies
```
npm install
```
# Run tests
```
npx playwright test
```
📌 Coming Soon

    Docker support

    CI pipeline with GitHub Actions

    HTML reports

    Tag-based test execution

   ### Created by Saso Trpovski
  ### For showcasing modern test automation frameworks in real-world scenarios
