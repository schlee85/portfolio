import React, { useEffect, useRef, useState } from 'react';
import Popup from './Popup';

export default function WorkCard({ id, title, year, url, alt, children }) {
	const [visible, setVisible] = useState(false);

	const imgRef = useRef(null);
	const [isImgLoaded, setIsImgLoaded] = useState(false);

	const handleClickOpen = (e) => {
		e.preventDefault();
		setVisible(true);
	};
	const handleClickClose = (e) => {
		e.preventDefault();
		setVisible(false);
	};

	useEffect(() => {
		if (!imgRef.current) {
			return;
		}

		const updateStatus = (img) => {
			const isLoaded = img.complete && img.naturalHeight !== 0;
			setIsImgLoaded(isLoaded);
		};

		imgRef.current.addEventListener(
			'load',
			() => updateStatus(imgRef.current),
			{ once: true },
		);
	}, [imgRef]);

	useEffect(() => {
		if (visible) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = null;
		}
	}, [visible]);

	useEffect(() => {
		if (isImgLoaded) {
			document.querySelector('.container.work .lists').style.visibility =
				'visible';
		} else {
			document.querySelector('.container.work .lists').style.visibility =
				'hidden';
		}
	}, [isImgLoaded]);

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
						data-txt="1"
						ref={imgRef}
						alt={alt}
					/>
				</div>
			</a>
			<Popup title={title} isVisible={visible} onClickClose={handleClickClose}>
				{children}
			</Popup>
		</>
	);
}
