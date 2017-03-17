import React from 'react'
import {Button, Grid, Segment} from 'semantic-ui-react'
import {reduxForm} from 'redux-form'

const Login = ({isLoggedIn, login, logout}) => {
  return (
    <Grid.Row>
      <Grid.Column>
        <Segment>
          {
            isLoggedIn
              ?
              <Button onClick={(e) => logout()}>Logout</Button>
              :
              <Button onClick={(e) => login('rolandschlaefli@gmail.com', 'abcd')}>Login</Button>
          }
        </Segment>
      </Grid.Column>
    </Grid.Row>
  )
}

export default reduxForm({
  form: 'login'
})(Login)
