const SageModelerSimulationSettingsElements = {

    BTN_SIMULATION_SETTINGS: 'div.tool-panel div.tool-button.icon-codap-options',
    PANEL_SIMULATION_SETTINGS: '.inspector-panel .inspector-panel-content .simulation-panel .simulation-radio-buttons',
    SPAN_STATIC_EQUILIBRIUM_SIMULATION: '.simulation-panel .simulation-radio-buttons span',
    SPAN_DYNAMIC_TIMEBASED_SIMULATION: '.simulation-panel .simulation-radio-buttons',

    PANEL_RELATIONSHIPS_SETTINGS: '.inspector-panel .inspector-panel-content .simulation-panel .complexity-radio-buttons',

    CHK_LIMIT_VALUES_TO_MIN_OR_MAX_RANGE: '.simulation-panel .row.run-panel input[type=checkbox][value=cap-values]',

    CHK_SHOW_RELATIONSHIP_SYMBOLS: '.simulation-panel .row input[type=checkbox][value=relationship-symbols]',
    CHK_INCLUDE_A_GUIDE: '.simulation-panel .row input[type=checkbox][value=relationship-symbols]',
}

export function getSimulationTypeRadioButton(sageIframe, simulationType){
    return sageIframe.find('.simulation-panel .simulation-radio-buttons label').contains('label', simulationType).find('input');
}

export function getRelationshipSettingElement(sageIframe, relationshipName){
    return sageIframe.find('.complexity-radio-buttons').contains('label', relationshipName).find('input[type="radio"]');
}

export default  SageModelerSimulationSettingsElements;