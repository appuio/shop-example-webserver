import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import reducer from './orders'

// configure the mock store
const mockStore = configureMockStore([thunk.withExtraArgument({fetch})])

const initialState = {
  loading: false,
  data: null,
  error: null
}

describe('orders - reducer', () => {

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  /*it('should handle CHECKOUT_REQUEST', () => {
   expect(reducer(initialState, checkoutRequest)).toEqual({
   loading: true,
   data: null,
   error: null
   })
   })

   it('should handle CHECKOUT_RECEIVE', () => {
   expect(reducer(initialState, checkoutReceive())).toEqual({
   loading: false,
   data: {
   products: [1, 2, 3]
   },
   error: null
   })
   })

   it('should handle CHECKOUT_FAIL', () => {
   expect(reducer(initialState, checkoutFail('FAIL'))).toEqual({
   loading: false,
   data: null,
   error: 'FAIL'
   })
   })

   it('should handle successful checkout (async)', () => {
   // setup the store
   const store = mockStore({checkout: initialState})

   // setup a successful mock response
   fetch.mockResponseOnce(JSON.stringify({
   success: true,
   data: {
   items: [
   {uuid: '', quantity: 3},
   {uuid: '', quantity: 5}
   ]
   }
   }), {status: 200, statusText: 'OK'})

   // check whether the correct actions are dispatched
   store.dispatch(checkout({
   items: [
   {uuid: '', quantity: 3},
   {uuid: '', quantity: 5}
   ]
   })).then(() => {
   expect(store.getActions()).toEqual([
   checkoutRequest(),
   checkoutReceive()
   ])
   })
   })

   it('should handle failed checkout (async)', () => {
   {
   // setup the store
   const store = mockStore({checkout: initialState})

   // setup a failed mock response
   fetch.mockResponseOnce(JSON.stringify({
   success: false,
   error: {
   message: 'blablabla'
   }
   }), {status: 404, statusText: 'NotFound'})

   // check whether the correct actions are dispatched
   store.dispatch(checkout([1, 2, 3])).then(() => {
   expect(store.getActions()).toEqual([
   checkoutRequest(),
   checkoutFail('NotFound')
   ])
   })
   }
   })*/

})
