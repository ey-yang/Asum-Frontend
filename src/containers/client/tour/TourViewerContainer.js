import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { readTour, unloadTour, readTourInfo, unloadTourInfo, changeField } from '../../../modules/tour';
import TourViewer from '../../../components/client/tour/TourViewer';
import { message, Image, Comment, Avatar, Tooltip } from "antd";
import { CarOutlined } from '@ant-design/icons';
import moment from "moment";
import { initialize } from '../../../modules/counter';
import StarRateRoundedIcon from '@material-ui/icons/StarRateRounded';
import Rating from '@material-ui/lab/Rating';
import { UserOutlined } from '@ant-design/icons';
import { withStyles } from '@material-ui/core/styles';

const reviewPhoto1 = require('../../../image/2021-02-17_20-18-26.png');

const map1 = require('../../../image/map.png');
const map2 = require('../../../image/map2.png');
const map3 = require('../../../image/map3.png');
const map4 = require('../../../image/map4.png');
const map5 = require('../../../image/map5.png');
const map7 = require('../../../image/map7.png');
const map8 = require('../../../image/map8.png');
const map11 = require('../../../image/map11.png');

const avatar1 = require('../../../image/foodtour.png');
const avatar2 = require('../../../image/avatar2.png');
const avatar3 = require('../../../image/avatar3.png');
const avatar4 = require('../../../image/avatar4.png');
const avatar5 = require('../../../image/avatar5.png');
const avatar6 = require('../../../image/avatar6.png');
const avatar7 = require('../../../image/avatar7.png');
const avatar8 = require('../../../image/avatar8.png');

 // 별점 컬러 설정
 const StyledRating = withStyles({
  iconFilled: {
    color: '#3bc9db',
  },
  iconHover: {
    color: '#3bc9db',
  },
})(Rating);

