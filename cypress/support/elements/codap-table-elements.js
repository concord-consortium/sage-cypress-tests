import {getFirstIframeBody} from "../helpers/sageModelerHelper";

export function getSageModelerDefaultTableMenuItem(sageIframe){
    return sageIframe.find('.codap-table-menu').contains('.codap-table-menu-item', 'SageModeler Data');
}

export function getSageModelDefaultTableComponent(iframe){
    return iframe.find('div.dg-container-view').contains('.dg-case-table-component-view', 'SageModeler Data');
}

export function getSageModelDefaultTableHeader(iframe){
    return iframe.find('div.dg-case-table-component-view').contains('.dg-titlebar', 'SageModeler Data');
}

export function getDefaultTableResizeHandler(iframe){
    return getSageModelDefaultTableComponent(iframe).find('.dg-component-resize-handle .dg-component-resize-handle-interior');
}

export function getDataTable(iframe){
    return getSageModelDefaultTableComponent(iframe).contains('.dg-case-table-view', 'Data points');
    // return SageModelerElements.TABLE_DEFAULT_SAGE_MODELER_DATA + ' .dg-hier-table-view .sc-split-view .dg-case-table-view:nth-child(7)';
}

export function getDefaultTableCellComponent(iframe, row, col){
    let tableComponent = getDataTable(iframe);
    return tableComponent.find(' .slick-row:nth-child(' + row + ') .slick-cell:nth-child(' + col + ') span' );
}

