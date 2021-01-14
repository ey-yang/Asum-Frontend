import React from 'react';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';
import Button from '@material-ui/core/Button';
import { Row, Col } from 'antd';
import { Switch } from 'antd';

const ProfileBox = styled.div`
    /* margin-left: 5rem; */
    padding-left: 2rem;
    .profileTitleBox {
        display: flex;
        justify-content: space-between;
    }
    .profileTitle {
        margin-bottom: 2rem;
        font-weight: 900;
        font-size: 1.4rem;
    }
    .modifyBtn {
        border: 1px solid ${palette.gray[4]};
        font-size: 0.75rem;
        color: ${palette.gray[7]};
        &:hover {
            color: ${palette.gray[5]};
            background: none;
            font-size: 0.75rem;
        }
    }
    .kakao {
        display: flex;
        justify-content: space-between;
    }
    .marketing {
        margin-bottom: 0.7rem;
    }
    .namebox {
        margin: 1.5rem 0rem 1.5rem 0rem;
        font-size: 0.96rem;
        font-weight: 500;
    }
    .description {
        margin: 1.5rem 0rem 1.5rem 0rem;
        font-size: 0.99rem;
        font-weight: 500;
    }
`;


const Account = ({ user, onEdit, error }) => {

    // 에러 발생 시
    if (error) {
    if (error.response && error.response.status === 404) {
      return <ProfileBox>존재하지 않는 포스트입니다.</ProfileBox>;
    }
    return <ProfileBox>오류 발생!</ProfileBox>;
  }


    return (
        <ProfileBox>
            <div className="profileTitleBox">
                <div className="profileTitle">
                    프로필 관리
                </div>
                <div>
                    <Button className="modifyBtn" onClick={onEdit}>
                        수정
                    </Button>
                </div>
            </div>
            <Row>
                <Col span={9} className="namebox">
                    이름
                </Col>
                <Col span={15} className="description">
                    {user.username}
                </Col>
            </Row>
            <Row>
                <Col span={9} className="namebox">
                    이메일
                </Col>
                <Col span={15} className="description">
                    {user.email}
                </Col>
            </Row>
            <Row>
                <Col span={9} className="namebox">
                    SNS 연동
                </Col>
                <Col span={15} className="description">
                    <div className="kakao">
                        <div>
                            카카오 연동
                        </div>
                        <Switch /* onChange={} */ />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col span={9} className="namebox">
                    비밀번호
                </Col>
                <Col span={15} className="description">
                    *********
                </Col>
            </Row>
            <Row>
                <Col span={9} className="namebox">
                    마케팅 수신동의
                </Col>
                <Col span={15} className="description">
                    <div className="marketing">
                        e-mail: 수신 거부
                    </div>
                    <div className="marketing">
                        sms: 수신 중
                    </div>
                </Col>
            </Row>
        </ProfileBox>
                
    )

};

export default Account;