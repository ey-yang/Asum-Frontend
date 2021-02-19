import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';

const SideMenuBlock = styled.div`
    /* flex: 0 1 10%; */
    min-height: 93.7vh;
    text-align: center;
    padding: 0;
    background-color: ${palette.cyan[3]};
    width: 210px;

    .side__menu {
        font-size: 1.5rem;
        font-weight: 600;
        padding: 5% 0 5% 0;
        margin-top: 5%;
        &:hover {
            background-color: ${palette.cyan[4]};
        }
    }
    .side__menu a{
        color: #fff;
    }

`;


const SideMenu = () => {
    
        const { user } = useSelector(({ user }) => ({
            user: user.user,
        }));

    return (
        <SideMenuBlock>
            {user.host_approval !== true ? (
                    <div className="side__menu" style={{marginTop: "2rem"}}>
                        <Link to="/host/apply">호스트 신청</Link>
                    </div>
                ) : (
                    <div>
                    <div className="side__menu" style={{marginTop: "2rem"}}> 
                        <Link to="/host/tours">상품 관리</Link>
                    </div>
                    <div className="side__menu">
                        <Link to="/host/sales">판매 관리</Link>
                    </div>
                    <div className="side__menu">
                        <Link to="/host/inquiry">문의 관리</Link>
                    </div>
                    <div className="side__menu">
                        <Link to="/host/account">계정 관리</Link>
                    </div>
                    </div>
                    )}
        </SideMenuBlock>
    )
}

export default SideMenu;
