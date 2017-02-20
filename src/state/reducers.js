import { combineReducers } from "redux";
import * as Actions from "./actions";

const product = (state, action) => {
  switch (action.type) {
    case Actions.PRODUCT_REQUEST:
    case Actions.PRODUCT_RECEIVE:
    case Actions.PRODUCT_FAIL:
    default:
      return state;
  }
};

const products = (state, action) => {
  switch (action.type) {
    case Actions.PRODUCTS_REQUEST:
    case Actions.PRODUCTS_RECEIVE:
    case Actions.PRODUCTS_FAIL:
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  products,
  product
});
