import Document from './elements/Document'
import SimSettings from './elements/SimSettings'
import Diagram from './elements/Diagram'
const document = new Document;
const simSettings = new SimSettings;
const diagram = new Diagram;

context('Model Diagram sim setting UI verificaton', function(){
    describe('Models', function(){
        it('will set up document as a model only', function() {
            cy.getSageIframe().find(document.simSettingsToolButton()).click();
            cy.getSageIframe().find(simSettings.settingRadioModel()).contains("Model diagram").siblings('input[type="radio"]').check();
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
        it('will verify Simulate toggle is not visible', function(){
            cy.getSageIframe().find(document.simulateToggleExpand()).then(($toggle)=>{expect($toggle.length).be(0)})
        });
        it('will verify Values and Qualitative Relationship buttons are not visible ', function(){
            cy.getSageIframe().find(document.toolButtons()).then(($button)=>{expect($button.length).be(2)})
        });
    });
});