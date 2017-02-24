import reducer, {productsRequest, productsReceive, productsFail} from "./products"

const initialState = {
  loading: false,
  items: [],
  error: null
};
const requestedState = {
  ...initialState,
  loading: true
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
      {name: "testing", price: 100},
      {name: "tester", price: 200}
    ]))).toEqual({
      ...initialState,
      loading: false,
      items: [
        {name: "testing", price: 100},
        {name: "tester", price: 200}
      ]
    })
  })

  it('should handle FAIL', () => {
    expect(reducer(requestedState, productsFail("failed"))).toEqual({
      ...initialState,
      error: "failed"
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

