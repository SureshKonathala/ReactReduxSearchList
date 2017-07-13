var PRODUCTS:Array<any> = [
  {category: 'Sporting Goods', price: '$59.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

//Simulating REST call where Products are retrived after 2s
export const getProducts = (filterText: any)=> {
  return new Promise((resolve: any,reject: any) =>{
    setTimeout(()=> { console.log("isLoaded: "+filterText); resolve(PRODUCTS) }
      ,2000);
  });
};

export const filterList = (state:any={
  productList: [],
  isLoading: false,
  isLoaded: false,
  filterText: '',
  inStockOnly: false
},action:any) => {
  switch (action.type){
    case 'SEARCH_TEXT':
      return {...state,filterText:action.text};

    case 'IN_STOCK':
      return {...state,inStockOnly:action.value};

    case 'LOADING_PRODUCTS':
      return {...state,isLoading:true}

    case 'LOAD_PRODUCTS':
      return {...state,productList: action.products,isLoaded:true,isLoading:false}
    default:
      return state
  }

}
