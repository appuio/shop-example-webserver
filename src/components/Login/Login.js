import React from 'react'
import {Grid, Message, Segment} from 'semantic-ui-react'
import LoginForm from './LoginForm'

const Login = ({loading, error, login}) =>
  <Grid.Row>
    <Grid.Column>
      <Segment loading={loading}>
        {error && <Message error>Error: {error}</Message>}
        <LoginForm onSubmit={login}/>
      </Segment>
    </Grid.Column>
  </Grid.Row>

export default Login
