import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import LandingList from '../components/client/tours/LandingList';
import LilFooter from '../components/common/LilFooter';
import TourListContainer from '../containers/tours/TourListContainer'



const LandingListPage = () => {
    return (
        <>
            <HeaderContainer />
            <LandingList />
            <TourListContainer />
            <LilFooter />
        </>
    );
};

export default LandingListPage;