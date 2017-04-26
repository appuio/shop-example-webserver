import React, {Component} from 'react'
import {connect} from 'react-redux'
import Checkout from '../components/Checkout/Checkout'
import {checkout} from '../redux/modules/checkout'

class CheckoutContainer extends Component {
  render() {
    return <Checkout cart={this.props.cart} checkout={this.props.checkout}/>
  }
}

export default connect(
  state => ({
    cart: state.cart
  }),
  dispatch => ({
    checkout: (cart) => dispatch(checkout(cart))
  })
)(CheckoutContainer)