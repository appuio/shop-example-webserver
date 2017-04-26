import _get from 'lodash/get'
import {checkStatus, parseJSON} from '../../utils/fetch'

// actions
const REQUEST = 'app/orders/REQUEST'
const RECEIVE = 'app/orders/RECEIVE'
const FAIL = 'app/orders/FAIL'

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
export const ordersRequest = () => ({type: REQUEST})
export const ordersReceive = (products) => ({type: RECEIVE, payload: products})
export const ordersFail = (message) => ({type: FAIL, payload: message})

export const fetchOrders = () => (dispatch, getState, {fetch}) => {
  // start a new request
  dispatch(ordersRequest())

  // call the api
  return fetch(`${process.env.REACT_APP_API_URL || '__API_URL__'}/api/v1/orders`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${_get(getState(), 'login.data.token')}`
    }
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(json => dispatch(ordersReceive(json.data)))
    .catch(error => dispatch(ordersFail(error.message)))
}

// export the reducer as default
export default reducer

