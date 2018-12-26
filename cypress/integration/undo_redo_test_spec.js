import Document from './elements/Document'
import SimSettings from './elements/SimSettings'
import Diagram from './elements/Diagram'
const document = new Document;
const simSettings = new SimSettings;
const diagram = new Diagram;

context('Test undo/redo in models', function(){
    describe('Models', function(){
        it('will set up document as a model only', function() {
            cy.getSageIframe().find(document.simSettingsToolButton()).click();
            cy.getSageIframe().find(simSettings.settingRadioModel()).contains("Model diagram").siblings('input[type="radio"]').check();
        });
        it('will undo and redo add nodes to document', function(){
            let nodeName1 = 'Node1',
                nodeName2 = 'Node2',
                nodeName3 = 'Node3';

            diagram.addNode(150,250,nodeName1);
            cy.getSageIframe().find(diagram.node()).then(($nodes)=>{ expect($nodes.length).be.greaterThan(0)});
            diagram.addNode(250,250,nodeName2);
            cy.getSageIframe().find(diagram.node()).then(($nodes)=>{ expect($nodes.length).be.greaterThan(1)});
            diagram.addNode(350,250,nodeName3);
            cy.getSageIframe().find(diagram.node()).then(($nodes)=>{ expect($nodes.length).be.greaterThan(2)});
            diagram.addNode(450,250,nodeName3);
            cy.getSageIframe().find(diagram.node()).then(($nodes)=>{ expect($nodes.length).be.greaterThan(3)});

            //undo add nodes
            cy.getSageIframe().find(document.undoButton()).click();
            cy.getSageIframe().find(diagram.node()).then(($nodes)=>{ expect($nodes.length).be.greaterThan(2)});
            cy.getSageIframe().find(document.undoButton()).click();
            cy.getSageIframe().find(diagram.node()).then(($nodes)=>{ expect($nodes.length).be.greaterThan(1)});
            cy.getSageIframe().find(document.undoButton()).click();
            cy.getSageIframe().find(diagram.node()).then(($nodes)=>{ expect($nodes.length).be.greaterThan(0)});

            //redo add nodes
            cy.getSageIframe().find(document.redoButton()).click();
            cy.getSageIframe().find(diagram.node()).then(($nodes)=>{ expect($nodes.length).be.greaterThan(1)});
            cy.getSageIframe().find(document.redoButton()).click();
            cy.getSageIframe().find(diagram.node()).then(($nodes)=>{ expect($nodes.length).be.greaterThan(2)});
            cy.getSageIframe().find(document.redoButton()).click();
            cy.getSageIframe().find(diagram.node()).then(($nodes)=>{ expect($nodes.length).be.greaterThan(3)});
        });
        it('will connect two nodes with a link', function(){
            diagram.addRelationship();
            cy.getSageIframe().find(diagram.relationshipArrow()).then(($arrow)=>{ expect($arrow.length).be.greaterThan(0)});

            //undo add relationship
            cy.log('undo add relationship');
            cy.getSageIframe().find(document.undoButton()).click();
            cy.getSageIframe().get(diagram.relationshipArrow()).should('not.exist');

            //redo add relationship
            cy.log('redo add relationship');
            cy.getSageIframe().find(document.redoButton()).click();
            cy.getSageIframe().find(diagram.relationshipArrow()).then(($arrow)=>{ expect($arrow.length).be.greaterThan(0)});
        });
    });

});