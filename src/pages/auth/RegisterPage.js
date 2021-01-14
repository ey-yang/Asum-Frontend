import React from 'react';
import RegisterFormContainer from '../../containers/auth/RegisterFormContainer';
import HeaderContainer from '../../containers/common/HeaderContainer';
import RegisterTemplate from '../../components/client/auth/RegisterTemplate'

const RegisterPage = () => {
    return (
        <>
        <HeaderContainer />
        <RegisterTemplate>
            <RegisterFormContainer />
        </RegisterTemplate>
        
        </>
    );
};

export default RegisterPage;