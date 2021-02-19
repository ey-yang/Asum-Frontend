import React from 'react';
import HeaderContainer from '../../containers/common/HeaderContainer';
import HostTemplate from '../../components/common/host/HostTemplate';
import HostSalesContainer from '../../containers/host/HostSalesContainer';
import LilFooter from '../../components/common/LilFooter';

function HostSalesPage() {
    return (
        <>
         <HeaderContainer />
            <HostTemplate>
                <HostSalesContainer />
            </HostTemplate>
            <LilFooter />
        </>
    )
}

export default HostSalesPage;
