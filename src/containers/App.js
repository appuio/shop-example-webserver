import React from 'react'
import {Route} from 'react-router-dom'
import {Container, Grid} from 'semantic-ui-react'
import Footer from '../components/Footer/Footer'
import * as containers from './'

const App = () =>
  <Container>
    <Grid>
      {/* this pathless route ensures that the header menu updates if location changes*/}
      <Route render={({location}) => <containers.Header location={location}/>}/>
      {/* page contents */}
      <Route exact path="/" component={containers.Products}/>
      <Route exact path="/cart" component={containers.Cart}/>
      <Route exact path="/login" component={containers.Login}/>
      <Route exact path="/signup" component={containers.Signup}/>
      <Route path="/products/:id" component={containers.Product}/>
      <Footer />
    </Grid>
  </Container>

export default App
