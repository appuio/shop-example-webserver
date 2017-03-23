import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import Login from '../components/Login/Login'
import {login} from '../redux/modules/login'

class LoginContainer extends Component {
  render() {
    // if logged in, redirect to the homepage
    if (this.props.data) {
      return <Redirect to={{pathname: '/'}}/>
    }

    return <Login
      loading={this.props.loading}
      error={this.props.error}
      login={this.props.login}
    />
  }
}

export default connect(
  state => ({
    ...state.login
  }),
  dispatch => ({
    login: ({email, password}) => dispatch(login(email, password))
  })
)(LoginContainer)
