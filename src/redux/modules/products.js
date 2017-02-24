import {checkStatus, parseJSON} from "../../utils/fetch"

// actions
const REQUEST = 'app/products/REQUEST'
const RECEIVE = 'app/products/RECEIVE'
const FAIL = 'app/products/FAIL'

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
      }

    case RECEIVE:
      return {
        ...state,
        loading: false,
        items: action.payload || []
      }

    case FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    default:
      return state
  }
}

// action creators
export const productsRequest = () => ({type: REQUEST})
export const productsReceive = (products) => ({type: RECEIVE, payload: products})
export const productsFail = (message) => ({type: FAIL, payload: message})

export const fetchProducts = () => (dispatch, getState, {fetch}) => {
  // if the products were already loaded, resolve and use cache
  if (getState().products.items.length > 0) {
    return Promise.resolve()
  }

  // start a new request
  dispatch(productsRequest())

  // call the api
  fetch('https://api-vshn-demoapp1.appuioapp.ch/products')
    .then(checkStatus)
    .then(parseJSON)
    .then(json => dispatch(productsReceive(json.items)))
    .catch(error => dispatch(productsFail(error.message)))
}

// export the reducer as default
export default reducer

