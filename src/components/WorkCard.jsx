import React, { useEffect, useState, useRef } from 'react';
import Popup from './Popup';
import Loading from './Loading';

export default function WorkCard({ id, title, year, url, alt, children }) {
	const [visible, setVisible] = useState(false);
	const [loading, setLoading] = useState(true);
	const imgNode = useRef();

	const handleClickOpen = (e) => {
		e.preventDefault();
		setVisible(true);
	};
	const handleClickClose = (e) => {
		e.preventDefault();
		setVisible(false);
	};

	useEffect(() => {
		if (visible) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = null;
		}
	}, [visible]);

	useEffect(() => {
		if (!imgNode) return;
		imgNode.current.addEventListener('load', () => {
			setLoading(false);
		});
	}, []);

	return (
		<>
			<a href={id} onClick={handleClickOpen}>
				<div className="tit">
					{title} <span className="sub">({year})</span>
				</div>
				<div className="img">
					<img
						src={url}
						width="480"
						height="auto"
						alt={alt}
						ref={imgNode}
						style={{ visibility: loading ? 'hidden' : null }}
					/>
					{loading && <Loading />}
				</div>
			</a>
			<Popup title={title} isVisible={visible} onClickClose={handleClickClose}>
				{children}
			</Popup>
		</>
	);
}
