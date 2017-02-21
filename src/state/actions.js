import "whatwg-fetch";
import { checkStatus, parseJSON } from "../utils/utils";

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

export const fetchProducts = () => (dispatch, getState) => {
  if (getState().products.data) {
    return Promise.resolve();
  }

  dispatch(productsRequest());

  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(checkStatus)
    .then(parseJSON)
    .then(json => dispatch(productsReceive(json)))
    .catch(error => dispatch(productsFail(error)))
};

export const fetchProduct = (id) => (dispatch, getState) => {
  if (getState().product.data && getState().product.data.id === id) {
    return Promise.resolve();
  }

  dispatch(productRequest(id));

  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(checkStatus)
    .then(parseJSON)
    .then(json => dispatch(productReceive(json)))
    .catch(error => dispatch(productFail(error)))
};

/*
 import { combineEpics } from "redux-observable";
 import { Observable } from 'rxjs';
 import { ajax } from "rxjs/observable/dom/ajax";

 export const productsFail = (error) => Observable.of({
 type: PRODUCTS_FAIL,
 payload: error.xhr.response
 });

 export const productFail = (error) => Observable.of({
 type: PRODUCT_FAIL,
 payload: error.xhr.response
 });

 const fetchProductsEpic = action$ =>
  action$.ofType(PRODUCTS_REQUEST)
 .switchMap(action =>
      ajax.getJSON(`https://jsonplaceholder.typicode.com/posts`)
        .map(response => productsReceive(response))
        .catch(error => productsFail(error))
    );

const fetchProductEpic = action$ =>
  action$.ofType(PRODUCT_REQUEST)
 .switchMap(action =>
 ajax.getJSON(`https://jsonplaceholder.typicode.com/posts/${action.payload}`)
        .map(response => productReceive(response))
        .catch(error => productFail(error))
    );

export const rootEpic = combineEpics(
  fetchProductsEpic,
  fetchProductEpic
);
 */
