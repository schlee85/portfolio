import React from 'react';

export default function Works() {
	return (
		<section className="container works">
			<h2 className="m_tit">WORKS</h2>
			<p className="m_txt">프로젝트 목록입니다. ✏️</p>
			<table className="table">
				<caption>프로젝트 목록</caption>
				<colgroup>
					<col style={{ width: '25%' }} />
					<col style={{ width: '30%' }} />
					<col style={{ width: '20%' }} />
					<col style={{ width: 'auto' }} />
				</colgroup>
				<thead>
					<tr>
						<th scope="col">기간</th>
						<th scope="col">프로젝트명</th>
						<th scope="col">수행처</th>
						<th scope="col">설명</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<span>2023.03</span> ~ <span>2023.08</span>
						</td>
						<td>국민은행 기업 운영</td>
						<td>국민은행</td>
						<td>퍼블리싱</td>
					</tr>
					<tr>
						<td>
							<span>2022.11</span> ~ <span>2023.02</span>
						</td>
						<td>현대백화점 구축</td>
						<td>현대백화점</td>
						<td>퍼블리싱</td>
					</tr>
					<tr>
						<td>
							<span>2022.06</span> ~ <span>2022.09</span>
						</td>
						<td>SSG닷컴 운영</td>
						<td>SSG닷컴</td>
						<td>퍼블리싱</td>
					</tr>
					<tr>
						<td>
							<span>2021.11</span> ~ <span>2022.04</span>
						</td>
						<td>Singlex Supplier Portal 구축</td>
						<td>LGCNS</td>
						<td>퍼블리싱 (Vuejs)</td>
					</tr>
					<tr>
						<td>
							<span>2021.07</span> ~ <span>2021.11</span>
						</td>
						<td>러너블 서비스 구축</td>
						<td>
							바이널씨/
							<br />
							제이콘텐트리
						</td>
						<td>퍼블리싱</td>
					</tr>
					<tr>
						<td>
							<span>2020.11</span> ~ <span>2021.05</span>
						</td>
						<td>신한 MY자산 고도화</td>
						<td>신한은행</td>
						<td>퍼블리싱</td>
					</tr>
					<tr>
						<td>
							<span>2020.10</span> ~ <span>2020.10</span>
						</td>
						<td>LG전자 한국 사이트통합</td>
						<td>LG전자</td>
						<td>퍼블리싱</td>
					</tr>
					<tr>
						<td>
							<span>2019.12</span> ~ <span>2020.09</span>
						</td>
						<td>티월드 운영</td>
						<td>티월드</td>
						<td>퍼블리싱 (React)</td>
					</tr>
					<tr>
						<td>
							<span>2019.02</span> ~ <span>2019.09</span>
						</td>
						<td>국민카드 차세대</td>
						<td>국민카드</td>
						<td>퍼블리싱</td>
					</tr>
					<tr>
						<td>
							<span>2018.10</span> ~ <span>2018.11</span>
						</td>
						<td>한화 온슈어 개편</td>
						<td>한화생명</td>
						<td>퍼블리싱</td>
					</tr>
					<tr>
						<td>
							<span>2018.05</span> ~ <span>2018.08</span>
						</td>
						<td>신한 쉐어드&amp;판클럽 통합 구축</td>
						<td>신한은행</td>
						<td>퍼블리싱</td>
					</tr>
					<tr>
						<td>
							<span>2017.12</span> ~ <span>2018.02</span>
						</td>
						<td>롯데손해보험 퇴직연금 구축</td>
						<td>롯데손해보험</td>
						<td>퍼블리싱</td>
					</tr>
					<tr>
						<td>
							<span>2017.05</span> ~ <span>2017.10</span>
						</td>
						<td>제주S뱅킹</td>
						<td>제주은행</td>
						<td>퍼블리싱</td>
					</tr>
					<tr>
						<td>
							<span>2017.03</span> ~ <span>2017.04</span>
						</td>
						<td>신한지주 AI 플랫폼 제안</td>
						<td>신한금융지주</td>
						<td>퍼블리싱</td>
					</tr>
					<tr>
						<td>
							<span>2016.03</span> ~ <span>2017.01</span>
						</td>
						<td>웹 솔루션 UI/UX 개편</td>
						<td>삼성SDS</td>
						<td>퍼블리싱</td>
					</tr>
					<tr>
						<td>
							<span>2015.10</span> ~ <span>2016.02</span>
						</td>
						<td>신한S뱅킹</td>
						<td>신한은행</td>
						<td>퍼블리싱</td>
					</tr>
					<tr>
						<td>
							<span>2014.04</span> ~ <span>2015.05</span>
						</td>
						<td>한샘 패밀리 사이트 운영/구축</td>
						<td>한샘</td>
						<td>퍼블리싱</td>
					</tr>
					<tr>
						<td>
							<span>2011.12</span> ~ <span>2013.12</span>
						</td>
						<td>기업 사이트 운영</td>
						<td>에이디미디어</td>
						<td>디자인/퍼블리싱</td>
					</tr>
				</tbody>
			</table>
		</section>
	);
}
