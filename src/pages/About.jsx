import React, { useState, useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import img_profile from '../assets/images/img_profile.png';

export default function About() {
	const imgNode = useRef();
	const [loading, setLoading] = useState(true);

	useLayoutEffect(() => {
		if (!imgNode) return;
		imgNode.current.addEventListener('load', () => {
			setLoading(false);
		});
	}, []);

	return (
		<section className="container about">
			<h2 className="m_tit">About</h2>
			<div className="about_wrap">
				<div className="img">
					<img
						src={img_profile}
						width="340"
						height="340"
						alt="profile"
						ref={imgNode}
						style={{ visibility: loading ? 'hidden' : null }}
					/>
					{loading && <Loading />}
				</div>
				<div className="desc">
					<strong className="tit">
						이승찬 <sub>(L.Seungchan, 경력 10년+)</sub>
					</strong>
					<p className="txt">
						저는 UI 개발자입니다. 흔히 웹 퍼블리셔라 불립니다.
						<br />
						개발자로서의 마인드를 확장해 나가고 있으며,{' '}
						<br className="mobile" />
						보다 나은 경험을 드리기 위해 노력합니다.
					</p>
					<p className="txt">
						웹 퍼블리싱은 사용자 중심의 웹사이트 제작에 초점을{' '}
						<br className="mobile" />
						맞추는 것입니다. <br className="pc" />
						이를 위해, 사용자 경험과 인터페이스에 <br className="mobile" />
						대한 깊은 이해를 바탕으로, 사용자 친화적인 웹사이트를{' '}
						<br className="mobile" />
						개발해야 합니다. <br className="pc" />
						뿐만 아니라, 웹 표준과 웹 접근성을 <br className="mobile" />
						준수하여, 모든 사용자가 웹사이트를 편리하게{' '}
						<br className="mobile" />
						사용할 수 있도록 합니다.
					</p>
					<p className="txt">
						저는 디자인을 시작으로 퍼블리싱까지 많은 것을{' '}
						<br className="mobile" />
						배워 왔습니다. <br className="pc" />
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
						&middot; 저장소 : <br className="mobile" />
						<Link
							to="https://github.com/schlee85/guide"
							target="_blank"
							title="새창열기"
						>
							https://github.com/schlee85/guide
						</Link>
					</p>
					<strong className="tit">
						프론트엔드 예제 <sub>(드림코딩)</sub>
					</strong>
					<p className="txt">Thank you, Ellie. 🙇‍♂️</p>
					<p className="txt">
						&middot; 유튜브 : <br className="mobile" />
						<Link
							to="https://schlee-ex-youtube.netlify.app/"
							target="_blank"
							title="새창열기"
						>
							https://schlee-ex-youtube.netlify.app/
						</Link>
						<br />
						&middot; 쇼핑몰 : <br className="mobile" />
						<Link
							to="https://schlee-ex-shoppy.netlify.app/"
							target="_blank"
							title="새창열기"
						>
							https://schlee-ex-shoppy.netlify.app/
						</Link>
					</p>
				</div>
			</div>
		</section>
	);
}
