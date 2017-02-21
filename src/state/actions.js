export const PRODUCTS_REQUEST = 'PRODUCTS_REQUEST';
export const productsRequest = () => ({ type: PRODUCTS_REQUEST });

export const PRODUCTS_RECEIVE = 'PRODUCTS_RECEIVE';
export const productsReceive = (products) => ({ type: PRODUCTS_RECEIVE, payload: products });

export const PRODUCTS_FAIL = 'PRODUCTS_FAIL';
export const productsFail = () => ({ type: PRODUCTS_FAIL });

export const PRODUCT_REQUEST = 'PRODUCT_REQUEST';
export const productRequest = (id) => ({ type: PRODUCT_REQUEST, payload: id });

export const PRODUCT_RECEIVE = 'PRODUCT_RECEIVE';
export const productReceive = (product) => ({ type: PRODUCT_RECEIVE, payload: product });

export const PRODUCT_FAIL = 'PRODUCT_FAIL';
export const productFail = () => ({ type: PRODUCT_FAIL });
