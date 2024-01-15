import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { RiMenuFoldLine, RiCloseFill } from 'react-icons/ri';

export default function LayoutHeader() {
	const [isOpen, setIsOpen] = useState(false);
	const handleClickOpen = () => {
		setIsOpen(!isOpen);
	};
	const handleClickClose = () => {
		setIsOpen(false);
	};

	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
		setIsOpen(false);
	}, [pathname]);

	return (
		<header className="header">
			<div className="inner">
				<h1 className="logo">
					<Link to="/">DEV.SCHLEE</Link>
				</h1>
				<div className="menu_button">
					<button type="button" onClick={handleClickOpen}>
						<RiMenuFoldLine />
					</button>
				</div>
				<nav className={`nav ${isOpen ? 'open' : ''}`}>
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
					<div className="close_button">
						<button type="button" onClick={handleClickClose}>
							<RiCloseFill />
						</button>
					</div>
				</nav>
			</div>
		</header>
	);
}
