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
var redux_1 = require("redux");
var react_redux_1 = require("react-redux");
var reducers_1 = require("./../reducers/reducers");
var FilterableProductTable_1 = require("./FilterableProductTable");
var MainView1 = (function (_super) {
    __extends(MainView1, _super);
    function MainView1() {
        var _this = _super.call(this) || this;
        _this.store = redux_1.createStore(reducers_1.filterList);
        return _this;
    }
    MainView1.prototype.render = function () {
        return (
        // <MyComp1 id={'1'} name={'abc'}/>
        <react_redux_1.Provider store={this.store}>
        <FilterableProductTable_1.FilterableProductTable />
      </react_redux_1.Provider>);
    };
    return MainView1;
}(React.Component));
exports.MainView1 = MainView1;
