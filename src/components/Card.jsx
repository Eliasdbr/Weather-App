import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import s from '../styles/Card.module.css';

export default function Card ({min, max, name, img, onClose, id, darkMode}) {
		const [closing,setClosing] = useState(false);
		function animClose() {
			setClosing(true);
			setTimeout( () => onClose(id), 300 );
		}
		return (
			<div className={`${s.contenedor} ${closing && s.contClosing} ${
				darkMode ? s.dark : s.light}`}> 
				<div className={s.title}>
					<Link to={`/ciudad/${id}`}>
						<h4>{name}</h4>
					</Link>
					<button onClick={animClose} >X</button>
				</div>
				<Link to={`/ciudad/${id}`}>
					<div className={s.contDatos}>
						<div>
							<p>Min.</p>
							<p>{min}°</p>
						</div>
						<div>
							<p>Máx.</p>
							<p>{max}°</p>
						</div>
						<img src={ "http://openweathermap.org/img/wn/"+img+"@2x.png" }
							width="80" 
							height="80" 
							alt="(Icon not found)"
						/>
					</div>
				</Link>
			</div>
		);
};
