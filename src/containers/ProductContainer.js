import _get from 'lodash/get'
import _has from 'lodash/has'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import Product from '../components/Product/Product'
import {cartAddItem} from '../redux/modules/cart'
import {fetchProduct} from '../redux/modules/product'

class ProductContainer extends Component {
  componentDidMount() {
    const {fetch, match} = this.props

    fetch(match.params.id)
  }

  addToCart = () => {
    this.props.addToCart({
      ...this.props.product.data.product,
      quantity: 1
    })
  }

  render() {
    const {cart, product} = this.props

    return <Product product={product} inCart={_has(cart.items, _get(product, 'data.product.uuid'))}
                    addToCart={this.addToCart}/>
  }
}

export default connect(
  state => ({
    cart: state.cart,
    product: state.product
  }),
  dispatch => ({
    addToCart: (productData) => dispatch(cartAddItem(productData)),
    fetch: (id) => dispatch(fetchProduct(id))
  })
)(ProductContainer)
