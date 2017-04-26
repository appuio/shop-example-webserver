import React, {Component} from 'react'
import {connect} from 'react-redux'
import Checkout from '../components/Checkout/Checkout'
import {checkout} from '../redux/modules/checkout'

class CheckoutContainer extends Component {
  render() {
    return <Checkout cart={this.props.cart} checkout={this.props.doCheckout} error={this.props.checkout.error}
                     success={!!this.props.checkout.data}/>
  }
}

export default connect(
  state => ({
    cart: state.cart,
    checkout: state.checkout
  }),
  dispatch => ({
    doCheckout: (cart) => dispatch(checkout(cart))
  })
)(CheckoutContainer)
