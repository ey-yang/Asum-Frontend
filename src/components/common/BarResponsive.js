import React from 'react';
import styled from 'styled-components';

const BarResponsiveBlock = styled.div`
    
    width: 640px;
    margin: 0 auto; /* 중앙 정렬 */

    /* 브라우저 크기에 따라 가로 크기 변경 */
    @media (max-width: 1024px) {
        width: 640px;
    }
    @media (max-width: 768px) {
        width: 80%;
    }
`;

const BarResponsive = ({ children, ...rest }) => {
    // style, className, onClick, onMouseMove 등의 props를 사용할 수 있도록
    // ...rest를 사용하여 ResponsiveBlock에게 전달
    return <BarResponsiveBlock {...rest}>{children}</BarResponsiveBlock>;
};

export default BarResponsive;