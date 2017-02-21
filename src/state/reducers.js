import * as Actions from "./actions";

const product = (state = {
  loading: false,
  data: null,
  error: null
}, action) => {
  switch (action.type) {
    case Actions.PRODUCT_REQUEST:
      return { ...state, loading: true };

    case Actions.PRODUCT_RECEIVE:
      return {
        ...state,
        loading: false,
        data: action.payload
      };

    case Actions.PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

const products = (state = {
  loading: false,
  data: null,
  error: null
}, action) => {
  switch (action.type) {
    case Actions.PRODUCTS_REQUEST:
      return { ...state, loading: true };

    case Actions.PRODUCTS_RECEIVE:
      return {
        ...state,
        loading: false,
        data: action.payload
      };

    case Actions.PRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export const rootReducer = {
  products,
  product
};
