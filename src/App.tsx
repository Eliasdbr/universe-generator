import React from 'react';
import './App.css';

function App() {
	return (
		<div className="App">
			<div className="center">
				<label className="text">
					Enter seed number (blank for random):
				</label>
				<input id="seedInput" className="box text" type='number' min="0"/>
				<button id="seedSet" className="box hoverable text" >Set seed</button>
				<button id="seedCopy" className="box hoverable text">Copy seed</button>
				<span id="msg"></span>
			</div>
			<p id="sysName" className="text-center"></p>
			<div id="system"></div>
		</div>
	);
}

export default App;
