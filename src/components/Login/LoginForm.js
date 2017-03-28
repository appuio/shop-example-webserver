import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {Button, Form} from 'semantic-ui-react'
import validatejs from 'validate.js'

import {renderField} from '../../utils/forms'

const LoginForm = ({invalid, pristine, handleSubmit, onSubmit}) =>
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
      disabled={invalid || pristine}
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
  })
})(LoginForm)
