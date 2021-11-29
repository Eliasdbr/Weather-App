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
					name={c.name}
					img={c.img}
					onClose={() => onClose(c.id)}
					darkMode={darkMode}
				/> )}
		</div>
	);
	else return (
		<div className={s.contenedor}>
			<span className={darkMode ? s.dark : s.light}>(Aún no hay ciudades)</span>
		</div>
	);
}
