import React, { useEffect } from 'react';
import qs from 'qs';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import TourList from '../../components/client/tours/TourList';
import { listTours } from '../../modules/tours';

const TourListContainer = ({ location, match }) => {

  const dispatch = useDispatch();
  const { tours, error, loading, user } = useSelector(
    ({ tours, loading, user }) => ({
   
      tours: tours.tours,
      error: tours.error,
      loading: loading['tours/LIST_TOURS'],
      user: user.user,
    }),
  );
  useEffect(() => {
    const { email } = match.params;
    const { tag, page, image, price } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    dispatch(listTours({ tag, email, page, image, price }));
  }, [dispatch, location.search, match.params]);

  return (
    <TourList
      loading={loading}
      error={error}
      tours={tours}
      user={user}
      
    />
  );
};

export default withRouter(TourListContainer);