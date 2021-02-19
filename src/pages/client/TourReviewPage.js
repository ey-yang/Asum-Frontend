import React from 'react';
import HeaderContainer from '../../containers/common/HeaderContainer';
import AccountContainer from '../../containers/client/user/AccountContainer';
import ModifyProfileContainer from '../../containers/client/user/ModifyProfileContainer';
import TourReview from '../../components/client/user/TourReview';
import LilFooter from '../../components/common/LilFooter';


const TourReviewPage = () => {
    return (
        <>
            <HeaderContainer />
            
                <TourReview />
            
            <LilFooter />
        </>
    );
};

export default TourReviewPage;