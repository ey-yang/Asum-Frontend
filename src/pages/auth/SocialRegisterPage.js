import React from 'react';
import SocialRegisterFormContainer from '../../containers/auth/SocialRegisterFormContainer';
import HeaderContainer from '../../containers/common/HeaderContainer';
import RegisterTemplate from '../../components/client/auth/RegisterTemplate'

const SocialRegisterPage = () => {
    return (
        <>
        <HeaderContainer />
        <RegisterTemplate>
            <SocialRegisterFormContainer />
        </RegisterTemplate>
        
        </>
    );
};

export default SocialRegisterPage;