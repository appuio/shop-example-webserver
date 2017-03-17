import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {login} from '../redux/modules/login'
import Login from '../components/Login/Login'

class LoginContainer extends Component {
  render() {
    // if logged in, redirect to the homepage
    if (this.props.loggedIn) {
      return <Redirect to={{pathname: '/'}}/>
    }

    return <Login
      loading={this.props.loading}
      loggedIn={this.props.loggedIn}
      login={this.props.login}
    />
  }
}

export default connect(
  state => ({
    loading: state.login.loading,
    loggedIn: state.login.data
  }),
  dispatch => ({
    login: ({email, password}) => dispatch(login(email, password))
  })
)(LoginContainer)
