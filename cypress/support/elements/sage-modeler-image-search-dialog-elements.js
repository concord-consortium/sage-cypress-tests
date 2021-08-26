const SageModelerImageSearchDialogElements = {
    TXT_SEARCH_FIELD: '.image-search-dialog .image-search-dialog-form input[type=\"text\"]',
    BTN_SEARCH: '.image-search-dialog .image-search-dialog-form input[type=\"submit\"]',
    SEARCH_RESULTS: '.image-search-dialog-results',
    BTN_ADD_IMAGE: '.image-search-dialog .preview-add-image button',
    BTN_CLOSE_DIALOG: 'i.modal-dialog-title-close',
    BTN_PREVIEW_IMAGE: 'input[value="Preview Image"]',

    TAB_MY_COMPUTER: '.image-browser',
    FILE_UPLOAD: '.my-computer-dialog > div > p > input[type="file"]'
}

export function getImageLinkTextBox(sageIframe){
    return sageIframe.find('.link-dialog').contains('p', 'Image URL');
}

export function getLinkTabComponent(sageIframe){
    return sageIframe.find('.workspace-tabs.image-browser ul').contains('li', 'Link');
}

export function getMyComputerTabComponent(sageIframe){
    return sageIframe.find('.workspace-tabs.image-browser ul').contains('li', 'My Computer');
}

export function getNthImage(n){
    return SageModelerImageSearchDialogElements.SEARCH_RESULTS + ' img:nth-child(' + n + ')';
}

export function getNthImageModel(n){
    let dataIndex = n-1;
    return '.palette-inspector .palette .palette-image[data-index=\"' + dataIndex + '\"]';
}

export default SageModelerImageSearchDialogElements;