import SageModelerElements from "../elements/sage-modeler-elements";
import * as SageModelerElementsFunctions from '../elements/sage-modeler-elements';
import SageModelerImageSearchDialogElements from "../elements/sage-modelere-image-search-dialog-elements";
import * as SageModelereImageSearchFunctions from "../elements/sage-modelere-image-search-dialog-elements";
import SageModelerSimulationSettingsElements from "../elements/sage-modeler-simulation-settings-elements";

//Sage modeler has two iFrames. This api returns the first iFrame body.
export const getFirstIframeBody = () => {
    return cy
        .get('div.innerApp iframe')
        .its('0.contentDocument.body').should('not.be.empty')
        // wraps "body" DOM element to allow
        // chaining more Cypress commands, like ".find(...)"
        // https://on.cypress.io/wrap
        .then(cy.wrap)
}

export const getSageIframe = () => {
    return getFirstIframeBody().find('.sc-web-view iframe')
        .its('0.contentDocument.body').should('not.be.empty')
        .then(cy.wrap);
    
}

export function searchForImageAndAdd(searchText, lstItemIndexesToSelect){
    getSageIframe().find(SageModelerElements.BTN_ADD_NEW_IMAGE).click();
    getSageIframe().find(SageModelerImageSearchDialogElements.TXT_SEARCH_FIELD).type(searchText);
    lstItemIndexesToSelect.forEach( nthItemInResult => {
        getSageIframe().find(SageModelerImageSearchDialogElements.BTN_SEARCH).click();
        getSageIframe().find(SageModelereImageSearchFunctions.getNthImage(nthItemInResult)).click();
        getSageIframe().find(SageModelerImageSearchDialogElements.BTN_ADD_IMAGE).click();

    });
    getSageIframe().find(SageModelerImageSearchDialogElements.BTN_CLOSE_DIALOG).click();
 }

export function dragImageModelToCanvas(imageModelNumber, posX, posY){
    getSageIframe().find(SageModelereImageSearchFunctions.getNthImageModel(imageModelNumber)).trigger('mousedown',{which: 1});
    getSageIframe().find(SageModelerElements.CANVAS)
        .trigger('mousemove',{pageX:posX, pageY:posY})
        .trigger('mouseup', {force:true});
}

export function addTitleToModelNode(imageModelNumber, title){
    getSageIframe().find(SageModelerElementsFunctions.getNthImageOnCanvas(imageModelNumber)).click();
    getSageIframe().find(SageModelerElements.STYLES_TOOL_PANEL).click();
    /**
     * There is a problem in sage modeler some times when automation script enters the text fast
     * text box behavior was weird. some letters are being overwritten and the tests were failing
     * Could not reproduce this issue manually. As we never saw this issue with Cypress in other
     * places, assuming that this Sage modeler text component has some issue a script types text very fast.
     * So, work around is to enter each character with a 10 millisecond gap to make the test more reliable.
     */
    for(let strIndex = 0; strIndex < title.length; strIndex++){
        getSageIframe().find(SageModelerElements.TXT_IMAGE_MODEL_NAME).type(title[strIndex]);
        cy.wait(10);
    }
    getSageIframe().find(SageModelerElements.STYLES_TOOL_PANEL).click();
}

export function addNodeLink(fromNodeIndex, toNodeIndex){
    let nodeLinkSelector = SageModelerElementsFunctions.getNthImageLinkOnNodeLinkOnCanvas(fromNodeIndex, 3);
    let toNodeSelector = SageModelerElementsFunctions.getNthImageOnCanvas(toNodeIndex);
    getSageIframe().find(nodeLinkSelector).trigger('mousedown');
    getSageIframe().find(toNodeSelector).trigger('mousemove');
    getSageIframe().find(toNodeSelector).trigger('mouseup', {force: true});

}

