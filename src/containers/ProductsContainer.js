import React, {Component} from "react"
import {connect} from "react-redux"
import {fetchProducts, productsApplyFilter} from "../redux/modules/products"
import Products from "../components/Products/Products"

class ProductsContainer extends Component {
  componentDidMount() {
    const {fetch} = this.props

    fetch()
  }

  render() {
    return <Products products={this.props.products} applyFilter={this.props.applyFilter}/>
  }
}

export default connect(
  state => ({
    products: state.products
  }),
  dispatch => ({
    applyFilter: (type, filter) => dispatch(productsApplyFilter(type, filter)),
    fetch: () => dispatch(fetchProducts())
  })
)(ProductsContainer)
