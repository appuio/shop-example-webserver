import _forEach from 'lodash/forEach'
import reducer, {loginFail, loginReceive, loginRequest, logout} from './login'

const initialState = {
  loading: false,
  data: null,
  error: null
}

const loggedInState = {
  loading: false,
  data: {
    token: 'JWT'
  },
  error: null
}

describe('login - reducer', () => {

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('should handle LOGIN_REQUEST', () => {
    expect(reducer(initialState, loginRequest())).toEqual({
      loading: true,
      data: null,
      error: null
    })
  })

  it('should handle LOGIN_RECEIVE', () => {
    expect(reducer(initialState, loginReceive({token: 'JWT'}))).toEqual({
      loading: false,
      data: {
        token: 'JWT'
      },
      error: null
    })
  })

  it('should handle LOGIN_FAIL', () => {
    expect(reducer(initialState, loginFail('FAIL'))).toEqual({
      loading: false,
      data: null,
      error: 'FAIL'
    })
  })

  it('should handle LOGOUT', () => {
    _forEach([initialState, loggedInState], state => {
      expect(reducer(state, logout())).toEqual({
        loading: false,
        data: null,
        error: null
      })
    })
  })

  it('should handle login (async)', () => {

  })

})
