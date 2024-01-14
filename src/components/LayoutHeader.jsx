import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';

export default function LayoutHeader() {
	return (
		<header className="header">
			<div className="inner">
				<h1 className="logo">
					<Link to="/">DEV.SCHLEE</Link>
				</h1>
				<nav className="nav">
					<div className="nav_menu">
						<Link to="/about">About</Link>
						<Link to="/works">Works</Link>
						<Link to="/contact">Contact</Link>
					</div>
					<div className="nav_outlink">
						<Link
							to="https://github.com/schlee85/portfolio"
							target="_blank"
							title="새창열기"
						>
							<span className="hide">Github</span>
							<FaGithub />
						</Link>
					</div>
				</nav>
			</div>
		</header>
	);
}
