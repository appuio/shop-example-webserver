import React, {Component} from 'react'
import {connect} from 'react-redux'
import {doLogin} from '../redux/modules/login'
import Login from '../components/Login/Login'

class LoginContainer extends Component {
  render() {
    return <Login login={this.props.login}/>
  }
}

export default connect(
  state => ({
    login: state.login
  }),
  dispatch => ({
    login: (email, password) => dispatch(doLogin(email, password))
  })
)(LoginContainer)
