import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { FiMenu } from 'react-icons/fi';

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

	useEffect(() => {
		window.addEventListener('resize', function () {
			if (window.innerWidth > 600) {
				setIsOpen(false);
			}
		});
	}, []);

	return (
		<header className="header">
			<div className="inner">
				<h1 className="logo">
					<Link to="/">DEV.SCHLEE</Link>
				</h1>
				<div className="menu_button">
					<button type="button" onClick={handleClickOpen}>
						<span className="hide">메뉴 열기</span>
						<FiMenu />
					</button>
				</div>
				<nav className={`nav ${isOpen ? 'open' : ''}`}>
					<div className="nav_menu">
						<Link to="/about" className={pathname === '/about' ? 'active' : ''}>
							ABOUT
						</Link>
						<Link to="/work" className={pathname === '/work' ? 'active' : ''}>
							WORK
						</Link>
						<Link
							to="/contact"
							className={pathname === '/contact' ? 'active' : ''}
						>
							CONTACT
						</Link>
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
							<span className="hide">메뉴 닫기</span>
							<IoClose />
						</button>
					</div>
				</nav>
			</div>
		</header>
	);
}
