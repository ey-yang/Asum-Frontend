import React from 'react';
import HeaderContainer from '../../containers/common/HeaderContainer';
import HostTemplate from '../../components/common/host/HostTemplate';
import HostInquiry from '../../components/host/HostInquiry';

function HostInquiryPage() {
    return (
        <>
        <HeaderContainer />
        <HostTemplate>
            <HostInquiry />
        </HostTemplate>
        </>
    )
}

export default HostInquiryPage;
