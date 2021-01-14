import React from 'react';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';


/**
 * 회원가입/로그인 페이지의 레이아웃을 담당하는 컴포넌트입니다.
 */

 /* 화면 전체를 채움 */
 const AuthTemplateBlock = styled.div`
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    /* flex로 내부 내용 중앙 정렬 */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 5rem;
 `;

 /* 흰색 박스 */
 const WhiteBox = styled.div`
    .logo-area {
        display: block;
        padding-bottom: 2rem;
        text-align: center;
        font-weight: 900;
        font-size: 1.7rem;
        color: ${palette.cyan[4]};
        letter-spacing: 0.5px;
    }
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
    border: 1px solid ${palette.gray[3]};
    padding: 2rem;
    width: 360px;
    background: white;
    border-radius: 2px;
    margin-top: 4rem;
`;

 const AuthTemplate = ({ children }) => {
    return (
        <AuthTemplateBlock>
            <WhiteBox>
                <div className="logo-area">
                    ASUM
                </div>
                {children}
            </WhiteBox>           
        </AuthTemplateBlock>
    );
 };

 export default AuthTemplate;