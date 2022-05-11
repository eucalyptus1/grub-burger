// see SignupForm.js for comments
import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

import "./login.css"
// import useMutation and LOGIN-USER
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";

import Auth from "../../utils/auth";

const LoginForm = () => {
	const [userFormData, setUserFormData] = useState({ email: "", password: "" });
	const [validated] = useState(false);
	const [showAlert, setShowAlert] = useState(false);

	// declaring loginUser with useMutation
	const [loginUser, { error }] = useMutation(LOGIN_USER);

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setUserFormData({ ...userFormData, [name]: value });
	};

	const handleFormSubmit = async (event) => {
		event.preventDefault();

		// check if form has everything (as per react-bootstrap docs)
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}

		// use loginUser function
		try {
			const { data } = await loginUser({
				variables: { ...userFormData },
			});

			Auth.login(data.login.token);
		} catch (e) {
			console.error(e);
			setShowAlert(true);
		}

		setUserFormData({
			username: "",
			email: "",
			password: "",
		});
	};

	return (
		<section className='m-5'>
			<div className=' bg-brown p-3 square rounded-top'>
				<h3 className='text-center text-light'>Login Here</h3>
			</div>
			<div className=' p-3 bg-light square rounded-bottom'>
				<Form noValidate validated={validated} onSubmit={handleFormSubmit}>
					<Alert
						dismissible
						onClose={() => setShowAlert(false)}
						show={showAlert}
						variant="danger"
					>
						Something went wrong with your signup!
					</Alert>
					<Form.Group>
						<Form.Label htmlFor='email'>Email</Form.Label>
						<Form.Control
							type='text'
							placeholder='Your email'
							name='email'
							onChange={handleInputChange}
							value={userFormData.email}
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
							onChange={handleInputChange}
							value={userFormData.password}
							required
						/>
						<Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
					</Form.Group>
					<Button className='mt-2'
          disabled={!(userFormData.email && userFormData.password)}
          type="submit"
          variant="success"
        >
          Submit
        </Button>
				</Form>
			</div>

		</section>

	);
};

export default LoginForm;