import React from 'react';
import s from '../styles/Cards.module.css';

import Card from './Card.jsx';

export default function Cards({cities, onClose, darkMode}) {
	if (cities.length > 0) return (
		<div className={s.contenedor}> 
			{cities.map((c,i) => <Card
					key={c.id * (i+1)}
					id={c.id}
					max={c.max}
					min={c.min}
					hum={c.hum}
					name={c.name}
					img={c.img}
					onClose={() => onClose(c.id)}
					darkMode={darkMode}
				/> )}
		</div>
	);
	else return (
		<div className={s.contenedor}>
			<div className={`${darkMode ? s.dark : s.light} ${s.welcome}`}>
				<h1>¡Bienvenid@ a Weather App!</h1>
				<h3>
					Para agregar una ciudad, escribe su nombre en la caja de búsqueda 
					y luego presiona el botón de 'Agregar'.
				</h3>
			</div>
		</div>
	);
}
