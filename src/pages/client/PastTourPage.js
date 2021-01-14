import React from 'react';
import HeaderContainer from '../../containers/common/HeaderContainer';
import PastTour from '../../components/client/user/PastTour';
import Footer from '../../components/common/Footer';


const PastTourPage = () => {
    return (
        <>
            <HeaderContainer />
            
                <PastTour />
            
            <Footer />
        </>
    );
};

export default PastTourPage;