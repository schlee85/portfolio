import React, { useRef } from 'react';
import { IoClose } from 'react-icons/io5';

export default function Popup({ title, isVisible, onClickClose, children }) {
	const backdrop = useRef();

	return (
		<div
			className={`popup_wrap ${isVisible ? 'visible' : ''}`}
			ref={backdrop}
			onClick={(e) => {
				if (e.target === backdrop.current) {
					onClickClose(e);
				}
			}}
		>
			<div className="inner">
				<div className="popup_head">
					<h1>📌 {title || 'popup title'}</h1>
				</div>
				<div className="popup_cont">{children}</div>
				<button type="button" className="popup_close" onClick={onClickClose}>
					<IoClose />
				</button>
			</div>
		</div>
	);
}
