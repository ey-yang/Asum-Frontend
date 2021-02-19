import React from 'react';
import styled from 'styled-components';
import HeaderResponsive from './HeaderResponsive';
import Button from '../Button';
import { Link } from 'react-router-dom';
import palette from '../../../lib/styles/palette';
import HeaderAvatar from './HeaderAvatar'
import { withRouter } from 'react-router-dom';
import { message } from 'antd';

const HeaderBlock = styled.div`
    position: fixed;
    width: 100%;
    background: white;
    z-index: 100;
    /* border-bottom: 1px solid ${palette.gray[3]}; */
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06);
`;

/**
 * Responsive 컴포넌트의 속성에 스타일을 추가해서 새로운 컴포넌트 생성
 */
const Wrapper = styled.div`
    margin: 0 auto;
    width: 1030px;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between; /* 자식 엘리먼트 사이의 여백을 최대로 설정 */
    .logo {
        font-size: 1.9rem;
        font-weight: 900;
        letter-spacing: 0.1px;
        color: ${palette.cyan[4]};
    }
    .right {
        display: flex;
        align-items: center;
    }
    .regimenu {
        font-weight: 700;
        font-size: 0.96rem;
        color: ${palette.gray[7]};
        &:hover {
        color: ${palette.cyan[4]};
        border: 1px solid ${palette.cyan[4]};
    }
    }
`;

/**
 * 헤더가 fixed로 되어 있기 때문에 페이지의 콘텐츠가 4rem 아래에 나타나도록해 주는 컴포넌트
 */
const Spacer = styled.div`
    height: 4rem;
`;

const UserInfo = styled.div`
    font-weight: 700;
    margin-right: 1rem;
    font-size: 0.99rem;
    color: ${palette.gray[7]};
`;

const HeaderMenu = styled.div`
    font-weight: 700;
    font-size: 0.99rem;
    margin-right: 3rem;
    color: ${palette.gray[7]};
    &:hover {
        color: ${palette.gray[5]};
        font-weight: 700;
    }
`;

const Header = ({ user, onLogout }) => {

    const onclick = () => {
        return message.info('로그인이 필요합니다.');
    }

    return (
        <>
            <HeaderBlock>
                <Wrapper>
                    <Link to="/" className="logo">
                        ASUM
                    </Link>
                        
                        {user ? ( user && user.host_approval !== true ?
                            (<div className="right">
                                <Link to="/tour/management">
                                     <HeaderMenu>예약내역</HeaderMenu>
                                </Link>
                                <Link to="/account/favorite">
                                     <HeaderMenu>관심여행</HeaderMenu>
                                </Link>
                                <HeaderAvatar onLogout={onLogout} user={user} /* image={image} */ />
                                {/* <UserInfo>{user.username}</UserInfo> */}
                            </div>)
                            : ( <div className="right">
                                <Link to="/tour/management">
                                     <HeaderMenu>예약내역</HeaderMenu>
                                </Link>
                                <Link to="/account/favorite">
                                     <HeaderMenu>관심여행</HeaderMenu>
                                </Link>
                            <HeaderAvatar onLogout={onLogout} user={user} /* image={image} */ />
                            {/* <UserInfo>{user.username}</UserInfo> */}
                            </div>)
                        ) : (
                            <div className="right">
                                <Link to="/auth/login" onClick={onclick}>
                                    <HeaderMenu>호스트 신청</HeaderMenu>
                                </Link>
                                <Link to="/auth/login">
                                    <HeaderMenu>로그인</HeaderMenu>
                                </Link>
                                <Button to="/registerSelect" className="regimenu">
                                    회원가입
                                </Button>
                            </div>
                        )}
                </Wrapper>
            </HeaderBlock>
            <Spacer />
        </>
    );
};

export default withRouter(Header);