import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {Button, Form} from 'semantic-ui-react'
import validatejs from 'validate.js'

import {renderField} from '../../utils/forms'

const LoginForm = ({invalid, handleSubmit, onSubmit}) =>
  <Form error={true} onSubmit={handleSubmit(onSubmit)}>
    <Field
      required
      name="email"
      label="Email"
      component={renderField}
      type="email"
    />
    <Field
      required
      name="password"
      label="Password"
      component={renderField}
      type="password"
    />
    <Button
      disabled={invalid}
      type="submit"
    >
      Submit
    </Button>
  </Form>

export default reduxForm({
  form: 'login',
  validate: values => validatejs(values, {
    email: {
      presence: true,
      email: true
    },
    password: {
      presence: true
    }
  }),
  initialValues: {
    email: 'tester@appuio.ch',
    password: 'abcd'
  }
})(LoginForm)
