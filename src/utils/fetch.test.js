import {checkStatus, checkSuccess} from './fetch'

describe('utils - fetch', () => {

  it('should check the status of the response', () => {
    expect(checkStatus({
      status: 200,
      body: 'bla'
    })).toEqual({
      status: 200,
      body: 'bla'
    })

    // TODO: this should handle throwing
    /* expect(checkStatus({
     status: 404,
     statusText: 'NotFound'
     })).toThrow() */
  })

  it('should check the success of the response', () => {
    expect(checkSuccess({
      success: true,
      data: 'blabla'
    })).toEqual('blabla')

    // TODO: this should handle throwing
    /* expect(checkSuccess({
     success: false,
     error: {
     message: 'blablabla'
     }
     })).toThrow() */
  })

})
