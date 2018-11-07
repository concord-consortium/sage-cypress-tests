import Document from './Document'
class SimSettings{

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

    // New Image Dialog elements
    addNewImageButton(){
        return ('.palette-add-image')
    }
    addNewImageDialogTitle(){
        return ('.modal-dialog-title')
    }
    addnewImageDialogCloseIcon(){
        return ('.modal-dialog-title > .modal-dialog-title-close')
    }
    newImageDialogMenuItem(){
        return ('.tabbed-panel-left.image-browser > .workspace-tabs > ul > li')
    }
    newImageSearchDialogTextEntry(){
        return ('.image-serach-dialog > div > .image-search-dialog-form > form > input[type="text"]')
    }
    newImageSearchDialogSearchButton(){
        return ('.image-serach-dialog > div > .image-search-dialog-form > form > input[type="submit"]')
    }
    newImageSearchResults(){
        return ('.image-search-dialog-results > img')
    }
    newImageSearchResultsPaginationPrevious(){
        return ('.image-search-dialog-pagination > .image-search-prev-next-link')
    }
    newImageSearchResultsPaginationNext(){
        return ('.image-search-dialog-pagination > .image-search-prev-next-link')
    }
    newImageSearchPageLink(){
        return ('.image-search-dialog-pagination > .image-search-page-link')
    }
    newImageMyComputerUpload(){
        return ('.my-computer-dialog > p > input[type="file"]')
    }
    newImageURL(){
        return ('.workspace-tab-component.image-browser > div > .link-dialog > div > p >  input[type="text"]')
    }
    newImagePreviewImageButton(){
        return ('.image-search-dialog > div > .image-search-dialog-form > form > input[type="text"]')
    }

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

export default SimSettings;