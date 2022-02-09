import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Categories from './Components/Categories';
import Reviews from './Components/Reviews';
import NavBar from './Components/Nav';
import SingleReview from './Components/SingleReview';
import Login from './Components/Login';
import Comments from './Components/Comments';
import PostComment from './Components/PostComment';
import Aboutus from './Components/Aboutus';
import { UserContext } from './Contexts/User';
import Profile from './Components/Profile';
function App() {
	const [user, setUser] = useState(null);
	return (
		<UserContext.Provider value={{ user, setUser }}>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path='/' element={<Homepage />} />
					<Route path='/categories' element={<Categories />} />
					<Route path='/reviews' element={<Reviews />} />
					<Route path='/reviews/:review_id' element={<SingleReview />} />
					<Route path='/login' element={<Login />} />
					<Route path='/reviews/:review_id/comments' element={<Comments />} />
					<Route path='/aboutus' element={<Aboutus />} />
					<Route path='/profile/:username' element={<Profile />} />
					<Route
						path='/reviews/:review_id/comments/reviews/:review_id/newcomments'
						element={<PostComment />}
					/>
				</Routes>
			</BrowserRouter>
		</UserContext.Provider>
	);
}

export default App;
