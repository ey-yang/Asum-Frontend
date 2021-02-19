import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import TourViewer from '../components/client/tour/TourViewer';
import TourViewerContainer from '../containers/client/tour/TourViewerContainer';
import LilFooter from '../components/common/LilFooter';

const PostPage = () => {
    return (
        <>
            <HeaderContainer />
            <TourViewerContainer />
            <LilFooter />
        </>
    );
};

export default PostPage;