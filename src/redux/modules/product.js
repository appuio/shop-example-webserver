import {checkStatus, parseJSON} from '../../utils/fetch'

// actions
const REQUEST = 'app/product/REQUEST'
const RECEIVE = 'app/product/RECEIVE'
const FAIL = 'app/product/FAIL'

// reducer
const reducer = (state = {
                   loading: false,
                   data: null,
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
        data: action.payload || null
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
export const productRequest = (id) => ({type: REQUEST, payload: id})
export const productReceive = (product) => ({type: RECEIVE, payload: product})
export const productFail = (error) => ({type: FAIL, payload: error})

export const fetchProduct = (id) => (dispatch, getState, {fetch}) => {
  // if the product was already loaded, resolve and use cache
  if (getState().product.data && getState().product.data.id === id) {
    return Promise.resolve()
  }

  // start a new request
  dispatch(productRequest(id))

  // call the api
  return fetch(`${process.env.REACT_APP_API_URL}/api/v1/products/${id}`)
    .then(checkStatus)
    .then(parseJSON)
    // .then(checkSuccess)
    .then(json => dispatch(productReceive(json.data)))
    .catch(error => dispatch(productFail(error.message)))
}

// export the reducer as default
export default reducer
