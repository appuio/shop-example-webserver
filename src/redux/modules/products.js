import "whatwg-fetch";
import { checkStatus, parseJSON } from "../../utils/fetch";

// actions
const REQUEST = 'app/products/REQUEST';
const RECEIVE = 'app/products/RECEIVE';
const FAIL = 'app/products/FAIL';

// reducer
const reducer = (state = {
  loading: false,
  items: [],
  error: null
}, action) => {
  switch (action.type) {
    case REQUEST:
      return {
        ...state,
        loading: true
      };

    case RECEIVE:
      return {
        ...state,
        loading: false,
        items: action.payload.items
      };

    case FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.message
      };

    default:
      return state;
  }
};

// action creators
const productsRequest = () => ({ type: REQUEST });
const productsReceive = (products) => ({ type: RECEIVE, payload: products });
const productsFail = (error) => ({ type: FAIL, payload: error });

export const fetchProducts = () => (dispatch, getState) => {
  // if the products were already loaded, resolve and use cache
  if (getState().products.data) {
    return Promise.resolve();
  }

  // start a new request
  dispatch(productsRequest());

  // call the api
  fetch('https://api-vshn-demoapp1.appuioapp.ch/products')
    .then(checkStatus)
    .then(parseJSON)
    .then(json => dispatch(productsReceive(json)))
    .catch(error => dispatch(productsFail(error)))
};

// export the reducer as default
export default reducer;

