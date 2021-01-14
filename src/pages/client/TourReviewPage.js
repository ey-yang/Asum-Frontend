import React from 'react';
import HeaderContainer from '../../containers/common/HeaderContainer';
import AccountContainer from '../../containers/client/user/AccountContainer';
import ModifyProfileContainer from '../../containers/client/user/ModifyProfileContainer';
import TourReview from '../../components/client/user/TourReview';
import Footer from '../../components/common/Footer';


const TourReviewPage = () => {
    return (
        <>
            <HeaderContainer />
            
                <TourReview />
            
            <Footer />
        </>
    );
};

export default TourReviewPage;