import React from 'react';
import { Link } from 'react-router-dom';

export default function LayoutHeader() {
	return (
		<header className="header">
			<h1 className="logo">
				<Link to="/">DEV.SCHLEE</Link>
			</h1>
			<nav className="nav">
				<Link to="/about">about</Link>
				<Link to="/works">works</Link>
				<Link to="/contact">contact</Link>
			</nav>
			<div className="outlink">
				<a href="#">Github</a>
			</div>
		</header>
	);
}
