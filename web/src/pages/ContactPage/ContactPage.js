import BlogLayout from 'src/layouts/BlogLayout'
import {
  Form,
  TextAreaField,
  TextField,
  Submit,
  FieldError,
  Label,
} from '@redwoodjs/forms'
import { Link, routes } from '@redwoodjs/router'

const ContactPage = () => {
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <BlogLayout>
      <Form onSubmit={onSubmit} validation={{ mode: 'onBlur' }}>
        <Label errorClassName="error" name="name">
          Name
        </Label>
        <TextField
          errorClassName="error"
          name="name"
          validation={{ required: true }}
        />
        <FieldError name="name" className="error" />
        <Label errorClassName="error" name="email">
          Email
        </Label>
        <TextField
          errorClassName="error"
          name="email"
          validation={{
            required: true,
            pattern: {
              message: 'Please enter a valid email address',
              value: /[^@]+@[^.]+\..+/,
            },
          }}
        />
        <FieldError name="email" className="error" />
        <Label errorClassName="error" name="message">
          Message
        </Label>
        <TextAreaField
          errorClassName="error"
          name="message"
          validation={{ required: true }}
        />
        <FieldError name="message" className="error" />
        <Submit>Save</Submit>
      </Form>
    </BlogLayout>
  )
}

export default ContactPage
