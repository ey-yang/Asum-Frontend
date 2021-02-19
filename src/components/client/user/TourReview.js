import React, {useState} from 'react';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';
import 'moment/locale/ko';
import { Link } from 'react-router-dom';
import { CalendarOutlined, UserOutlined } from '@ant-design/icons';
import { Rate, Upload, Button, Input, Image } from 'antd';



const { TextArea } = Input;
 
const TourReviewBlock = styled.div`
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    /* flex로 내부 내용 중앙 정렬 */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 1rem;
    margin-top: 2rem;
    .title {
        font-size: 1.6rem;
        font-weight: 750;
        width: 750px;
    }
`;

const TourReviewBox = styled.div`
    color: ${palette.gray[6]};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 750px;
    height: 500px;
    border: 1px solid ${palette.gray[3]};
    margin-bottom: 7rem;
    border-radius: 5px;
    /* padding: 2rem; */

`;

const TourReviewListBox = styled.div`
    /* display: flex; */
    /* justify-content: center;
    align-items: center; */
    margin: 1rem 0 7rem 0;
    width: 750px;
    /* height: 500px; */
    border: 1px solid ${palette.gray[3]};
    border-radius: 5px;
    padding: 1rem;
    .tourbox {
        display: flex;
        padding: 2rem;
        width: 100%;
    }
    .tourimg {
        border-radius: 5px;
        margin: 0 1.5rem 0 0;
    }
    .tourinfo {
        width: 100%;
    }
    .tourtitle {
        font-size: 1rem;
        font-weight: 600;
    }
    .touroption {
        font-size: 0.9rem;
        margin-top: 0.2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .reviewBtn {
        font-size: 0.8rem;
        font-weight: 650;
        color: white;
        width: 6rem;
        height: 2rem;
        border-radius: 3px;
        border: none;
        outline: 0;
        box-shadow: none;
        cursor: pointer;
        background-color: ${palette.cyan[4]};
        &:hover {
            background-color: white;
            color: ${palette.cyan[5]};
            border: 1px solid ${palette.cyan[5]};
        }
    }
    .selected {
        margin-top: 0.2rem;
        color: ${palette.gray[6]};
        display: flex;
        font-size: 0.8rem;
        /* justify-content: space-between; */
    }

    /* 별점 */
    .rateBox {
        display: flex;
        padding: 0.5rem 0 0.5rem 2.5rem;
        width: 100%;
        align-items: center;
        font-size: 1rem;
        font-weight: 600;
    }

    /* 여행후기 */
    .textareaBox {
        display: flex;
        padding: 1rem 0 1rem 2.5rem;
        width: 100%;
        font-size: 1rem;
        font-weight: 600;
    }
    .textarea {
        width: 32rem;
        resize: none;
        /* outline: none; */
        border: 1px solid ${palette.gray[3]};
        font-size: 0.88rem;
    }

    /* 사진첨부 */
    .upload-list-inline .ant-upload-list-item {
        float: left;
        width: 173px;
        margin-right: 8px;
    }
    .btn {
        justify-content: center;
        align-items: center;
        font-size: 0.8rem;
        font-weight: 650;
        color: ${palette.cyan[5]};
        width: 6.6rem;
        height: 2rem;
        outline: 0;
        box-shadow: none;
        border-radius: 3px;
        padding-top: 4.5px;
        background-color: white;
        border: 1.5px solid ${palette.cyan[5]};
    }
    .labelBtn {
        cursor: pointer;
        margin: 0 0 0 16px;
        
    }
    .upload-hidden {
        position: absolute; 
        width: 1px; 
        height: 1px; 
        padding: 0; 
        margin: -1px; 
        overflow: hidden; 
        clip:rect(0,0,0,0); 
        border: 0;
    }
    .upload-name {
        display: inline-block; 
        padding: .5em .75em; /* label의 패딩값과 일치 */ 
        font-size: inherit; 
        font-family: inherit; 
        line-height: normal; vertical-align: middle; background-color: #f5f5f5; border: 1px solid #ebebeb; border-bottom-color: #e2e2e2; border-radius: .25em; -webkit-appearance: none; /* 네이티브 외형 감추기 */ -moz-appearance: none; appearance: none;
    }
    .btnBox {
        display: flex;
        justify-content: center;
        margin: 2rem 0 2rem 0;
    }
    .saveBtn {
        border-radius: 3px;
        cursor: pointer;
        color: white;
        font-weight: 800;
        font-size: 0.95rem;
        width: 20%;
        height:2.5rem;
        margin-left: 1rem;
        outline: 0;
        box-shadow: none;
        border: none;
        background-color: ${palette.cyan[4]};
        &:hover {
            background-color: ${palette.cyan[3]};
            outline: 0;
            box-shadow: none;
        }
    }
    .cancelBtn {
        border-radius: 3px;
        cursor: pointer;
        border: none;
        width: 20%;
        height:2.5rem;
        outline: 0;
        box-shadow: none;
        &:hover {
            background-color: ${palette.gray[3]};
            outline: 0;
            box-shadow: none;
        }
    }
`;


