import React, { CSSProperties } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './views/Home';
import PlanetSystem from './views/PlanetSystem';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/*'
					element={<div style={style}>
						<NavBar/>
						<Routes>
							<Route
								path=''
								element={<Home/>}
							/>
							<Route
								path='planet'
								element={<PlanetSystem/>}
							/>
							<Route
								path='*'
								element={<Navigate to='/'/>}
							/>
						</Routes>
					</div>}
				/>
			</Routes>
		</BrowserRouter>
	);
}

const style: CSSProperties = {
	display: 'flex',
	flexDirection: 'row',
	width: '100vw',
	maxHeight: '100vh',
};

export default App;
