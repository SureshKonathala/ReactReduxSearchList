
export function searchText(text:String){
  return {
    type: 'SEARCH_TEXT',
    'text': text
  }
};

export const toggleInStock = (flag:boolean) => {
  return {
    type: 'IN_STOCK',
    value: flag
  }
};

export const loadProducts = (products:Array<any>) => {
  return {
    type: 'LOAD_PRODUCTS',
    products
  }
};
