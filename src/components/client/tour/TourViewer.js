import React, { useState } from 'react';
import styled from 'styled-components';
import { Affix, Avatar, ConfigProvider, Comment, Tooltip, Image, Row, Col, DatePicker } from 'antd';
import moment from 'moment';
import { UserOutlined, MailOutlined } from '@ant-design/icons';
import palette from '../../../lib/styles/palette';
import Responsive from '../../common/Responsive';
import Button from '../../common/Button';
import CounterContainer from '../../../containers/common/CounterContainer';
import 'moment/locale/ko';
import locale from 'antd/es/date-picker/locale/ko_KR';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import Favorite from '../../common/Favorite';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import TimerIcon from '@material-ui/icons/Timer';
import LanguageIcon from '@material-ui/icons/Language';
import StarRateRoundedIcon from '@material-ui/icons/StarRateRounded';
import Rating from '@material-ui/lab/Rating';
import TourListContainer from '../../../containers/tours/TourListContainer'
import MuiAccordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const TourViewerBlock = styled(Responsive)`
    margin-top: 4rem;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    /* flex로 내부 내용 중앙 정렬 */
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
`;

const tourMainBlock = styled.div`
    width: 685px;
    /* .icons {
        size: 100px;
    } */
`;

const TourHead = styled.div`
    margin-bottom: 1.5rem;
    h1 {
        font-size: 2rem;
        line-height: 1.5;
        margin: 0;
        font-weight: 700;
    }
`;

const IconsDescripBox = styled.div`
    display: flex;
    font-size: 0.9rem;
    color: ${palette.gray[6]};
    font-weight: 500;
    padding: 0.9rem 1rem;
    .iconDescrip {
        display: flex;
        align-items: center;
        margin: 0 2.5rem 0 0;
    }
`;

const ReviewPreviewBox = styled.div`
    margin: 0.9rem 0 1.5rem 0;
    .previewTitle {
        display: flex;
        align-items: center;
        font-size: 1.5rem;
        font-weight: 650;
    }
    .reviewCount {
        font-size: 0.9rem;
        color: ${palette.gray[6]};
        padding-top: 0.3rem;
    }
    .watchReviewsBtn {
        font-size: 1rem;
        font-weight: 650;
        color: ${palette.cyan[5]};
        width: 7.9rem;
        height: 2.8rem;
        outline: 0;
        box-shadow: none;
        border-radius: 3px;
        cursor: pointer;
        background-color: white;
        border: 1.5px solid ${palette.cyan[5]};
    }
`;

const TourMaterials = styled.div`
    border-top: 1px solid ${palette.gray[4]};
    padding: 1rem;
    font-size: 0.98rem;
    font-weight: 520;
    .materialsTitles {
        font-size: 1.29rem;
        font-weight: 750;
        margin: 0 0 0.5rem 0;
    }
    .accordionBox {
        margin: -0.5rem 0 -1rem -1rem;
    }
`;

const SideMenuBlock = styled.div`
    .affixBlock {
        height: 300px;
    }
`;
const AffixHelper = styled.div`
    margin-top: 154rem;
`;
const BookingBox = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid ${palette.gray[4]};
    padding: 2rem;
    width: 320px;
    
    background: white;
    border-radius: 2px;
    margin: 1rem 0rem 0rem 1rem;
    
    .counterBox {
        justify-content: space-between;
        display: flex;
        align-items: center;
        font-size: 1.1rem;
        font-weight: 600;
    }
   
`;

const TourPrice = styled.div`
    justify-content: space-between;
    display: flex;
    align-items: flex-start;
    .tour-price {
        padding-bottom: 2rem;
        font-weight: 700;
        font-size: 1.5rem;
        color: ${palette.gray[7]};
        letter-spacing: 0.5px;
    }
    .favorite {
        margin-right: -1.3rem;
        font-size: 1.3rem;
    }
