class Codap {
    getToolbarButton(){
        return cy.get('.workspace .misc-actions.toolbar .toolbar-button div')
    }
    openSageTableTile(title){
        cy.get('.workspace .codap-table-menu').contains(title).click()
    }
}
export default Codap;
////*[@id="codap"]