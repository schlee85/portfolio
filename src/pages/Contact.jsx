import React from 'react';
import img_contact from '../assets/images/img_contact.png';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { RiKakaoTalkFill } from 'react-icons/ri';

export default function Contact() {
	return (
		<section className="container contact">
			<h2 className="m_tit">Contact</h2>
			<div className="img">
				<img src={img_contact} alt="자주가는 동산 정상" />
			</div>
			<dl className="callme">
				<dt>
					<AiFillGoogleCircle /> Mail
				</dt>
				<dd>seungchan85@gmail.com</dd>
				<dt>
					<RiKakaoTalkFill /> KakaoTalk ID
				</dt>
				<dd>schlee85</dd>
			</dl>
		</section>
	);
}
