import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
// import {login} from '../redux/modules/login'
import Signup from '../components/Signup/Signup'

class SignupContainer extends Component {
  render() {
    // if logged in, redirect to the homepage
    if (this.props.loggedIn) {
      return <Redirect to={{pathname: '/'}}/>
    }

    return <Signup
      loading={false}
      signup={() => console.log('sign up')}
    />
  }
}

export default connect(
  state => ({
    // loading: state.login.loading,
    // loggedIn: state.login.data
  }),
  dispatch => ({
    // login: ({email, password}) => dispatch(login(email, password))
  })
)(SignupContainer)
