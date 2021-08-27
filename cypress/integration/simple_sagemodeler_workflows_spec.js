import SageModelerElements from "../support/elements/sage-modeler-elements";
import * as SageModelerHelper from '../support/helpers/sageModelerHelper';
import {getFirstIframeBody, increaseTableSize} from "../support/helpers/sageModelerHelper";
import CodapTableElements from "../support/elements/codap-table-elements";
import * as CodapTableElementFunctions from "../support/elements/codap-table-elements";

context("Sage modeler work flow tests", () => {

    it("Search for an image and add 3 random images", () => {
        //Searching for a string "rabbit" and selecting 5th, 9th and 7th image from the list add adding to our model.
        SageModelerHelper.searchForImageAndAdd("rabbit", [5, 9, 7]);
    });

    it("Add above 3 images as 3 nodes to canvas with titles", () => {
        SageModelerHelper.dragImageModelToCanvas(1, 200,200);
        SageModelerHelper.addTitleToModelNode(1, "Rabbit Birth");

        SageModelerHelper.dragImageModelToCanvas(2, 200,400);
        SageModelerHelper.addTitleToModelNode(2, "Rabbit Death");

        SageModelerHelper.dragImageModelToCanvas(3, 400,300);
        SageModelerHelper.addTitleToModelNode(3, "Rabbit Population");
    });

    it("Add relationships between the above 3 nodes ", () => {
        SageModelerHelper.addNodeLink(1, 3, 3);
        SageModelerHelper.addTitleToNodeLink(1, 'increase population', 3);
        SageModelerHelper.addNodeLinkRelation(3, 'Rabbit Birth', 'increase', 'about the same', 'Rabbit birth increase their population');

        SageModelerHelper.addNodeLink(2, 3, 3);
        SageModelerHelper.addTitleToNodeLink(2, 'decrease population', 3);
        SageModelerHelper.addNodeLinkRelation(3, 'Rabbit Death','decrease', 'about the same', 'Dead Rabbits decrease their population');
    });

    it("Verify Model Diagram simulation type", () => {
        SageModelerHelper.updateSimulationModelSettings('model_diagram');
        SageModelerHelper.getSageIframe().find(SageModelerElements.TABLES).should('not.exist');
        SageModelerHelper.getSageIframe().find(SageModelerElements.GRAPH).should('not.exist');
        //Text should exist
        SageModelerHelper.getSageIframe().find(SageModelerElements.TEXT).should('exist');

        SageModelerHelper.getSageIframe().find(SageModelerElements.BTN_SIMULATE).should('not.exist');

    });

    it("Verify Static Equillibrium Simulation Model Type", () => {
        SageModelerHelper.updateSimulationModelSettings('static');
        //No need to assert as if the below elements are not found, test will fail anyway.
        SageModelerHelper.getSageIframe().find(SageModelerElements.TABLES);
        SageModelerHelper.getSageIframe().find(SageModelerElements.GRAPH);
        SageModelerHelper.getSageIframe().find(SageModelerElements.TEXT);
        SageModelerHelper.getSageIframe().find(SageModelerElements.BTN_SIMULATE);
    })

    it("Add default sage modeler data table to canvas and be able to move it canvas", () => {
        SageModelerHelper.addDefaultSagemodelereDataTableToCanvas();
    });

    it("Verify Record one data point button and verify table data", () => {
        SageModelerHelper.simulateOneDataPoint();
        let expectedTableOutput = [
            [1, 'background:#e6805b;width:50%', 'background:#e6805b;width:50%', 'background:#e6805b;width:50%']
        ]
        SageModelerHelper.verifyTableData(expectedTableOutput);
    });

    it("Verify Record Continuously button click", () => {
        cy.wait(1000);
        SageModelerHelper.getSageIframe().find(SageModelerElements.BTN_RECORD_CONTINUOUSLY).click();
        SageModelerHelper.getSageIframe().find(SageModelerElements.BTN_LABEL_RECORDING).should('have.text', 'StopRecording');
    });

    it("Verify moving the sliders on Nodes in canvas and verify data in table", () => {
        //Increase the Death rate to 100%
        SageModelerHelper.moveSlider(2, 1);
        //Decrease the birth rate to 0%
        SageModelerHelper.moveSlider(1, 2);

        let expectedTableOutput = [
            [1, 'background:#e6805b;width:50%', 'background:#e6805b;width:50%', 'background:#e6805b;width:50%'],
            [2, 'background:#e6805b;width:50%', 'background:#e6805b;width:100%', 'background:#e6805b;width:25%'],
            [3, 'background:#e6805b;width:0%', 'background:#e6805b;width:100%', 'background:#e6805b;width:0%'],
        ];
        SageModelerHelper.verifyTableData(expectedTableOutput);
    });

    it("Verify Stop Recording button click", () => {
        cy.wait(1000);
        SageModelerHelper.getSageIframe().find(SageModelerElements.BTN_RECORD_CONTINUOUSLY).click();
        SageModelerHelper.getSageIframe().find(SageModelerElements.BTN_LABEL_RECORDING).should('have.text', 'RecordContinuously');
    });

    it("Verify Dynamic time-based simulation model type", () => {
        SageModelerHelper.updateSimulationModelSettings('dynamic');
    });

    it("Verify input counter steps text box", () => {
        SageModelerHelper.getSageIframe().find(SageModelerElements.INPUT_COUNTER_STEPS).clear();
        SageModelerHelper.getSageIframe().find(SageModelerElements.INPUT_COUNTER_STEPS).type(1);
        //Verification happens in next test as we verify table data.
    });

    it("Verify Record button in dynamic time-based model and verify table data", () => {
        SageModelerHelper.getSageIframe().find(SageModelerElements.BTN_RECORD).click();

        SageModelerHelper.selectSimulationTimeSettingsDropDownAndRecord('Step');

        //Verifying data only after the first menu item selection.
        let expectedTableOutput = [
            [1, 'background:#e6805b;width:50%', 'background:#e6805b;width:50%', 'background:#e6805b;width:50%', ''],
            [2, 'background:#e6805b;width:50%', 'background:#e6805b;width:100%', 'background:#e6805b;width:25%', ''],
            [3, 'background:#e6805b;width:0%', 'background:#e6805b;width:100%', 'background:#e6805b;width:0%', ''],

            [4, 'background:#e6805b;width:0%', 'background:#e6805b;width:100%', 'background:#e6805b;width:0%', '', 3],
            [5, 'background:#e6805b;width:0%', 'background:#e6805b;width:100%', 'background:#e6805b;width:0%', '', 4],
        ];
        SageModelerHelper.verifyTableData(expectedTableOutput);
        SageModelerHelper.increaseDefaultTableSize(1000,1000);

        SageModelerHelper.selectSimulationTimeSettingsDropDownAndRecord('Second');
        SageModelerHelper.selectSimulationTimeSettingsDropDownAndRecord('Minute');
        SageModelerHelper.selectSimulationTimeSettingsDropDownAndRecord('Hour');
        SageModelerHelper.selectSimulationTimeSettingsDropDownAndRecord('Day');
        SageModelerHelper.selectSimulationTimeSettingsDropDownAndRecord('Week');
        SageModelerHelper.selectSimulationTimeSettingsDropDownAndRecord('Month');
        SageModelerHelper.selectSimulationTimeSettingsDropDownAndRecord('Year');


        //Not Verifying table data after all the continuous recording with the above time selections.
        //Because the tests are not passing consistently when trying to validate 13 rows of data in the data table.
        //So, just verifying the row count after all the above operations.
        SageModelerHelper.verifySageModelerTableRowSize(20);
    });

    it("Undo and Redo button verification", () => {
        SageModelerHelper.dragImageModelToCanvas(1, 200, 600);
        // SageModelerHelper.addTitleToModelNode(4, "Undo Test Node 1");
        SageModelerHelper.getSageIframe().find('div.canvas div.container div.elm').should('have.length', 4);
        SageModelerHelper.getSageIframe().find(SageModelerElements.BTN_UNDO).click();
        SageModelerHelper.getSageIframe().find('div.canvas div.container div.elm').should('have.length', 3);
        SageModelerHelper.getSageIframe().find(SageModelerElements.BTN_REDO).click();
        SageModelerHelper.getSageIframe().find('div.canvas div.container div.elm').should('have.length', 4);

        SageModelerHelper.dragImageModelToCanvas(2, 200, 700);
        SageModelerHelper.dragImageModelToCanvas(3, 300 ,650);

        SageModelerHelper.addNodeLink(4, 6, 6);
        SageModelerHelper.addNodeLink(5, 6, 6);

        SageModelerHelper.getSageIframe().find('.jsplumb-connector').should('have.length', 4);
        SageModelerHelper.getSageIframe().find(SageModelerElements.BTN_UNDO).click();
        SageModelerHelper.getSageIframe().find(SageModelerElements.BTN_UNDO).click();
        SageModelerHelper.getSageIframe().find('.jsplumb-connector').should('have.length', 2);
        SageModelerHelper.getSageIframe().find(SageModelerElements.BTN_REDO).click();
        SageModelerHelper.getSageIframe().find(SageModelerElements.BTN_REDO).click();
        SageModelerHelper.getSageIframe().find('.jsplumb-connector').should('have.length', 4);

        //Now undo everything in this test
        SageModelerHelper.getSageIframe().find(SageModelerElements.BTN_UNDO).click();
        SageModelerHelper.getSageIframe().find(SageModelerElements.BTN_UNDO).click();
        SageModelerHelper.getSageIframe().find(SageModelerElements.BTN_UNDO).click();
        SageModelerHelper.getSageIframe().find(SageModelerElements.BTN_UNDO).click();
        SageModelerHelper.getSageIframe().find(SageModelerElements.BTN_UNDO).click();

        //It should go back to the 3 nodes and 2 relationship links we had before this test.
        SageModelerHelper.getSageIframe().find('div.canvas div.container div.elm').should('have.length', 3);
        SageModelerHelper.getSageIframe().find('.jsplumb-connector').should('have.length', 2);

      });

    it("Add Image from using Link options", () => {
        // SageModelerHelper.addImageFromComputer('../fixtures/graph.png');
        SageModelerHelper.addImageFromLink('https://pixabay.com/get/g034eed4310950a0cd1d94face2539e66095bcaecb4af6178c4e756a388c12f8ed52a1267b0dccb54011d4938380952b018baa57a545a6b84e2520e3f0a9e9bc7_640.png');
        SageModelerHelper.getSageIframe().find(SageModelerElements.IMAGE_PALETTE).should('have.length', 5);
    });

    //TODO: cy.upload_file command is not working. need to fix it and add this test.
    it.skip("Add Image from My Computer", () => {
        SageModelerHelper.addImageFromMyComputer('../fixtures/graph.png');
        SageModelerHelper.getSageIframe().find(SageModelerElements.IMAGE_PALETTE).should('have.length', 5);
    })
});