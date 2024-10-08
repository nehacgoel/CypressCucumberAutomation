npm init
npm install --save-dev cypress@13.15.0
npm install -g npx
npx cypress open

//install extensions
material icon theme

npm i --save-dev @badeball/cypress-cucumber-preprocessor
npm i --save-dev @bahmutov/cypress-esbuild-preprocessor
// npm i ts-loader --save-dev

//configure VS code to use cucumber
cucumber gherkin full support

//file-> prefrences-> settings -> extensions-> cucumber autocomplete -> edit settings.json.

//Gherkin - it is a language which cucumber understands. it is a business readable, domain specific language that lets you describe software behaviour.
keywords:
1. feature file - high level description of a software feature/test scenario. we can have multiple feature files and feature file can have multiple scenarios.
2. Scenario - used to describe a particular test scenario.
3. Given - describe pre-requisite for given test scenario.
4. When - describes an event or action. 
5. And  - logical AND condition between conditions
6. Then - used to describe an expected outcome

We we link a statement given in feature file against a step definition.

//Ranorex selocity chrome pluggin

//cucumber experssion - https://github.com/cucumber/cucumber-expressions#readme

npm install -D cypress-xpath

add path in e2e.js

npx cypress run -e TAGS='@login' --headed
npx cypress run -e TAGS='@login or @contact-us' --headed
npx cypress run -e TAGS='@smoke' --headless
npx cypress run -e TAGS='@regression' --headed
npx cypress run -e TAGS='(@login or @contact-us) and not @smoke' --headed
npx cypress run cypress/e2e/*.feature --headed