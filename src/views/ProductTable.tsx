import * as React from "react";
import * as ReactDOM from "react-dom";

export class ProductCategoryRow extends React.Component<any,any>{
  render(){
    return (<tr><th colSpan={2}></th>{this.props.category}</tr>);
  }
}

class ProductRow extends React.Component<any,any> {
  render() {
    var name = this.props.product.stocked ?
      this.props.product.name :
      <span style={{color: 'red'}}>
        {this.props.product.name}
      </span>;
    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
}

export class ProductTable extends React.Component<any,any> {
  constructor(props:any) {
    super(props);
    this.loadProducts = this.loadProducts.bind(this);
  }

  loadProducts() {
    this.props.loadProducts();
  }

  render() {
    var rows:Array<any> = [];
    var lastCategory:any = null;
    console.log(this.props.inStockOnly)

    if(this.props.isLoading == true)
    {
      rows = ["Loading ...."];
    }
    else if(this.props.isLoaded == false){
      this.loadProducts();
    }
    else
    {
      this.props.products.forEach((product:any) => {
        if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
          return;
        }
        if (product.category !== lastCategory) {
          rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
        }
        rows.push(<ProductRow product={product} key={product.name} />);
        lastCategory = product.category;
      });
    }
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export class SearchBar extends React.Component<any,any> {
  constructor(props:any) {
    super(props);
    this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
    this.handleInStockInputChange = this.handleInStockInputChange.bind(this);
  }

  handleFilterTextInputChange(e:any) {
    this.props.onFilterTextInput(e.target.value);
  }

  handleInStockInputChange(e:any) {
    this.props.onInStockInput(e.target.checked);
  }

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={this.handleFilterTextInputChange}
        />
        <p>
          <input
            type="checkbox"
            checked={this.props.inStockOnly}
            onChange={this.handleInStockInputChange}
          />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}
