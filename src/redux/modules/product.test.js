import reducer from "./product"

const initialState = {
  loading: false,
  data: null,
  error: null
};

describe('product - utils', () => {

});

describe('product - reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })


})

