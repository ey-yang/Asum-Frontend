import React, { useRef, useCallback } from 'react';
import styled from 'styled-components';
import Responsive from '../../common/Responsive';
import palette from '../../../lib/styles/palette';
import { UserOutlined } from '@ant-design/icons';
import Button from '@material-ui/core/Button';
import { Row, Col, Avatar } from 'antd';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ConfirmationNumberOutlinedIcon from '@material-ui/icons/ConfirmationNumberOutlined';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import { Link } from 'react-router-dom';


const AccountBlock = styled(Responsive)`
    margin-top: 4rem;
    padding: 0rem 8.5rem;
    display: flex;
    flex-direction: column;
    margin-bottom: 5rem;
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
    .uploadBtn {
        margin: 0.1rem 0rem 0.8rem 0rem;
        font-size: 0.8rem;
        text-decoration: underline ${palette.gray[6]};
        &:hover {
            color: ${palette.gray[5]};
            background: none;
        }
    }
    
`;

const PicBox = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid ${palette.gray[4]};
    padding: 2rem;
    width: 270px;
    background: white;
    border-radius: 8px;
    align-items: center;
`;

const PointCoupon = styled.div`
    margin: 0.5rem 0rem;
    justify-content: space-between;
    display: flex;
    width: 80%;
    font-size: 0.98rem;
    font-weight: 450;
    .pointCoupon {
        display: flex;
    }
    .pocouTitle {
        margin-left: -0.7rem;
    }
`;

const PersonalMenu = styled.div`
    margin: 0.7rem 0rem;
    display: flex;
    flex-direction: row;
    width: 163.19px;
    font-size: 0.98rem;
    font-weight: 450;
    align-items: center;
    .menuTitle {
        margin-left: 1.4rem;
    }
`;

const DescripBox = styled.div`
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
`;


const AccountTemplate = ({ onChangeImage, user, error, children }) => {

    // 에러 발생 시
    if (error) {
    if (error.response && error.response.status === 404) {
      return <AccountBlock>존재하지 않는 포스트입니다.</AccountBlock>;
    }
    return <AccountBlock>오류 발생!</AccountBlock>;
  }


    const imageInput = useRef();//이미지 업로드를 위한 설정
    const onClickImageUpload = useCallback((e) => { //이미지 업로드 버튼
        e.preventDefault();
        imageInput.current.click();
    }, [imageInput.current]);

    return (
        <AccountBlock>
            <Row>
                <Col span={9}>
                    <PicBox>
                        
                        <Avatar size={120} src={`http://128.199.171.26:3000/${user.image}`} icon={<UserOutlined />} />
                        

                        <input type="file" hidden ref={imageInput} name="profileImage" onChange={onChangeImage} />

                        <Button disableFocusRipple disableRipple aria-controls="simple-menu" aria-haspopup="true"  className="uploadBtn" onClick={onClickImageUpload}>
                            사진 업로드
                        </Button>
                        <hr width="100%" color="#DEE2E6" size="1"/>
                        <PointCoupon>
                            <div className="pointCoupon">
                                <ListItemIcon>
                                    <MonetizationOnOutlinedIcon />
                                </ListItemIcon>
                                <div className="pocouTitle">
                                    포인트
                                </div>
                            </div> 
                            <div>0P</div> 
                        </PointCoupon>
                        <PointCoupon>
                            <div className="pointCoupon">
                                <ListItemIcon>
                                    <ConfirmationNumberOutlinedIcon />
                                </ListItemIcon>
                                <div className="pocouTitle">
                                    쿠폰
                                </div>
                            </div>
                            <div>0장</div> 
                        </PointCoupon>
                        <hr width="100%" color="#DEE2E6" size="1"/>
                        
                        <Link to={'/tour/management/'} style={{ color: "#323232" }}>
                            <PersonalMenu>
                                <AssignmentOutlinedIcon style={{color: "#757575"}}/>    
                                <div className="menuTitle">
                                    예약 내역
                                </div>
                            </PersonalMenu>
                        </Link>
                        <Link to={'/tour/management/past'} style={{ color: "#323232" }}>
                            <PersonalMenu>
                                <ChatOutlinedIcon style={{color: "#757575"}} />
                                <div className="menuTitle">
                                    여행 후기
                                </div>
                            </PersonalMenu>
                        </Link>
                        <Link to={'/account/favorite'} style={{ color: "#323232" }}>
                        <PersonalMenu>
                            <FavoriteBorderOutlinedIcon style={{color: "#757575"}} />
                            <div className="menuTitle">
                                관심 여행
                            </div>
                        </PersonalMenu>
                        </Link>
                    </PicBox>
                </Col>

                <Col span={15}>
                    <DescripBox>
                        {children}
                    </DescripBox>
                </Col>
            </Row>
        </AccountBlock>
    )

};

export default AccountTemplate;