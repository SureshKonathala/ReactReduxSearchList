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
exports.__esModule = true;
var React = require("react");
var ProductCategoryRow = (function (_super) {
    __extends(ProductCategoryRow, _super);
    function ProductCategoryRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProductCategoryRow.prototype.render = function () {
        return (<tr><th colSpan={2}></th>{this.props.category}</tr>);
    };
    return ProductCategoryRow;
}(React.Component));
exports.ProductCategoryRow = ProductCategoryRow;
var ProductRow = (function (_super) {
    __extends(ProductRow, _super);
    function ProductRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProductRow.prototype.render = function () {
        var name = this.props.product.stocked ?
            this.props.product.name :
            <span style={{ color: 'red' }}>
        {this.props.product.name}
      </span>;
        return (<tr>
        <td>{name}</td>
        <td>{this.props.product.price}</td>
      </tr>);
    };
    return ProductRow;
}(React.Component));
var ProductTable = (function (_super) {
    __extends(ProductTable, _super);
    function ProductTable(props) {
        var _this = _super.call(this, props) || this;
        _this.loadProducts = _this.loadProducts.bind(_this);
        return _this;
    }
    ProductTable.prototype.loadProducts = function () {
        this.props.loadProducts();
    };
    ProductTable.prototype.render = function () {
        var _this = this;
        var rows = [];
        var lastCategory = null;
        console.log(this.props.inStockOnly);
        if (this.props.isLoading == true) {
            rows = ["Loading ...."];
        }
        else if (this.props.isLoaded == false) {
            this.loadProducts();
        }
        else {
            this.props.products.forEach(function (product) {
                if (product.name.indexOf(_this.props.filterText) === -1 || (!product.stocked && _this.props.inStockOnly)) {
                    return;
                }
                if (product.category !== lastCategory) {
                    rows.push(<ProductCategoryRow category={product.category} key={product.category}/>);
                }
                rows.push(<ProductRow product={product} key={product.name}/>);
                lastCategory = product.category;
            });
        }
        return (<table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>);
    };
    return ProductTable;
}(React.Component));
exports.ProductTable = ProductTable;
var SearchBar = (function (_super) {
    __extends(SearchBar, _super);
    function SearchBar(props) {
        var _this = _super.call(this, props) || this;
        _this.handleFilterTextInputChange = _this.handleFilterTextInputChange.bind(_this);
        _this.handleInStockInputChange = _this.handleInStockInputChange.bind(_this);
        return _this;
    }
    SearchBar.prototype.handleFilterTextInputChange = function (e) {
        this.props.onFilterTextInput(e.target.value);
    };
    SearchBar.prototype.handleInStockInputChange = function (e) {
        this.props.onInStockInput(e.target.checked);
    };
    SearchBar.prototype.render = function () {
        return (<form>
        <input type="text" placeholder="Search..." value={this.props.filterText} onChange={this.handleFilterTextInputChange}/>
        <p>
          <input type="checkbox" checked={this.props.inStockOnly} onChange={this.handleInStockInputChange}/>
          {' '}
          Only show products in stock
        </p>
      </form>);
    };
    return SearchBar;
}(React.Component));
exports.SearchBar = SearchBar;
