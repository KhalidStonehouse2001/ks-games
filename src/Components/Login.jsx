import React from 'react';
import {Form, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
function Login() {
  return <div className='login-container'>
      <h3 className='login-title'>
          Login
      </h3>
      <Form className='form'>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Username</Form.Label>
    <Form.Control  type='username' placeholder="Enter username" />
   
  </Form.Group>

  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
  </div>;
}

export default Login;
