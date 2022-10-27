import React from 'react';
import { Navigate, Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import PlanetSystem from './views/PlanetSystem';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/*'
					element={
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
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
