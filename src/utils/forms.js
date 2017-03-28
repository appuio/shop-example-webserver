import React from 'react'
import {Form, Message} from 'semantic-ui-react'

export const renderField = ({input, label, type, required, disabled, meta: {pristine, touched, error}}) =>
  <Form.Field error={(!pristine || touched) && error} required={required} disabled={disabled}>
    <label>{label}</label>
    <input {...input} placeholder={label} type={type}/>
    {touched && error && <Message error>{error}</Message>}
  </Form.Field>
