import React, { useRef, useCallback } from 'react';
import styled from 'styled-components';
import { UserOutlined } from '@ant-design/icons';
import Button from '../common/Button';
import 'antd/dist/antd.css';
import { Row, Col, Input, Radio, Form, Checkbox, Typography, Avatar } from 'antd';
import palette from '../../lib/styles/palette';

const AllBlock = styled.div`
    .textarea {
        width: 24.5rem;
    }
`;

const Title = styled.div`
    margin: 2.5rem 0 1.5rem 3rem;
    font-size: 1.5rem;
    font-weight: 900;
    color: ${palette.gray[8]};
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Content = styled.div`
    /* flex: 0 1 50%; */
    width: 600px;
    margin: 1rem 0 3rem 2.5rem;
    border: 1px solid ${palette.gray[4]};
    padding-left: 1rem;
`;

const HostAccountBlock = styled(Form)`
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

const HostAccountForm = ({type, form, onChange, onChangeImage, onSubmit , hostImage, user}) => {
    
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





    return (
        <AllBlock>
        <Title>
            계정 관리
        </Title>
        <Content>
        <HostAccountBlock encType="multipart/form-data" onFinish={onSubmit} >
            {/* <RowFirst>
                <Col style={{ marginTop: '6%' }} md={2}><label>사진</label></Col>
                <Col md={6} offset={2}>
                     <Avatar size={80} src={`http://128.199.171.26:3000/${user.image}`} icon={<UserOutlined />} />
                </Col>
                <input type="file" hidden ref={imageInput} name="host_image" onChange={onChangeImage} />
                <Col>
                    <ButtonWrapper style={{ marginTop: '30%' }} cyan onClick={onClickImageUpload} >사진 업로드</ButtonWrapper>
                </Col>
            </RowFirst> */}
            
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
                    placeholder="ex) 010-1234-5678"
                    required
                    name="host_phone"
                    onChange={onChange}
                    value={form.host_phone}
                    />
                </Col>
            </RowWrapper>

            <RowWrapper>
                <Col md={3}><label>소개</label></Col>
                <Col md={20} offset={1}>
                    <Input.TextArea required style={{ resize: 'none' }} rows={7} name="about" onChange={onChange} value={form.about} className="textarea" />
                </Col>
            </RowWrapper>

            <RowWrapper>
            <Col md={5} offset={10}>
                <ButtonWrapper cyan htmlType="submit">{text}</ButtonWrapper>
            </Col>
            </RowWrapper>
        </HostAccountBlock>
        </Content>
        </AllBlock>
    )
}

export default HostAccountForm;