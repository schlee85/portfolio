import React from 'react';
import img_profile from '../assets/images/img_profile.webp';
import { Link } from 'react-router-dom';

export default function About() {
	return (
		<section className="container about">
			<h2 className="m_tit">About</h2>
			<div className="about_wrap">
				<div className="img">
					<img src={img_profile} width="200" height="200" alt="profile" />
				</div>
				<div className="desc">
					<strong className="tit">
						이승찬 <sub>(L.Seungchan, 경력 10년+)</sub>
					</strong>
					<p className="txt">
						저는 UI 개발자입니다.
						<br />
						통상적으로 웹 퍼블리셔이고, 개발자로서의 <br className="mobile" />
						마인드를 확장해 나가고 있으며, <br className="mobile" />
						보다 나은 경험을 드리기 위해 노력합니다.
					</p>
					<p className="txt">
						웹 퍼블리싱은 사용자 중심의 웹사이트 제작에{' '}
						<br className="mobile" />
						초점을 맞추는 것입니다. <br className="pc" />
						이를 위해, 사용자 경험과 <br className="mobile" />
						인터페이스에 대한 깊은 이해를 바탕으로, <br className="mobile" />
						사용자 친화적인 웹사이트를 개발해야 합니다.
						<br /> 뿐만 아니라, 웹 표준과 웹 접근성을 준수하여,{' '}
						<br className="mobile" />
						모든 사용자가 웹사이트를 편리하게 <br className="mobile" />
						사용할 수 있도록 합니다.
					</p>
					<p className="txt">
						저는 디자인을 시작으로 퍼블리싱까지 <br className="mobile" />
						많은 것을 배워 왔습니다. <br className="pc" />
						그럼에도, UI 공부를 하다보면 <br className="mobile" />
						매번 새롭고 끝이 없다는 것을 느낍니다.
						<br />
						내일은 어떤 기술이 나올지 기대됩니다.
					</p>
					<p className="txt">
						🏅 <span className="bold">기술</span> : <br className="mobile" />
						웹표준, 웹접근성, CSS, SCSS, Javascript, React, Git 등
					</p>
					<p className="txt">
						⚙️ <span className="bold">사용툴</span> : <br className="mobile" />
						VSCode, 크롬브라우저, 피그마, 포토샵, 슬랙, 노션 등
					</p>
					<strong className="tit">개인용 가이드</strong>
					<p className="txt">
						&middot; 가이드 : <br className="mobile" />
						<Link to="#" target="_blank" title="새창열기">
							test
						</Link>
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
							to="https://calm-brigadeiros-6b06a1.netlify.app/"
							target="_blank"
							title="새창열기"
						>
							https://calm-brigadeiros-6b06a1.netlify.app/
						</Link>
					</p>
				</div>
			</div>
		</section>
	);
}
