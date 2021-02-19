import React from 'react';
import HeaderContainer from '../../containers/common/HeaderContainer';
import HostTemplate from '../../components/common/host/HostTemplate';
import HostApplyContainer from '../../containers/host/HostApplyContainer';
import { useSelector } from 'react-redux';
import LilFooter from '../../components/common/LilFooter';

const HostRegisterPage = () => {

    const { user, checkError } = useSelector(({ user }) => ({
        user: user.user,
    }));

    if (user === null) {
        return (
            <>
        <HeaderContainer />
        <div style={{ textAlign: 'center', fontSize: '2rem'}}>
            로그인 후 신청가능합니다.
        </div>
        </>
        )
        
    }


    return (
    <>
    <HeaderContainer />
    <HostTemplate>
        <HostApplyContainer />
    </HostTemplate>
    <LilFooter />
    </>
    )
}

export default HostRegisterPage;