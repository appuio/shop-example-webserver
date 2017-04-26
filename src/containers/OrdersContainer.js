import React, {Component} from 'react'
import {connect} from 'react-redux'
import Orders from '../components/Orders/Orders'
import {fetchOrders} from '../redux/modules/orders'

class OrdersContainer extends Component {
  componentDidMount() {
    const {fetch} = this.props

    fetch()
  }

  render() {
    return <Orders orders={this.props.orders}/>
  }
}

export default connect(
  state => ({
    orders: state.orders
  }),
  dispatch => ({
    fetch: () => dispatch(fetchOrders())
  })
)(OrdersContainer)