export function addTitleToNodeLink(linkIndex, linkName, totalNodes){
    let nodeLinkSelector = SageModelerElementsFunctions.getNthLinkOnCanvas(linkIndex, totalNodes);
    getSageIframe().find(nodeLinkSelector).click({force: true});
    cy.wait(1000);
    getSageIframe().find(nodeLinkSelector).click({force: true});
    getSageIframe().find(SageModelerElements.TXT_NODE_LINK_NAME).type(linkName + '{enter}');
}

export function addNodeLinkRelation(nodeIndex, nodeName, relation, byValue, reasonTxt){
    let nodeSelector = SageModelerElementsFunctions.getNthImageOnCanvas(nodeIndex);
    getSageIframe().find(nodeSelector).click();
    getSageIframe().find(SageModelerElements.NODE_LINK_TOOL_PANEL).click();
    getSageIframe().find(SageModelerElements.TAB_NODE_LINK_RELATION).contains(nodeName).click();

     getSageIframe().find(SageModelerElements.SELECT_NODE_LINK_SOURCE).contains(nodeName).parent().parent().find(SageModelerElements.SELECT_NODE_LINK_RELATION).select(relation);
    getSageIframe().find(SageModelerElements.SELECT_NODE_LINK_SOURCE).contains(nodeName).parent().parent().find(SageModelerElements.SELECT_NODE_LINK_RELATION_BY_VALUE).select(byValue);
    getSageIframe().find(SageModelerElements.SELECT_NODE_LINK_SOURCE).contains(nodeName).parent().parent().parent().parent().find(SageModelerElements.TXT_REASON_NODE_LINK_RELATION).type(reasonTxt);

    // getSageIframe().find(SageModelerElements.TXT_REASON_NODE_LINK_RELATION).type(reasonTxt);
    getSageIframe().find(SageModelerElements.NODE_LINK_TOOL_PANEL).click();
}

export function addDefaultSagemodelereDataTableToCanvas() {
    getSageIframe().find(SageModelerElements.TABLES).click();
    getSageIframe().find(SageModelerElements.BTN_TABLES_SAGE_MODELER_DATA).click();
    getFirstIframeBody().find(SageModelerElements.TABLE_TITLE_BAR_DEFAULT_SAGE_MODELER_DATA).trigger('mousedown');
    getFirstIframeBody().find(SageModelerElements.TABLE_TITLE_BAR_DEFAULT_SAGE_MODELER_DATA).trigger('mousemove', {
        pageX: 800,
        pageY: 200
    });
    cy.wait(2000);
    getFirstIframeBody().find(SageModelerElements.TABLE_TITLE_BAR_DEFAULT_SAGE_MODELER_DATA).trigger('mouseup', {force: true});
}

export function simulateOneDataPoint(){
    getSageIframe().find(SageModelerElements.BTN_SIMULATE).click();
    getSageIframe().find(SageModelerElements.BTN_RECORD_1_DATA_POINT).click();
}

export function verifySageModelerTableRowSize(rowSize){
    let tableSelector = SageModelerElementsFunctions.getDataTableSelector();
    let allRowsSelector = SageModelerElementsFunctions.getTableAllRows(tableSelector);
    getFirstIframeBody().find(allRowsSelector).should('have.length', rowSize);
}

export function verifyTableData(expectedData){
    let tableSelector = SageModelerElementsFunctions.getDataTableSelector();
    let colDataSelector;
    for(let row = 0; row < expectedData.length; row++){
            let indexColSelector = SageModelerElementsFunctions.getTableColumnDataSelector(tableSelector, row+1, 1);
            getFirstIframeBody().find(indexColSelector).then( ($firstColumn) => {
                let rowIndex = parseInt($firstColumn.text());
                cy.log("row Index : " + rowIndex);
                let expectedRowData = expectedData[rowIndex-1];
                for(let colIndex = 1; colIndex < expectedRowData.length; colIndex++){
                    let expectedColData = expectedRowData[colIndex];
                    if(expectedColData.length === 0){
                        continue;
                    }
                    if(Number.isInteger(expectedColData)){
                        colDataSelector = SageModelerElementsFunctions.getTableColumnDataSelector(tableSelector, rowIndex, colIndex+1);
                        getFirstIframeBody().find(colDataSelector).should('have.text', expectedColData.toString());
                    }else{
                        colDataSelector = SageModelerElementsFunctions.getTableColumnProgressBarDataSelector(tableSelector, rowIndex, colIndex+1);
                        getFirstIframeBody().find(colDataSelector).should('have.attr', 'style', expectedColData);
                    }
                    cy.wait(1000);
                }
            });
    }

}

