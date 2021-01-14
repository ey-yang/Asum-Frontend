import React from 'react';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';
import 'moment/locale/ko';
import { Input, Avatar } from 'antd';


const { TextArea } = Input;
 
const InquiryBlock = styled.div`
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
    .title {
        font-size: 1.6rem;
        font-weight: 750;
        width: 750px;
    }
`;

const InquiryBox = styled.div`
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

const InquiryListBox = styled.div`
    /* display: flex; */
    /* justify-content: center;
    align-items: center; */
    margin: 1rem 0 7rem 0;
    width: 750px;
    /* height: 500px; */
    border: 1px solid ${palette.gray[3]};
    border-radius: 5px;
    /* padding: 1rem; */
    .hostbox {
        display: flex;
        align-items: center;
        padding: 1.2rem 1rem 1.2rem 1.7rem;
        width: 100%;
        border-bottom: 1px solid ${palette.gray[3]};
    }
    .avatarimg {
        margin: 0 0.5rem 0 0;
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

    .textareaBox {
        display: flex;
        padding: 2.5rem 2rem 2.5rem 2.3rem;
        width: 100%;
        font-size: 1rem;
        font-weight: 600;
    }
    .textarea {
        width: 42rem;
        resize: none;
        /* outline: none; */
        border: 1px solid ${palette.gray[3]};
        font-size: 0.88rem;
    }

    .btnBox {
        display: flex;
        justify-content: center;
        margin: 0 0 2rem 0;
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


const tourphoto = require('../../../image/foodtour.png');








const Inquiry = () => {

    return (
        <InquiryBlock>
            <div className="title">
                문의하기
            </div>
            <InquiryListBox>
                <div className="hostbox">
                    <Avatar
                        size={30}
                        src={tourphoto}
                        className="avatarimg"
                    />
                    <div className="tourtitle">
                        해녀의 부엌 님에게 문의하기
                    </div>
                </div>

                <div className="textareaBox">
                    <TextArea
                        rows="11"
                        className="textarea"
                        maxLength={1100}
                        placeholder="결제, 환불, 쿠폰, 포인트 관련 문의는 고객센터로 문의해주세요." />
                </div>

                <div className="btnBox"style={{display:'flex'}}>
                    <button className="cancelBtn">취소하기</button>
                    <button className="saveBtn">등록하기</button>
                </div>


            </InquiryListBox>
            {/* <InquiryBox>
                아직 지나간 여행이 없습니다. ASUM과 함께 즐거운 여행을 떠나요 :)
                <img 
                    width={626}
                    height={250}
                    src={emptyimg} />
            </InquiryBox> */}
          
        </InquiryBlock>
   )
};
  
  export default Inquiry;