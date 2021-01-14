import React from 'react';
import HeaderContainer from '../../containers/common/HeaderContainer';
import FavoriteListContainer from '../../containers/client/user/FavoriteListContainer';
import Footer from '../../components/common/Footer';


const FavoriteListPage = () => {
    return (
        <>
            <HeaderContainer />
            <FavoriteListContainer />
            <Footer />
        </>
    );
};

export default FavoriteListPage;