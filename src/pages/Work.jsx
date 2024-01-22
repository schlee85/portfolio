import React from 'react';
import WorkCard from '../components/WorkCard';
// import Loading from '../components/Loading';

import img_work_artndesign from '../assets/images/work/img_work_artndesign.png';
import img_work_hanssem from '../assets/images/work/img_work_hanssem.png';
import img_work_hanwhalife from '../assets/images/work/img_work_hanwhalife.png';
import img_work_jejubank from '../assets/images/work/img_work_jejubank.png';
import img_work_kbbank from '../assets/images/work/img_work_kbbank.png';
import img_work_kbcard from '../assets/images/work/img_work_kbcard.png';
import img_work_lgcns from '../assets/images/work/img_work_lgcns.png';
import img_work_lottelife from '../assets/images/work/img_work_lottelife.png';
import img_work_runable from '../assets/images/work/img_work_runable.png';
import img_work_samsungsds from '../assets/images/work/img_work_samsungsds.png';
import img_work_shinhanbank from '../assets/images/work/img_work_shinhanbank.png';
import img_work_shinhangroup from '../assets/images/work/img_work_shinhangroup.png';
import img_work_ssg from '../assets/images/work/img_work_ssg.png';
import img_work_thehyundai from '../assets/images/work/img_work_thehyundai.png';
import img_work_tworld from '../assets/images/work/img_work_tworld.png';

