import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import LandingList from '../components/client/tours/LandingList';
import Footer from '../components/common/Footer';
import TourListContainer from '../containers/tours/TourListContainer'



const LandingListPage = () => {
    return (
        <>
            <HeaderContainer />
            <LandingList />
            <TourListContainer />
            <Footer />
        </>
    );
};

export default LandingListPage;