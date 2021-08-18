const SageModelerElements = {
    BTN_CREATE_NEW_DOCUMENT: '.modal-dialog-blocking-message .open-or-create div:nth-child(2) button',
    BTN_OPEN_DOC_OR_BROWSE_EXAMPLES: '.modal-dialog-blocking-message .open-or-create div:nth-child(1) button',

    BTN_ADD_NEW_IMAGE: 'div.palette-add-image',
    ICON_TABLE: 'div.toolbar-button i.moonicon-icon-table',
    ICON_CHART: 'div.toolbar-button i.moonicon-icon-graph',
    ICON_TEXT: 'div.toolbar-button i.moonicon.icon-comment',

    BTN_SIMULATION: 'div.simulation-run-panel div.flow i.icon-codap-inspectorArrow-collapse',

    STYLES_TOOL_PANEL: 'div.tool-panel div.tool-button.icon-codap-styles',
    NODE_LINK_TOOL_PANEL: 'div.tool-panel div.tool-button.icon-codap-qualRel',
    TXT_IMAGE_MODEL_NAME: 'div.inspector-panel-content .inspector-content .edit-row input[name=\"title\"]',
    TXT_NODE_LINK_NAME: '.canvas .ui-droppable input.jsplumb-overlay',

    SELECT_NODE_LINK_SOURCE: 'div.inspector-panel-content .relation-inspector div.top span.source',
    SELECT_NODE_LINK_RELATION: 'div.full:nth-child(2) .bb-select select',
    SELECT_NODE_LINK_RELATION_BY_VALUE: 'div.full:nth-child(3) .bb-select select',
    TAB_NODE_LINK_RELATION: 'div.inspector-panel-content .relation-inspector .tabbed-panel-left ul li',
    TXT_REASON_NODE_LINK_RELATION: ' div.bottom textarea',

    TABLES: '.toolbar-buttons .toolbar i.moonicon-icon-table',
    LNK_TABLES_SAGE_MODELER_DATA: '.codap-table-menu div.codap-table-menu-item:nth-child(1)',
    BTN_TABLES_NEW_TABLE: '.codap-table-menu div.codap-table-menu-item:nth-child(2) button',

    GRAPH: '.toolbar-buttons .toolbar i.moonicon-icon-graph',
    TEXT: '.toolbar-buttons .toolbar i.moonicon-icon-comment',

    BTN_SIMULATE: '.simulation-run-panel div.flow[title=simulate] div.toggle-title i',
    BTN_RECORD: 'i.icon-codap-video-camera',

    COUNTER_EXPERIMENTS: 'div.experiment-counter div.increment',
    INPUT_COUNTER_STEPS: 'div.buttons.flow div.vertical div.horizontal input[type=number]',
    MENU_STEPS: 'div.buttons.flow div.vertical div.horizontal div.menu span i.icon-codap-arrow-expand',
    MENU_ITEM_STEPS: 'div.buttons.flow div.vertical div.horizontal div.menu div ul li:nth-child(1)',
    MENU_ITEM_SECONDS: 'div.buttons.flow div.vertical div.horizontal div.menu div ul li:nth-child(2)',
    MENU_ITEM_MINUTES: 'div.buttons.flow div.vertical div.horizontal div.menu div ul li:nth-child(3)',
    MENU_ITEM_HOURS: 'div.buttons.flow div.vertical div.horizontal div.menu div ul li:nth-child(4)',
    MENU_ITEM_DAYS: 'div.buttons.flow div.vertical div.horizontal div.menu div ul li:nth-child(5)',
    MENU_ITEM_WEEKS: 'div.buttons.flow div.vertical div.horizontal div.menu div ul li:nth-child(6)',
    MENU_ITEM_MONTHS: 'div.buttons.flow div.vertical div.horizontal div.menu div ul li:nth-child(7)',
    MENU_ITEM_YEARS: 'div.buttons.flow div.vertical div.horizontal div.menu div ul li:nth-child(8)',

    CANVAS: '.canvas .ui-droppable'
}

export function getNthLinkOnCanvas(nthLink, totalNodes){
    let nthChildForLink = (totalNodes + nthLink) * 3;
    return SageModelerElements.CANVAS + ' svg:nth-child('+ nthChildForLink + ') path:nth-child(3)';
}

export function getNthImageOnCanvas(nthImage){
    return SageModelerElements.CANVAS + ' div.elm:nth-child('+nthImage+')';
}

export function getNthImageLinkOnNodeLinkOnCanvas(nthImage, totalNodesOnCanvas){
    let nthChildNodeLink = nthImage + totalNodesOnCanvas;
    return SageModelerElements.CANVAS + ' div.jsplumb-endpoint.node-link-button:nth-child(' + nthChildNodeLink + ')';
}

export default SageModelerElements;