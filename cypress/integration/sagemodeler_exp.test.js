import CfmObject from "../support/elements/CfmObject"
import Codap from "../support/elements/Codap";

const cfm = new CfmObject;
const codap = new Codap

context('Sagemodeler',()=>{
    it('visit sagemodeler',()=>{
        cy.visit('https://sagemodeler.concord.org/app/')
        cfm.openDocFromModal()
        cfm.openExampleDoc("Bathtub - static")
        cy.wait(3000)
    })
    it('click on table icon',()=>{
        cy.getSageIframe().within((sageFrame)=>{
            cy.getPluginIframe().within(($sagemodeler)=>{
                cy.wrap($sagemodeler).within(()=>{
                    codap.getToolbarButton().contains('Table').click();
                    // codap.openSageTableTile('SageModeler Data')
                })
            })

        })
    })
})