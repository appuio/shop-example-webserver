import reducer, {calculateSum, cartAddItem, cartUpdateItem} from './cart'

const item1 = {
  uuid: "testing123",
  name: "testname",
  price: 100,
  quantity: 1
}
const item2 = {
  uuid: "testing345",
  name: "tester",
  price: 30,
  quantity: 2
}

const initialState = {
  items: {},
  size: 0,
  sum: 0
};
const withOneItem = {
  items: {
    testing123: item1
  },
  size: 1,
  sum: 100
}
const withTwoItems = {
  items: {
    testing123: item1,
    testing345: item2
  },
  size: 2,
  sum: 160
}

describe('cart - utils', () => {
  it('should calculate the sum correctly (calculateSum)', () => {
    // no items should return a sum of 0
    expect(calculateSum({})).toEqual(0)

    // calculate the sum with valid items
    expect(calculateSum({
      1: {price: 7, quantity: 1},
      2: {price: 13, quantity: 2},
      3: {price: 0, quantity: 4}
    })).toEqual(33)

    // calculate the sum with an invalid item
    expect(calculateSum({
      1: {price: 20, quantity: 2},
      2: {price: 13},
      3: {price: 0, quantity: 4}
    })).toEqual(40)
  })
});

describe('cart - reducer', () => {

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('should handle ITEM_ADD', () => {
    // test state after one item has been added
    expect(reducer(initialState, cartAddItem(item1))).toEqual(withOneItem)

    // test state after a second item has been added
    expect(reducer(withOneItem, cartAddItem(item2))).toEqual(withTwoItems)
  })

  it('should handle ITEM_UPDATE', () => {
    expect(reducer(withOneItem, cartUpdateItem("testing123", 2))).toEqual({
      items: {
        testing123: {
          ...item1,
          quantity: 2
        }
      },
      size: 1,
      sum: 200
    })

    expect(reducer(withTwoItems, cartUpdateItem("testing345", 0))).toEqual({
      items: {
        testing123: item1
      },
      size: 1,
      sum: 100
    })
  })

})

