import React, {useState} from 'react';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';
import 'moment/locale/ko';
import { withStyles } from '@material-ui/core/styles';
import { CalendarOutlined, UserOutlined } from '@ant-design/icons';
import { Input, Select } from 'antd';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
 
const PaymentBlock = styled.div`
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    /* flex로 내부 내용 중앙 정렬 */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 4rem;    
    .title {
        font-size: 1.6rem;
        font-weight: 750;
        width: 750px;
    }
`;

const DescripBox = styled.div`
    /* display: flex; */
    /* justify-content: center;
    align-items: center; */
    width: 750px;
    border: 1px solid ${palette.gray[3]};
    margin-top: 1rem;
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
        font-size: 1.15rem;
        font-weight: 600;
    }
    .touroption {
        font-size: 1rem;
        margin-top: 0.3rem;
    }
    .selected {
        margin-top: 0.3rem;
        display: flex;
        color: ${palette.gray[6]};
        justify-content: space-between;
    }

    /* 여행자 정보 */
    .description {
        padding: 1.9rem;
        /* display: flex; */
        /* width: 100%; */
    }
    .clientInfoTitle {
        font-size: 1rem;
        margin-bottom: 0.5rem;
    }

    /* 할인 정보 */
    .discountinfo {
        justify-content: space-between;
        display: flex;
        font-size: 1.05rem;
        font-weight: 650;
        margin-bottom: 2rem;
    }
    .pointbtn {
        margin: 0 0 0 0.5rem;
        width: 5rem;
        height: 2.5rem;
        border-radius: 3px;
        color: white;
        font-weight: 700;
        font-size: 0.9rem;
        border: none;
        outline: 0;
        box-shadow: none;
        background-color: ${palette.cyan[4]};
        cursor: pointer;
        &:hover {
            background-color: ${palette.cyan[2]};
            outline: 0;
            box-shadow: none;
        }
    }
    .discountPrice {
        justify-content: space-between;
        display: flex;
        font-size: 1rem;
        /* font-weight: 650; */
        margin-top: 2rem;
    }
    .paymentPrice {
        width: 100%;
        border: 1px solid ${palette.cyan[1]};
        background-color: ${palette.cyan[1]};
        padding: 0.8rem 1.6rem 0.8rem 1.6rem;
    }
    .paymentInfo {
        align-items: center;
        justify-content: space-between;
        display: flex;
        font-size: 1.05rem;
        font-weight: 700;
        /* margin: 0.1rem 0.1rem 0.1rem 0.1rem; */
        color: ${palette.cyan[7]};
    }

    /** 결제 방법 */
    
`;

const TitleBox = styled.div`
    font-size: 1.2rem;
    font-weight: 700;
    border-bottom: 1px solid ${palette.gray[2]};
    width: 100%;
    padding: 1rem;
`;

