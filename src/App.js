import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Categories from './Components/Categories';
import Reviews from './Components/Reviews';
import NavBar from './Components/Nav';
import SingleReview from './Components/SingleReview';
function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path='/' element={<Homepage />} />
				<Route path='/categories' element={<Categories />} />
				<Route path='/reviews' element={<Reviews />} />
				<Route path='/reviews/:review_id' element={<SingleReview />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
