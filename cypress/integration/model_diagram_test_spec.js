import Document from './elements/Document'
import SimSettings from './elements/SimSettings'
const document = new Document;
const simSettings = new SimSettings;

context('Model Diagram sim setting UI verificaton', function(){
    describe('Models', function(){
        it('will set up document as a model only', function() {
            cy.get('iframe').iframe().then(($iframe) => {
                cy.wrap($iframe).find(document.simSettingsToolButton()).click();
                cy.wrap($iframe).find(simSettings.settingRadioModel()).contains("Model diagram").siblings('input[type="radio"]').check();
            })
        })
        it('will add nodes to document', function(){
            var nodeName1 = 'Node1',
                nodeName2 = 'Node2';
            cy.get('iframe').iframe().then(($iframe)=> {
                cy.wrap($iframe).find(document.paletteNode())
                    .trigger('mousedown',{which: 1}, {force:true});
                cy.wrap($iframe).find(document.canvasArea())
                    .trigger('mousemove', {which:1}, {force:true})
                    .trigger('mouseup', {force:true});
                cy.wait(1000);
                cy.wrap($iframe).find(document.nodeName()).click().find(document.nodeNameInput()).click().clear({force:true}).type(nodeName1, {force:true}).type('{enter}', {force:true});
                cy.wait(2000);
                cy.wrap($iframe).find(document.paletteNode())
                    .trigger('mousedown',{which: 1}, {force:true});
                cy.wrap($iframe).find(document.canvasArea())
                    .trigger('mousemove', {which:1}, {force:true})
                    .trigger('mouseup', {force:true});
                cy.wait(1000);
                cy.wrap($iframe).find(document.nodeName()).last().click().find(document.nodeNameInput()).last().click().clear({force:true}).type(nodeName2, {force:true}).type('{enter}',{force:true});
                cy.wait(2000);
                cy.wrap($iframe).find(document.canvasNode()).last()
                    .trigger('mousedown',{which: 1}, {force:true})
                    .trigger('mousemove', {which:1}, {force:true}, {clientX:250,clientY:150})
                    .trigger('mouseup', {force:true});
            });
        });
    })
});