const tourInfo = [{}, {tourId: 1, id: 1, timeInfo: "2시간 소요", langInfo: "한국어", reviewScore: '5.0', reviewCount: 1, 
reviewCommnet: <Comment author={
  <div style={{display:'flex', alignItems:'center'}}>
    <div style={{fontSize:'0.9rem'}}>
      홍**
    </div>&nbsp;&nbsp;
    <StyledRating readOnly defaultValue={5} size="small" /> 
  </div>}
avatar={<Avatar icon={<UserOutlined />}/>}
content={<p>너무 너무 좋고 즐거운 시간이였어요. 제주도 필수코스!ㅎㅎ 무조건 추천합니다! 또 올게요 :)</p>}
datetime={
  <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
  <span>2020-12-31</span></Tooltip>}/>, reviewPhoto: <Image width={50} height={50} src={reviewPhoto1} />, inclusion1: "1부 : 연극", inclusion2: "2부 : 제주 해녀 다이닝", notIncluded1: "포함사항 제외한 일체", notIncluded2: "개인사용비용(교통비등)", course1: "20분 : 요리 시간" , course2: "30분 : 오븐 시간", course3: "이후 : 식사 및 휴식시간" , course4: "*수업 및 현장 상황에 따라 소요시간은 변동이 있을 수 있습니다.", address: "제주특별자치도 제주시 구좌읍 종달리 477-16", tourLocationMap: map1, refund1: "[특별 약관 적용 수수료]", refund2: "여행시작 7일전까지(~7) 통보시 : 여행 요금 전액 환불", refund3: "여행시작 3일전까지(6~3) 통보시 : 결제요금의 50%공제", refund4: "여행시작 당일까지(2~당일) 통보시 : 취소/환불 불가", howToUse1: "1. 예약제로 진행되는 상품으로 구매후 확정된 날짜 및 시간 엄수 부탁드립니다. ", howToUse2: "2. 다른 이용객들과 함께 이용하는 상품으로, 지정된 시간에 바로 1부 공연시작합니다. ", howToUse3: "3. 개인사정으로 인한 지각시 날짜&시간 변경 및 환불 불가합니다.", howToUse4: "4. 현장 도착후, 마이리얼트립 예약내역 또는 예약자 성함 확인후 입장가능합니다. ", howToUse5: "5. 해녀의 부엌이 운영하는 해녀다이닝은 만 6세이상(초등학생이상) 부터 입장가능합니다.", hostAvatar: avatar5, hostName: "어썸테이블"}, 
{tourId: 2, id: 2, timeInfo: "1시간 소요", langInfo: "한국어", reviewScore: '5.0', reviewCount: 1, reviewCommnet: <Comment author={
  <div style={{display:'flex', alignItems:'center'}}>
    <div style={{fontSize:'0.9rem'}}>
    심**
    </div>&nbsp;&nbsp;
    <StyledRating readOnly defaultValue={5} size="small" /> 
  </div>}
avatar={<Avatar icon={<UserOutlined />}/>}
content={<p>직원분들도 친절하시고 레시피도 따라하기 쉽게 되어있고 무엇보다 맛있어요..내 손으로 맛있는 디저트를 만들어 낼수 있다니...다음에는 다른 쿠킹체험도 해보고 싶네요</p>}
datetime={
  <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
  <span>2020-11-28</span></Tooltip>}/>, inclusion1: "강습비 + 재료비", inclusion2: "", notIncluded1: "교통비", notIncluded2: "", course1: "★★★오픈 시간은 10:00 ~ 16:30 입니다.12시부터 1시 30분 까지는 브레이크타임이 있으며, 매주 월요일은 휴관합니다.소요시간은 1시간 내 입니다.★★★" , course2: "-체험 시작 시간 : 10:00, 11:00, 13:30, 14:30, 15:30, 16:30", course3: "" , course4: "", address: "토토아뜰리에(제주특별자치도 제주시 고성북길 112 / 지번 : 애월읍 상귀리 152)", tourLocationMap: map2, refund1: "- 본 상품은 상품특성상 부득이하게 별도의 취소 환불 약관이 적용됩니다.", refund2: "- 이용일 1일 전 취소 시 : 100% 환불 가능", refund3: "- 이용 당일 지각 또는 취소 요청 시 : 환불 불가", refund4: "", howToUse1: "** 레시피가 바뀌거나 단체손님이 있을 수 있어, 꼭 Q&A 문의 주시고 예약해주세요~! **", howToUse2: "1. 체험 중간에는 입장이 불가이니, 예약 한 시간내에 방문 바랍니다.(지각 시 환불 & 취소 불가)", howToUse3: "2. 개인사정으로 인한 지각시 날짜&시간 변경 및 환불 불가합니다.", howToUse4: "3. 구매 후 시간 & 체험일 변경 불가합니다.", howToUse5: "4. 요리 후 음식이 익는 시간 30분 추가 소요가 됩니다.", hostAvatar: avatar5, hostName: "어썸테이블"},
{tourId: 3, id: 3, timeInfo: "2시간 소요", langInfo: "한국어",  reviewScore: '5.0', reviewCount: 1, reviewCommnet: <Comment author={
  <div style={{display:'flex', alignItems:'center'}}>
    <div style={{fontSize:'0.9rem'}}>
    김**
    </div>&nbsp;&nbsp;
    <StyledRating readOnly defaultValue={5} size="small" /> 
  </div>}
avatar={<Avatar icon={<UserOutlined />}/>}
content={<p>제주도에서의 색다른 경험을 할수있어 좋았어요☺ 체험 도중에 사진도 찍어주셔서 정말 감사합니다.</p>}
datetime={
  <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
  <span>2020-11-02</span></Tooltip>}/>, inclusion1: "고구마, 감자, 풋귤차, 귤 한 봉지를 선물로 드려요~", inclusion2: "", notIncluded1: "취향에 맞는 음료나 주류는 개인이 지참", notIncluded2: "여행자 보험", course1: "귤 따기 (30분)" , course2: "불멍 (1시간)", course3: "소감 나누며 마무리 인사 (30분)" , course4: "", address: "제주각시이우다 (제주도 한경면 저지8길 15-1)", tourLocationMap: map3, refund1: "티켓 구매 후 2주 이내 : 100% 환불", refund2: "티켓 구매 후 2주 후 : 환불 불가", refund3: "※ 결제 수단에 따라 예금주, 은행명, 계좌번호 입력", refund4: "", howToUse1: "- 따뜻한 옷이나 담요 준비해주세요.", howToUse2: "- 불 냄새가 밸 수 있는 점 감안해 주세요.", howToUse3: "- 최소 모객 인원은 3명입니다. 모객되지 않을 시 투어가 취소될 수 있으며, 취소 시 미리 공지해드립니다.", howToUse4: "- 반드시 코로나 방역 지침 사항을 준수하며 참여해주시기 바랍니다.", howToUse5: "", hostAvatar: avatar5, hostName: "어썸테이블"}, {},
{tourId: 5, id: 5, timeInfo: "1시간 소요", langInfo: "한국어",  reviewScore: '5.0', reviewCount: 1, reviewCommnet: <Comment author={
  <div style={{display:'flex', alignItems:'center'}}>
    <div style={{fontSize:'0.9rem'}}>
    현*
    </div>&nbsp;&nbsp;
    <StyledRating readOnly defaultValue={5} size="small" /> 
  </div>}
avatar={<Avatar icon={<UserOutlined />}/>}
content={<p>전부터 카페 공간이 예쁘고 느낌이 좋아서 찾아갔던 카페였는데요. 이런 곳에서 티클래스가 진행하고 있는 건 이번에 처음 알았어요 ! ㅎㅎ 좋은 기회를 통해서 뜻깊은 경험을 하고왔습니다!</p>}
datetime={
  <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
  <span>2021-01-02</span></Tooltip>}/>, inclusion1: "티클래스 수강료", inclusion2: "다구", inclusion3: "다식", notIncluded1: "기타 비용", notIncluded2: "여행자 보험", course1: "제주와 차에 대한 이야기 (1시간)" , course2: "티 테이스팅 및 다구 체험 (30분)", course3: "" , course4: "", address: "우연못(제주시 은수길 110 2층)", tourLocationMap: map4, refund1: "티켓 구매 후 2주 이내 : 100% 환불", refund2: "티켓 구매 후 2주 후 : 환불 불가", refund3: "※ 결제 수단에 따라 예금주, 은행명, 계좌번호 입력", refund4: "", howToUse1: "-진행하시고자 하는 시간에 대해서 문의 주시기 바랍니다. [화요일 11:00~12:30 / 목요일 19:00~20:30]", howToUse2: "- 우연못은 연우네(1층 식당) 우측 계단을 통해서 올라오시면 찾으실 수 있습니다.", howToUse3: "- 반드시 코로나 방역 수칙을 준수하며 참여해주시기 바랍니다.", howToUse4: "", howToUse5: "", hostAvatar: avatar5, hostName: "어썸테이블"},
{},
{tourId: 7, id: 7, timeInfo: "10시간 소요", langInfo: "한국어", carIcon: <CarOutlined style={{marginRight:'0.5rem', fontSize:'1.35rem'}}/>, transInfo: "차량 이동", reviewScore: '5.0', reviewCount: 1, reviewCommnet: <Comment author={
  <div style={{display:'flex', alignItems:'center'}}>
    <div style={{fontSize:'0.9rem'}}>
    이**
    </div>&nbsp;&nbsp;
    <StyledRating readOnly defaultValue={5} size="small" /> 
  </div>}
avatar={<Avatar icon={<UserOutlined />}/>}
content={<p>진짜 최고에요 최고! 낭만있고 맥주 좋아하면 꼭 하세요</p>}
datetime={
  <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
  <span>2021-01-14</span></Tooltip>}/>, inclusion1: "차량이용/유류비/친절한설명/사진촬영", inclusion2: "", inclusion3: "", notIncluded1: "ㆍ가이드식대 - 1인 3,000원", notIncluded2: "ㆍ맥파이브루어리 치킨/피자/감자튀김/수제맥주1잔 - 1인 20,000원", notIncluded3: "ㆍ제주맥주 브루어리투어/수제맥주1잔 - 1인 12,000원", course1: "맥파이 브루어리 (90분)" , course2: "제주맥주 브루어리 투어 (90분)", course3: "기영상회 Bottle Shop (30분)" , course4: "가을저녁 옥상맥주 (30분)", address: "제주국제공항 주차장 B-1구역", tourLocationMap: map4, refund1: "[취소/환불 규정 특약]", refund2: "- 여행일 기준 7일전까지 취소 요청 시 : 전액환불", refund3: "- 여행일 기준 6~3일전까지 취소 요청 시 : 결제금액의 50% 공제", refund4: "- 여행일 기준 2일전~당일 혹은 Noshow : 취소/변경/환불 불가", howToUse1: "- 여행자 보험을 가입하고 투어에 참가하기를 권해드립니다.", howToUse2: "- 미취학 아동이 있는 그룹은 별도 문의 부탁드립니다.", howToUse3: "- 우천시에도 투어는 진행 됩니다.(우비나 우산을 준비해 주세요)", howToUse4: "- 걷기 편안한 신발을 신고오시기를 권해드리며 개인 간식 또는 생수를 준비해 주시면 감사하겠습니다.", howToUse5: "", hostAvatar: avatar5, hostName: "어썸테이블"},
{tourId: 8, id: 8, timeInfo: "3시간 소요", langInfo: "한국어",  reviewScore: '5.0', reviewCount: 1, reviewCommnet: <Comment author={
  <div style={{display:'flex', alignItems:'center'}}>
    <div style={{fontSize:'0.9rem'}}>
    곽**
    </div>&nbsp;&nbsp;
    <StyledRating readOnly defaultValue={5} size="small" /> 
  </div>}
avatar={<Avatar icon={<UserOutlined />}/>}
content={<p>동문시장 역사와 함께 구역마다 특징을 들으니까, 몰랐던 제주를 이해하는 즐거움을 느꼈어요 쿠킹클래스도 따뜻한 만찬시간도 추억으로 남기게 충분한 시간이었습니다~</p>}
datetime={
  <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
  <span>2021-01-11</span></Tooltip>}/>, inclusion1: "해설 및 안내비", inclusion2: "프로그램 진행비", inclusion3: "프로그램 재료비", notIncluded1: "이동경비", notIncluded2: "여행자보험", notIncluded3: "개인경비", course1: "망장포구 보말잡기 (1시간)" , course2: "보말파스타 쿠킹클래스 (2시간)", course3: "" , course4: "", address: "1. 보말잡기+쿠킹클래스 : 망장포구 / 2. 쿠킹클래스 only : 내창카페", tourLocationMap: map5, refund1: "티켓 구매 후 2주 이내 : 100% 환불", refund2: "티켓 구매 후 2주 후 : 환불 불가", refund3: "※ 결제 수단에 따라 예금주, 은행명, 계좌번호 입력", refund4: "", howToUse1: "- 1시간 동안 시장을 거니니 편한 신발을 착용해주세요.", howToUse2: "- 만12세-18세도 함께 참여하시게 되면 비용은 별도로 문의주세요.", howToUse3: "- 우천시 비옷과 우산을 준비해드립니다.", howToUse4: "- 영어투어는 별도로 문의주세요.", howToUse5: "- 최소 모객인원은 4명입니다. 모객 부족 시 투어가 취소될 수 있습니다. 예약 전 문의 바랍니다.", hostAvatar: avatar5, hostName: "어썸테이블"},
{tourId: 9, id: 9, timeInfo: "3시간 소요", langInfo: "한국어, 영어", reviewScore: '5.0', reviewCount: 1, reviewCommnet: <Comment author={
  <div style={{display:'flex', alignItems:'center'}}>
    <div style={{fontSize:'0.9rem'}}>
    신**
    </div>&nbsp;&nbsp;
    <StyledRating readOnly defaultValue={5} size="small" /> 
  </div>}
avatar={<Avatar icon={<UserOutlined />}/>}
content={<p>예쁜 카페에서 잊지못할 추억을 만들었습니다😄 보말의 종류도 설명듣고ㅎㅎㅎ너무 친절하시고 진짜 맛있었어요~!!!!!</p>}
datetime={
  <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
  <span>2020-10-24</span></Tooltip>}/>, inclusion1: "큐레이터 인건비", inclusion2: "쿠킹클래스 장보는 비용 제반 일체", inclusion3: "쿠킹클래스 비용", notIncluded1: "시장 내 개인 기념품 및 상품 구입비용", notIncluded2: "", course1: "큐레이터와 함께 시장 투어 (40분)" , course2: "큐레이터와 함께 로컬푸드 구입 (30분)", course3: "케왓(2F. 쿠킹랩 베지근)에서 제주전통음식 만들어 함께 먹어보기 (90분)" , course4: "우리의 순간 기록하며 헤어지기 (10분)", address: "베지근연구소(제주시 관덕로17길 27)", tourLocationMap: map7, refund1: "티켓 구매 후 2주 이내 : 100% 환불", refund2: "티켓 구매 후 2주 후 : 환불 불가", refund3: "※ 결제 수단에 따라 예금주, 은행명, 계좌번호 입력", refund4: "", howToUse1: "- 본 프로그램은 당일 취소가 어렵습니다. 예약 전 반드시 확인 바랍니다.", howToUse2: "- 보말잡기 체험 시 미끄럼 방지를 위해 반드시 운동화를 신고 와주시기 바랍니다.", howToUse3: "- 최소 출발 인원 수 (2명) 미달로 여행이 취소될 경우, 개별적으로 연락을 드리며 전액 환불됩니다. ", howToUse4: "- 우천이 심하거나 바다 물때 상황이 좋지 않은 경우 '바릇잡이체험'을 생략하고 실내에서 쿠킹클래스만 진행하며, 보말잡기체험 상당금액의 선물을 증정해드립니다. (이런 경우, 사전 연락드립니다.) ", howToUse5: "- 보말잡기 장소에서 쿠킹클래스 장소로 이동 시 자차로 이동하며, 대중교통 이용자는 가이드 차량에 동승합니다. (4명 가능, 베이비시트 없음)", hostAvatar: avatar5, hostName: "어썸테이블"},
{tourId: 10, id: 10, timeInfo: "72시간 소요", langInfo: "한국어, 영어", reviewScore: '0.0', reviewCount: 0, noReview1:'아직 후기가 없습니다.', noReview2: '첫 후기를 남기고 10,000원 할인쿠폰을 받으세요!', reviewCommnet: '', /* <Comment author={
  <div style={{display:'flex', alignItems:'center'}}>
    <div style={{fontSize:'0.9rem'}}>
    박**
    </div>&nbsp;&nbsp;
    <StyledRating readOnly defaultValue={5} size="small" /> 
  </div>}
avatar={<Avatar icon={<UserOutlined />}/>}
content={<p>정말 색다른 체험이였어요^^ 제주도에서 잊지 못할 추억 남기고 가네요~ㅎㅎ</p>}
datetime={
  <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
  <span>2020-10-01</span></Tooltip>}/>, */inclusion1: "기본 재료비", inclusion2: "카페대관", inclusion3: "최초 제공 외 우유는 직접 구입", notIncluded1: "숙박 및 식사", notIncluded2: "최초 제공 외 우유는 직접 구입", notIncluded3:"본인만의 특별한 메뉴가 있다면 직접 재료 준비", course1: "제주도 카페 사장체험 (14시간)" , course2: "", course3: "" , course4: "", address: "카페 첫경험충전소", tourLocationMap: map8, refund1: "티켓 구매 후 2주 이내 : 100% 환불", refund2: "티켓 구매 후 2주 후 : 환불 불가", refund3: "※ 결제 수단에 따라 예금주, 은행명, 계좌번호 입력", refund4: "", howToUse1: "- 음식점 운영을 위해 위생증이 필요합니다. 오시기 전 가까운 보건소에서 검사를 받으시고 위생증을 지참해 주세요. (발급에 일주일 정도 소요되니 미리 준비 바랍니다.)", howToUse2: "- 필요 시 여행자보험에 가입 후 참여할 것을 권장합니다.", howToUse3: "", howToUse4: "", howToUse5: "", hostAvatar: avatar5, hostName: "어썸테이블"},
{tourId: 11, id: 11, timeInfo: "5시간 소요", langInfo: "한국어", carIcon: <CarOutlined style={{marginRight:'0.5rem', fontSize:'1.35rem'}}/>, transInfo: "차량 이동", reviewScore: 0.0, reviewCount: 0, noReview1:'아직 후기가 없습니다.', noReview2: '첫 후기를 남기고 10,000원 할인쿠폰을 받으세요!', reviewComment: '', inclusion1: "농사 체험 준비물 일체 (목장갑, 농기구, 장화 등)", inclusion2: "바베큐 파티 준비 일체 (숯, 그릴, 소스, 식기류 등)", inclusion3: "", notIncluded1: "주류나 음료는 각자 준비", notIncluded2: "", notIncluded3:"", course1: "제주각시이우다의 농장으로 이동(10분)" , course2: "풀 뽑기.비료 뿌리기.약치기.수확하기 등 시기에 맞는 활동 (3시간)", course3: "호스트 시골집으로 이동하여 팜파티 (2시간)" , course4: "", address: "제주각시이우다 (제주도 한경면 저지8길 15-1)", tourLocationMap: map11, refund1: "티켓 구매 후 2주 이내 : 100% 환불", refund2: "티켓 구매 후 2주 후 : 환불 불가", refund3: "※ 결제 수단에 따라 예금주, 은행명, 계좌번호 입력", refund4: "", howToUse1: "편안한 옷차림과 운동화 (흙이 묻을 수 있음)", howToUse2: "저녁 기온이 떨어져 추울 수 있으니 따뜻한 외투 준비", howToUse3: "최소 모객 인원은 3명입니다. 모객 부족시 팜파티가 취소될 수 있습니다.", howToUse4: "", howToUse5: "", hostAvatar: avatar5, hostName: "어썸테이블"},
];


