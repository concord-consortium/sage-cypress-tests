import {getSageIframe} from "../helpers/sageModelerHelper";

const SageModelerElements = {
    BTN_ADD_NEW_IMAGE: 'div.palette-add-image',
    IMAGE_PALETTE: '.palette .palette-image[data-droptype="paletteItem"]',

    ICON_TABLE: 'div.toolbar-button i.moonicon-icon-table',
    ICON_CHART: 'div.toolbar-button i.moonicon-icon-graph',
    ICON_TEXT: 'div.toolbar-button i.moonicon.icon-comment',

    BTN_UNDO: 'i.icon-codap-arrow-undo',
    BTN_REDO: 'i.icon-codap-arrow-redo',

    BTN_SIMULATION: 'div.simulation-run-panel div.flow i.icon-codap-inspectorArrow-collapse',

    STYLES_TOOL_PANEL: 'div.tool-panel div.tool-button.icon-codap-styles',
    NODE_LINK_TOOL_PANEL: 'div.tool-panel div.tool-button.icon-codap-qualRel',
    TXT_IMAGE_MODEL_NAME: 'div.inspector-panel-content .inspector-content .edit-row input[name=\"title\"]',
    TXT_NODE_LINK_NAME: '.canvas .ui-droppable input.jsplumb-overlay',

    TAB_NODE_LINK_RELATION: 'div.inspector-panel-content .relation-inspector .tabbed-panel-left ul li',

    TABLES: '.toolbar i.moonicon-icon-table',
    GRAPH: 'i.moonicon-icon-graph',
    TEXT: 'i.moonicon-icon-comment',

    BTN_SIMULATE: '.simulation-run-panel div.flow[title=Simulate] i',
    BTN_RECORD: 'i.icon-codap-video-camera',
    BTN_RECORD_1_DATA_POINT: '.simulation-run-panel .horizontal .button i.icon-codap-camera',
    BTN_LABEL_RECORDING: '.simulation-run-panel .horizontal .button.bigger .horizontal .horizontal span',
    BTN_RECORD_CONTINUOUSLY: '.simulation-run-panel .horizontal .button.bigger i.icon-codap-video-camera',

    COUNTER_EXPERIMENTS: 'div.experiment-counter div.increment',
    INPUT_COUNTER_STEPS: 'div.buttons.flow div.vertical div.horizontal input[type=number]',
    MENU_STEPS: 'div.buttons.flow div.vertical div.horizontal div.menu span i.icon-codap-arrow-expand',
    CANVAS: '.canvas .ui-droppable'
}

export function getNodeLinkRelationSettings(sageIframe, nodeName){
  return sageIframe.find('.workspace-tab-component div').contains('.link-relation-view', nodeName);
}

export function getSelectRelationSettingsForNodeLink(sageIframe, nodeName, relation){
    return sageIframe.find('.workspace-tab-component div').contains('.link-relation-view', nodeName).find('div.bb-select').contains('select', relation);
}

export function getRelationReasonTextForNodeLink(sageIframe, nodeName){
    return sageIframe.find('.workspace-tab-component div').contains('.link-relation-view', nodeName).contains('.bottom', 'Why do you think so?').find('textarea');
}

export function getStepsMenuItems(sageIframe, menuItemName){
    return sageIframe.find('div.buttons.flow div.vertical div.horizontal div.menu div ul').contains('li', menuItemName);
}

export function getNthLinkOnCanvas(nthLink, totalNodes){
    let nthChildForLink = (totalNodes + nthLink) * 3;
    return SageModelerElements.CANVAS + ' svg:nth-child('+ nthChildForLink + ') path:nth-child(3)';
}

export function getNthImageOnCanvas(nthImage){
    return SageModelerElements.CANVAS + ' div.elm:nth-child('+nthImage+')';
}

//There isn't a way to get the relatiion link selector based on node name from the dom structure.
//So, had to rely on number of nodes and the node index on canvas.
export function getNthImageLinkOnNodeLinkOnCanvas(nthImage, totalNodesOnCanvas){
    let nthChildNodeLink = nthImage + totalNodesOnCanvas;
    return SageModelerElements.CANVAS + ' div.jsplumb-endpoint.node-link-button:nth-child(' + nthChildNodeLink + ')';
}

export function getNodeSlider(nodeSelector){
    return nodeSelector + ' .value-slider .value-slider-handle i.icon-codap-smallSliderLines';
}

export default SageModelerElements;