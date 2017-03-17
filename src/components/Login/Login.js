import React from 'react'
import {Grid, Segment} from 'semantic-ui-react'
import LoginForm from './LoginForm'

const Login = ({loading, login}) =>
  <Grid.Row>
    <Grid.Column>
      <Segment loading={loading}>
        <LoginForm onSubmit={login}/>
      </Segment>
    </Grid.Column>
  </Grid.Row>

export default Login
