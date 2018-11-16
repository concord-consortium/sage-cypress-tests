
class Document{

    canvas(){
        return('.canvas')
    }
    // Left Workspace elements
    aboutImagePaletteTab(){
        return ('.top-node-palette-tab')
    }
    aboutImageTitle(){
        return('.palette-about-image-title')
    }
    deleteImage(){
        return ('.palette-delete')
    }

    addNewImageButton() {
        return ('.palette-add-image')
    }
    paletteNode(){
        return('div[data-droptype="paletteItem"]')
    }
    // imageNode(){
    //     return('.container .ui-droppable .ui-droppable-active .ui-droppable-hover .ui-state-highlight')
    // }



    // Simulate panel elements
    simulateToggleExpand(){
        return ('.simulation-run-panel > .flow > .icon-codap-inspectorArrow-expand')
    }
    simulateToggleCollapse(){
        return ('.simulation-run-panel > .flow > .icon-codap-inspectorArrow-collapse')
    }
    experimentCounter(){
        return ('.experiment-counter > .count')
    }
    experimentIncrementButton(){
        return ('.experiment-counter > .increment')
    }
    recordDataButton(){
        return ('.simulation-run-panel .buttons .vertical .horizontal > .button > .horizontal > .vertical > .horizontal > span')
    }

    undoButton(){
        return ('.misc-actions > .icon-codap-arrow-undo')
    }
    redoButton(){
        return ('.misc-actions > .icon-codap-arrow-redo')
    }
    infoButton(){
        return('.icon-codap-help')
    }

    // Tool palette elements
    styleToolButton(){
        return ('.inspector-panel .tool-panel .icon-codap-styles')
    }
    valuesToolButton(){
        return ('.inspector-panel .tool-panel .icon-codap-values')
    }
    qualitativeRelationshipToolButton(){
        return ('.inspector-panel .tool-panel .icon-codap-qualRel')
    }
    simSettingsToolButton(){
        return ('.inspector-panel .tool-panel .icon-codap-options');
    }

    nodeStyleInspectorViewDeleteImage(){
        return ('.node-inspector-view > .inspector-content > .edit-row > .node-delete')
    }
    nodeValueSlider(){
        return ('.inspector-panel-content > .value-inspector > .inspector-content > .full > .slider > input')
    }
    nodeCollectorCheckbox(){
        return ('.inspector-panel-content > .value-inspector > .inspector-content > .checkbox > label > input')
    }
    nodeDefineWithTitle(){
        return ('.inspector-panel-content > .value-inspector > .bottom-pane > p')
    }
    nodeChangeDefineWith(){
        return ('.inspector-panel-content > .value-inspector > .bottom-pane > p > .node-switch-edit-mode')
    }

    nodeRelationshipNodeMenuItem(){
        return ('.relation-inspector > .tabbed-panel > .tabbed-panel-left > .workspace-tabs > ul > li')
    }
    nodeRelationshipNodeSource(){
        return ('.workspace-tab-component > div > .link-relation-view > div > .top  > div > span.source')
    }
    nodeRelationshipNodeTarget(){
        return ('.workspace-tab-component > div > .link-relation-view > div > .top  > div > span.target')
    }
    nodeRelationshipIncrease(){
        return ('.workspace-tab-component > div > .link-relation-view > div > .top  > div.full > .bb-select > select > option[value="increase"]')
    }
    nodeRelationshipDecrease(){
        return ('.workspace-tab-component > div > .link-relation-view > div > .top  > div.full > .bb-select > select > option[value="decrease"]')
    }
    nodeRelationshipVary(){
        return ('.workspace-tab-component > div > .link-relation-view > div > .top  > div.full > .bb-select > select > option[value="vary"]')
    }
    nodeRelationshipEffectByAboutTheSame(){
        return ('.workspace-tab-component > div > .link-relation-view > div > .top  > div.full > .bb-select > select > option[value="aboutTheSame"]')
    }
    nodeRelationshipEffectByALot(){
        return ('.workspace-tab-component > div > .link-relation-view > div > .top  > div.full > .bb-select > select > option[value="aLot"]')
    }
    nodeRelationshipEffectByALittle(){
        return ('.workspace-tab-component > div > .link-relation-view > div > .top  > div.full > .bb-select > select > option[value="aLittle"]')
    }
    nodeRelationshipEffectByMoreAndMore(){
        return ('.workspace-tab-component > div > .link-relation-view > div > .top  > div.full > .bb-select > select > option[value="moreAndMore"]')
    }
    nodeRelationshipEffectBylessAndLess(){
        return ('.workspace-tab-component > div > .link-relation-view > div > .top  > div.full > .bb-select > select > option[value="lessAndLess"]')
    }

}

export default Document;