import "whatwg-fetch";
import { checkStatus, parseJSON } from "../utils/utils";

// actions
export const REQUEST = 'app/product/REQUEST';
export const RECEIVE = 'app/product/RECEIVE';
export const FAIL = 'app/product/FAIL';

// reducer
const reducer = (state = {
  loading: false,
  data: null,
  error: null
}, action) => {
  switch (action.type) {
    case REQUEST:
      return { ...state, loading: true };

    case RECEIVE:
      return {
        ...state,
        loading: false,
        data: action.payload
      };

    case FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

// action creators
const productRequest = (id) => ({ type: REQUEST, payload: id });
const productReceive = (product) => ({ type: RECEIVE, payload: product });
const productFail = (error) => ({ type: FAIL, payload: error });

export const fetchProduct = (id) => (dispatch, getState) => {
  // if the product was already loaded, resolve and use cache
  if (getState().product.data && getState().product.data.id === id) {
    return Promise.resolve();
  }

  // start a new request
  dispatch(productRequest(id));

  // call the api
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(checkStatus)
    .then(parseJSON)
    .then(json => dispatch(productReceive(json)))
    .catch(error => dispatch(productFail(error)))
};

// export the reducer as default
export default reducer;
