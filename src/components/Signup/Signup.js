import React from 'react'
import {Grid, Segment} from 'semantic-ui-react'
import SignupForm from './SignupForm'

const Signup = ({loading, signedUp, signup}) =>
  <Grid.Row>
    <Grid.Column>
      <Segment loading={loading}>
        {
          signedUp
            ?
            <Message success>Thanks for signing up! Please check your inbox.</Message>
            :
            <SignupForm onSubmit={signup}/>
        }
      </Segment>
    </Grid.Column>
  </Grid.Row>

export default Signup
