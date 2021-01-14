import React from 'react';
import HeaderContainer from '../../containers/common/HeaderContainer';
import AccountContainer from '../../containers/client/user/AccountContainer';
import ModifyProfileContainer from '../../containers/client/user/ModifyProfileContainer';
import Footer from '../../components/common/Footer';


const ModifyProfilePage = () => {
    return (
        <>
            <HeaderContainer />
            <AccountContainer>
                <ModifyProfileContainer />
            </AccountContainer>
            <Footer />
        </>
    );
};

export default ModifyProfilePage;