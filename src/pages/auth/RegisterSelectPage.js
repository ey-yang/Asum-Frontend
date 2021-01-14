import React from 'react';
import AuthTemplate from '../../components/client/auth/AuthTemplate';
import AuthForm from '../../components/client/auth/AuthForm';
import HeaderContainer from '../../containers/common/HeaderContainer';

const RegisterSelectPage = () => {
    return (
        <>
        <HeaderContainer />
        <AuthTemplate>
            <AuthForm type="registerSelect" />
        </AuthTemplate>
        </>
    );
};

export default RegisterSelectPage;