const TourViewerContainer = ({ match, history }) => {

  /* console.log(match); */
  // 처음 마운트될 때 포스트 읽기 API 요청
  const { tourId } = match.params;
  const dispatch = useDispatch();
  const { tour, date, error, loading, user } = useSelector(({ tour, loading, user }) => ({
    tour: tour.tour,
    date: tour.date,
    error: tour.error,
    loading: loading['tour/READ_TOUR'],
    user: user.user
  }));

  function onChange(e) {
    const value = moment(e._d).format("YYYY-MM-DD");
    dispatch(
      changeField({
        key: 'date',
        value,
      })
    );
  };

  const [optionCheck, setOptionCheck] = useState(null);

  function onChangeOption(e) {
    return setOptionCheck(e.target.value);
  }

  const onPaymentPage = () => {
    if (!date) {
      return message.error('날짜를 선택해주세요.');
    };
    if (optionCheck !== 10) {
      return message.error('옵션을 선택해주세요.');
    }
    return history.push("/tour/payment");
  }

  useEffect(() => {
    dispatch(readTour(tourId));
    dispatch(initialize());
    // 언마운트될 때 리덕스에서 포스트 데이터 없애기
    // return () => {
    //   dispatch(unloadTour());
    // };
  }, [dispatch, tourId]);


  console.log(tourInfo[tourId]);

  const woojong = tourInfo[tourId]
  

  return <TourViewer tour={tour} tourId={tourId} tourInfo={tourInfo} loading={loading} error={error} woojong={woojong} user={user}
  onChange={onChange} onChangeOption={onChangeOption}
  onPaymentPage={onPaymentPage} />;
};

export default withRouter(TourViewerContainer);
