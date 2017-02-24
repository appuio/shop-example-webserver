import React, {Component} from "react"
import {connect} from "react-redux"
import {fetchProducts} from "../redux/modules/products"
import Products from "../components/Products/Products"

class ProductsContainer extends Component {
  componentDidMount() {
    const {fetch} = this.props

    fetch()
  }

  render() {
    return <Products products={this.props.products}/>
  }
}

export default connect(
  state => ({
    products: state.products
  }),
  dispatch => ({
    fetch: () => dispatch(fetchProducts())
  })
)(ProductsContainer)
