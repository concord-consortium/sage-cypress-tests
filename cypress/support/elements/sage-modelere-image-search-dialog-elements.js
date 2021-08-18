const SageModelerImageSearchDialogElements = {
    TXT_SEARCH_FIELD: '.image-search-dialog .image-search-dialog-form input[type=\"text\"]',
    BTN_SEARCH: '.image-search-dialog .image-search-dialog-form input[type=\"submit\"]',
    SEARCH_RESULTS: '.image-search-dialog-results',
    BTN_ADD_IMAGE: '.image-search-dialog .preview-add-image button',
    BTN_CLOSE_DIALOG: 'i.modal-dialog-title-close',
}

export function getNthImage(n){
    return SageModelerImageSearchDialogElements.SEARCH_RESULTS + ' img:nth-child(' + n + ')';
}

export function getNthImageModel(n){
    let dataIndex = n-1;
    return '.palette-inspector .palette .palette-image[data-index=\"' + dataIndex + '\"]';
}

export default SageModelerImageSearchDialogElements;