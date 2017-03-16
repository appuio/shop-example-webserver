import React from "react"
import {Route, Link} from "react-router-dom"
import {Container, Grid, Icon, Menu, Segment} from "semantic-ui-react"
import CartContainer from "./CartContainer"
import ProductsContainer from "./ProductsContainer"
import ProductContainer from "./ProductContainer"

const App = () =>
  <Container>
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <Menu inverted>
            <Menu.Item as={Link} to="/" activeClassName="active">
              Home
            </Menu.Item>
            <Menu.Item as={Link} to="/cart" position="right" activeClassName="active">
              <Icon name="cart"/>Cart
            </Menu.Item>
          </Menu>
        </Grid.Column>
      </Grid.Row>
      <Route exact path="/" component={ProductsContainer}/>
      <Route exact path="/cart" component={CartContainer}/>
      <Route path="/products/:id" component={ProductContainer}/>
      <Grid.Row>
        <Grid.Column>
          <Segment>
            &copy; VSHN AG
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>

export default App
