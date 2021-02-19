import React from 'react';
import HeaderContainer from '../../containers/common/HeaderContainer';
import PastTour from '../../components/client/user/PastTour';
import LilFooter from '../../components/common/LilFooter';


const PastTourPage = () => {
    return (
        <>
            <HeaderContainer />
            
                <PastTour />
            
            <LilFooter />
        </>
    );
};

export default PastTourPage;