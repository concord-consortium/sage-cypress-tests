import SageModelerElements from "../elements/sage-modeler-elements";
import * as SageModelerElementsFunctions from '../elements/sage-modeler-elements';
import SageModelerImageSearchDialogElements from "../elements/sage-modeler-image-search-dialog-elements";
import * as SageModelerImageSearchFunctions from '../elements/sage-modeler-image-search-dialog-elements';
import SageModelerSimulationSettingsElements from "../elements/sage-modeler-simulation-settings-elements";
import * as SageModelerSimulationSettingsFunctions from '../elements/sage-modeler-simulation-settings-elements';
import * as CodapTableElementFunctions from '../elements/codap-table-elements';
import {getDefaultTableCellComponent} from "../elements/codap-table-elements";

//Sage modeler has two iFrames. This api returns the first iFrame body.
export const getFirstIframeBody = () => {
    return cy
        .get('div.innerApp iframe')
        .its('0.contentDocument.body')
        // wraps "body" DOM element to allow
        // chaining more Cypress commands, like ".find(...)"
        // https://on.cypress.io/wrap
        .then(cy.wrap)
}

export const getSageIframe = () => {
    return getFirstIframeBody().find('.sc-web-view iframe')
        .its('0.contentDocument.body')
        .then(cy.wrap);
    
}

export function searchForImageAndAdd(searchText, lstItemIndexesToSelect){
    getSageIframe().find(SageModelerElements.BTN_ADD_NEW_IMAGE).click();
    getSageIframe().find(SageModelerImageSearchDialogElements.TXT_SEARCH_FIELD).type(searchText);
    lstItemIndexesToSelect.forEach( nthItemInResult => {
        getSageIframe().find(SageModelerImageSearchDialogElements.BTN_SEARCH).click();
        getSageIframe().find(SageModelerImageSearchFunctions.getNthImage(nthItemInResult)).click();
        getSageIframe().find(SageModelerImageSearchDialogElements.BTN_ADD_IMAGE).click();

    });
    getSageIframe().find(SageModelerImageSearchDialogElements.BTN_CLOSE_DIALOG).click();
}

//This function is still not working because of upload file.
//After uploading file with automation code, UI is not going to ADD IMAGE button page.
export function addImageFromMyComputer(imagePath){
    getSageIframe().find(SageModelerElements.BTN_ADD_NEW_IMAGE).click();
    SageModelerImageSearchFunctions.getMyComputerTabComponent(getSageIframe()).click();
    cy.upload_file(getSageIframe(), imagePath, SageModelerImageSearchDialogElements.FILE_UPLOAD);
    getSageIframe().find(SageModelerImageSearchDialogElements.BTN_ADD_IMAGE).click({force: true});
    getSageIframe().find(SageModelerImageSearchDialogElements.BTN_CLOSE_DIALOG).click();
}

export function addImageFromLink(url){
    getSageIframe().find(SageModelerElements.BTN_ADD_NEW_IMAGE).click();
    SageModelerImageSearchFunctions.getLinkTabComponent(getSageIframe()).click();
    SageModelerImageSearchFunctions.getImageLinkTextBox(getSageIframe()).type(url);
    getSageIframe().find(SageModelerImageSearchDialogElements.BTN_PREVIEW_IMAGE).click();
    getSageIframe().find(SageModelerImageSearchDialogElements.BTN_ADD_IMAGE).click({force: true});
    getSageIframe().find(SageModelerImageSearchDialogElements.BTN_CLOSE_DIALOG).click();
}


