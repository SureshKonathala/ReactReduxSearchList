"use strict";
exports.__esModule = true;
function searchText(text) {
    return {
        type: 'SEARCH_TEXT',
        'text': text
    };
}
exports.searchText = searchText;
;
exports.toggleInStock = function (flag) {
    return {
        type: 'IN_STOCK',
        value: flag
    };
};
exports.loadProducts = function (products) {
    return {
        type: 'LOAD_PRODUCTS',
        products: products
    };
};