// 결제 방법
const PaymentOptionBox = styled.div`
    width: 750px;
    border: 1px solid ${palette.gray[3]};
    margin: 1rem 0 4rem 0;
    border-radius: 5px;
    .radioBlock {
        padding: 2rem 8rem 1.5rem 9rem;
        /* margin: 0 0 1rem 0; */
    }
    .radioBox {
        font-size: 10rem;
        margin-right: 1.7rem;
        display: flex;
        
        /* align-items: center;
        justify-content: center; */
    }
    .paymentBtn {
        margin: 2.2rem 0 3rem 0;
        width: 20rem;
        height: 3.3rem;
        border-radius: 3px;
        color: white;
        font-weight: 700;
        font-size: 1.1rem;
        border: none;
        outline: 0;
        box-shadow: none;
        background-color: ${palette.cyan[4]};
        cursor: pointer;
        &:hover {
            background-color: ${palette.cyan[2]};
            outline: 0;
            box-shadow: none;
        }
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
const naverPay = require('../../../image/naverpay_logo.png');
const payco = require('../../../image/payco.png');

const { Option } = Select;

// 라디오 색깔 설정
const AsumRadio = withStyles({
    root: {
      color: '#DEE2E6',
      '&$checked': {
        color: '#3BC9DB',
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);

// 체크 박스 색깔 설정
const AsumCheckbox = withStyles({
    root: {
      color: '#DEE2E6',
      '&$checked': {
        color: '#3BC9DB',
      },
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);


const Payment = () => {

    const [value, setValue] = useState('female');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const [state, setState] = useState(false);
    
      const checkedHandleChange = (event) => {
        setState( event.target.checked );
      };

    return (
        <PaymentBlock>
            <div className="title">
                결제하기
            </div>
            <DescripBox>
                <div className="tourbox">
                    <img
                        width={120}
                        height={90}
                        src={tourphoto}
                        className="tourimg"
                    />
                    <div className="tourinfo">
                        <div className="tourtitle">
                            [제주 구좌] 제주 해녀와 함께하는 특별한 '해녀 다이닝'
                        </div>
                        <div className="touroption">
                            제주 해녀 다이닝(연극&식사) / 1인
                        </div>
                        <div className="selected">
                            <div style={{display:'flex'}}>
                                <div style={{marginRight: '1.5rem'}}>
                                    <CalendarOutlined
                                        style={{marginRight: '0.3rem'}}
                                    />
                                    <span>2020-12-31</span>
                                </div>
                                <div>
                                    <UserOutlined 
                                        style={{marginRight: '0.3rem'}}
                                    />
                                    <span>인원수 x 1</span>
                                </div>
                            </div>
                            <div style={{fontSize: '1.1rem'}}>
                                5,5000 원
                            </div>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </DescripBox>
            <DescripBox>
                <TitleBox>
                    예약 정보
                </TitleBox>

                <div className="description">
                    <div style={{display:'flex'}}>
                        <div style={{marginRight:'2rem'}}>
                            <div className="clientInfoTitle">
                                여행자 성명
                            </div>
                            <Input
                                placeholder="ex) 홍길동"
                                style={{width:'15rem'}}
                                size="large"    
                            />
                        </div>
                        <div>
                            <div className="clientInfoTitle">
                                여행자 연락처
                            </div>
                            <div style={{display:'flex'}}>
                                <Select 
                                    size="large"
                                    style={{marginRight:'0.5rem', width:'6rem'}}
                                    placeholder="통신사"
                                >
                                    <Option value="jack">SKT</Option>
                                    <Option value="lucy">KT</Option>
                                    <Option value="LG U+">LG U+</Option>
                                </Select>
                                <Input
                                    style={{width:'12rem'}}
                                    size="large"
                                    placeholder="'-' 없이 전화번호 입력"  
                                />
                            </div>
                        </div>
                    </div>
                    
                   <div style={{marginTop:'1.5rem'}}>
                        <div style={{fontSize:'1rem'}}>
                            추가정보
                        </div>
                        <div style={{marginBottom:'0.1rem', color: '#15AABF'}}>
                            *체험을 희망하는 예약 시간을 작성해주세요.
                        </div>
                        <Input
                            placeholder=""
                            style={{width:'35.5rem', marginBottom:'0.5rem'}}
                            size="large"    
                        />
                    </div>
                    
                </div>
            </DescripBox>
            <DescripBox>
                <TitleBox>
                    할인 정보
                </TitleBox>
                <div className="description">
                    <div className="discountinfo">
                        <div>상품 금액</div>
                        <div>5,5000 원</div>
                    </div>
                    
                    <hr width="100%" color="#DEE2E6" size="1"/>

                    <div style={{display:'flex', marginTop:'1rem'}}>
                        <div style={{marginRight:'2rem'}}>
                            <div style={{display:'flex'}}>
                                <div className="clientInfoTitle">
                                    포인트
                                </div>
                                <div 
                                    style={{
                                        color:'#9199A0',
                                        padding:'0.1rem 0 0 0.4rem',
                                        fontSize:'0.95rem'
                                    }}
                                >
                                    0p
                                </div>
                            </div>
                            <Input
                                style={{width:'10rem'}}
                                size="large"    
                            />
                            <button className="pointbtn">
                                전부 사용
                            </button>
                        </div>
                        <div>
                            <div style={{display:'flex'}}>
                                    <div className="clientInfoTitle">
                                        쿠폰
                                    </div>
                                    <div 
                                        style={{
                                            color:'#9199A0',
                                            padding:'0.1rem 0 0 0.4rem',
                                            fontSize:'0.95rem'
                                        }}
                                    >
                                        0장
                                    </div>
                            </div>
                            <div style={{display:'flex'}}>
                                <Select 
                                    size="large"
                                    style={{marginRight:'0.5rem', width:'17rem'}}
                                    placeholder="쿠폰 선택 안함"
                                >
                                    <Option value="jack">
                                        쿠폰 선택 안함
                                    </Option>
                                </Select>
                            </div>
                        </div>
                    </div>
                    <div className="discountPrice">
                        <div>총 할인금액</div>
                        <div>-0 원</div>
                    </div>



                </div>
                <div className="paymentPrice">
                    <div className="paymentInfo">
                        <div>최종 결제 금액</div>
                        <div style={{fontSize: '1.5rem'}}>55,000 원</div>
                    </div>
                </div>
            </DescripBox>
            <PaymentOptionBox>
                <PaymentTitleBox>
                    결제 방법
                </PaymentTitleBox>
                <div className="radioBlock">
                    
                    {/* <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                        <FormControlLabel value="female" control={<AsumRadio />} label="신용카드 결제" className="radioBox"/>
                        <FormControlLabel value="account" control={<AsumRadio />} label="실시간계좌이체" className="radioBox"/>
                        <FormControlLabel value="mobilePay" control={<AsumRadio />} label="휴대폰 결제" className="radioBox"/>
                        <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                            <FormControlLabel value="naverPay" control={<AsumRadio />} label="네이버페이" className="radioBox"/> <img width={78} height={22} src={naverPay} />
                        </div>
                        
                        <div style={{display:'flex',  alignItems:'center', justifyContent:'space-between'}}>
                            <FormControlLabel value="payco" control={<AsumRadio />} label="페이코" className="radioBox"/> <img width={70} height={25} src={payco} />
                        </div>
                    </RadioGroup> */}
                    
                
                    <RadioGroup row aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                        <FormControlLabel value="female" control={<AsumRadio />} label="신용카드 결제" className="radioBox"/>
                        <FormControlLabel value="account" control={<AsumRadio />} label="실시간계좌이체" className="radioBox"/>
                        <FormControlLabel value="mobilePay" control={<AsumRadio />} label="휴대폰 결제" className="radioBox"/>
                        <div style={{display:'flex', marginRight:'2.4rem', alignItems:'center'}}>
                            <FormControlLabel value="naverPay" control={<AsumRadio />}  /> <img width={78} height={22} src={naverPay} style={{margin:'0 0 0 -1rem'}} />
                        </div>
                        <div style={{display:'flex',  alignItems:'center'}}>
                            <FormControlLabel value="payco" control={<AsumRadio />}  className="radioBox"/> <img width={70} height={25} src={payco} style={{margin:'0 0 0 -1.8rem'}} />
                        </div>
                    </RadioGroup>
                
                </div>

                <div style={{width:'100%', display:'flex', flexDirection: 'column', justifyContent:'center', alignItems:'center'}}>
                    <div style={{width:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <AsumCheckbox onChange={checkedHandleChange} disableRipple={true} />개인정보 제 3자 제공 동의, 결제 대행 서비스 이용 약관 등 모든 약관에 동의합니다.
                    </div>
                    <div>
                        <button className="paymentBtn">
                            55,000원 결제 하기
                        </button>
                    </div>
                </div>


            </PaymentOptionBox>
        </PaymentBlock>
   )
};
  
  export default Payment;