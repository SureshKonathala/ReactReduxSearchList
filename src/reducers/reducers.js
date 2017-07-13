"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var PRODUCTS = [
    { category: 'Sporting Goods', price: '$59.99', stocked: true, name: 'Football' },
    { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
    { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
    { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
    { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
    { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
];
//Simulating REST call where Products are retrived after 2s
exports.getProducts = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () { resolve(PRODUCTS); }, 2000);
    });
};
exports.filterList = function (state, action) {
    if (state === void 0) { state = {
        productList: [],
        isLoading: false,
        isLoaded: false,
        filterText: '',
        inStockOnly: false
    }; }
    switch (action.type) {
        case 'SEARCH_TEXT':
            return __assign({}, state, { filterText: action.text });
        case 'IN_STOCK':
            return __assign({}, state, { inStockOnly: action.value });
        case 'LOADING_PRODUCTS':
            return __assign({}, state, { isLoading: true });
        case 'LOAD_PRODUCTS':
            return __assign({}, state, { productList: action.products, isLoaded: true, isLoading: false });
        default:
            return state;
    }
};
