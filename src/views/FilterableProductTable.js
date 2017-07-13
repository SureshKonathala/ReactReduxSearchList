"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var React = require("react");
var react_redux_1 = require("react-redux");
var ProductTable_1 = require("./ProductTable");
var Actions = require("./../actions/actions");
var reducers_1 = require("./../reducers/reducers");
function mapStateToProps(state) {
    return {
        products: state.productList,
        filterText: state.filterText,
        inStockOnly: state.inStockOnly,
        isLoaded: state.isLoaded,
        isLoading: state.isLoading
    };
}
var mapDispatchToProps = function (dispatch) {
    return {
        handleFilterTextInput: function (text) {
            dispatch(Actions.searchText(text));
        },
        handleInStockInput: function (inStockOnly) {
            dispatch(Actions.toggleInStock(inStockOnly));
        },
        loadProducts: function () {
            dispatch({ type: 'LOADING_PRODUCTS' });
            reducers_1.getProducts().then(function (products) { return dispatch(Actions.loadProducts(products)); });
        }
    };
};
var FilterableProductTable = (function (_super) {
    __extends(FilterableProductTable, _super);
    function FilterableProductTable(props) {
        return _super.call(this, props) || this;
    }
    FilterableProductTable.prototype.render = function () {
        return (<div>
        <ProductTable_1.SearchBar filterText={this.props.filterText} inStockOnly={this.props.inStockOnly} onFilterTextInput={this.props.handleFilterTextInput} onInStockInput={this.props.handleInStockInput}/>
        <ProductTable_1.ProductTable products={this.props.products} filterText={this.props.filterText} inStockOnly={this.props.inStockOnly} isLoaded={this.props.isLoaded} isLoading={this.props.isLoading} loadProducts={this.props.loadProducts}/>
      </div>);
    };
    return FilterableProductTable;
}(React.Component));
FilterableProductTable = __decorate([
    react_redux_1.connect(mapStateToProps, mapDispatchToProps)
], FilterableProductTable);
exports.FilterableProductTable = FilterableProductTable;
