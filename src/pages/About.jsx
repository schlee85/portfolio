import React from 'react';
import img_profile from '../assets/images/img_profile.webp';
import { Link } from 'react-router-dom';

export default function About() {
	return (
		<section className="container about">
			<h2 className="m_tit">About</h2>
			<div className="img">
				<img src={img_profile} alt="profile" />
			</div>
			<div className="desc">
				<strong className="tit">
					이승찬 <sub>(L.Seungchan, 경력 10년+)</sub>
				</strong>
				<p className="txt">
					저는 UI 개발자입니다.
					<br />
					퍼블리셔에서 개발자로서 <br className="mobile" />
					마인드를 확장해 나가고 있습니다.
					<br />
					보다 나은 경험을 드리기 위해 노력하고 있습니다.
				</p>
				<p className="txt">
					영상, 디자인을 시작으로 퍼블리싱까지 <br className="mobile" />
					오랜 기간 업무를 해왔습니다.
					<br />
					그럼에도, UI 공부를 하다보면 매번 새롭고
					<br className="mobile" /> 끝이 없다는 것을 느낍니다.
					<br />
					내일은 어떤 기술이 나올지 기대됩니다.
				</p>
				<p className="txt">
					🏅 <span className="bold">기술</span> : <br className="mobile" />
					웹표준, 웹접근성, CSS, SCSS, Javascript, React, Git
				</p>
				<p className="txt">
					⚙️ <span className="bold">사용툴</span> : <br className="mobile" />
					VSCode, 크롬브라우저, 피그마, 스케치, 포토샵, 슬랙, 노션
				</p>
				<strong className="tit">
					프론트엔드 예제 <sub>(드림코딩)</sub>
				</strong>
				<p className="txt">Thank you, Ellie. 🙇‍♂️</p>
				<p className="txt">
					&middot; 유튜브 : <br className="mobile" />
					<Link
						to="https://stupendous-khapse-106ab1.netlify.app/"
						target="_blank"
						title="새창열기"
					>
						https://stupendous-khapse-106ab1.netlify.app/
					</Link>
					<br />
					&middot; 쇼핑몰 : <br className="mobile" />
					<Link
						to="https://stupendous-khapse-106ab1.netlify.app/"
						target="_blank"
						title="새창열기"
					>
						https://stupendous-khapse-106ab1.netlify.app/
					</Link>
				</p>
			</div>
		</section>
	);
}
