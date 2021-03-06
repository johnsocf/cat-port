import React, { Component } from 'react';
import {Container, Flex} from '../../theme/grid';
import {H2, P} from '../../theme/types';
import { reduxForm, Field } from 'redux-form';
import {Title} from './ContactMe.style';
import fire from '../../index';
import {BackgroundContactImage, ContactContainer} from './ContactMe.style';


let SignInForm = props => {
  const { handleSubmit } = props;
  return <ContactContainer>
    <form onSubmit={handleSubmit} className="contact-me-form">
      <div className="field">
        <div className="control">
          <Field name="firstName" component={renderField} type="text" label="First Name"/>
        </div>
      </div>

      <div className="field">
        <div className="control">
          <Field name="lastName" component={renderField} type="text" label="Last Name"/>
        </div>
      </div>

      <div className="field">
        <div className="control">
          <Field name="email" component={renderField} type="email" label="Email Address"/>
        </div>
      </div>

      <div className="field">
        <div className="control">
          <Field name="age" component={renderField} type="number" label="Age"/>
        </div>
      </div>

      <div className="field">
        <div className="control">
          <label className="label">Message</label>
          <Field className="textarea" name="message" component="textarea" />
        </div>
      </div>

      <div className="field">
        <div className="control">
          <button className="button is-link">Submit</button>
        </div>
      </div>

    </form>
    <BackgroundContactImage>
      <img/>
    </BackgroundContactImage>
  </ContactContainer>;
};

const validate = val => {
  const errors = {};
  if (!val.firstName) {
    console.log('First Name is required');
    errors.firstName = 'Required';
  }
  if (!val.lastName) {
    console.log('Last Name is required');
    errors.lastName = 'Required';
  }
  if (!val.email) {
    console.log('email is required');
    errors.email = 'Required';
  } else if (!/^.+@.+$/i.test(val.email)) {
    console.log('email is invalid');
    errors.email = 'Invalid email address';
  }
  if (!val.age) {
    errors.age = 'Required'
  } else if (isNaN(Number(val.age))) {
    errors.age = 'Must be a number'
  } else if (Number(val.age) < 18) {
    errors.age = 'Sorry, you must be at least 18 years old'
  }
  return errors;
};

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
      <div className="control">
        <label className="field">{label}</label>
        <input className="input" {...input} placeholder={label} type={type}/>
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </div>
)

SignInForm = reduxForm({
  form: 'signIn',
  validate,
})(SignInForm);

class ContactMe extends Component {

  handleSignIn = values => {
    console.log(values);
    fire.database().ref('messages').push( values );
  };

  render() {
    return (
        <Container>
          <Title>contact me</Title>
          <SignInForm onSubmit={this.handleSignIn}/>
        </Container>
    );
  }
}

export default ContactMe;