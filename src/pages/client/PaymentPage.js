import React from 'react';
import HeaderContainer from '../../containers/common/HeaderContainer';
import AccountContainer from '../../containers/client/user/AccountContainer';
import ModifyProfileContainer from '../../containers/client/user/ModifyProfileContainer';
import LilFooter from '../../components/common/LilFooter';
import PaymentContainer from '../../containers/client/tour/PaymentContainer';


const PaymentPage = () => {
    return (
        <>
            <HeaderContainer />
            
                <PaymentContainer />
            
            <LilFooter />
        </>
    );
};

export default PaymentPage;