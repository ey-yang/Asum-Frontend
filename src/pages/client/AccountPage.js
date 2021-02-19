import React from 'react';
import HeaderContainer from '../../containers/common/HeaderContainer';
import AccountContainer from '../../containers/client/user/AccountContainer';
import ProfileContainer from '../../containers/client/user/ProfileContainer'
import LilFooter from '../../components/common/LilFooter';


const AccountPage = () => {
    return (
        <>
            <HeaderContainer />
            <AccountContainer>
                <ProfileContainer />
            </AccountContainer>
            <LilFooter />
        </>
    );
};

export default AccountPage;