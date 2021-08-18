import SageModelerElements from "../support/elements/sage-modeler-elements";
import Document from '../support/elements/Document'
import SageModelerImageSearchDialogElements from "../support/elements/sage-modelere-image-search-dialog-elements";
import * as SageModelereImageSearchFunctions from "../support/elements/sage-modelere-image-search-dialog-elements";
import * as SageModelerHelper from '../support/helpers/sageModelerHelper';
import {addNodeLinkRelation, searchForImageAndAdd} from "../support/helpers/sageModelerHelper";

const document = new Document;

context("Sage modeler new document tests", () => {

    it("Select new document and some images", () => {
        // cy.visit('https://sagemodeler.concord.org/app/');
        // cy.get(SageModelerElements.BTN_CREATE_NEW_DOCUMENT).click();
        // cy.wait(2000);
        SageModelerHelper.searchForImageAndAdd("rabbit", [5, 9, 7]);

        SageModelerHelper.dragImageModelToCanvas(1, 200,200);
        SageModelerHelper.addTitleToModelNode(1, "Rabbit Birth");

        SageModelerHelper.dragImageModelToCanvas(2, 200,400);
        SageModelerHelper.addTitleToModelNode(2, "Rabbit Death");

        SageModelerHelper.dragImageModelToCanvas(3, 300,300);
        SageModelerHelper.addTitleToModelNode(3, "Rabbit Population");

        SageModelerHelper.addNodeLink(1, 3);
        SageModelerHelper.addTitleToNodeLink(1, 'increase population', 3);
        SageModelerHelper.addNodeLinkRelation(3, 'Rabbit Birth', 'increase', 'about the same', 'Rabbit birth increase their population');

        SageModelerHelper.addNodeLink(2, 3);
        SageModelerHelper.addTitleToNodeLink(2, 'decrease population', 3);
        SageModelerHelper.addNodeLinkRelation(3, 'Rabbit Death','decrease', 'about the same', 'Dead Rabbits decrease their population');

    });

});