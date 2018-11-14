import Document from './elements/Document'
import ImageSearch from './elements/ImageSearch'

const document = new Document;
const imageSearch = new ImageSearch;
var imageResult1='',
    imageResult2='';


context('Add New Image modal dialog', function(){
    describe('adds image via different sources', function(){
        it('will open and close the Add New Image dialog', function () {
            cy.get('iframe').iframe().then(($iframe)=> {
                cy.wrap($iframe).find(document.addNewImageButton()).click();
                cy.wrap($iframe).find(imageSearch.addNewImageDialogCloseIcon()).click();
            });
        });
        describe('add an image via Image Search', function () {
            it('will search for an image ', function () {
                var text = 'candy';
                cy.get('iframe').iframe().then(($iframe)=> {
                    cy.wrap($iframe).find(document.addNewImageButton()).click();
                    cy.wrap($iframe).find(imageSearch.newImageDialogMenuItem()).contains('Image Search').click();
                    cy.wrap($iframe).find(imageSearch.newImageSearchDialogTextEntry()).click().type(text);
                    cy.wrap($iframe).find(imageSearch.newImageSearchDialogSearchButton()).click();
                    cy.wait(2000);
                    cy.wrap($iframe).find(imageSearch.newImageSearchResultItem()).then(($results)=>           {
                        expect($results.length).be.greaterThan(0);
                    });
                    cy.wrap($iframe).find(imageSearch.newImageSearchResultsPaginationNext()).contains('Next').should('be.visible').and('be.enabled');
                    cy.wrap($iframe).find(imageSearch.newImageSearchResultsPaginationPrevious()).contains('Previous').should('be.visible');
                    cy.wrap($iframe).find(imageSearch.newImageSearchPageLink()).contains('2').should('be.enabled');
                    cy.wrap($iframe).find(imageSearch.newImageSearchResultItem()).first().click();
                    cy.wrap($iframe).find(imageSearch.previewYourImageTitle()).should('be.visible');
                    cy.wrap($iframe).find(imageSearch.imagePreview()).should('have.attr', 'src').should('include', 'openclipart');
                })
            });
            it('will cancel an image selection', function () { //piggy backs off of will search for an image test
                cy.get('iframe').iframe().then(($iframe)=> {

                    cy.wrap($iframe).find(imageSearch.cancelPreviewImage()).should('be.visible').click();
                    cy.wrap($iframe).find(imageSearch.newImageSearchResults()).should('be.visible');
                })
            });
            it('will paginate through search results', function () { //piggy backs off cancel an image selection test
                cy.get('iframe').iframe().then(($iframe)=> {

                    cy.wrap($iframe).find(imageSearch.newImageSearchResultsPaginationNext()).contains('Next').click();
                    // cy.wrap($iframe).find(imageSearch.newImageSearchPageLink()).contains('2').should('be.disabled');
                    cy.wrap($iframe).find(imageSearch.newImageSearchPageLink()).contains('1').should('be.enabled');
                    cy.wrap($iframe).find(imageSearch.newImageSearchResultsPaginationPrevious()).contains('Previous').click();
                    // cy.wrap($iframe).find(imageSearch.newImageSearchPageLink()).contains('1').should('be.disabled');
                    cy.wrap($iframe).find(imageSearch.newImageSearchPageLink()).contains('2').should('be.enabled');
                })
            });
            it('will add an image via Image Search', function () {
                cy.get('iframe').iframe().then(($iframe)=> {
                    cy.wrap($iframe).find(imageSearch.newImageSearchResultItem()).first().should('have.attr', 'src').then((href) => {
                        imageResult1 = href;
                    });
                    cy.wrap($iframe).find(imageSearch.newImageSearchResultItem()).first().click();
                    cy.wrap($iframe).find(imageSearch.addImageButton()).click();
                    cy.wrap($iframe).find(imageSearch.newImageSearchResults()).should('be.visible');
                    cy.wrap($iframe).find(imageSearch.newImageSearchResultItem()).first().should('have.attr', 'src').then((href2) => {
                        imageResult2 = href2;
                        expect(imageResult2).not.to.eq(imageResult1);
                    });
                    cy.wrap($iframe).find(imageSearch.addNewImageDialogCloseIcon()).click();
                    cy.wrap($iframe).find(document.imageNodes()).then(($nodes)=>{ expect($nodes.length).be.greaterThan(1)});
                });
            })
        });
    });

    it('will add an image via My Computer', function(){
        cy.get('iframe').iframe().then(($iframe)=> {
            cy.wrap($iframe).find(document.addNewImageButton()).click();
            cy.wrap($iframe).find(imageSearch.newImageDialogMenuItem()).contains('My Computer').click();
            cy.upload_file('../fixtures/graph.png', imageSearch.newImageMyComputerUpload(), $iframe);
            cy.wrap($iframe).find(imageSearch.addImageButton()).click();
            cy.wrap($iframe).find(imageSearch.addNewImageDialogCloseIcon()).click();
            cy.wrap($iframe).find(document.imageNodes()).then(($nodes)=>{ expect($nodes.length).be.greaterThan(1)});
        });
    });

    it('will add an image via Link', function(){
        cy.get('iframe').iframe().then(($iframe)=> {
            var imageURL='https://codap.concord.org/~eireland/graph.png';
            var imageTitle='graph';
            cy.wrap($iframe).find(document.addNewImageButton()).click();
            cy.wrap($iframe).find(imageSearch.newImageDialogMenuItem()).contains('Link').click();
            cy.wrap($iframe).find(imageSearch.newImageURL()).should('be.visible').click().type('https://codap.concord.org/~eireland/graph.png');
            cy.wrap($iframe).find(imageSearch.newImageLinkPreviewButton()).click();

            cy.wrap($iframe).find(imageSearch.newImageLinkTitleField()).click().type(imageTitle);
            cy.wrap($iframe).find(imageSearch.newImageLinkLinkField()).should('have.attr', 'value').and('contain', imageURL);

            cy.wrap($iframe).find(imageSearch.addImageButton()).click();

            cy.wrap($iframe).find(imageSearch.addNewImageDialogCloseIcon()).click();
            cy.wrap($iframe).find(document.imageNodes()).then(($nodes)=>{ expect($nodes.length).be.greaterThan(2)});
        });
    });
});