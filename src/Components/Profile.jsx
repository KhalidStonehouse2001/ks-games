import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../Contexts/User';
import { getUser } from '../utils/utils';

function Profile() {
	const [userProfile, setUserProfile] = useState('');
	const { user, setUser } = useContext(UserContext);

	const { username } = useParams();
	useEffect(() => {
		if (username !== undefined) {
			getUser(username).then((res) => {
				setUserProfile(res);
				setUser(res);
			});
		}
	}, [username]);
	return (
		<div className='profile-container'>
			<h1 className='profile-title'>Your Profile</h1>
			<div className='underline-profile'></div>
			<div className='profile'>
				<h3>Name: </h3>
				<h5>{userProfile['name']}</h5>
				<div className='img-container'>
					<img className='profile-img' src={userProfile['avatar_url']} />
				</div>
				<h3>Username: </h3>
				<h5>{userProfile['username']}</h5>
			</div>
		</div>
	);
}

export default Profile;
