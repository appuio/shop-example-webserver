import _omitBy from 'lodash/omitBy'
import _map from 'lodash/map'
import _size from 'lodash/size'

// utils
export const calculateSum = (items) => {
  // if there are no items, return 0
  if (_size(items) === 0)
    return 0

  // reduce all the items in the cart to a total sum
  return _map(items, item => (item.price * item.quantity) || 0).reduce((a, b) => a + b)
}

// actions
const ITEM_ADD = 'app/cart/ITEM_ADD'
const ITEM_UPDATE = 'app/cart/ITEM_UPDATE'

// reducer
const reducer = (state = {
  items: {},
  size: 0,
  sum: 0
}, action) => {
  switch (action.type) {
    case ITEM_ADD: {
      const items = {
        ...state.items,
        [action.payload.item.uuid]: action.payload.item
      }

      return {
        ...state,
        items,
        size: _size(items),
        sum: calculateSum(items)
      }
    }

    case ITEM_UPDATE: {
      // if an invalid quantity has been provided, return the state
      if (isNaN(action.payload.quantity))
        return state

      // if a negative or zero quantity has been provided, delete the item
      if (action.payload.quantity <= 0) {
        const items = _omitBy(state.items, item => item.uuid === action.payload.uuid)

        return {
          ...state,
          items,
          size: _size(items),
          sum: calculateSum(items)
        }
      }

      // if a positiv quantity has been provided, update the quantity of the item
      const items = {
        ...state.items,
        [action.payload.uuid]: {
          ...state.items[action.payload.uuid],
          quantity: action.payload.quantity
        }
      }

      return {
        ...state,
        items,
        size: _size(items),
        sum: calculateSum(items)
      }
    }

    default:
      return state
  }
}

// action creators
export const cartAddItem = (item) => ({type: ITEM_ADD, payload: {item}})
export const cartUpdateItem = (uuid, quantity) => ({type: ITEM_UPDATE, payload: {uuid, quantity}})
export const cartRemoveItem = (uuid) => ({type: ITEM_UPDATE, payload: {uuid, quantity: 0}})

// export the reducer as default
export default reducer
