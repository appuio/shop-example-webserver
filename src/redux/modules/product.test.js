import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import reducer, {fetchProduct, productFail, productReceive, productRequest} from './product'

// configure the mock store
const mockStore = configureMockStore([thunk.withExtraArgument({fetch})])

const initialState = {
  loading: false,
  data: null,
  error: null
}
const requestedState = {
  ...initialState,
  loading: true
}

describe('product - reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('should handle REQUEST', () => {
    expect(reducer(initialState, productRequest())).toEqual(requestedState)
  })

  it('should handle RECEIVE', () => {
    // if no product data has been passed
    expect(reducer(requestedState, productReceive())).toEqual({
      ...initialState,
      loading: false
    })

    // if some product data has been passed
    expect(reducer(requestedState, productReceive({
      name: 'tester',
      price: 100
    }))).toEqual({
      ...initialState,
      loading: false,
      data: {
        name: 'tester',
        price: 100
      }
    })
  })

  it('should handle FAIL', () => {
    expect(reducer(requestedState, productFail('failed'))).toEqual({
      ...initialState,
      error: 'failed'
    })
  })

  it('should resolve early if the same product was already loaded', () => {
    // setup the store
    const store = mockStore({
      product: {
        ...initialState,
        data: {
          id: 1
        }
      }
    })

    // check if the cached product is reused
    store.dispatch(fetchProduct(1)).then(() => {
      expect(store.getActions()).toEqual([])
    })
  })

  it('should handle successful fetching (async)', () => {
    // setup the store
    const store = mockStore({product: initialState})

    // setup a successful mock response
    fetch.mockResponseOnce(JSON.stringify({
      success: true,
      data: {
        id: 1
      }
    }), {status: 200, statusText: 'OK'})

    // check whether the correct actions are dispatched
    store.dispatch(fetchProduct(1)).then(() => {
      expect(store.getActions()).toEqual([
        productRequest(1),
        productReceive({id: 1})
      ])
    })
  })

  it('should handle failed fetching (async)', () => {
    // setup the store
    const store = mockStore({product: initialState})

    // setup a failed mock response
    fetch.mockResponseOnce(JSON.stringify({
      success: false,
      error: {
        message: 'blablabla'
      }
    }), {status: 404, statusText: 'NotFound'})

    // check whether the correct actions are dispatched
    store.dispatch(fetchProduct(1)).then(() => {
      expect(store.getActions()).toEqual([
        productRequest(1),
        productFail('NotFound')
      ])
    })
  })

})

