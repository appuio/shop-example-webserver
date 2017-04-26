import _get from 'lodash/get'
import _map from 'lodash/map'
import {checkStatus, checkSuccess, parseJSON} from '../../utils/fetch'

// actions
const CHECKOUT_REQUEST = 'app/login/CHECKOUT_REQUEST'
const CHECKOUT_RECEIVE = 'app/login/CHECKOUT_RECEIVE'
const CHECKOUT_FAIL = 'app/login/CHECKOUT_FAIL'

// reducers
const reducer = (state = {
  loading: false,
  data: null,
  error: null
}, action) => {
  switch (action.type) {
    case CHECKOUT_REQUEST:
      return {
        ...state,
        loading: true
      }

    case CHECKOUT_RECEIVE:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null
      }

    case CHECKOUT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.message
      }

    default:
      return state
  }
}

// action creators
export const checkoutRequest = () => ({type: CHECKOUT_REQUEST})
export const checkoutReceive = (data) => ({type: CHECKOUT_RECEIVE, payload: data})
export const checkoutFail = (message) => ({type: CHECKOUT_FAIL, payload: {message}})

export const checkout = () => (dispatch, getState, {fetch}) => {
  // start a new request
  dispatch(checkoutRequest())

  // call the api
  return fetch(`${process.env.REACT_APP_API_URL || '__API_URL__'}/api/v1/orders`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${_get(getState(), 'login.data.token')}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      products: _map(getState().cart.items, item => ({uuid: item.uuid, quantity: item.quantity}))
    })
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(checkSuccess)
    .then(json => dispatch(checkoutReceive(json)))
    .catch(error => dispatch(checkoutFail(error.message)))
}

export default reducer
