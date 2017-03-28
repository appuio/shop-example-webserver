import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {Button, Form} from 'semantic-ui-react'
import validatejs from 'validate.js'

import {renderField} from '../../utils/forms'

const SignupForm = ({disabled, invalid, pristine, handleSubmit, onSubmit}) =>
  <Form error={true} onSubmit={handleSubmit(onSubmit)}>
    <Field
      required
      disabled={disabled}
      name="name"
      label="Name"
      component={renderField}
      type="text"
    />
    <Field
      required
      disabled={disabled}
      name="email"
      label="Email"
      component={renderField}
      type="email"
    />
    <Form.Group widths="equal">
      <Field
        required
        disabled={disabled}
        name="password"
        label="Password"
        component={renderField}
        type="password"
      />
      <Field
        required
        disabled={disabled}
        name="passwordRepeat"
        label="Repeat password"
        component={renderField}
        type="password"
      />
    </Form.Group>
    <Button
      disabled={invalid || pristine || disabled}
      type="submit"
    >
      Submit
    </Button>
  </Form>

export default reduxForm({
  form: 'signup',
  validate: values => validatejs(values, {
    name: {
      presence: true
    },
    email: {
      presence: true,
      email: true
    },
    password: {
      presence: true,
      equality: 'passwordRepeat'
    },
    passwordRepeat: {
      presence: true,
      equality: 'password'
    }
  })
})(SignupForm)
