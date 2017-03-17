import reducer from './login'

const jwt = 'JWT'

const initialState = {
  loading: false,
  data: null,
  error: null
}

describe('login - reducer', () => {

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

})