`;

const OptionSelectBox = styled.div`
    margin-top: 1rem;
    margin-bottom: 1rem;

    .menuItem {
        margin-top: 3px;
        font-size: 0.85rem;
    }
    .placeHolder{
        margin-top: 3px;
        font-size: 0.85rem;
        color: ${palette.gray[5]};
    }
`;

const SearchBar = styled.div`
    .datepicker {
        height: 49px;
        width: 100%
        
        /* margin-bottom: 1rem; */
    }
`;

const TourContent = styled.div`
  color: ${palette.gray[8]};
  width: 685px;
  margin-top: 1.5rem;
  img {
    max-width: 100%;
    height: auto;
  }
`;

const ButtonWidthMarginTop = styled(Button)`
    margin-top: 1rem;
`;

const HostTitleBox = styled.div`
    margin: 1rem 0 -1rem 0;
    font-size: 1rem;
    font-weight: 620;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

/* const { Option } = Select; */

const InputSelect = withStyles((theme) => ({
    divs: {
      'label + &': {
        marginTop: theme.spacing(3),
        
      },
    },
    input: {
      width: '13.5rem;',
      height: '1.5rem;',
      borderRadius: 3,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '11px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      '&:focus': {
        borderRadius: 3,
        border: '1px solid #80bdff',
        boxShadow: '0 0 0 0.1rem rgba(0,123,255,.25)',
      },
    },
  }))(InputBase);

  const RecommendTourBox = styled(Responsive)`
    margin-top: 1rem;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    /* flex로 내부 내용 중앙 정렬 */
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 1rem;
    .recommendTourTitle {
        font-size: 1.4rem;
        font-weight: 700;
        padding: 1rem;
        margin-bottom: 1rem;
    }
`;
  
  // 별점 컬러 설정
  const StyledRating = withStyles({
    iconFilled: {
      color: '#3bc9db',
    },
    iconHover: {
      color: '#3bc9db',
    },
  })(Rating);

  const map = require('../../../image/map.png');

  // accordion 스타일

  const Accordion = withStyles({
    root: {
      border: 'none',
      boxShadow: 'none',
      '&:not(:last-child)': {
        borderBottom: 0,
      },
      '&:before': {
        display: 'none',
      },
      '&$expanded': {
        margin: 'auto',
      },
    },
    expanded: {},
  })(MuiAccordion);






