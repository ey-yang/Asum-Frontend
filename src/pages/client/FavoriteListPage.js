import React from 'react';
import HeaderContainer from '../../containers/common/HeaderContainer';
import FavoriteListContainer from '../../containers/client/user/FavoriteListContainer';
import LilFooter from '../../components/common/LilFooter';


const FavoriteListPage = () => {
    return (
        <>
            <HeaderContainer />
            <FavoriteListContainer />
            <LilFooter />
        </>
    );
};

export default FavoriteListPage;