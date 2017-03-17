import _forEach from 'lodash/forEach'
import _includes from 'lodash/includes'
import {checkStatus, parseJSON} from '../../utils/fetch'

// actions
const REQUEST = 'app/products/REQUEST'
const RECEIVE = 'app/products/RECEIVE'
const FAIL = 'app/products/FAIL'

const FILTER_APPLY = 'app/products/FILTER_APPLY'

// reducer
const reducer = (state = {
  loading: false,
  items: [],
  filtered: [],
  filters: {
    categories: [],
    licenseTypes: [],
    publishers: [],
    category: [],
    licenseType: [],
    publisher: [],
    query: null
  },
  error: null
}, action) => {
  switch (action.type) {
    case REQUEST:
      return {
        ...state,
        loading: true
      }

    case RECEIVE:
      return {
        ...state,
        loading: false,
        items: action.payload || [],
        filtered: action.payload || [],
        filters: {
          ...state.filters,
          categories: action.payload.map(item => item.category.name).sort(),
          licenseTypes: action.payload.map(item => item.licenseType.name).sort(),
          publishers: action.payload.map(item => item.publisher.name).sort()
        }
      }

    case FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    case FILTER_APPLY:
      // hydrate the filters object with the newly applied filter
      const filters = {
        ...state.filters,
        [action.payload.type]: action.payload.filter
      }

      // initially set the array of filtered products to the full items array
      let filtered = state.items;

      // filter the products by types (category, publisher, licenseType)
      _forEach(['category', 'publisher', 'licenseType'], type =>
        // check if either the filter wasn't set or the item matches the filter
        filtered = filtered.filter(item => _includes(filters[type], item[type].name) || filters[type].length === 0)
      )

      // filter the products by query
      if (filters.query) {
        // TODO
      }

      // map the filtered objects to their uuid
      // filtered = filtered.map(item => item.product.uuid)

      return {
        ...state,
        filters,
        filtered
      }

    default:
      return state
  }
}

// action creators
export const productsRequest = () => ({type: REQUEST})
export const productsReceive = (products) => ({type: RECEIVE, payload: products})
export const productsFail = (message) => ({type: FAIL, payload: message})
export const productsApplyFilter = (type, filter) => ({type: FILTER_APPLY, payload: {type, filter}})

export const fetchProducts = () => (dispatch, getState, {fetch}) => {
  // if the products were already loaded, resolve and use cache
  if (getState().products.items.length > 0) {
    return Promise.resolve()
  }

  // start a new request
  dispatch(productsRequest())

  // call the api
  fetch('https://api-vshn-demoapp1.appuioapp.ch/products')
    .then(checkStatus)
    .then(parseJSON)
    .then(json => dispatch(productsReceive(json.items)))
    .catch(error => dispatch(productsFail(error.message)))
}

// export the reducer as default
export default reducer

