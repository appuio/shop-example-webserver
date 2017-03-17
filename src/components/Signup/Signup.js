import React from 'react'
import {Grid, Message, Segment} from 'semantic-ui-react'
import SignupForm from './SignupForm'

const Signup = ({loading, data, error, signup}) =>
  <Grid.Row>
    <Grid.Column>
      <Segment loading={loading}>
        {error && <Message error>Error: {error}</Message>}
        {data && <Message success>Thanks for signing up! Please check your inbox.</Message>}
        <SignupForm disabled={data} onSubmit={signup}/>
      </Segment>
    </Grid.Column>
  </Grid.Row>

export default Signup
