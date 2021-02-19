import React from 'react';
import HeaderContainer from '../../containers/common/HeaderContainer';
import HostTemplate from '../../components/common/host/HostTemplate';
import HostInquiry from '../../components/host/HostInquiry';
import LilFooter from '../../components/common/LilFooter';

function HostInquiryPage() {
    return (
        <>
        <HeaderContainer />
        <HostTemplate>
            <HostInquiry />
        </HostTemplate>
        <LilFooter />
        </>
    )
}

export default HostInquiryPage;
