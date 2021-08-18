import Document from '../support/elements/Document'
import SimSettings from '../support/elements/SimSettings'
import Diagram from '../support/elements/Diagram'
import ValueSettings from '../support/elements/ValueSettings'

const document = new Document;
const simSettings = new SimSettings;
const diagram = new Diagram;
const valueSettings = new ValueSettings;

context('Static Diagram sim setting tests', function(){
    describe('Set up a static basic diagram', function(){
        it('will set up document as a static basic ', function() {
            cy.getSageIframe().find(document.simSettingsToolButton()).click();
            cy.getSageIframe().find(simSettings.settingRadioStatic()).contains("Static equilibrium").siblings('input[type="radio"]').check();
            cy.getSageIframe().find(simSettings.settingSubmenu()).contains("Basic").siblings('input[type="radio"]').check();

        });
        it('will add nodes to document', function(){
            let nodeName1 = 'Node1',
                nodeName2 = 'Node2';

            diagram.addNode(250,250,nodeName1);
            cy.getSageIframe().find(diagram.node()).then(($nodes)=>{ expect($nodes.length).be.greaterThan(0)});
            diagram.addNode(450,250,nodeName2);
            cy.getSageIframe().find(diagram.node()).then(($nodes)=>{ expect($nodes.length).be.greaterThan(1)});
        });
        it('will connect two nodes with a link', function(){
            diagram.addRelationship();
            cy.getSageIframe().find(diagram.relationshipArrow()).then(($arrow)=>{ expect($arrow.length).be.greaterThan(0)});
        });
    });

    describe('Verify UI is correct', function(){
        it('will verify Simulate toggle is visible', function(){
            cy.getSageIframe().find(document.simulateToggleExpand()).then(($toggle)=>{expect($toggle).to.be.visible})
        });
        it('will verify all tool palette buttons are visible ', function(){
            cy.getSageIframe().find(document.toolButtons()).then(($button)=>{expect($button.length).to.equal(4)})
        });
        it('will verify there are two record buttons, one for 1 data point and one for record data stream', function(){
            cy.getSageIframe().find(document.simulateToggleExpand()).click();
            cy.getSageIframe().find(document.recordDataPointButton()).contains('Data Point').should('be.visible');
            cy.getSageIframe().find(document.recordDataStreamButton()).contains('Data Stream').should('be.visible');
            cy.getSageIframe().find(document.experimentCounter()).should('be.visible');
        });
    })
    describe('Verify node settings are correct', function(){
        it('will verify nodes cannot be collectors', function(){
            cy.getSageIframe().find(diagram.node()).click();
            cy.getSageIframe().find(document.valuesToolButton()).click()
            cy.getSageIframe().find(valueSettings.checkbox).contains('Collector').should('not.exist');
            cy.getSageIframe().find(valueSettings.checkbox).contains('below zero').should('not.exist');
        });
        it('will verify nodes can be switch to numbers and vice versa', function(){
            
        });
        it('will verify nodes can only have 2 effects - increase and decrease', function(){

        });
        it('will verify relationship setting is disabled when node does not have a relationship pointing to it', function(){

        });
    })
    describe('Verify node settings are restored on re-open of panel', function(){
        it('will change node effects', function(){

        });
        it('will enter reasoning text', function(){

        });
        it('will verify relationship symbols are showing when setting is turned on', function(){
            cy.getSageIframe().get(document.simSettingsToolButton()).click();
            cy.getSageIframe().get(simSettings.settingRelationshipSymbols()).click();
            cy.getSageIframe().get(simSettings.settingRelationshipSymbols()).should('be.checked');

        });
    });
    describe('Verify simulation can be run', function(){
        it('will record 1 data point', function(){

        });
        it('will record a data stream', function(){

        });
        it('will increment experiment number', function(){

        });
    })
    describe('Set-up static expanded diagram', function(){
        it('will change setting to expanded set of relationships', function(){

        });
        it('will verify nodes can have 3 effects - increase, decrease, vary', function(){

        });
    })
})