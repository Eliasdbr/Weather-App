import React from 'react';
import s from '../styles/Error.module.css';

export default function Error({msg}) {
	return (
		<div className={s.contenedor}>
			<h2>Hmmm...</h2>
			<p>
				{msg 
				||
				'Parece que la dirección a la que estás intentando entrar no existe.'}
			</p>
		</div>
	);
}
