import React, { useRef, useCallback } from 'react';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';
import Button from '@material-ui/core/Button';
import { Row, Col, Input, Checkbox, Switch } from 'antd';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

/* material-ui 테마 색상 설정 */
const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#66D9E8',
      },
    },
  });

const DescripBox = styled.div`
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
    .saveBtn {
        color: white;
        font-weight: 800;
        font-size: 0.95rem;
        width: 48%;
        margin-left: 1rem;
        outline: 0;
        box-shadow: none;
        &:hover {
            background-color: ${palette.cyan[3]};
            outline: 0;
            box-shadow: none;
        }
    }
    .cancelBtn {
        width: 48%;
        outline: 0;
        box-shadow: none;
        &:hover {
            background-color: ${palette.gray[3]};
            outline: 0;
            box-shadow: none;
        }
    }
    .delete {
        align-items: center;
        justify-content: center;
        width: 100%;
        margin-top: 3.5rem;
        text-decoration: underline ${palette.gray[5]};
        font-size: 0.75rem;
        color: ${palette.gray[6]};
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
        /* border-left: 1px groove ${palette.gray[3]}; */
    }
    .uploadBtn {
        margin: 0.1rem 0rem 0.8rem 0rem;
        font-size: 0.8rem;
        text-decoration: underline ${palette.gray[6]};
        &:hover {
            color: ${palette.gray[5]};
            background: none;
        }
    }
    .nameRow {
        height: 72px;
    }
    .inputName {
        margin-top: -2rem;
    }
`;


const ModifyProfile = ({ profileImage, onChangeImage, username, email, onChangeField, onPublish, user, onCancel }) => {

    const imageInput = useRef();//이미지 업로드를 위한 설정
    const onClickImageUpload = useCallback((e) => { //이미지 업로드 버튼
        e.preventDefault();
        imageInput.current.click();
    }, [imageInput.current]);


    const onChangeName = e => {
        onChangeField({ key: 'username', value: e.target.value });
    };



    return (
        
        <DescripBox>
            <div className="profileTitleBox">
                <div className="profileTitle">
                    프로필 관리
                </div>
            </div>
            <Row className="nameRow">
                <Col span={9} className="namebox">
                    이름
                </Col>
                <Col span={15} className="description">
                    <Input 
                        value={username}
                        onChange={onChangeName}
                        className="inputName"
                    />
                </Col>
            </Row>
            <Row>
                <Col span={9} className="namebox">
                    이메일
                </Col>
                <Col span={15} className="description">
                    {email}
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
                        e-mail
                        <Checkbox style={{ marginLeft: "1rem"}} /* onChange={onChange} */ />
                    </div>
                    <div className="marketing">
                        sms <Checkbox style={{ marginLeft: "1.8rem"}} /* onChange={onChange} */ />
                    </div>
                </Col>
            </Row>
            <hr width="100%" color="#DEE2E6" size="1" style={{ marginBottom: "2.3rem"}}/> 
            <Row>
                <ThemeProvider theme={theme}>
                <Button variant="contained" className="cancelBtn" onClick={onCancel}>
                    취소하기
                </Button>
                <Button 
                    variant="contained"
                    color="primary"
                    className="saveBtn"
                    onClick={onPublish}
                >
                    저장하기
                </Button>
                </ThemeProvider>    
            </Row>
            <Row>
                <div className="delete">
                    <div>계정 삭제</div>
                </div>
            </Row>
        </DescripBox>
    )

};

export default ModifyProfile;