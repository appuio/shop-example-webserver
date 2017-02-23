import _filter from "lodash/filter";
import _map from "lodash/map";

// utils
// TODO: extract?
const calculateSum = (items) => {
  // reduce all the items in the cart to a total sum
  return _map(items, item => item.price * item.quantity).reduce((a, b) => a + b)
}

// actions
const ITEM_ADD = 'app/cart/ITEM_ADD'
const ITEM_REMOVE = 'app/cart/ITEM_REMOVE'
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
        size: state.size + 1,
        sum: calculateSum(items)
      };
    }

    case ITEM_REMOVE: {
      const items = _filter(state.items, item => item.uuid !== action.payload.uuid)

      return {
        ...state,
        items,
        sum: calculateSum(items)
      }
    }

    case ITEM_UPDATE: {
      let items = state.items;
      items[action.payload.uuid].quantity = action.payload.quantity

      return {
        ...state,
        items,
        size: state.size - 1,
        sum: calculateSum(items)
      }
    }

    default:
      return state
  }
};

// action creators
export const cartAddItem = (item) => ({ type: ITEM_ADD, payload: { item } })
export const cartRemoveItem = (uuid) => ({ type: ITEM_REMOVE, payload: { uuid } })
export const cartUpdateItem = (uuid, quantity) => ({ type: ITEM_UPDATE, payload: { uuid, quantity } })

// export the reducer as default
export default reducer
