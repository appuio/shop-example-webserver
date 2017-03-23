import React from 'react'
import {connect} from 'react-redux'
import Header from '../components/Header/Header'
import {logout} from '../redux/modules/login'

const HeaderContainer = ({loginData, logout}) => {
  return (
    <Header loginData={loginData} logout={logout}/>
  )
}

export default connect(
  state => ({
    loginData: state.login.data
  }),
  dispatch => ({
    logout: () => dispatch(logout())
  })
)(HeaderContainer)
