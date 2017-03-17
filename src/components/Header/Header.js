import React from 'react'
import {NavLink} from 'react-router-dom'
import {Grid, Icon, Menu} from 'semantic-ui-react'

const Header = ({loginData}) => {
  return (
    <Grid.Row>
      <Grid.Column>
        <Menu inverted>
          <Menu.Item as={NavLink} exact to="/">
            Home
          </Menu.Item>
          <Menu.Item as={NavLink} exact to="/cart">
            <Icon name="cart"/>Cart
          </Menu.Item>
          {
            loginData
              ?
              <Menu.Item as={NavLink} exact to="/account" position="right">
                Hello, {loginData.name}
              </Menu.Item>
              :
              <Menu.Item as={NavLink} exact to="/login" position="right">
                Login
              </Menu.Item>
          }
        </Menu>
      </Grid.Column>
    </Grid.Row>
  )
}

export default Header
