import React, { useEffect } from 'react';
import qs from 'qs';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import FavoriteList from '../../../components/client/user/FavoriteList';
import { listFavorites } from '../../../modules/client/favorites';

const FavoriteListContainer = ({ location, match }) => {
  /* console.log(match); */
  const dispatch = useDispatch();
  const { tours, error, loading, user } = useSelector(
    ({ favorites, tours, loading, user }) => ({
   
      tours: favorites.tours,
      error: tours.error,
      loading: loading['favorites/LIST_FAVORITES'],
      user: user.user,
    }),
  );
  useEffect(() => {
    const { email } = match.params;
    const { tag, page, image, price } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    dispatch(listFavorites({ tag, email, page, image, price }));
  }, [dispatch, location.search, match.params]);

  return (
    <FavoriteList
      loading={loading}
      error={error}
      tours={tours}
      user={user}
      
    />
  );
};

export default withRouter(FavoriteListContainer);