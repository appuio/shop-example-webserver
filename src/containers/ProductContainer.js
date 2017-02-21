import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProduct } from "../redux/modules/product";
import Product from "../components/Product/Product";

class ProductContainer extends Component {
  componentDidMount() {
    const { fetch, params } = this.props;

    fetch(params.id);
  }

  render() {
    return <Product product={this.props.product}/>;
  }
}

export default connect(
  state => ({
    product: state.product
  }),
  dispatch => ({
    fetch: (id) => dispatch(fetchProduct(id))
  })
)(ProductContainer);
