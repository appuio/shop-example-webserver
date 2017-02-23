import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProduct } from "../redux/modules/product";
import { cartAddItem } from "../redux/modules/cart";
import Product from "../components/Product/Product";

class ProductContainer extends Component {
  componentDidMount() {
    const { fetch, params } = this.props;

    fetch(params.id);
  }

  addToCart = () => {
    this.props.addToCart({
      ...this.props.product.data.product,
      quantity: 1
    });
  }

  render() {
    return <Product product={this.props.product} addToCart={this.addToCart}/>;
  }
}

export default connect(
  state => ({
    product: state.product
  }),
  dispatch => ({
    addToCart: (productData) => dispatch(cartAddItem(productData)),
    fetch: (id) => dispatch(fetchProduct(id))
  })
)(ProductContainer);
