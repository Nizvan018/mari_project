import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Login from './pages/Login';
import Register from './pages/Register';
import Histories from './pages/Histories';

function App() {

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Index />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				<Route path='/histories' element={<Histories />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
