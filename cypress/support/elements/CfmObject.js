const CfmObject = {
    MENU_CFM: '.cfm-menu.menu-anchor .default-anchor',
    FILE_SELECTION_DROP_AREA: '.dropArea > input',
}

export function getOpenDocButtonElement(){
    return cy.get('button').contains("Open Document");
}

export function getCreateNewDocumentButtonElement(){
    return cy.get('button').contains("Create New Document");
}

export function getOpenExampleTab(){
    return cy.get('.workspace-tabs').contains('Examples')
}

export function getLocalFileTab(){
    return cy.get('.workspace-tabs').contains('Local File')
}

export function getConfirmationDialogYes(){
    return cy.get('.confirm-dialog button').contains('Yes');
}

export default CfmObject;
