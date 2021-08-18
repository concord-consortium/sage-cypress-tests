import Document from '../support/elements/Document'
import ImageSearch from '../support/elements/ImageSearch'

const document = new Document;
const imageSearch = new ImageSearch;
var imageResult1='',
    imageResult2='';


context('Add New Image modal dialog', function(){
    describe('adds image via different sources', function(){
        it('will open and close the Add New Image dialog', function () {
                cy.getSageIframe().find(document.addNewImageButton()).click();
                cy.getSageIframe().find(imageSearch.addNewImageDialogCloseIcon()).click();

        });
        describe('add an image via Image Search', function () {
            it('will search for an image ', function () {
                var text = 'candy';
                    cy.getSageIframe().find(document.addNewImageButton()).click();
                    cy.getSageIframe().find(imageSearch.newImageDialogMenuItem()).contains('Image Search').click();
                    cy.getSageIframe().find(imageSearch.newImageSearchDialogTextEntry()).click().type(text);
                    cy.getSageIframe().find(imageSearch.newImageSearchDialogSearchButton()).click();
                    cy.wait(2000);
                    cy.getSageIframe().find(imageSearch.newImageSearchResultItem()).then(($results)=>           {
                        expect($results.length).be.greaterThan(0);
                    });
                    cy.getSageIframe().find(imageSearch.newImageSearchResultsPaginationNext()).contains('Next').should('be.visible').and('be.enabled');
                    cy.getSageIframe().find(imageSearch.newImageSearchResultsPaginationPrevious()).contains('Previous').should('be.visible');
                    cy.getSageIframe().find(imageSearch.newImageSearchPageLink()).contains('2').should('be.enabled');
                    cy.getSageIframe().find(imageSearch.newImageSearchResultItem()).first().click();
                    cy.getSageIframe().find(imageSearch.previewYourImageTitle()).should('be.visible');
                    cy.getSageIframe().find(imageSearch.imagePreview()).should('have.attr', 'src').should('include', 'openclipart');
            });
            it('will cancel an image selection', function () { //piggy backs off of will search for an image test
                    cy.getSageIframe().find(imageSearch.cancelPreviewImage()).should('be.visible').click();
                    cy.getSageIframe().find(imageSearch.newImageSearchResults()).should('be.visible');

            });
            it('will paginate through search results', function () { //piggy backs off cancel an image selection test
                    cy.getSageIframe().find(imageSearch.newImageSearchResultsPaginationNext()).contains('Next').click();
                    // cy.getSageIframe().find(imageSearch.newImageSearchPageLink()).contains('2').should('be.disabled');
                    cy.getSageIframe().find(imageSearch.newImageSearchPageLink()).contains('1').should('be.enabled');
                    cy.getSageIframe().find(imageSearch.newImageSearchResultsPaginationPrevious()).contains('Previous').click();
                    // cy.getSageIframe().find(imageSearch.newImageSearchPageLink()).contains('1').should('be.disabled');
                    cy.getSageIframe().find(imageSearch.newImageSearchPageLink()).contains('2').should('be.enabled');

            });
            it('will add an image via Image Search', function () {
                    cy.getSageIframe().find(imageSearch.newImageSearchResultItem()).first().should('have.attr', 'src').then((href) => {
                        imageResult1 = href;
                    });
                    cy.getSageIframe().find(imageSearch.newImageSearchResultItem()).first().click();
                    cy.getSageIframe().find(imageSearch.addImageButton()).click();
                    cy.getSageIframe().find(imageSearch.newImageSearchResults()).should('be.visible');
                    cy.getSageIframe().find(imageSearch.newImageSearchResultItem()).first().should('have.attr', 'src').then((href2) => {
                        imageResult2 = href2;
                        expect(imageResult2).not.to.eq(imageResult1);
                    });
                    cy.getSageIframe().find(imageSearch.addNewImageDialogCloseIcon()).click();
                    cy.getSageIframe().find(document.paletteNode()).then(($nodes)=>{ expect($nodes.length).be.greaterThan(3)});
            })
        });

        it.skip('will add an image via My Computer', function(){
                cy.getSageIframe().find(document.addNewImageButton()).click();
                cy.getSageIframe().find(imageSearch.newImageDialogMenuItem()).contains('My Computer').click();
                cy.upload_file('../fixtures/graph.png', imageSearch.newImageMyComputerUpload());
                cy.getSageIframe().find(imageSearch.addImageButton()).click();
                cy.getSageIframe().find(imageSearch.addNewImageDialogCloseIcon()).click();
                cy.getSageIframe().find(document.paletteNode()).then(($nodes)=>{ expect($nodes.length).be.greaterThan(1)});
        });

        it.skip('will add an image via Link', function(){
                var imageURL='https://codap.concord.org/~eireland/graph.png';
                var imageTitle='graph';
                cy.getSageIframe().find(document.addNewImageButton()).click();
                cy.getSageIframe().find(imageSearch.newImageDialogMenuItem()).contains('Link').click();
                cy.getSageIframe().find(imageSearch.newImageURL()).should('be.visible').click().type('https://codap.concord.org/~eireland/graph.png');
                cy.getSageIframe().find(imageSearch.newImageLinkPreviewButton()).click();

                cy.getSageIframe().find(imageSearch.newImageLinkTitleField()).click().type(imageTitle);
                cy.getSageIframe().find(imageSearch.newImageLinkLinkField()).should('have.attr', 'value').and('contain', imageURL);

                cy.getSageIframe().find(imageSearch.addImageButton()).click();

                cy.getSageIframe().find(imageSearch.addNewImageDialogCloseIcon()).click();
                cy.getSageIframe().find(document.paletteNode()).then(($nodes)=>{ expect($nodes.length).be.greaterThan(2)});
        });
    });

});