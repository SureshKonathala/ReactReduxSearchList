import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {connect} from 'react-redux';

import {SearchBar, ProductTable} from "./ProductTable";
import * as Actions from './../actions/actions';
import {filterList} from './../reducers/reducers';
import {getProducts} from './../reducers/reducers';

function mapStateToProps(state:any){
 return {
   products: state.productList,
   filterText: state.filterText,
   inStockOnly: state.inStockOnly,
   isLoaded: state.isLoaded,
   isLoading: state.isLoading
 }
}

// With Thunks we dispatch a function which takes dispatch as input
// Advantage is this function can have an optional getState function so that this function can get access to state
let loadProductsA = (dispatch: any,getState: any) => {
  dispatch({type:'LOADING_PRODUCTS'});
  getProducts(getState().filterText).then((products: Array<any>)=>dispatch(Actions.loadProducts(products)))
}


 const mapDispatchToProps = (dispatch:any)=>{
   return {
     handleFilterTextInput: (text:any) => {
       dispatch(Actions.searchText(text));
     },
     handleInStockInput: (inStockOnly:any) =>{
       dispatch(Actions.toggleInStock(inStockOnly));
     },
     //With Out Thunks
    //  loadProducts: () => {
    //    dispatch({type:'LOADING_PRODUCTS'});
    //    getProducts().then((products: Array<any>)=>dispatch(Actions.loadProducts(products)))
     //
    //  }
    //With Thunks
    loadProducts: ()=> dispatch(loadProductsA),
   }
 }

@connect(mapStateToProps,mapDispatchToProps)
export class FilterableProductTable extends React.Component<any,any> {
  constructor(props:any) {
    super(props);
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.props.filterText}
          inStockOnly={this.props.inStockOnly}
          onFilterTextInput={this.props.handleFilterTextInput}
          onInStockInput={this.props.handleInStockInput}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.props.filterText}
          inStockOnly={this.props.inStockOnly}
          isLoaded={this.props.isLoaded}
          isLoading={this.props.isLoading}
          loadProducts={this.props.loadProducts}
        />
      </div>
    );
  }
}