export default function Works() {
	return (
		<section className="container work">
			<h2 className="m_tit">Work</h2>
			<ul className="lists">
				<li>
					<WorkCard
						id="pop017"
						title="국민은행 기업 운영"
						year="2023"
						url={img_work_kbbank}
						alt="국민은행"
					>
						<ul>
							<li>기간 : 2023.03 ~ 2023.08</li>
							<li>기업 채널 20여개 운영.</li>
							<li>PL 역할 수행.</li>
						</ul>
					</WorkCard>
				</li>
				<li>
					<WorkCard
						id="pop016"
						title="현대백화점 고도화"
						year="2022"
						url={img_work_thehyundai}
						alt="현대백화점"
					>
						<ul>
							<li>기간 : 2022.11 ~ 2023.02</li>
							<li>현대백화점 PC/Mobile 고도화.</li>
							<li>지점안내, 층별안내 등 담당.</li>
							<li>PA 역할 수행.</li>
						</ul>
					</WorkCard>
				</li>
				<li>
					<WorkCard
						id="pop015"
						title="SSG닷컴 운영"
						year="2022"
						url={img_work_ssg}
						alt="SSG닷컴"
					>
						<ul>
							<li>기간 : 2022.06 ~ 2022.09</li>
							<li>신규 이벤트 및 사이트 유지 보수.</li>
							<li>상품 상세 화면 고도화 담당.</li>
							<li>PA 역할 수행.</li>
						</ul>
					</WorkCard>
				</li>
				<li>
					<WorkCard
						id="pop014"
						title="LGCNS singlex portal"
						year="2021"
						url={img_work_lgcns}
						alt="LGCNS"
					>
						<ul>
							<li>기간 : 2021.11 ~ 2022.04</li>
							<li>LGCNS 각 계열사들 및 협력 업체 간 연계 서비스.</li>
							<li>Vuejs 퍼블리싱 구축.</li>
							<li>PL/PA 역할 수행. (1인 투입)</li>
						</ul>
					</WorkCard>
				</li>
				<li>
					<WorkCard
						id="pop013"
						title="러너블 구축"
						year="2021"
						url={img_work_runable}
						alt="러너블"
					>
						<ul>
							<li>기간 : 2021.07 ~ 2021.11</li>
							<li>오프라인 러닝 앱 구축.</li>
							<li>바이널씨/제이컨텐트리(JTBC) 공동으로 제작.</li>
							<li>PL 역할 수행.</li>
						</ul>
					</WorkCard>
				</li>
				<li>
					<WorkCard
						id="pop012"
						title="신한은행 MY자산 고도화"
						year="2021"
						url={img_work_shinhanbank}
						alt="신한은행"
					>
						<ul>
							<li>기간 : 2020.11 ~ 2022.05</li>
							<li>자산 서비스 개편 및 App 고도화.</li>
							<li>PA 역할 수행.</li>
						</ul>
					</WorkCard>
				</li>
				<li>
					<WorkCard
						id="pop011"
						title="티월드 운영"
						year="2020"
						url={img_work_tworld}
						alt="티월드"
					>
						<ul>
							<li>기간 : 2019.12 ~ 2020.09</li>
							<li>신규 상품 및 사이트 보수 유지.</li>
							<li>마이 페이지 React 고도화 퍼블리싱 참여.</li>
							<li>PA 역할 수행.</li>
						</ul>
					</WorkCard>
				</li>
				<li>
					<WorkCard
						id="pop010"
						title="국민카드 차세대 고도화"
						year="2019"
						url={img_work_kbcard}
						alt="국민카드"
					>
						<ul>
							<li>기간 : 2019.02 ~ 2019.09</li>
							<li>개인 영역 차세대 고도화.</li>
							<li>PA 역할 수행.</li>
						</ul>
					</WorkCard>
				</li>
				<li>
					<WorkCard
						id="pop009"
						title="한화생명 온슈어 개편"
						year="2018"
						url={img_work_hanwhalife}
						alt="한화생명"
					>
						<ul>
							<li>기간 : 2018.10 ~ 2018.11</li>
							<li>한화생명 상품 개편 및 고도화.</li>
							<li>PA 역할 수행.</li>
						</ul>
					</WorkCard>
				</li>
				<li>
					<WorkCard
						id="pop008"
						title="신한은행 쉐어드&amp;판클럽 통합 구축"
						year="2018"
						url={img_work_shinhanbank}
						alt="신한은행"
					>
						<ul>
							<li>기간 : 2018.05 ~ 2018.08</li>
							<li>2개 앱 통합 고도화 프로젝트.</li>
							<li>PL 역할 수행.</li>
						</ul>
					</WorkCard>
				</li>
				<li>
					<WorkCard
						id="pop007"
						title="롯데손해보험 퇴직연금 구축"
						year="2017"
						url={img_work_lottelife}
						alt="롯데손해보험"
					>
						<ul>
							<li>기간 : 2017.12 ~ 2018.02</li>
							<li>퇴직연금 사이트 개편.</li>
							<li>PL/PA 역할 수행. (1인 투입)</li>
						</ul>
					</WorkCard>
				</li>
				<li>
					<WorkCard
						id="pop006"
						title="제주은행 제주S뱅킹"
						year="2017"
						url={img_work_jejubank}
						alt="제주은행"
					>
						<ul>
							<li>기간 : 2017.05 ~ 2017.10</li>
							<li>모바일 APP 신규 구축.</li>
							<li>PA 역할 수행.</li>
						</ul>
					</WorkCard>
				</li>
				<li>
					<WorkCard
						id="pop005"
						title="신한금융지주 AI 플랫폼 제안"
						year="2017"
						url={img_work_shinhangroup}
						alt="신한금융지주"
					>
						<ul>
							<li>기간 : 2017.03 ~ 2017.04</li>
							<li>대화형 AI 기능 제안 프로젝트.</li>
							<li>PL/PA 역할 수행. (1인 투입)</li>
						</ul>
					</WorkCard>
				</li>
				<li>
					<WorkCard
						id="pop004"
						title="삼성SDS 웹 솔루션 개편"
						year="2016"
						url={img_work_samsungsds}
						alt="삼성SDS"
					>
						<ul>
							<li>기간 : 2016.05 ~ 2017.01</li>
							<li>내부 직원용 교육 사이트 개편.</li>
							<li>PA 역할 수행.</li>
						</ul>
					</WorkCard>
				</li>
				<li>
					<WorkCard
						id="pop003"
						title="신한은행 신한S뱅킹"
						year="2015"
						url={img_work_shinhanbank}
						alt="신한은행"
					>
						<ul>
							<li>기간 : 2015.10 ~ 2016.02</li>
							<li>개인뱅킹 모바일 APP 신규 구축.</li>
							<li>PA 역할 수행.</li>
						</ul>
					</WorkCard>
				</li>
				<li>
					<WorkCard
						id="pop002"
						title="한샘 패밀리 사이트 운영/구축"
						year="2014"
						url={img_work_hanssem}
						alt="한샘"
					>
						<ul>
							<li>기간 : 2014.04 ~ 2015.05</li>
							<li>한샘, 인테리어, 키친, IK 사이트 운영.</li>
							<li>PA 역할 수행.</li>
						</ul>
					</WorkCard>
				</li>
				<li>
					<WorkCard
						id="pop001"
						title="아트앤디자인 사이트 운영"
						year="2012"
						url={img_work_artndesign}
						alt="아트앤디자인"
					>
						<ul>
							<li>기간 : 2011.12 ~ 2013.12</li>
							<li>아트앤디자인 홈페이지 관리 및 게시물 등록.</li>
							<li>광고 배너 및 상품 상세페이지 제작.</li>
							<li>입시 설명회 시연 동영상 및 PPT 제작.</li>
						</ul>
					</WorkCard>
				</li>
			</ul>
		</section>
	);
}
