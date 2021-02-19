import React from 'react';
import HeaderContainer from '../../containers/common/HeaderContainer';
import HostTemplate from '../../components/common/host/HostTemplate';
import HostAccountContainer from '../../containers/host/HostAccountContainer';
import LilFooter from '../../components/common/LilFooter';


const HostAccountPage = () => {
    return (
    <>
    <HeaderContainer />
    <HostTemplate>
        <HostAccountContainer />
    </HostTemplate>
    <LilFooter />
    </>
    )
}

export default HostAccountPage;