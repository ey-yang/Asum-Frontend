import React from 'react';
import HeaderContainer from '../../containers/common/HeaderContainer';
import AccountContainer from '../../containers/client/user/AccountContainer';
import ModifyProfileContainer from '../../containers/client/user/ModifyProfileContainer';
import TourManagement from '../../components/client/user/TourManagement';
import Footer from '../../components/common/Footer';


const TourManagementPage = () => {
    return (
        <>
            <HeaderContainer />
            
                <TourManagement />
            
            <Footer />
        </>
    );
};

export default TourManagementPage;