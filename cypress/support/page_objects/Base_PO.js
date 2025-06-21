
class BasePO {

    navigate(path) {
        cy.fixture("config.json").then((data) => {
            cy.visit(data.BASE_URL + path)
        })
    }

    getPageTitle() {
        return cy.title();
    }
}

export default BasePO;