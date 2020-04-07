class SimSettings{


    settingsInspectorPanel(){
        return ('.inspector-panel .inspector-panel-content .simulation-panel .simulation-radio-buttons')
    }
    modelDiagramSetting(){
        return ('.inspector-panel > .inspector-panel-content > .simulation-panel > .simulation-radio-buttons > label > span');
    }
    settingRadioModel(){
        return ('.simulation-radio-buttons > label > span')
    }
    settingRadioStatic(){
        return ('.simulation-radio-buttons > div > label > span')
    }
    settingRadioDynamic(){
        return ('.simulation-radio-buttons > div > label > span')
    }
    settingSubmenu(){
        return ('.expanding-submenu.expanded > .radio-group > label > span')
    }
    settingLimitValues(){
        return ('.inspector-panel-content > .simulation-panel > .run-panel > label > input[value=cap-values]')
    }
    settingRelationshipSymbols(){
        return ('.inspector-panel-content > .simulation-panel > .run-panel > .row > label > input[value=relationship-symbols]')
    }
}

export default SimSettings;
