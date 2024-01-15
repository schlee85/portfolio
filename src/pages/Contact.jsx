import React from 'react';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { RiKakaoTalkFill } from 'react-icons/ri';

export default function Contact() {
	return (
		<section className="container contact">
			<h2 className="m_tit">CONTACT</h2>
			<p className="m_txt">연결고리. 📮</p>
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