/**
 * As we did not figure out how to slide up the slider for each node.
 * as a work around sliding with reference to another object on canvas.
 * If you want to slide down. Pass the second node which is below the node for which we want to slide down
 * Similarly if you want to slide up, pass the second nodw which is above the node we want to slide up.
 * @param nodeIndex
 * @param slideToNodeIndex
 */
export function moveSlider(nodeIndex, slideToNodeIndex){
    let nodeSelector = SageModelerElementsFunctions.getNthImageOnCanvas(nodeIndex);
    let sliderSelector = SageModelerElementsFunctions.getNodeSlider(nodeSelector);

    let node2Selector = SageModelerElementsFunctions.getNthImageOnCanvas(slideToNodeIndex);
    let slider2Selector = SageModelerElementsFunctions.getNodeSlider(node2Selector);

    getSageIframe().find(sliderSelector).trigger('mousedown', {which: 1, pageX: 200, pageY:200});
    getSageIframe().find(slider2Selector).trigger('mousemove');
    cy.wait(2000);
    getSageIframe().find(slider2Selector).trigger('mouseup');

}

export function updateSimulationModelSettings(simulationType){
    getSageIframe().find(SageModelerSimulationSettingsElements.BTN_SIMULATION_SETTINGS).click();
    switch(simulationType){
        case 'model_diagram':
            getSageIframe().find(SageModelerSimulationSettingsElements.RADIO_MODEL_DIAGRAM).check();
            break;

        case 'static':
            getSageIframe().find(SageModelerSimulationSettingsElements.RADIO_STATIC_EQUILIBRIUM_SIMULATION).check();
            break;

        case 'dynamic':
            getSageIframe().find(SageModelerSimulationSettingsElements.RADIO_DYNAMIC_TIMEBASED_SIMULATION).check();
            break;
    }
    getSageIframe().find(SageModelerSimulationSettingsElements.BTN_SIMULATION_SETTINGS).click();
}

export function selectSimulationTimeSettingsDropDownAndRecord(settings){
    getSageIframe().find(SageModelerElements.MENU_STEPS).click();
    switch(settings){
        case 'steps':
            getSageIframe().find(SageModelerElements.MENU_ITEM_STEPS).click({force: true});
            break;
        case 'seconds':
            getSageIframe().find(SageModelerElements.MENU_ITEM_SECONDS).click({force: true});
            break;
        case 'minutes':
            getSageIframe().find(SageModelerElements.MENU_ITEM_MINUTES).click({force: true});
            break;
        case 'hours':
            getSageIframe().find(SageModelerElements.MENU_ITEM_HOURS).click({force: true});
            break;
        case 'days':
            getSageIframe().find(SageModelerElements.MENU_ITEM_DAYS).click({force: true});
            break;
        case 'weeks':
            getSageIframe().find(SageModelerElements.MENU_ITEM_WEEKS).click({force: true});
            break;
        case 'months':
            getSageIframe().find(SageModelerElements.MENU_ITEM_MONTHS).click({force: true});
            break;
        case 'years':
            getSageIframe().find(SageModelerElements.MENU_ITEM_YEARS).click({force: true});
            break;
    }
    getSageIframe().find(SageModelerElements.BTN_RECORD).click();
}
