import React from 'react';
import {Route,NavLink} from 'react-router-dom';
import SearchBar from './SearchBar.jsx';
import s from '../styles/Nav.module.css';


function Nav({onSearch, toggleDarkMode, darkMode}) {
	return ( 
		<nav className={`${s.contenedor} ${darkMode ? s.dark : s.light}`}>      
			<NavLink to="/">
				<div className={s.title}>
					{/*
					<img id="logoHenry"
						src={Logo} 
						width="40" 
						height="40" 
						alt="Logo" 
					/>
					*/}
					<img src={`https://img.icons8.com/ios/100/${darkMode ? 'ffffff' : '000000'}/partly-cloudy-day--v2.png`}
						id="logoHenry"
						width="40" height="40" alt="Logo"
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
			<span className={s.link+" "+ s.dlbutton} onClick={toggleDarkMode}>
				<img src={darkMode 
					? 'https://img.icons8.com/material/24/ffffff/sun--v1.png' 
					: 'https://img.icons8.com/material/24/000000/do-not-disturb-2.png' 
				} alt="Toggle DarkMode"/>
			</span>
		</nav>
	);
};

export default Nav;
