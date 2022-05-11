import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

// import mutations to use instead of api routes
// import { useMutation } from '@apollo/react-hooks';
// import { ADD_USER } from '../utils/mutations';
// import Auth from '../utils/auth';

const SignupForm = () => {
  // // set initial form state
  // const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
  // // set state for form validation
  // const [validated] = useState(false);
  // // set state for alert
  // const [showAlert, setShowAlert] = useState(false);

  // const [addUser, { error }] = useMutation(ADD_USER);

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setUserFormData({ ...userFormData, [name]: value });
  // };

  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();

  //   // check if form has everything (as per react-bootstrap docs)
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }

  //   try {
  //     const { data } = await addUser({
  //       variables: { ...userFormData },
  //     });
  //     console.log(data);

  //     Auth.login(data.addUser.token);
  //   } catch (e) {
  //     console.error(e);
  //     setShowAlert(true);
  //   }

  //   setUserFormData({
  //     username: '',
  //     email: '',
  //     password: '',
  //   });
  // };

  return (
    <section className='m-5'>
      <div className=' bg-brown p-3 square rounded-top'>
        <h3 className='text-center text-light'>Login Here</h3>
      </div>
      <div className=' p-3 bg-light square rounded-bottom'>
        <Form>
          <Form.Group>
            <Form.Label htmlFor='username'>Username</Form.Label>
            <Form.Control
              type='text'
              placeholder='Your username'
              name='username'
              // onChange={handleInputChange}
              // value={userFormData.username}
              required
            />
            <Form.Control.Feedback type='invalid'>Username is required!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor='email'>Email</Form.Label>
            <Form.Control
              type='email'
              placeholder='Your email address'
              name='email'
              // onChange={handleInputChange}
              // value={userFormData.email}
              required
            />
            <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor='password'>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Your password'
              name='password'
              // onChange={handleInputChange}
              // value={userFormData.password}
              required
            />
            <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
          </Form.Group>
          <Button className='mt-2'
            // disabled={!(userFormData.username && userFormData.email && userFormData.password)}
            type='submit'
            variant='success'>
            Submit
          </Button>
        </Form>
      </div>
    </section>


  );
};

export default SignupForm;