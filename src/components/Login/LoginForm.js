import React from 'react'
import {Form, Button} from 'semantic-ui-react'
import {Field, reduxForm} from 'redux-form'

const LoginForm = ({handleSubmit, onSubmit}) =>
  <Form onSubmit={handleSubmit(onSubmit)}>
    <Form.Field>
      <label>Email</label>
      <Field name="email" component="input" type="email"/>
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <Field name="password" component="input" type="password"/>
    </Form.Field>
    <Button type="submit">Submit</Button>
  </Form>

export default reduxForm({
  form: 'login'
})(LoginForm)
