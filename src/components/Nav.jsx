import React from 'react';
import {Route,NavLink} from 'react-router-dom';
import Logo from '../img/weather_icon.png'
import SearchBar from './SearchBar.jsx';
import s from '../styles/Nav.module.css';


function Nav({onSearch, toggleDarkMode, darkMode}) {
	return ( 
		<nav className={`${s.contenedor} ${darkMode ? s.dark : s.light}`}>      
			<NavLink to="/">
				<div className={s.title}>
					<img id="logoHenry"
						src={Logo} 
						width="40" 
						height="40" 
						alt="Logo" 
					/>
					<h3>Weather App</h3>
				</div>
			</NavLink>
			<Route exact path="/">
				<SearchBar onSearch={onSearch}/>
			</Route>
			<div className={s.links}>
				<NavLink to="/" 
					exact activeClassName={s.linkActive}
					className={s.link}
				>
					<span>Inicio</span>
				</NavLink>
				<NavLink to="/about" 
					activeClassName={s.linkActive}
					className={s.link}
				>
					<span>Acerca de...</span>
				</NavLink>
			</div>
			<span className={s.link+" "+ s.dlbutton} onClick={toggleDarkMode}>{darkMode ? "☀" : "☾"}</span>
		</nav>
	);
};

export default Nav;
