import React, { Component } from "react";
import { connect } from "react-redux";
import Cart from "../components/Cart/Cart";

class ProductsContainer extends Component {
  render() {
    return <Cart cart={this.props.cart}/>;
  }
}

export default connect(
  state => ({
    cart: state.cart
  }),
  dispatch => ({})
)(ProductsContainer);
