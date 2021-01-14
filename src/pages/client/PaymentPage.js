import React from 'react';
import HeaderContainer from '../../containers/common/HeaderContainer';
import AccountContainer from '../../containers/client/user/AccountContainer';
import ModifyProfileContainer from '../../containers/client/user/ModifyProfileContainer';
import Payment from '../../components/client/tour/Payment';
import Footer from '../../components/common/Footer';


const PaymentPage = () => {
    return (
        <>
            <HeaderContainer />
            
                <Payment />
            
            <Footer />
        </>
    );
};

export default PaymentPage;