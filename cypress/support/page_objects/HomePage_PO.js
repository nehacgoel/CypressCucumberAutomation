import BasePO from "./Base_PO";

class HomePagePO extends BasePO {
    navigateToHomePage() {
        super.navigate("");
    }

    navigateToContactUsPage() {
        cy.clickAndOpen_InSameTab("#contact-us");
    }

    navigateToLoginPage() {
        cy.clickAndOpen_InSameTab("#login-portal");
    }
}

export default HomePagePO;