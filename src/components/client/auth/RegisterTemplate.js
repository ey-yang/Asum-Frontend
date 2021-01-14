import React from 'react';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';



const RegisterBlock = styled.div`
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    /* flex로 내부 내용 중앙 정렬 */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

/* 흰색 박스 */
const RegisterBox = styled.div`
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
width: 450px;
background: white;
border-radius: 2px;
margin-top: 3rem;
margin-bottom: 5rem;
`;


 const RegisterTemplate = ({ children }) => {


    return (
        <RegisterBlock>
            <RegisterBox>
                <div className="logo-area">
                    ASUM
                </div>
                {children}
            </RegisterBox>
        </RegisterBlock>
    );
 };

 export default RegisterTemplate;