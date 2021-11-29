import { React } from 'react';
import { useParams } from 'react-router-dom';
import s from '../styles/Ciudad.module.css';
import Error from '../components/Error.jsx';

export default function Ciudad({onFilter, darkMode}) {
	const cityId = useParams().ciudadId;
	const city = onFilter(cityId);
	const dia = [
		'Domingo',
		'Lunes',
		'Martes',
		'Miércoles',
		'Jueves',
		'Viernes',
		'Sábado',
	];
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
				<div className={s.col2}>
					<div>Viento: {city.wind}km/h</div>
					<hr/>
					<div>Nubosidad: {city.clouds}%</div>
					{/*
					<div>Latitud: {city.latitud}°</div>
					<div>Longitud: {city.longitud}°</div>
					*/}
				</div>
			</div>
		</div>
	);
	else return ( <Error msg="No has ingresado esa ciudad aún."/> );
}
