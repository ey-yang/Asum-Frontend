import React from 'react';
import styled from 'styled-components';
import Responsive from '../Responsive';
import SideMenu from './SideMenu';

const HostViewerBlock = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;



const HostTemplate = ({ children }) => {
    return (
        <>
            <HostViewerBlock>
                <SideMenu/>
                {children}
            </HostViewerBlock>
        </>
    )
}

export default HostTemplate;