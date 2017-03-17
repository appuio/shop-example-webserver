import React, {Component} from 'react'
import {connect} from 'react-redux'
import {doLogin, logout} from '../redux/modules/login'
import Login from '../components/Login/Login'

class LoginContainer extends Component {
  render() {
    return <Login isLoggedIn={this.props.login.data} login={this.props.doLogin} logout={this.props.logout}/>
  }
}

export default connect(
  state => ({
    login: state.login
  }),
  dispatch => ({
    doLogin: (email, password) => dispatch(doLogin(email, password)),
    logout: () => dispatch(logout())
  })
)(LoginContainer)
