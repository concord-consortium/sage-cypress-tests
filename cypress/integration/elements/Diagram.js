import Document from './Document'
const document= new Document

class Diagram {

    nodeName(){
        return ('.node-title-box');
    }
    nodeNameInput(){
        return ('input.node-title');
    }
    node(){
        return('.elm.ui-draggable')
    }
    nodeLinkButton() {
        return ('.node-link-button')
    }
    relationshipArrow(){
        return( '.jsplumb-connector')
    }

    addNode(posX, posY, name){
            cy.log('in addNode');
            cy.getSageIframe().find(document.paletteNode())
                .trigger('mousedown',{which: 1});
            cy.getSageIframe().find(document.canvas())
                .trigger('mousemove',{pageX:posX, pageY:posY})
                .trigger('mouseup', {force:true});
            cy.wait(1000);
            cy.getSageIframe().find(this.nodeName()).last().click().find(this.nodeNameInput({force:true})).last().click({force:true}).type(name, {force:true}).type('{enter}', {force:true});
            cy.wait(2000);
    };

    addRelationship(){ //only adds relationship from first added noded and last added node
        cy.getSageIframe().find(this.nodeLinkButton()).first()
            .trigger('mousedown',{which:1});
        cy.getSageIframe().find(this.node()).last()
            .trigger('mousemove')
            .trigger('mouseup',{force:true})
    }

}
export default Diagram;