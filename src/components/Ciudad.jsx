import { React, useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

import s from '../styles/Ciudad.module.css';
import Error from '../components/Error.jsx';
import Card from '../components/Card.jsx';

const API_KEY = '1813c8855d7d0b4dcd9d8da148144eb6';

export default function Ciudad({onFilter, darkMode}) {
	const cityId = useParams().ciudadId;
	const city = onFilter(cityId);
	const [forecast,setForecast] = useState([]);
	const dia = [
		'Domingo',
		'Lunes',
		'Martes',
		'Miércoles',
		'Jueves',
		'Viernes',
		'Sábado',
	];
	
	function getForecast() {
		fetch(`http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${API_KEY}&cnt=40&units=metric&lang=es`)
			.then(r => {
				return r.json()
			})
			.then(
				(recurso) => {
					if (city) return setForecast(recurso.list.map(
						(elem,i) => {
							let time = new Date(elem.dt*1000 + city.timezone);
							if (time.getUTCHours() === 9
							||  time.getUTCHours() === 15
							||  time.getUTCHours() === 21) return {
								day: `${dia[time.getUTCDay()]}, ${time.getUTCHours()}:00`,
								img: elem.weather[0].icon,
								min: Math.floor(elem.main.temp_min),
								max: Math.floor(elem.main.temp_max),
								hum: elem.main.humidity,
							}
							else return false;
						}
					).filter( (e,i) => !!e )
					 .filter( (e,i) => i<15))
				}
			);
	}
	
	useEffect( 
		() => {
			getForecast();
		},[]
	);
	
	if (city) return (
		<div className={`${s.contenedor} ${darkMode ? s.dark : s.light}`}>
			<div className={s.title}>
				<h1>{city.name}</h1>
				<h2>{
					dia[city.time.getUTCDay()]
					+', '
					+city.time.getUTCHours()
					+':'
					+city.time.getUTCMinutes()
				}</h2>
			</div>
			<div className={s.info}>
				<div className={`${s.col1} `}>
					<div>{city.temp}°C</div>
					<hr/>
					<div>{
						city.weather.replace(/^\w/,(c) => c.toUpperCase())
					}</div>
				</div>
				<div className={s.col1}>
					<div>Viento: {city.wind}km/h</div>
					<hr/>
					<div>Nubosidad: {city.clouds}%</div>
					{/*
					<div>Latitud: {city.latitud}°</div>
					<div>Longitud: {city.longitud}°</div>
					*/}
				</div>
			</div>
			<h2>Pronóstico (5 días)</h2>
			<div className={s.forecast}>
				{ forecast.length
					? forecast.map( e => (
							<Card key={cityId+e.day} id={0}
								max={e.max} min={e.min} hum={e.hum}
								name={e.day} img={e.img}
								onClose={()=>{}} darkMode={darkMode}
							/>
						)
					)
					: <h2>Loading forecast...</h2>
				}
			</div>
		</div>
	);
	else return ( <Error msg="No has ingresado esa ciudad aún."/> );
}
