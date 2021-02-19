import React from 'react';
import HeaderContainer from '../../containers/common/HeaderContainer';
import HostTemplate from '../../components/common/host/HostTemplate';
import HostUploadImg from '../../components/host/HostUploadImg';
import LilFooter from '../../components/common/LilFooter';

const HostUploadImgPage = () => {
    return (
        <>
        <HeaderContainer />
        <HostTemplate>
            <HostUploadImg />
        </HostTemplate>
        <LilFooter />
        </>
    )
}

export default HostUploadImgPage;
