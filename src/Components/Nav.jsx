import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GiCrossedSwords } from "react-icons/gi";
import {CNavbar,CNavbarNav, CCollapse, CContainer, CNavItem, CNavLink, CNavbarBrand, CNavbarToggler} from '@coreui/react'
function NavBar() {

  const [visible, setVisible] = useState(false)
return (
  <>
    <CNavbar expand="lg" colorScheme="dark" className="bg-dark">
      <CContainer fluid>
        <GiCrossedSwords className='logo'/>
        <CNavbarBrand>Games Arena</CNavbarBrand>
        <CCollapse className="navbar-collapse" visible={visible}>
          <CNavbarNav>
            <CNavItem>
              <CNavLink  active>
            <Link className='link' to='/home'>
                Home
              </Link>
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink  active> <Link className='link' to='/categories'>
            Categories </Link>
            </CNavLink>
              
            </CNavItem>
            <CNavItem>
              <CNavLink  active>
                <Link className='link' to='/aboutus'>
                  About us </Link> </CNavLink> 
            </CNavItem>
            <CNavItem>
              <CNavLink  active >
              <Link className='link' to='/login'>
                Login </Link>
              </CNavLink>
            </CNavItem>
          </CNavbarNav>
        </CCollapse>
      </CContainer>
    </CNavbar>
  </>
)
}

export default NavBar;
