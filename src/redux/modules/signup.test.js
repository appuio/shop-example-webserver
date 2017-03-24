import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import reducer, {signup, signupFail, signupReceive, signupRequest} from './signup'

// configure the mock store
const mockStore = configureMockStore([thunk.withExtraArgument({fetch})])

const initialState = {
  loading: false,
  data: null,
  error: null
}

describe('signup - reducer', () => {

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('should handle SIGNUP_REQUEST', () => {
    expect(reducer(initialState, signupRequest())).toEqual({
      loading: true,
      data: null,
      error: null
    })
  })

  it('should handle SIGNUP_RECEIVE', () => {
    expect(reducer(initialState, signupReceive({id: 1}))).toEqual({
      loading: false,
      data: {
        id: 1
      },
      error: null
    })
  })

  it('should handle SIGNUP_FAIL', () => {
    expect(reducer(initialState, signupFail('FAIL'))).toEqual({
      loading: false,
      data: null,
      error: 'FAIL'
    })
  })

  it('should handle successful signup (async)', () => {
    // setup the store
    const store = mockStore({signup: initialState})

    // setup a successful mock response
    fetch.mockResponseOnce(JSON.stringify({
      success: true,
      data: {
        id: 1
      }
    }), {status: 201, statusText: 'Created'})

    // check whether the correct actions are dispatched
    store.dispatch(signup('name', 'email', 'password')).then(() => {
      expect(store.getActions()).toEqual([
        signupRequest(),
        signupReceive({id: 1})
      ])
    })
  })

  it('should handle failed login (async)', () => {
    {
      // setup the store
      const store = mockStore({signup: initialState})

      // setup a failed mock response
      fetch.mockResponseOnce(JSON.stringify({
        success: false,
        error: {
          message: 'blablabla'
        }
      }), {status: 404, statusText: 'NotFound'})

      // check whether the correct actions are dispatched
      store.dispatch(signup('name', 'email', 'password')).then(() => {
        expect(store.getActions()).toEqual([
          signupRequest(),
          signupFail('NotFound')
        ])
      })
    }
  })

})
