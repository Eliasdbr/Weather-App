import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import About from '../components/About.jsx';
import Ciudad from '../components/Ciudad.jsx';
import PopUp from '../components/PopUp.jsx';
// import Error from '../components/Error.jsx';

const API_KEY = '1813c8855d7d0b4dcd9d8da148144eb6';

function App() {
	const [cities, setCities] = useState([]);
	const [darkMode, setDarkMode] = useState(true);
	const [popUp, setPopUp] = useState(false);
	const [noCity, setNoCity] = useState(false);
	
	function onClose(id) {
		setCities(oldCities => oldCities.filter(c => c.id !== id));
	}
	function onSearch(ciudad) {
		//Llamado a la API del clima
		fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}&units=metric&lang=es`)
			.then(r => {
				return r.json()
			})
			.then((recurso) => {
				if(recurso.main !== undefined){
					const ciudad = {
						min: Math.round(recurso.main.temp_min),
						max: Math.round(recurso.main.temp_max),
						hum: recurso.main.humidity,
						img: recurso.weather[0].icon,
						id: recurso.id,
						wind: recurso.wind.speed,
						temp: recurso.main.temp,
						name: `${recurso.name} (${recurso.sys.country})`,
						weather: recurso.weather[0].description,
						clouds: recurso.clouds.all,
						latitud: recurso.coord.lat,
						longitud: recurso.coord.lon,
						time: new Date((recurso.dt + recurso.timezone) * 1000),
						timezone: recurso.timezone * 1000,
					};
					setCities(oldCities => [...oldCities, ciudad]);
				} else {
					setNoCity(true);
					setPopUp(true);
				}
			});
	}
	var onFilter = function (ciudadId) {
		let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
		if(ciudad.length > 0) {
				return ciudad[0];
		} else {
				return null;
		}
	}
	function toggleDarkMode() {
		setDarkMode(oldDarkMode => !oldDarkMode);
	}
	
	return (
		<div className="App">
			<div className={darkMode ? "dark" : "light"}>
			<Route path="/">
				<Nav onSearch={onSearch} 
					toggleDarkMode={toggleDarkMode}
					darkMode={darkMode}
				/>
			</Route>
			<Route exact path="/about">
				<About darkMode={darkMode}/>
			</Route>
			<Route exact path="/">
				<>
				<Cards
					cities={cities}
					onClose={onClose}
					darkMode={darkMode}
				/>
				{(noCity && popUp) &&
					<PopUp title='Hmmm...' 
						description={`La ciudad no ha sido encontrada.`}
						cancelName='Cerrar' cancelAction={() => setPopUp(false)}
						darkMode={darkMode}
					/>
				}
				</>
			</Route>
			<Route exact path="/ciudad/:ciudadId">
				<Ciudad onFilter={onFilter} darkMode={darkMode}/>
			</Route>
			</div>
		</div>
	);
}

export default App;
