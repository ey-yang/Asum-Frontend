import React from 'react';
import HeaderContainer from '../../containers/common/HeaderContainer';
import AccountContainer from '../../containers/client/user/AccountContainer';
import ModifyProfileContainer from '../../containers/client/user/ModifyProfileContainer';
import TourManagement from '../../components/client/user/TourManagement';
import LilFooter from '../../components/common/LilFooter';


const TourManagementPage = () => {
    return (
        <>
            <HeaderContainer />
            
                <TourManagement />
            
            <LilFooter />
        </>
    );
};

export default TourManagementPage;