import React from 'react';
import HeaderContainer from '../../containers/common/HeaderContainer';
import HostTemplate from '../../components/common/host/HostTemplate';
import HostToursCreateContainer from '../../containers/host/HostToursCreateContainer';
import LilFooter from '../../components/common/LilFooter';

const HostToursCreatePage = () => {
    return (
        <>
        <HeaderContainer />
            <HostTemplate>
                <HostToursCreateContainer />
        </HostTemplate>
        <LilFooter />
        </>
    )
}

export default HostToursCreatePage;
