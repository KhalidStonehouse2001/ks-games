import React from 'react';
import { Link } from 'react-router-dom';
import {Navbar, Container, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { DiAtom } from "react-icons/di";

function NavBar() {
  return (
    <>
    <Navbar bg='dark'variant="dark">
        <Container>
      <DiAtom className='logo'/>
      <Navbar.Brand className='arena'>Games Arena</Navbar.Brand>
      <Nav className="me-auto">
        <Link className='link' to='/'>
        <Nav className='nav'>Home</Nav>
        </Link>
        <Link className='link' to='/categories'>
        <Nav className='nav'>Categories</Nav>
        </Link>
        <Link className='link' to='/aboutus'>
        <Nav className='nav'>About us</Nav>
        </Link>
        <Link className='link' to='/login'>
        <Nav className='nav'>Login</Nav>
        </Link>
      </Nav>
      </Container>
    </Navbar>


  </>

      )
}

export default NavBar;