const PaymentTitleBox = styled.div`
    font-size: 1.2rem;
    font-weight: 700;
    border-bottom: 1px solid ${palette.gray[2]};
    width: 100%;
    padding: 1rem;
`;


const tourphoto = require('../../../image/foodtour.png');
const uploadImage = require('../../../image/2021-02-17_20-18-26.png');


const TourReview = () => {

    const [imageState, setImageState] = useState(false);

const showImage = (e) => {
    if (e) {
        setImageState(true);
    };
};

    return (
        <TourReviewBlock>
            <div className="title">
                여행후기 쓰기
            </div>
            {/* <div className="btns">
                <Link to='/tour/management'>
                
                    <button className="reservedBtn">
                        예약된 여행
                    </button>
                </Link>
                <button className="pastBtn">
                    지나간 여행
                </button>
            </div> */}
            <TourReviewListBox>
                <div className="tourbox">
                    <img
                        width={100}
                        height={70}
                        src={tourphoto}
                        className="tourimg"
                    />
                    <div className="tourinfo">
                        <div className="tourtitle">
                            [구좌] 제주 해녀의 부엌
                        </div>
                        <div className="touroption">
                            <div>
                                제주 해녀 다이닝(연극&식사) / 1인
                            </div>
                            {/* <button className="reviewBtn">
                                여행후기 쓰기
                            </button> */}
                        </div>
                        <div className="selected">
                            <div style={{display:'flex'}}>
                                <div style={{marginRight: '1.5rem'}}>
                                    <CalendarOutlined
                                        style={{marginRight: '0.3rem'}}
                                    />
                                    <span>2020-12-31</span>
                                </div>
                                <div style={{marginRight: '1.5rem'}}>
                                    <UserOutlined 
                                        style={{marginRight: '0.3rem'}}
                                    />
                                    <span>인원수 x 1</span>
                                </div>
                                <div>
                                    5,5000 원
                                </div>
                            </div>
                            <div /* style={{fontSize: '1.1rem'}} */>

                            </div>
                        </div>
                    </div>
                </div>

                <hr width="91%" color="#DEE2E6" size="1"/>

                <div className="rateBox">
                    <div style={{marginRight: '5.5rem'}}>
                        별점
                    </div>
                    <Rate style={{ color: "#3bc9db", fontSize:'1.4rem' }}/>
                </div>

                <hr width="91%" color="#DEE2E6" size="1"/>

                <div className="textareaBox">
                    <div style={{marginRight: '4rem'}}>
                        여행후기
                    </div>
                    <textarea
                        rows="8"
                        className="textarea"
                        showCount
                        maxLength={1100}
                        /* resize="none" */
                        placeholder="후기를 남겨주세요. 자세한 여행후기는 여행자에게도 판매자에게도 많은 도움이 됩니다 :)" />
                </div>

                <hr width="91%" color="#DEE2E6" size="1"/>

                <div className="textareaBox"> 
                    <div style={{marginRight: '4rem'}}>
                        사진첨부
                    </div>
                    <div style={{width: '34rem', /* height: '545px' */}}>
                        <div className="btn">
                            <label className="labelBtn" for="ex_filename">
                                사진 첨부하기
                            </label>
                        </div>
                        <input type="file" id="ex_filename" className="upload-hidden" onChange={showImage} />

                        {imageState &&
                            <Image
                                style={{width: 150, marginTop: '20px'}}
                                src={uploadImage}
                                preview={false}
                            />
                        }

                        {/* <input className="upload-name" value="파일선택" disabled="disabled" /> */}

                            {/* <Button className="btn" >사진 첨부하기</Button> */}
                        
                    </div>
                </div> 
                
                <hr width="91%" color="#DEE2E6" size="1"/>

                <div className="btnBox"style={{display:'flex'}}>
                    <button className="cancelBtn">취소하기</button>
                    
                    <button className="saveBtn"><a style={{color:'white'}} href='/tour/1'>등록하기</a></button>
                    
                </div>


            </TourReviewListBox>
            {/* <TourReviewBox>
                아직 지나간 여행이 없습니다. ASUM과 함께 즐거운 여행을 떠나요 :)
                <img 
                    width={626}
                    height={250}
                    src={emptyimg} />
            </TourReviewBox> */}
          
        </TourReviewBlock>
   )
};
  
  export default TourReview;