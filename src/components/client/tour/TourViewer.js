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
import { message } from 'antd';


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
    .reviewImg {
        border: 0;
    }
    .noReviewFirst {
        font-size: 1.2rem;
        font-weight: 800;
        color: ${palette.gray[7]};
    }
    .noReviewSecond {
        font-size: 1rem;
        font-weight: 700;
        color: ${palette.cyan[5]};
    }
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
    margin: 0.9rem 0 0.3rem 0;
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
    padding: 1rem 0;
    font-size: 0.85rem;
    font-weight: 520;
    .materialsTitles {
        font-size: 1.1rem;
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
/* const AffixHelper = styled.div`
    margin-top: 145rem;
`; */
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
    font-size: 0.9rem;
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



const TourViewer = ({ tour, woojong, error, loading, actionButtons, ownPost, tourId, user,
    onChange, onChangeOption, onPaymentPage }) => {

    const hideImgWhenError = e => {
            e.target.onerror = null;
            e.target.style.display = "none";
    };

    const onclick = () => {
        return message.info('로그인이 필요합니다.');
    }

    function disabledDate(current) {
        // Can not select days before today and today
        return current < moment().endOf('today');
      }

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
    //옵션 선택 함수
    // function handleChange(e) {
    //     return e.target.value;
    // }

    /* const [container, setContainer] = useState(null); */

    const { title, about, Images, price, option } = tour;
    const { timeInfo, langInfo, carIcon, transInfo, reviewCount, reviewScore, noReview1, noReview2, reviewCommnet, reviewPhoto, inclusion1, inclusion2, inclusion3, notIncluded1, notIncluded2, notIncluded3, course1, course2, course3, course4, address, tourLocationMap, refund1, refund2, refund3, refund4, howToUse1, howToUse2, howToUse3, howToUse4, howToUse5, hostAvatar, hostName} = woojong;

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
                                {<TimerIcon style={{marginRight:'0.5rem'}} />}
                                {timeInfo}
                            </div>
                            <div className="iconDescrip">
                                <LanguageIcon style={{marginRight:'0.5rem'}} />
                                {langInfo}
                            </div>
                            <div className="iconDescrip">
                                {carIcon}
                                {transInfo}
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
                                    <StarRateRoundedIcon style={{fontSize:'2rem'}} /> {reviewScore} &nbsp;
                                </div>
                                
                                <div className="reviewCount">&middot; &nbsp;후기 {reviewCount}개</div>
                                
                            </div>
                            <div style={{padding:'1rem', display:'flex'}}>
                                {reviewCommnet}
                                {/* <Comment
                                    author={
                                        <div style={{display:'flex', alignItems:'center'}}>
                                            <div style={{fontSize:'0.9rem'}}>
                                                {reviewerName}
                                            </div>
                                            &nbsp;
                                            &nbsp;
                                            <StyledRating 
                                                readOnly
                                                defaultValue={5}
                                                size="small"
                                            /> 
                                        </div>
                                    }
                                    avatar={
                                        <Avatar
                                            icon={<UserOutlined />}
                                        />
                                    }
                                    content={
                                        <p>
                                            {review}
                                        </p>
                                    }
                                    datetime={
                                        <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                                        <span>{reviewDay}</span>
                                        </Tooltip>
                                    }
                                /> */}
                                <div>
                                    <div className="noReviewFirst">
                                        {noReview1}
                                    </div>
                                    <div className="noReviewSecond">
                                        {noReview2}
                                    </div>
                                </div>
                                <div style={{padding: '12px 0 0 40px'}}>
                                {reviewPhoto}
                                </div>
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
                                {inclusion1}<br />
                                {inclusion2}<br />
                                {inclusion3}
                            </div>
                        </TourMaterials>
                        <TourMaterials>
                            <div className="materialsTitles">
                                불포함 사항
                            </div>
                            <div>
                                {notIncluded1} <br />
                                {notIncluded2}<br />
                                {notIncluded3}
                            </div>
                        </TourMaterials>
                        <TourMaterials>
                            <div className="materialsTitles">
                                코스 소개
                            </div>
                            <div>
                                {course1} <br />
                                {course2} <br />
                                {course3} <br />
                                {course4}
                            </div>
                        </TourMaterials>
                        <TourMaterials>
                            <div className="materialsTitles">
                                위치 안내
                            </div>
                            <div>
                                {address}
                            </div>
                            <Image
                                preview={false}
                                width={342}
                                height={220}
                                src={tourLocationMap}
                                style={{margin:'1rem 0', border:'none'}}
                                /* onerror={this.style.display='none'} */
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
                                        <Typography className="materialsTitles">사용 방법</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            <div>
                                                {howToUse1}<br />
                                                {howToUse2}<br />
                                                {howToUse3}<br />
                                                {howToUse4}<br />
                                                {howToUse5}<br />
                                            </div>
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
                                                {refund1}<br />
                                                <br />
                                                {refund2}<br />
                                                {refund3}<br />
                                                {refund4}<br />
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
                    {/* <AffixHelper /> */}
                    {/* <div className="affixBlock" ref={setContainer}> */}
                                 
                    <Affix /* offsetBottom={250} */ offsetTop={100} /* target={() => container} */>
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
                                    disabledDate={disabledDate}
                                />
                            </SearchBar>
                            <OptionSelectBox>
                                
                                <Select
                                    /* value="age" */
                                    defaultValue={0}
                                    onChange={onChangeOption}
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
                            {user ? 
                                (
                                    <ButtonWidthMarginTop
                                        fullWidth
                                        cyan
                                        onClick={onPaymentPage}
                                    >
                                        여행하기
                                    </ButtonWidthMarginTop>
                                ):(
                                    <Link to="/auth/login" onClick={onclick}>
                                        <ButtonWidthMarginTop fullWidth cyan >여행하기</ButtonWidthMarginTop>
                                    </Link>
                                )}    

                            <hr width="125%" color="#CED4DA" size="1" style={{margin: '2rem 0 0 -2rem'}} />
                            <HostTitleBox>
                                <div>
                                    <Avatar /* size="small"*/ icon={<UserOutlined />} src={hostAvatar} /> 
                                    &nbsp; {hostName} 
                                </div>
                                {user ? 
                                    (  <Link to="/tour/inquiry">
                                        <div style={{display:'flex', alignItems:'center', flexDirection:'row'}}>
                                            <MailOutlined style={{fontSize:'1rem'}} />
                                            <div style={{fontSize:'0.8rem', marginLeft:'0.3rem'}}>문의하기</div>
                                        </div>
                                        </Link>
                                    ):(
                                        <Link to="/auth/login" onClick={onclick}>
                                        <div style={{display:'flex', alignItems:'center', flexDirection:'row'}}>
                                            <MailOutlined style={{fontSize:'1rem'}} />
                                            <div style={{fontSize:'0.8rem', marginLeft:'0.3rem'}}>문의하기</div>
                                        </div>
                                        </Link>
                                    )}    
                                    
                            </HostTitleBox>
                        </BookingBox>
                    </Affix>
                    {/* </div> */}
                   
                    </SideMenuBlock>
                    
                </Col>
            </Row>
        </TourViewerBlock>

       {/* <hr width="100%" color="#CED4DA" size="1" style={{margin: '-0.8rem 0 2rem 0'}} />*/}

        {/* <RecommendTourBox>
            
            <div className="recommendTourTitle">
                이런 여행은 어때요?
            </div>
            <TourListContainer />
        </RecommendTourBox> */}
            
    </ConfigProvider>
   )
  };
  
  export default withRouter(TourViewer);