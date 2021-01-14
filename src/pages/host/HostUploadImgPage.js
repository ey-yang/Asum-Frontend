import React from 'react';
import HeaderContainer from '../../containers/common/HeaderContainer';
import HostTemplate from '../../components/common/host/HostTemplate';
import HostUploadImg from '../../components/host/HostUploadImg';

const HostUploadImgPage = () => {
    return (
        <>
        <HeaderContainer />
        <HostTemplate>
            <HostUploadImg />
        </HostTemplate>
        </>
    )
}

export default HostUploadImgPage;
