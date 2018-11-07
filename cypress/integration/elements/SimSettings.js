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

}

export default SimSettings;
