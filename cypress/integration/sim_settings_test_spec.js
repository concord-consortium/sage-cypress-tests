import SimSettings from "./elements/SimSettings"
import Document from "./elements/Document"

let simSettings = new SimSettings;
let document = new Document;

context('Test sim settings', function(){
    describe('test the different sim settings', function(){
        it('will check tool palette for Model diagram', function(){
            cy.get('iframe').iframe().then(($iframe)=>{
                cy.wrap($iframe).find(document.simSettingsToolButton()).click();
                cy.wrap($iframe).find(simSettings.settingsInspectorPanel()).click();
                cy.wrap($iframe).find(simSettings.modelDiagramSetting()).click();
                cy.wrap($iframe).find(simSettings.modelDiagramSetting()).contains("Model diagram").siblings('input[type="radio"]').check();

                //verify that tool palette only shows paintbrush
                cy.wrap($iframe).find(document.styleToolButton()).should('be.visible');
                cy.wrap($iframe).find(document.simSettingsToolButton()).should('be.visible');
                cy.wrap($iframe).find(document.valuesToolButton()).should('not.be.visible');
                cy.wrap($iframe).find(document.qualitativeRelationshipToolButton()).should('not.be.visible');
                //verify that sim settings only has three listed items visible, and all three are enabled, but only model diagram is checked
                cy.wrap($iframe).find(simSettings.settingsInspectorPanel()).should('be.visible')
                    cy.wrap($iframe).find(simSettings.settingRadioModel()).contains('Model').siblings('input[type="radio"]').should('be.checked');
                    cy.wrap($iframe).find(simSettings.settingRadioStatic()).contains('Static').siblings('input[type="radio"]').should('not.be.checked');
                    cy.wrap($iframe).find(simSettings.settingRadioDynamic()).contains('Dynamic').siblings('input[type="radio"]').should('not.be.checked');
            })
        })
        it('will check tool palette for Static Equilibrium simulation', function() {

        });
        it('will check tool palette for Dynamic time-based simulation', function(){

        });
    })



});