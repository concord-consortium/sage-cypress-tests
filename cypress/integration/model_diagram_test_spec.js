import Document from './elements/Document'
import SimSettings from './elements/SimSettings'
const document = new Document;
const simSettings = new SimSettings;

context('Model Diagram sim setting UI verificaton', function(){
    describe('Models', function(){
        it('will set up document as a model only', function() {
                cy.getSageIframe().find(document.simSettingsToolButton()).click();
                cy.getSageIframe().find(simSettings.settingRadioModel()).contains("Model diagram").siblings('input[type="radio"]').check();
        });
        // it.only("lets you drag a node onto canvas", () => {
        //     cy.getSageIframe().find('.proto-node')
        //         .trigger('mousedown', { which: 1 })
        //
        //     cy.getSageIframe().find('.ui-droppable')
        //         .trigger('mousemove', { pageX: 200, pageY: 200 })
        //         .trigger('mouseup', { force: true })
        //
        //     cy.getSageIframe().find(".ui-droppable").contains(".elm.ui-draggable", "Untitled")
        // })
        it('will add nodes to document', function(){
            var nodeName1 = 'Node1',
                nodeName2 = 'Node2';
                cy.getSageIframe().find(document.paletteNode())
                    .trigger('mousedown',{which: 1});
                cy.getSageIframe().find(document.canvas())
                    .trigger('mousemove',{pageX:250, pageY:250})
                    .trigger('mouseup', {force:true});
                cy.wait(1000);
                cy.getSageIframe().find(document.nodeName()).click().find(document.nodeNameInput({force:true})).click({force:true}).type(nodeName1, {force:true}).type('{enter}', {force:true});
                cy.wait(2000);
                cy.getSageIframe().find(document.paletteNode())
                    .trigger('mousedown',{which: 1});
                cy.getSageIframe().find(document.canvas())
                    .trigger('mousemove', {pageX:450,pageY:250})
                    .trigger('mouseup', {force:true});
                cy.wait(1000);
                cy.getSageIframe().find(document.nodeName()).last().click().find(document.nodeNameInput()).last().click({force:true}).type(nodeName2, {force:true}).type('{enter}',{force:true});
        });
    })
});