import "whatwg-fetch";

// actions
const ITEM_ADD = 'app/cart/ITEM_ADD';
const ITEM_REMOVE = 'app/cart/ITEM_REMOVE';
const ITEM_UPDATE = 'app/cart/ITEM_UPDATE';

// reducer
const reducer = (state = {
  items: [
    {
      uuid: 'hehehe',
      name: 'asasd',
      price: 900
    }
  ]
}, action) => {
  switch (action.type) {
    case ITEM_ADD:
      return {
        ...state,
        items: [...state.items, action.payload.item]
      };

    case ITEM_REMOVE:
      return {
        ...state,
        items: state.items.filter((item, index) => index !== action.payload.index)
      }

    case ITEM_UPDATE:
      let items = state.items;
      items[action.payload.index].quantity = action.payload.quantity;

      return {
        ...state,
        items
      }

    default:
      return state;
  }
};

// action creators
export const cartAddItem = (item) => ({ type: ITEM_ADD, payload: { item } });
export const cartRemoveItem = (index) => ({ type: ITEM_REMOVE, payload: { index } });
export const cartUpdateItem = (index, quantity) => ({ type: ITEM_UPDATE, payload: { index, quantity } });

// export the reducer as default
export default reducer;

