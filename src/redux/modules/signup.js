import {checkStatus, checkSuccess, parseJSON} from '../../utils/fetch'

// actions
const SIGNUP_REQUEST = 'app/login/SIGNUP_REQUEST'
const SIGNUP_RECEIVE = 'app/login/SIGNUP_RECEIVE'
const SIGNUP_FAIL = 'app/login/SIGNUP_FAIL'

// reducers
const reducer = (state = {
                   loading: false,
                   data: null,
                   error: null
                 }, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
        loading: true
      }

    case SIGNUP_RECEIVE:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null
      }

    case SIGNUP_FAIL:
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
export const signupRequest = () => ({type: SIGNUP_REQUEST})
export const signupReceive = (data) => ({type: SIGNUP_RECEIVE, payload: data})
export const signupFail = (message) => ({type: SIGNUP_FAIL, payload: {message}})

export const signup = (name, email, password) => (dispatch, getState, {fetch}) => {
  // start a new request
  dispatch(signupRequest())

  // call the api
  return fetch(`${process.env.REACT_APP_API_URL}/api/v1/users`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name,
      email,
      password
    })
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(checkSuccess)
    .then(json => dispatch(signupReceive(json)))
    .catch(error => dispatch(signupFail(error.message)))
}

export default reducer
