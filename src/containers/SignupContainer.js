import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {signup} from '../redux/modules/signup'
import Signup from '../components/Signup/Signup'

class SignupContainer extends Component {
  render() {
    // if logged in, redirect to the homepage
    if (this.props.loggedIn) {
      return <Redirect to={{pathname: '/'}}/>
    }

    return <Signup
      loading={this.props.loading}
      data={this.props.data}
      error={this.props.error}
      signup={this.props.signup}
    />
  }
}

export default connect(
  state => ({
    ...state.signup,
    loggedIn: state.login.data != null
  }),
  dispatch => ({
    signup: ({name, email, password}) => dispatch(signup(name, email, password))
  })
)(SignupContainer)
