import React from 'react';
import HeaderContainer from '../../containers/common/HeaderContainer';
import HostTemplate from '../../components/common/host/HostTemplate';
import HostToursListContainer from '../../containers/host/HostToursListContainer';
import LilFooter from '../../components/common/LilFooter';

const HostToursPage = () => {
    return (
        <>
        <HeaderContainer />
        <HostTemplate>
            <HostToursListContainer />
        </HostTemplate>
        <LilFooter />
        </>
    )
}

export default HostToursPage;
