import reducer, {productFail, productReceive, productRequest} from './product'

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
})

