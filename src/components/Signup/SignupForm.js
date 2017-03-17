import React from 'react'
import {Form, Button} from 'semantic-ui-react'
import {Field, reduxForm} from 'redux-form'

const SignupForm = ({disabled, onSubmit, handleSubmit}) =>
  <Form onSubmit={handleSubmit(onSubmit)}>
    <Form.Field disabled={disabled}>
      <label forHtml="name">Name</label>
      <Field name="name" component="input" type="text"/>
    </Form.Field>
    <Form.Field disabled={disabled}>
      <label forHtml="email">Email</label>
      <Field name="email" component="input" type="email"/>
    </Form.Field>
    <Form.Field disabled={disabled}>
      <label forHtml="password">Password</label>
      <Field name="password" component="input" type="password"/>
    </Form.Field>
    <Button type="submit" disabled={disabled}>Submit</Button>
  </Form>

export default reduxForm({
  form: 'signup'
})(SignupForm)
