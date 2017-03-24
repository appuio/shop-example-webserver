import _forEach from 'lodash/forEach'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import reducer, {login, loginFail, loginReceive, loginRequest, logout} from './login'

// configure the mock store
const mockStore = configureMockStore([thunk.withExtraArgument({fetch})])

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

  it('should resolve early if already logged in', () => {
    // setup the store
    const store = mockStore({login: loggedInState})

    // check whether any actions are performed
    store.dispatch(login('email', 'password')).then(() => {
      expect(store.getActions()).toEqual([])
    })
  })

  it('should handle successful login (async)', () => {
    // setup the store
    const store = mockStore({login: initialState})

    // setup a successful mock response
    fetch.mockResponseOnce(JSON.stringify({
      success: true,
      data: {
        token: 'JWT'
      }
    }), {status: 200, statusText: 'OK'})

    // check whether the correct actions are dispatched
    store.dispatch(login('email', 'password')).then(() => {
      expect(store.getActions()).toEqual([
        loginRequest(),
        loginReceive({token: 'JWT'})
      ])

      // checking whether the state is valid would be an improvement
      // this doesn't work with redux-mock-store as is
      /* expect(store.getState()).toEqual({
       login: {
       loading: false,
       data: {
       token: 'JWT'
       },
       error: null
       }
       }) */
    })
  })

  it('should handle failed login (async)', () => {
    {
      // setup the store
      const store = mockStore({login: initialState})

      // setup a failed mock response
      fetch.mockResponseOnce(JSON.stringify({
        success: false,
        error: {
          message: 'blablabla'
        }
      }), {status: 404, statusText: 'NotFound'})

      // check whether the correct actions are dispatched
      store.dispatch(login('email', 'password')).then(() => {
        expect(store.getActions()).toEqual([
          loginRequest(),
          loginFail('NotFound')
        ])
      })
    }
  })

})
