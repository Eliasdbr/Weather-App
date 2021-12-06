/*
 *	PopUp Component
 * */

// React for component based dom structuring.
import React/*, { useState }*/ from "react";
// Import local styles
import style from '../styles/PopUp.module.css';

export default function PopUp(
	{ title, description, okName, okAction, cancelName, cancelAction , darkMode}) {
	//// Functions here.
	//function someFunction() {
	//}
	
	// Structure of the component
	return (<div className={style.component}>
		<div className={`${style.window} ${darkMode ? style.dark : style.light}`}>
			<h3 className={style.title}>{title}</h3>
			<p className={style.description}>{description}</p>
			<div className={style.buttons}>
				{ (okName && okAction) 
					&& (<button onClick={okAction}>{okName}</button>) 
				}
				<button 
					onClick={cancelAction || ((e)=>{})}
				>{cancelName || 'Close'}</button>
			</div>
		</div>
	</div>);
}

