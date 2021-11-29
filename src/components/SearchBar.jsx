import React, { useState } from "react";
import s from '../styles/SearchBar.module.css';

export default function SearchBar({onSearch}) {
	const [city, setCity] = useState("");
	return (
		<form className={s.contenedor}
		onSubmit={(e) => {
			e.preventDefault();
			if (city) {
				onSearch(city);
				setCity('');
			}
		}}>
			<input className={s.contInput}
				type="text"
				placeholder="Buscar ciudad..."
				value={city}
				onChange={e => setCity(e.target.value)}
			/>
			<input className={s.contButton} type="submit" value="Agregar" />
		</form>
	);
}
