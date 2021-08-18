import SageModelerElements, {
    getNthImageLinkOnNodeLinkOnCanvas,
    getNthImageOnCanvas
} from "../elements/sage-modeler-elements";
import * as SageModelerElementsFunctions from '../elements/sage-modeler-elements';
import SageModelerImageSearchDialogElements from "../elements/sage-modelere-image-search-dialog-elements";
import * as SageModelereImageSearchFunctions from "../elements/sage-modelere-image-search-dialog-elements";

const getFirstIframeBody = () => {
    // get the iframe > document > body
    // and retry until the body element is not empty
    return cy
        .get('div.innerApp iframe')
        .its('0.contentDocument.body').should('not.be.empty')
        // wraps "body" DOM element to allow
        // chaining more Cypress commands, like ".find(...)"
        // https://on.cypress.io/wrap
        .then(cy.wrap)
}

const getSageIframe = () => {
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
    getSageIframe().find(SageModelerElements.TXT_IMAGE_MODEL_NAME).type(title);
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