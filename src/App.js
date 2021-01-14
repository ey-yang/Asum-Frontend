import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import RegisterSelectPage from './pages/auth/RegisterSelectPage'
import { Helmet } from 'react-helmet-async';
import TpTestPage from './pages/TpTestPage';
import CompoTestPage from './pages/CompoTestPage';
import UiTestPage from './pages/UiTestPage';
import ImgTestPage from './pages/ImgTestPage';
import AntdTestPage from './pages/AntdTestPage';
import LandingListPage from './pages/LandingListPage';
import SocialRegisterPage from './pages/auth/SocialRegisterPage';
import TourPage from './pages/TourPage';
import AccountPage from './pages/client/AccountPage';
import FavoriteListPage from './pages/client/FavoriteListPage';
import ModifyProfilePage from './pages/client/ModifyProfilePage';
import PaymentPage from './pages/client/PaymentPage';
import TourManagementPage from './pages/client/TourManagementPage';
import PastTourPage from './pages/client/PastTourPage';
import TourReviewPage from './pages/client/TourReviewPage';
import InquiryPage from './pages/client/InquiryPage';

import HostApplyPage from './pages/host/HostApplyPage';
import HostAccountPage from './pages/host/HostAccountPage';
import HostToursListPage from './pages/host/HostToursListPage';
import HostSalesPage from './pages/host/HostSalesPage';
import HostInquiryPage from './pages/host/HostInquiryPage';
import HostToursCreatePage from './pages/host/HostToursCreatePage';
import HostUploadImgPage from './pages/host/HostUploadImgPage';

const App = () => {

  return (
    <>
      <Helmet>
        <title>ASUM</title>
      </Helmet>
      <Switch>
      <Route component={LandingListPage} path={['/@:email', '/']} exact />
      <Route component={LoginPage} path="/auth/login" />
      <Route component={RegisterPage} path="/register" />
      <Route component={RegisterSelectPage} path="/registerSelect" />
      <Route component={SocialRegisterPage} path="/socialregister" />
      <Route component={TpTestPage} path="/tptest" />
      <Route component={CompoTestPage} path="/compotest" />
      <Route component={UiTestPage} path="/uitest" />
      <Route component={ImgTestPage} path="/imgtest" />
      <Route component={AntdTestPage} path="/antdtest" />
      <Route component={AccountPage} path="/account/" exact/>
      <Route component={ModifyProfilePage} path="/account/modify" />
      <Route component={FavoriteListPage} path="/account/favorite" />
      <Route component={PaymentPage} path="/tour/payment" />
      <Route component={TourManagementPage} path="/tour/management" exact/>
      <Route component={PastTourPage} path="/tour/management/past" />
      <Route component={TourReviewPage} path="/tour/review" />
      <Route component={InquiryPage} path="/tour/inquiry" />


      <Route component={HostApplyPage} path="/host/apply" />
      <Route component={HostAccountPage} path="/host/account" />
      <Route component={HostToursListPage} path="/host/tours" exact/>
      <Route component={HostSalesPage} path="/host/sales" />
      <Route component={HostInquiryPage} path="/host/inquiry" />
      <Route component={HostToursCreatePage} path="/host/tours/create" exact/>
      <Route component={HostUploadImgPage} path="/host/tours/create/img" />
      
      <Route component={TourPage} path="/tour/:tourId" />
      </Switch>
    </>
  );
};

export default App;
