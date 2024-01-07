import React from 'react';
import './header.css';
import logo from './images/logo-header.svg';
export const Header = () => {
	return (
		<header className="header">
			<img className="header_logo" src={logo} alt="logo" />
			<h1 className="header-footer-text">Bienvenidos al cinema UNIR </h1>
		</header>
	);
};
