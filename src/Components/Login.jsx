import React, { useState } from 'react';
import {Form, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from 'react-router-dom'
function Login() {
  const [username, setUsername] = useState('')
  const navigate = useNavigate()
  const handleChange = (e) => {
    setUsername(e.target.value)
  }
// console.log(username)

  const handleSubmit = (e) => {
    e.preventDefault()
    setUsername('')
    navigate(`/profile/${username}`)
  }


  return <div className='login-container'>
      <h3 className='login-title'>
          Login
      </h3>
      <Form onSubmit={handleSubmit} className='form'>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Username</Form.Label>
    <Form.Control onChange={handleChange}  type='username' placeholder="Enter username" />
   
  </Form.Group>

  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
  </div>;
}

export default Login;
