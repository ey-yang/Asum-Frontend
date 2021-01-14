import React from 'react';
import HeaderContainer from '../../containers/common/HeaderContainer';
import AccountContainer from '../../containers/client/user/AccountContainer';
import ProfileContainer from '../../containers/client/user/ProfileContainer'
import Footer from '../../components/common/Footer';


const AccountPage = () => {
    return (
        <>
            <HeaderContainer />
            <AccountContainer>
                <ProfileContainer />
            </AccountContainer>
            <Footer />
        </>
    );
};

export default AccountPage;