import { Given, When, Before } from "@badeball/cypress-cucumber-preprocessor";

import BasePO from "../page_objects/Base_PO";
import HomePagePO from "../page_objects/HomePage_PO";

const basePage = new BasePO();
const url = "https://www.webdriveruniversity.com/";
const homepage  = new HomePagePO();


Given(`I navigate to the webdriveruniversity homepage`, () => { 
  //cy.visit(url)
  //basePage.navigate(" ");
  homepage.navigate("");
});

When(`I click on the contact us button`, () => {
   // cy.get("#contact-us").invoke("removeAttr", "target").click();
   //cy.clickAndOpen_InSameTab("#contact-us");
   homepage.navigateToContactUsPage();
})

When(`I click on the login portal button`, () => {
 // cy.get("#login-portal").invoke("removeAttr", "target").click();
 //cy.clickAndOpen_InSameTab("#login-portal");
 homepage.navigateToLoginPage();
})