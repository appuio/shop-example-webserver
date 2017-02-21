import { ajax } from "rxjs/observable/dom/ajax";
import { combineEpics } from "redux-observable";

export const PRODUCTS_REQUEST = 'PRODUCTS_REQUEST';
export const productsRequest = () => ({ type: PRODUCTS_REQUEST });

export const PRODUCTS_RECEIVE = 'PRODUCTS_RECEIVE';
export const productsReceive = (products) => ({ type: PRODUCTS_RECEIVE, payload: products });

export const PRODUCTS_FAIL = 'PRODUCTS_FAIL';
export const productsFail = (error) => ({ type: PRODUCTS_FAIL, payload: error });

export const PRODUCT_REQUEST = 'PRODUCT_REQUEST';
export const productRequest = (id) => ({ type: PRODUCT_REQUEST, payload: id });

export const PRODUCT_RECEIVE = 'PRODUCT_RECEIVE';
export const productReceive = (product) => ({ type: PRODUCT_RECEIVE, payload: product });

export const PRODUCT_FAIL = 'PRODUCT_FAIL';
export const productFail = (error) => ({ type: PRODUCT_FAIL, payload: error });

const fetchProductsEpic = action$ =>
  action$.ofType(PRODUCTS_REQUEST)
    .mergeMap(action =>
      ajax.getJSON(`https://jsonplaceholder.typicode.com/posts`)
        .map(response => productsReceive(response))
        .catch(error => productsFail(error))
    );

const fetchProductEpic = action$ =>
  action$.ofType(PRODUCT_REQUEST)
    .mergeMap(action =>
      ajax.getJSON(`https://jsonplaceholder.typicode.com/posts/1`)
        .map(response => productReceive(response))
        .catch(error => productFail(error))
    );

export const rootEpic = combineEpics(
  fetchProductsEpic,
  fetchProductEpic
);
