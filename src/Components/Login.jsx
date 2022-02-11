import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
function Login() {
	const [username, setUsername] = useState('');
	const navigate = useNavigate();
	const handleChange = (e) => {
		setUsername(e.target.value);
	};
	// console.log(username)

	const handleSubmit = (e) => {
		e.preventDefault();
		setUsername('');
		navigate(`/profile/${username}`);
	};

	return (
		<div className='login-container'>
			<h1 className='login-title'>
				Welcome Back to the Games Arena
				<br />
			</h1>
			<h4 className='login-title'>Login to continue</h4>
			<Form onSubmit={handleSubmit} className='form'>
				<Form.Group className='mb-3' controlId='formBasicEmail'>
					<Form.Label>Username</Form.Label>
					<Form.Control
						onChange={handleChange}
						type='username'
						placeholder='Enter username'
					/>
				</Form.Group>

				<Button variant='primary' type='submit'>
					Submit
				</Button>
			</Form>
			<div className='underline'></div>
			<h5 className='users-title'>Please use one of the users below</h5>
			<ul>
				<li>tickle122</li>
				<li>grumpy19</li>
				<li>happyamy2016</li>
				<li>cooljmessy</li>
				<li>weegembump</li>
				<li>jessjelly</li>
			</ul>
		</div>
	);
}

export default Login;
