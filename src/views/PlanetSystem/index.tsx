/**
 * Main view for the pĺanet system
 */
import React from "react";

const PlanetSystem = () => {
	return (<>
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
	</>);
}

export default PlanetSystem;