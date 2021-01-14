import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import TourViewer from '../components/client/tour/TourViewer';
import TourViewerContainer from '../containers/client/tour/TourViewerContainer';
import Footer from '../components/common/Footer';

const PostPage = () => {
    return (
        <>
            <HeaderContainer />
            <TourViewerContainer />
            <Footer />
        </>
    );
};

export default PostPage;