import React, { useRef, useCallback, useState } from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import 'antd/dist/antd.css';
import { Row, Col, Input, Radio, Form, Checkbox, Typography, Avatar, Upload } from 'antd';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';

const Content = styled.div`
    flex: 0 1 50%;
    margin: 3rem 0 3% 2.5rem;
    border: 1px solid ${palette.gray[3]};
    height: 100%;
    padding-left: 1rem;
    .textarea {
        width: 25.5rem;
    }
    .btn {
        justify-content: center;
        align-items: center;
        font-size: 0.8rem;
        font-weight: 650;
        color: ${palette.cyan[5]};
        width: 8rem;
        height: 2rem;
        outline: 0;
        box-shadow: none;
        border-radius: 3px;
        padding-top: 4.5px;
        background-color: white;
        border: 1.5px solid ${palette.cyan[5]};
    }
    .labelBtnBank {
        cursor: pointer;
        margin: 0 0 0 37px;
    }
    .labelBtn {
        cursor: pointer;
        margin: 0 0 0 13px;
    }
    .uploadFile {
        margin: 0.5rem 0 0 0.3rem;
        font-size: 0.9rem;
    }
`;

const HostApllyBlock = styled(Form)`
    font-size: 1rem;
    padding: 4%;
`;

const RowFirst = styled(Row)`
    height: 11vh;
`;

const RowWrapper = styled(Row)`
    margin-top: 10%;
`;

const ButtonWrapper = styled(Button)`
    font-size: 1rem;
    margin-top: -3%;
`;

const textMap = {
    account: '수정 완료',
    apply: '작성 완료',
};

const HostApplyForm = ({type, form, onChange, onChangeImage,  onChecked, onSubmit ,
    uploadBusinessImage, businessSuccess, uploadBankImage, bankSuccess, hostImage, hostError, user}) => {


        if(hostError) {
        return (<div>이미 신청했잖아</div> )
        }
    
    const text = textMap[type];

    const imageInput = useRef();//이미지 업로드를 위한 설정
    const onClickImageUpload = useCallback((e) => { //이미지 업로드 버튼
        e.preventDefault();
        imageInput.current.click();
    }, [imageInput.current]);

    const businesslicenseRef = useRef();
    const onClickBusinessLicense = useCallback((e) => { //사업자등록증 사본업로드 버튼
        e.preventDefault();
        businesslicenseRef.current.click();
    }, [businesslicenseRef.current]);

    const bankAccountRef = useRef();
    const onClickBankAccount = useCallback((e) => { //통장 사본업로드 버튼
        e.preventDefault();
        bankAccountRef.current.click();
    }, [bankAccountRef.current]);


const [bankState, setBankState] = useState(false);
const [companyState, setCompanyState] = useState(false);

const showCompany = (e) => {
    if (e) {
        setCompanyState(true);
    };
};
const showBank = (e) => {
    if (e) {
        setBankState(true);
    };
};

    return (
        
        <Content>
        <HostApllyBlock encType="multipart/form-data" onFinish={onSubmit} >
            
            <RowWrapper>
                <Col md={3}><label>업체명</label></Col>
                <Col md={17} offset={1}>
                    <Input
                    type="text"
                    required
                    name="host_name"
                    onChange={onChange}
                    value={form.host_name}
                    />
                </Col>
            </RowWrapper>
            <RowWrapper>
                <Col md={3}><label>연락처</label></Col>
                <Col md={17} offset={1}>
                    <Input
                    type="tel"
                    placeholder="'-'없이 숫자만 입력해주세요.'"
                    required
                    name="host_phone"
                    onChange={onChange}
                    value={form.host_phone}
                    />
                </Col>
            </RowWrapper>
            <RowWrapper>
                <Col md={3}><label>사업 유형</label></Col>
                <Col md={4} offset={1}>
                <Radio.Group name="business_type" onChange={onChange} value={form.business_type}>
                    <Radio value={'개인'}>개인</Radio>
                    <Radio value={'기업'}>기업</Radio>
                </Radio.Group>
                </Col>
                {/* <input type="file" hidden ref={businesslicenseRef} name="business_license" onChange={uploadBusinessImage} /> */}
                <Col md={6} >
                    <input type="file" id="ex_filename" className="upload-hidden" hidden onChange={showCompany} />
                    <div className="btn">
                    <label for="ex_filename" className="labelBtn" >
                        사업자등록증 사본
                    </label>
                    </div>
                    {companyState && <div className="uploadFile">사업자등록증.png</div>}
                        {/* <Upload
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            listType="text"
                            
                            className="upload-list-inline"
                        >
                            <Button className="btn" >사업자등록증 사본</Button>
                        </Upload> */}
                    {/* <ButtonWrapper cyan onClick={onClickBusinessLicense} >사업자등록증 사본</ButtonWrapper>
                    {businessSuccess && <Typography.Text type="success" strong={true}> {businessSuccess}</Typography.Text>} */}
                </Col>
                {/* <input type="file" hidden ref={bankAccountRef} name="bank_account" onChange={uploadBankImage} /> */}
                <Col md={5} offset={1}>
                        
                    <input type="file" id="filename" className="upload-hidden" hidden onChange={showBank} />
                    <div className="btn">
                    <label for="filename" className="labelBtnBank" >
                        통장 사본
                    </label>
                    </div>
                    {bankState && <div className="uploadFile">통장사본.JPG</div>}
                    {/* <ButtonWrapper cyan onClick={onClickBankAccount}>통장 사본</ButtonWrapper>
                    {bankSuccess && <Typography.Text type="success" strong={true}> {bankSuccess}</Typography.Text>} */}
                </Col>
            </RowWrapper>
            <RowWrapper>
                <Col md={3}><label>소개</label></Col>
                <Col md={20} offset={1}>
                    <Input.TextArea required style={{ resize: 'none' }} rows={7} name="about" onChange={onChange} value={form.about} className="textarea"/>
                </Col>
            </RowWrapper>

            <RowWrapper>
                <Col md={3}><label>파트너 약관</label></Col>
                {/* <Col md={20} offset={1}><Input.TextArea style={{ resize: 'none' }} rows={7} /></Col> */}
                <Col md={10} offset={1}>
                    <Checkbox name="contract" onChange={onChecked} checked={form.contract}><a target="_blank" href='https://www.notion.so/029f6ddeb2de49fbbf8b960863127f9f'>파트너 이용약관</a>에 동의합니다.</Checkbox>
                </Col>
            </RowWrapper>

            <RowWrapper>
                <Col md={3} style={{ textAlign: 'center' }}><label>개인정보<br/>수집 및 이용</label></Col>
                {/* <Col md={20} offset={1}><Input.TextArea style={{ resize: 'none' }} rows={7} /></Col> */}
                <Col md={10} offset={1}>
                    <Checkbox name="personal_information" onChange={onChecked} checked={form.personal_information}><a target="_blank" href='https://www.notion.so/11914de655f44ed3b0082a407ac32d66'>개인정보 처리방침</a>에 동의합니다.</Checkbox>
                </Col>
            </RowWrapper>
            {/* <Row>
                <Col md={10} offset={4}>
                    <Checkbox name="personal_information" onChange={onChecked} checked={form.personal_information}>개인정보 수집 및 이용에 동의합니다.</Checkbox>
                </Col>
            </Row> */}
            <RowWrapper>
            <Col md={4} offset={10}>
            <ButtonWrapper cyan htmlType="submit">{text}</ButtonWrapper>
            </Col>
            </RowWrapper>
        </HostApllyBlock>
        </Content>
    )
}

export default HostApplyForm;