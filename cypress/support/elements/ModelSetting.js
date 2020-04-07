class ModelSetting{
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
export default ModelSetting