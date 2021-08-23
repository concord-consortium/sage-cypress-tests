const SageModelerSimulationSettingsElements = {

    BTN_SIMULATION_SETTINGS: 'div.tool-panel div.tool-button.icon-codap-options',
    PANEL_SIMULATION_SETTINGS: '.inspector-panel .inspector-panel-content .simulation-panel .simulation-radio-buttons',
    RADIO_MODEL_DIAGRAM: '.simulation-panel .simulation-radio-buttons input[type=radio][value=0]',
    RADIO_STATIC_EQUILIBRIUM_SIMULATION: '.simulation-panel .simulation-radio-buttons input[type=radio][value=1]',
    RADIO_DYNAMIC_TIMEBASED_SIMULATION: '.simulation-panel .simulation-radio-buttons input[type=radio][value=2]',

    PANEL_RELATIONSHIPS_SETTINGS: '.inspector-panel .inspector-panel-content .simulation-panel .complexity-radio-buttons',
    RADIO_BASIC_RELATIONSHIPS: '.simulation-panel .complexity-radio-buttons input[type=radio][value=0]',
    RADIO_EXPANDED_SET_OF_RELATIONSHIPS: '.simulation-panel .complexity-radio-buttons input[type=radio][value=1]',

    CHK_LIMIT_VALUES_TO_MIN_OR_MAX_RANGE: '.simulation-panel .row.run-panel input[type=checkbox][value=cap-values]',

    CHK_SHOW_RELATIONSHIP_SYMBOLS: '.simulation-panel .row input[type=checkbox][value=relationship-symbols]',
    CHK_INCLUDE_A_GUIDE: '.simulation-panel .row input[type=checkbox][value=relationship-symbols]',
}

export default  SageModelerSimulationSettingsElements;