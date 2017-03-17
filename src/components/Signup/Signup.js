import React from 'react'
import {Grid, Segment} from 'semantic-ui-react'
import SignupForm from './SignupForm'

const Signup = ({loading, signup}) =>
  <Grid.Row>
    <Grid.Column>
      <Segment loading={loading}>
        <SignupForm onSubmit={signup}/>
      </Segment>
    </Grid.Column>
  </Grid.Row>

export default Signup
