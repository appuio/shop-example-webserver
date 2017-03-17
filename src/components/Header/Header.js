import React from 'react'
import {NavLink} from 'react-router-dom'
import {Dropdown, Grid, Icon, Menu} from 'semantic-ui-react'

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
              <Menu.Menu position="right">
                <Dropdown item text={loginData.email}>
                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <Icon name="sign out"/>Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Menu>
              :
              <Menu.Menu position="right">
                <Menu.Item as={NavLink} exact to="/signup">
                  <Icon name="add user"/>Sign Up
                </Menu.Item>
                <Menu.Item as={NavLink} exact to="/login" position="right">
                  <Icon name="sign in"/>Login
                </Menu.Item>
              </Menu.Menu>
          }
        </Menu>
      </Grid.Column>
    </Grid.Row>
  )
}

export default Header
