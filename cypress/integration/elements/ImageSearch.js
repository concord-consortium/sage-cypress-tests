import Document from './Document'
const document = new Document;

class ImageSearch{

    addNewImageDialogTitle(){
        return ('.modal-dialog-title')
    }
    addNewImageDialogCloseIcon(){
        return ('.modal-dialog-title > .modal-dialog-title-close')
    }
    newImageDialogMenuItem(){
        return ('.tabbed-panel-left.image-browser > .workspace-tabs > ul > li')
    }
    newImageSearchDialogTextEntry(){
        return ('.image-search-dialog > div > .image-search-dialog-form > form > input[type="text"]')
    }
    newImageSearchDialogSearchButton(){
        return ('.image-search-dialog > div > .image-search-dialog-form > form > input[type="submit"]')
    }
    newImageSearchResults(){
        return ('.image-search-dialog-results')
    }
    newImageSearchResultItem(){
        return ('.image-search-dialog-results > img')
    }
    newImageSearchResultsPaginationPrevious(){
        return ('.image-search-dialog-pagination > .image-search-prev-next-link')
    }
    newImageSearchResultsPaginationNext(){
        return ('.image-search-dialog-pagination > .image-search-prev-next-link')
    }
    newImageSearchPageLink(){
        return ('.image-search-dialog-pagination > .image-search-page-link')
    }
    newImageMyComputerUpload(){
        return ('.my-computer-dialog > div > p > input[type="file"]')
    }
    newImageURL(){
        return ('.workspace-tab-component.image-browser > div > .link-dialog > div > p >  input[type="text"]')
    }
    newImageLinkPreviewButton(){
        return ('.link-dialog > div > p > input[value="Preview Image"]')
    }
    newImageLinkLinkField(){
        return ('.image-search-dialog > div > .preview-metadata > .image-metadata > div >table > tbody >tr:nth-child(2) > td > input')
    }
    newImageLinkTitleField(){
        return ('.image-search-dialog > div > .preview-metadata > .image-metadata > div >table > tbody >tr:nth-child(1) > td > input')
    }
    newImagePreviewImageButton(){
        return ('.image-search-dialog > div > .image-search-dialog-form > form > input[type="text"]')
    }
    previewYourImageTitle(){
        return ('.image-search-dialog > div > .header')
    }
    imagePreview(){
        return ('.image-search-dialog > div > .preview-image > img')
    }
    imageMetadata(){
        return('.image-search-dialog > div > .preview-metadata')
    }
    addImageButton(){
        return('.image-search-dialog > div > .preview-add-image > button')
    }
    cancelPreviewImage(){
        return ('.image-search-dialog > div > .preview-image > a[href="#"]')
    }
    openAddNewImageDialog(){
        cy.get(document.addNewImageButton()).click();
        cy.get(this.addNewImageDialogTitle()).should('be.visible').should('contain', 'Add New Image');
    }
    closeAddNewImageDialog(){
        cy.get(this.addNewImageDialogCloseIcon()).click();
        cy.get(this.addNewImageDialogTitle()).should('not.be.visible');
    }
    searchByImageSearch(text){
        cy.get(this.newImageDialogMenuItem()).contains('Image Search').click();
        cy.get(this.newImageSearchDialogTextEntry()).click().type(text); //To bring text field into focus
        cy.get(this.newImageSearchDialogSearchButton()).click();
    }
    addNewImage(){
        cy.get(this.addImageButton()).click();
    }
}
export default ImageSearch;