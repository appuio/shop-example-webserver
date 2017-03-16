import reducer, {productsApplyFilter, productsRequest, productsReceive, productsFail} from './products'

const initialState = {
  loading: false,
  items: [],
  filtered: [],
  filters: {
    categories: [],
    licenseTypes: [],
    publishers: [],
    category: [],
    licenseType: [],
    publisher: [],
    query: null
  },
  error: null
};
const requestedState = {
  ...initialState,
  loading: true
}
const product1 = {
  product: {uuid: "1234-abcd", name: "Windows 10 Enterprise", price: 250},
  category: {id: 1, name: "Operating Systems"},
  licenseType: {id: 23, name: "Single-User"},
  publisher: {id: 45, name: "Microsoft"}
}
const product2 = {
  product: {uuid: "abcd-4567", name: "Gitlab EE", price: 1000},
  category: {id: 12, name: "Continuous Integration"},
  licenseType: {id: 43, name: "Volume licensing"},
  publisher: {id: 22, name: "Gitlab"}
}
const receivedState = {
  ...initialState,
  items: [
    product1,
    product2
  ],
  filtered: [
    product1,
    product2
  ],
  filters: {
    ...initialState.filters,
    categories: ["Continuous Integration", "Operating Systems"],
    licenseTypes: ["Single-User", "Volume license"],
    publishers: ["Gitlab", "Microsoft"]
  }
}

describe('products - reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('should handle REQUEST', () => {
    expect(reducer(initialState, productsRequest())).toEqual(requestedState)
  })

  it('should handle RECEIVE', () => {
    // if no products have been passed
    expect(reducer(requestedState, productsReceive([]))).toEqual({
      ...initialState,
      loading: false
    })

    // if some products have been passed
    expect(reducer(requestedState, productsReceive([
      product1,
      product2
    ]))).toEqual({
      ...initialState,
      loading: false,
      items: [
        product1,
        product2
      ],
      filtered: [
        product1,
        product2
      ],
      filters: {
        ...initialState.filters,
        categories: ["Continuous Integration", "Operating Systems"],
        licenseTypes: ["Single-User", "Volume licensing"],
        publishers: ["Gitlab", "Microsoft"]
      }
    })
  })

  it('should handle FAIL', () => {
    expect(reducer(requestedState, productsFail("failed"))).toEqual({
      ...initialState,
      error: "failed"
    })
  })

  it('should handle FILTER_APPLY', () => {
    expect(reducer(receivedState, productsApplyFilter("publisher", ["Microsoft"]))).toEqual({
      ...receivedState,
      filters: {
        ...receivedState.filters,
        publisher: ["Microsoft"]
      },
      filtered: [
        product1
      ]
    })

    expect(reducer(receivedState, productsApplyFilter("licenseType", ["Single-User"]))).toEqual({
      ...receivedState,
      filters: {
        ...receivedState.filters,
        licenseType: ["Single-User"]
      },
      filtered: [
        product1
      ]
    })

    expect(reducer(receivedState, productsApplyFilter("category", ["Continuous Integration"]))).toEqual({
      ...receivedState,
      filters: {
        ...receivedState.filters,
        category: ["Continuous Integration"]
      },
      filtered: [
        product2
      ]
    })

    expect(reducer(receivedState, productsApplyFilter("category", ["Blabla"]))).toEqual({
      ...receivedState,
      filters: {
        ...receivedState.filters,
        category: ["Blabla"]
      },
      filtered: []
    })

    expect(reducer(receivedState, productsApplyFilter("publisher", ["Blabla", "Microsoft"]))).toEqual({
      ...receivedState,
      filters: {
        ...receivedState.filters,
        publisher: ["Blabla", "Microsoft"]
      },
      filtered: [
        product1
      ]
    })
  })
})

/*
 // this doesn't work at the moment (https://github.com/node-nock/nock/issues/409)
 // TODO: use https://github.com/wheresrhys/fetch-mock?

 import configureMockStore from "redux-mock-store"
 import thunk from "redux-thunk"
 import nock from "nock"
 const middlewares = [thunk]
 const mockStore = configureMockStore(middlewares)
 describe('products - async', () => {
 afterEach(() => {
 nock.cleanAll()
 })

 it('can fetch products', () => {
 nock('https://api-vshn-demoapp1.appuioapp.ch/')
 .get('/products')
 .reply(200, {body: {success: true, items: []}})

 const store = mockStore({
 products: initialState
 })

 return store.dispatch(fetchProducts())
 .then(() => { // return of async actions

 })
 })
 }) */

