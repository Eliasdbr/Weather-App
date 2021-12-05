import React from 'react';
import s from '../styles/About.module.css';
import Foto from '../img/foto-elias.png';

export default function About({darkMode}) {
	return (
		<div className={`${s.contenedor} ${darkMode ? s.dark : s.light}`}>
			<h2>Sobre la App</h2>
			<div className={s.info}>
				<img src={Foto} className={s.foto} alt="Foto Elias"/>
				<p>
					Mi nombre es Elías, tengo 25 años y estoy estudiando Web Full-stack
					developer con Henry.<br/> Ésta es una SPA desarrollada con las
					tecnologías React, HTML5 y CSS3.<br/>
					Se trata de una App que permite saber el clima actual de miles
					de ciudades de todo el mundo, gracias a la API de OpenWeather.<br/>
					La App fue realizada a modo de tarea para SoyHenry en un lapso
					de 1 semana y unos días.
				</p>
			</div>
			<h3>Contacto</h3>
			<div className={s.contacts}>
				<a href="mailto:eliasdbr@outlook.com">
					<img src={`https://img.icons8.com/ios-filled/100/${darkMode ? 'ffffff' : '000000'}/email-open.png`}
					alt="E-Mail"/>
				</a>
				<a href="https://github.com/Eliasdbr">
					<img src={`https://img.icons8.com/ios-filled/96/${darkMode ? 'ffffff' : '000000'}/github.png`}
					alt="Github"/>
				</a>
				<a href="https://www.linkedin.com/in/eliasdbr/">
					<img src={`https://img.icons8.com/ios-filled/100/${darkMode ? 'ffffff' : '000000'}/linkedin.png`}
					alt="LinkedIn"/>
				</a>
			</div>
		</div>
	);
}
