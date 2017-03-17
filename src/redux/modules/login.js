import _get from 'lodash/get'
import {checkStatus, parseJSON, checkSuccess} from '../../utils/fetch'

// actions
const LOGIN_REQUEST = 'app/login/LOGIN_REQUEST'
const LOGIN_RECEIVE = 'app/login/LOGIN_RECEIVE'
const LOGIN_FAIL = 'app/login/LOGIN_FAIL'
const LOGOUT = 'app/login/LOGOUT'

// reducers
const reducer = (state = {
  loading: false,
  data: null,
  error: null
}, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true
      }

    case LOGIN_RECEIVE:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null
      }

    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.message
      }

    case LOGOUT:
      return {
        ...state,
        data: null,
        error: null
      }

    default:
      return state
  }
}

// action creators
export const loginRequest = () => ({type: LOGIN_REQUEST})
export const loginReceive = (data) => ({type: LOGIN_RECEIVE, payload: data})
export const loginFail = (message) => ({type: LOGIN_FAIL, payload: {message}})
export const logout = () => ({type: LOGOUT})

export const login = (email, password) => (dispatch, getState, {fetch}) => {
  // if there already is a token, resolve the promise early
  if (_get(getState(), 'login.data.token')) {
    return Promise.resolve()
  }

  // start a new request
  dispatch(loginRequest())

  // call the api
  fetch('http://172.28.128.3:4000/api/v1/users/login', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(checkSuccess)
    .then(json => dispatch(loginReceive(json)))
    .catch(error => dispatch(loginFail(error.message)))
}

export default reducer
