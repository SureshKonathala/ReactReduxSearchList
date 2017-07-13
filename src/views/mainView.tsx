import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import {filterList} from './../reducers/reducers';
import {FilterableProductTable} from "./FilterableProductTable"

export class MainView1 extends React.Component<{},{}>{
  store:any;

  constructor(){
    super();
    this.store = createStore(filterList,applyMiddleware(thunk));
  }

  render(){
    return (
      // <MyComp1 id={'1'} name={'abc'}/>
      <Provider store={this.store}>
        <FilterableProductTable />
      </Provider>
    );
  }
}
