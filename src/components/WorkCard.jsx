import React, { useEffect, useState } from 'react';
import Popup from './Popup';

export default function WorkCard({ id, title, year, url, alt, children }) {
	const [visible, setVisible] = useState(false);

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

	return (
		<>
			<a href={id} onClick={handleClickOpen}>
				<div className="tit">
					{title} <span className="sub">({year})</span>
				</div>
				<div className="img">
					<img src={url} width="480" height="auto" loading="lazy" alt={alt} />
				</div>
			</a>
			<Popup title={title} isVisible={visible} onClickClose={handleClickClose}>
				{children}
			</Popup>
		</>
	);
}
