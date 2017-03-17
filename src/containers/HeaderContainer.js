import React from 'react'
import {connect} from 'react-redux'
import Header from '../components/Header/Header'

const HeaderContainer = ({loginData}) => {
  return (
    <Header loginData={loginData}/>
  )
}

export default connect(
  state => ({
    loginData: state.login.data
  })
)(HeaderContainer)
