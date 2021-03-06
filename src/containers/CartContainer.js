import React, {Component} from 'react'
import {connect} from 'react-redux'
import Cart from '../components/Cart/Cart'
import {cartRemoveItem, cartUpdateItem} from '../redux/modules/cart'

class CartContainer extends Component {
  render() {
    return <Cart cart={this.props.cart} updateItem={this.props.updateItem} removeItem={this.props.removeItem}
                 loggedIn={this.props.loggedIn}/>
  }
}

export default connect(
  state => ({
    cart: state.cart,
    loggedIn: !!state.login.data
  }),
  dispatch => ({
    removeItem: (uuid) => dispatch(cartRemoveItem(uuid)),
    updateItem: (uuid, quantity) => dispatch(cartUpdateItem(uuid, quantity))
  })
)(CartContainer)
