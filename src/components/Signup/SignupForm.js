import React from 'react'
import {Form, Button} from 'semantic-ui-react'
import {Field, reduxForm} from 'redux-form'

const SignupForm = ({handleSubmit, onSubmit}) =>
  <Form onSubmit={handleSubmit(onSubmit)}>
    <Form.Field>
      <label forHtml="name">Name</label>
      <Field name="name" component="input" type="text"/>
    </Form.Field>
    <Form.Field>
      <label forHtml="email">Email</label>
      <Field name="email" component="input" type="email"/>
    </Form.Field>
    <Form.Field>
      <label forHtml="password">Password</label>
      <Field name="password" component="input" type="password"/>
    </Form.Field>
    <Button type="submit">Submit</Button>
  </Form>

export default reduxForm({
  form: 'signup'
})(SignupForm)