export function dragImageModelToCanvas(imageModelNumber, posX, posY){
    getSageIframe().find(SageModelerImageSearchFunctions.getNthImageModel(imageModelNumber)).trigger('mousedown',{which: 1});
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

export function addNodeLink(fromNodeIndex, toNodeIndex, totalNodes){
    let nodeLinkSelector = SageModelerElementsFunctions.getNthImageLinkOnNodeLinkOnCanvas(fromNodeIndex, totalNodes);
    let toNodeSelector = SageModelerElementsFunctions.getNthImageOnCanvas(toNodeIndex);
    getSageIframe().find(nodeLinkSelector).click({force: true});
    getSageIframe().find(nodeLinkSelector).trigger('mousedown', {force: true});
    getSageIframe().find(toNodeSelector).trigger('mousemove', {force: true});
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
    SageModelerElementsFunctions.getSelectRelationSettingsForNodeLink(getSageIframe(), nodeName, relation).select(relation);
    SageModelerElementsFunctions.getSelectRelationSettingsForNodeLink(getSageIframe(), nodeName, byValue).select(byValue);
    SageModelerElementsFunctions.getRelationReasonTextForNodeLink(getSageIframe(), nodeName).type(reasonTxt);
    getSageIframe().find(SageModelerElements.NODE_LINK_TOOL_PANEL).click();
}

export function addDefaultSagemodelereDataTableToCanvas() {
    getSageIframe().find(SageModelerElements.TABLES).click();
    CodapTableElementFunctions.getSageModelerDefaultTableMenuItem(getSageIframe()).click();
    CodapTableElementFunctions.getSageModelDefaultTableHeader(getFirstIframeBody()).trigger('mousedown');
    CodapTableElementFunctions.getSageModelDefaultTableHeader(getFirstIframeBody()).trigger('mousemove', {
        pageX: 800,
        pageY: 300
    });
    cy.wait(500);
    CodapTableElementFunctions.getSageModelDefaultTableHeader(getFirstIframeBody()).trigger('mouseup', {force: true});
}

export function simulateOneDataPoint(){
    getSageIframe().find(SageModelerElements.BTN_SIMULATE).click();
    getSageIframe().find(SageModelerElements.BTN_RECORD_1_DATA_POINT).click();
}

export function verifySageModelerTableRowSize(rowSize){
    CodapTableElementFunctions.getDataTable(getFirstIframeBody()).find('div.slick-row').should('have.length', rowSize);
}

export function verifyTableData(expectedData){
    for(let row = 0; row < expectedData.length; row++){
        CodapTableElementFunctions.getDefaultTableCellComponent(getFirstIframeBody(), row+1, 1).then( ($firstColumn) => {
            let rowIndex = parseInt($firstColumn.text());
            cy.log("row Index : " + rowIndex);
            let expectedRowData = expectedData[rowIndex-1];
            for(let colIndex = 1; colIndex < expectedRowData.length; colIndex++){
                let expectedColData = expectedRowData[colIndex];
                if(expectedColData.length === 0){
                    continue;
                }

                let tableCellComponent = CodapTableElementFunctions.getDefaultTableCellComponent(getFirstIframeBody(), rowIndex, colIndex+1);
                if(Number.isInteger(expectedColData)){
                    tableCellComponent.should('have.text', expectedColData.toString())
                    // colDataSelector = SageModelerElementsFunctions.getTableColumnDataSelector(tableSelector, rowIndex, colIndex+1);
                    // getFirstIframeBody().find(colDataSelector).should('have.text', expectedColData.toString());
                }else{
                    tableCellComponent.find('span.dg-qualitative-bar').should('have.attr', 'style', expectedColData)
                    // colDataSelector = SageModelerElementsFunctions.getTableColumnProgressBarDataSelector(tableSelector, rowIndex, colIndex+1);
                    // getFirstIframeBody().find(colDataSelector).should('have.attr', 'style', expectedColData);
                }
                cy.wait(100);
            }
        });
    }

}

export function updateSimulationModelSettings(simulationType){
    getSageIframe().find(SageModelerSimulationSettingsElements.BTN_SIMULATION_SETTINGS).click();
    switch(simulationType){
        case 'model_diagram':
            SageModelerSimulationSettingsFunctions.getSimulationTypeRadioButton(getSageIframe(), 'Model diagram').check();
            break;

        case 'static':
            SageModelerSimulationSettingsFunctions.getSimulationTypeRadioButton(getSageIframe(), 'Static equilibrium simulation').check();
            break;

        case 'dynamic':
            SageModelerSimulationSettingsFunctions.getSimulationTypeRadioButton(getSageIframe(), 'Dynamic time-based simulation').check();
            break;
    }
    getSageIframe().find(SageModelerSimulationSettingsElements.BTN_SIMULATION_SETTINGS).click();
}

export function selectSimulationTimeSettingsDropDownAndRecord(settings){
    getSageIframe().find(SageModelerElements.MENU_STEPS).click();
    SageModelerElementsFunctions.getStepsMenuItems(getSageIframe(), settings).click({force: true});
    //without sleep the data is not recorded. and we are not able to get the expected number of rows.
    cy.wait(1000);
    getSageIframe().find(SageModelerElements.BTN_RECORD).click();

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

export function increaseDefaultTableSize( dragPosX, dragPosY){
    CodapTableElementFunctions.getSageModelDefaultTableHeader(getFirstIframeBody()).click();
    CodapTableElementFunctions.getDefaultTableResizeHandler(getFirstIframeBody()).trigger('mousedown');
    CodapTableElementFunctions.getDefaultTableResizeHandler(getFirstIframeBody()).trigger('mousemove', {
       pageX: dragPosX,
       pageY: dragPosY
    });
    cy.wait(1000);
    CodapTableElementFunctions.getDefaultTableResizeHandler(getFirstIframeBody()).trigger('mouseup', {force: true});
}
