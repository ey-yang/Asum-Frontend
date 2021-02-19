import React, {useState} from 'react';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';
import 'moment/locale/ko';
import { Link } from 'react-router-dom';
import { CalendarOutlined, UserOutlined } from '@ant-design/icons';
 
const PastTourBlock = styled.div`
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
    margin-top: 1.5rem;
    .title {
        font-size: 1.6rem;
        font-weight: 750;
        width: 750px;
    }
    .btns {
        width: 750px;
        margin-top: 0.3rem;
        display: flex;
    }
    .pastBtn {
        border: none;
        background-color: white;
        font-size: 1.1rem;
        font-weight: 650;
        border-bottom: 3px solid ${palette.gray[7]};
        height: 3.3rem;
        cursor: pointer;
    }
    .reservedBtn {
        margin-right: 1.5rem;
        border: none;
        background-color: white;
        font-size: 1.1rem;
        font-weight: 600;
        color: ${palette.gray[6]};
        height: 3.1rem;
        border-radius: 7px;
        cursor: pointer;
        &:hover {
            background-color: ${palette.gray[1]};
            outline: 0;
            box-shadow: none;
        }
    }
`;

const PastTourBox = styled.div`
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

const PastTourListBox = styled.div`
    /* display: flex; */
    /* justify-content: center;
    align-items: center; */
    margin-bottom: 7rem;
    width: 750px;
    height: 500px;
    border: 1px solid ${palette.gray[3]};
    
    border-radius: 5px;
    /* padding: 2rem; */
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
        margin-top: -0.1rem;
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
        margin-top: -0.1rem;
        color: ${palette.gray[6]};
        display: flex;
        font-size: 0.8rem;
        /* justify-content: space-between; */
    }
`;


const PaymentTitleBox = styled.div`
    font-size: 1.2rem;
    font-weight: 700;
    border-bottom: 1px solid ${palette.gray[2]};
    width: 100%;
    padding: 1rem;
`;

const emptyimg = require('../../../image/emptyimg.jpg');
const naverPay = require('../../../image/naverpay_logo.png');
const tourphoto = require('../../../image/foodtour.png');








const PastTour = () => {

    return (
        <PastTourBlock>
            <div className="title">
                여행 관리
            </div>
            <div className="btns">
                <Link to='/tour/management'>
                    <button className="reservedBtn">
                        예약된 여행
                    </button>
                </Link>
                <button className="pastBtn">
                    지나간 여행
                </button>
            </div>
            <PastTourListBox>
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
                            <Link to='/tour/review'>
                                <button className="reviewBtn">
                                    여행후기 쓰기
                                </button>
                            </Link>
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

                <hr width="93%" color="#DEE2E6" size="1"/>

            </PastTourListBox>
            {/* <PastTourBox>
                아직 지나간 여행이 없습니다. ASUM과 함께 즐거운 여행을 떠나요 :)
                <img 
                    width={626}
                    height={250}
                    src={emptyimg} />
            </PastTourBox> */}
          
        </PastTourBlock>
   )
};
  
  export default PastTour;