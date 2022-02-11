import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GiCrossedSwords } from 'react-icons/gi';
import {
	CNavbar,
	CNavbarNav,
	CCollapse,
	CContainer,
	CNavItem,
	CNavLink,
	CNavbarBrand,
	CNavbarToggler,
} from '@coreui/react';
import { UserContext } from '../Contexts/User';
function NavBar() {
	const [visible, setVisible] = useState(false);
	const { user, setUser } = useContext(UserContext);
	// const logout = () => {
	// 	setUser(null);
	// };
	return (
		<div className='navbar'>
			<GiCrossedSwords className='logo' />
			<div className='nav-container'>
				<h3>Games Arena</h3>
				<Link to='/home'>
					<h7 className='home'>Home</h7>
				</Link>
				<Link to='/categories'>
					<h7 className='category'>Categories</h7>
				</Link>
				<Link to='/aboutus'>
					<h7 className='aboutus'>About Us</h7>
				</Link>
				<Link to='/login'>
					<h7 className='login'>Login</h7>
				</Link>
			</div>
			<div className='nav-profile'>
				<h7 className='nav-user'>{user.username}</h7>
				<img className='nav-img' src={user.avatar_url} alt='' />
			</div>
		</div>
	);
}

export default NavBar;
