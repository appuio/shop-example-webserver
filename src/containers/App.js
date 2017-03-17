import React from 'react'
import {Route} from 'react-router-dom'
import {Container, Grid} from 'semantic-ui-react'
import Footer from '../components/Footer/Footer'
import CartContainer from './CartContainer'
import ProductsContainer from './ProductsContainer'
import ProductContainer from './ProductContainer'
import LoginContainer from './LoginContainer'
import HeaderContainer from './HeaderContainer'

const App = () =>
  <Container>
    <Grid>
      {/* this pathless route ensures that the header menu updates if location changes*/}
      <Route render={({location}) => <HeaderContainer location={location}/>}/>
      {/* page contents */}
      <Route exact path="/" component={ProductsContainer}/>
      <Route exact path="/cart" component={CartContainer}/>
      <Route exact path="/login" component={LoginContainer}/>
      <Route path="/products/:id" component={ProductContainer}/>
      <Footer />
    </Grid>
  </Container>

export default App