const TourViewer = ({ tour, error, loading, actionButtons, ownPost, tourId }) => {

  // 에러 발생 시
  if (error) {
    if (error.response && error.response.status === 404) {
      return <TourViewerBlock>존재하지 않는 포스트입니다.</TourViewerBlock>;
    }
    return <TourViewerBlock>오류 발생!</TourViewerBlock>;
  }

  // 로딩중이거나, 아직 포스트 데이터가 없을 시
  if (loading || !tour) {
    return null;
  }

    /* antd 데이트피커 이벤트 핸들러 */
    function onChange(date, dateString) {
    } 

    function handleChange(value) {
      }

    /* const [container, setContainer] = useState(null); */

    const { title, about, Images, price, option } = tour;

    return (
        <ConfigProvider locale={locale}>
        <TourViewerBlock>
            
            <Row>
                <Col span={16} className="sideBar">
                    <tourMainBlock>
                        <TourHead>
                            <h1>{title}</h1>
                        </TourHead>

                        <hr width="98%" color="#CED4DA" size="1"/>

                        <IconsDescripBox>
                            <div className="iconDescrip">
                                <TimerIcon style={{marginRight:'0.5rem'}} />
                                2시간 소요
                            </div>
                            <div className="iconDescrip">
                                <LanguageIcon style={{marginRight:'0.5rem'}} />
                                한국어
                            </div>
                        </IconsDescripBox>

                        <hr width="98%" color="#CED4DA" size="1"/>

                        <Image
                            width={686}
                            height={450}
                            src={`http://188.166.187.90:80/${Images[0].src}`}
                            style={{margin:'1rem 0'}}
                        />
                        
                        <hr width="100%" color="#CED4DA" size="1"/>

                        <ReviewPreviewBox>
                            <div style={{display:'flex', alignItems:'center'}} > 
                                <div className="previewTitle">
                                    <StarRateRoundedIcon style={{fontSize:'2rem'}} />4.9 &nbsp;
                                </div>
                                
                                <div className="reviewCount">&middot; &nbsp;후기 1개</div>
                                
                            </div>
                            <div style={{padding:'1rem'}}>
                                <Comment
                                    /* actions={actions} */
                                    author={
                                        <div style={{display:'flex', alignItems:'center'}}>
                                            <div style={{fontSize:'0.9rem'}}>
                                                김**
                                            </div>
                                            &nbsp;
                                            &nbsp;
                                            <StyledRating 
                                                /* value={} */
                                                readOnly
                                                defaultValue={5}
                                                size="small"
                                            /> 
                                        </div>
                                    }
                                    avatar={
                                        <Avatar
                                            /* size="small"  */
                                            icon={<UserOutlined />}
                                        />
                                    }
                                    content={
                                        <p>
                                        너무 너무 좋고 즐거운 시간이였어요. 제주도 필수코스!ㅎㅎ 무조건 추천합니다! 또 올게요 :)
                                        </p>
                                    }
                                    datetime={
                                        <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                                        <span>{moment().fromNow()}</span>
                                        </Tooltip>
                                    }
                                />
                            </div>
                            {/* <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
                                <button className="watchReviewsBtn">
                                    후기 전체 보기
                                </button>
                            </div> */}
                        </ReviewPreviewBox>

                        <hr width="100%" color="#CED4DA" size="1"/>

                        <TourContent dangerouslySetInnerHTML={{ __html: about }} />

                        <TourMaterials>
                            <div className="materialsTitles">
                                포함 사항
                            </div>
                            <div>
                                1부 : 연극 <br />
                                2부 : 제주 해녀 다이닝
                            </div>
                        </TourMaterials>
                        <TourMaterials>
                            <div className="materialsTitles">
                                불포함 사항
                            </div>
                            <div>
                                포함사항 제외한 일체 <br />
                                개인사용비용(교통비등)
                            </div>
                        </TourMaterials>
                        <TourMaterials>
                            <div className="materialsTitles">
                                코스 소개
                            </div>
                            <div>
                                20분 : 요리 시간 <br />
                                30분 : 오븐 시간 <br />
                                이후 : 식사 및 휴식시간 <br />
                                *수업 및 현장 상황에 따라 소요시간은 변동이 있을 수 있습니다.
                            </div>
                        </TourMaterials>
                        <TourMaterials>
                            <div className="materialsTitles">
                                위치 안내
                            </div>
                            <div>
                                제주특별자치도 제주시 구좌읍 종달리 477-16
                            </div>
                            <Image
                                width={342}
                                height={220}
                                src={map}
                                style={{margin:'1rem 0'}}
                            />
                        </TourMaterials>
                        <TourMaterials>
                            <div className="accordionBox">
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography className="materialsTitles">자주묻는 질문</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            
Q. 신청한 프립은 어디서 확인하나요?<br />
A. [마이]의 [신청 내역] 탭에서 신청하신 프립을 확인하실 수 있습니다.<br />
Q. 두 명 이상 신청하고 싶은데 어떻게 하나요?<br />
A. 프립에 따라 한 번에 여러명 신청하는 것이 가능하며, 1회 최대 신청 가능 인원 수는 프립별로 다를 수 있으니 확인 부탁드립니다. 추가 신청을 원하시는 경우 추가 결제가 가능하니 참고 부탁드립니다.<br />
Q. 신청 취소 및 환불 처리는 어떻게 되나요?<br />
A. 구매 후 14일 이내에는 신청 취소 및 환불이 가능합니다. 다만, 14일이 지나지 않았더라도 이미 호스트님과 일정 확정 후 출석체크가 완료되었다면 환불이 불가합니다.<br />
Q. 예약을 하고 싶은데, 호스트님의 연락처는 어떻게 알 수 있나요?<br />
A. 프립을 구매하시면 카카오톡 또는 문자로 호스트님의 연락처가 포함된 안내 메시지를 발송해드립니다.<br />
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        </TourMaterials>
                        <TourMaterials>
                            <div className="accordionBox">
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography className="materialsTitles">환불 정책</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            <div>
                                                티켓 구매 후 2주 이내 : 100% 환불<br />
                                                티켓 구매 후 2주 후 : 환불 불가
                                            </div>
                                            &nbsp;
                                            <div>
                                                [환불 신청 방법]<br />
                                                1. 해당 프립을 결제한 계정으로 로그인<br />
                                                2. 내 프립 - 신청내역<br />
                                                3. 취소를 원하는 프립 상세 정보 버튼 - 취소<br />
                                                ※ 결제 수단에 따라 예금주, 은행명, 계좌번호 입력
                                            </div>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        </TourMaterials>
                    </tourMainBlock>
                </Col>
                <Col span={8}>
                    
                    <SideMenuBlock>
                    <AffixHelper />
                    {/* <div className="affixBlock" ref={setContainer}> */}
                                 
                    <Affix offsetBottom={300} /* offsetTop={100} target={() => container} */>
                        <BookingBox>
                            <TourPrice>
                                <div className="tour-price">{Number(price).toLocaleString()} 원</div>
                                <div className="favorite">
                                    <Favorite 
                                        tour={tour}
                                        tourId={tour.id}
                                    />
                                </div>
                            </TourPrice>
                            <SearchBar>
                                <DatePicker
                                    autoFocus={false}
                                    className="datePickBar"
                                    onChange={onChange} 
                                    placeholder="날짜 선택"
                                    locale={locale}
                                    className="datepicker"
                                />
                            </SearchBar>
                            <OptionSelectBox>
                                
                                <Select
                                    /* value="age" */
                                    defaultValue={0}
                                    onChange={handleChange}
                                    input={<InputSelect />}
                                >
                                    
                                    <MenuItem value={0}>
                                        <div className="placeHolder">
                                            옵션 선택
                                        </div>
                                    </MenuItem>
                                    <MenuItem 
                                        value={10} 
                                    >
                                        <div className="menuItem">
                                        {option}
                                        </div>
                                    </MenuItem>
                                    
                                </Select>
                                
                            </OptionSelectBox>
                            <div className="counterBox">
                                인원 <CounterContainer />
                            </div>
                            <Link to="/tour/payment">
                                <ButtonWidthMarginTop fullWidth cyan >여행하기</ButtonWidthMarginTop>
                            </Link>
                            <hr width="125%" color="#CED4DA" size="1" style={{margin: '2rem 0 0 -2rem'}} />
                            <HostTitleBox>
                                <div>
                                    <Avatar /* size="small"*/ icon={<UserOutlined />} /> 
                                    &nbsp; 해녀의 부엌 
                                </div>
                                    <Link to="/tour/inquiry">
                                <div style={{display:'flex', alignItems:'center', flexDirection:'row'}}>
                                    <MailOutlined style={{fontSize:'1rem'}} />
                                    <div style={{fontSize:'0.95rem', marginLeft:'0.3rem'}}>문의하기</div>
                                </div>
                                    </Link>
                            </HostTitleBox>
                        </BookingBox>
                    </Affix>
                    {/* </div> */}
                   
                    </SideMenuBlock>
                    
                </Col>
            </Row>
        </TourViewerBlock>

        <hr width="100%" color="#CED4DA" size="1" style={{marginTop: '-0.8rem'}} />                            

        <RecommendTourBox>
            
            <div className="recommendTourTitle">
                이런 여행은 어때요?
            </div>
            <TourListContainer />
        </RecommendTourBox>
            
        </ConfigProvider>
   )
  };
  
  export default withRouter(TourViewer);