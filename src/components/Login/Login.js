import React from 'react'
import {Button, Grid, Segment} from 'semantic-ui-react'
import {reduxForm} from 'redux-form'

const Login = ({login}) => {
  return (
    <Grid.Row>
      <Grid.Column>
        <Segment>
          <Button onClick={(e) => login('rolandschlaefli@gmail.com', 'abcd')}>Login</Button>
        </Segment>
      </Grid.Column>
    </Grid.Row>
  )
}

export default reduxForm({
  form: 'login'
})(Login)
