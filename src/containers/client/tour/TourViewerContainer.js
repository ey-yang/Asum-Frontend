import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { readTour, unloadTour } from '../../../modules/tour';
import TourViewer from '../../../components/client/tour/TourViewer';

const TourViewerContainer = ({ match }) => {
  /* console.log(match); */
  // 처음 마운트될 때 포스트 읽기 API 요청
  const { tourId } = match.params;
  const dispatch = useDispatch();
  const { tour, error, loading } = useSelector(({ tour, loading, user }) => ({
    tour: tour.tour,
    error: tour.error,
    loading: loading['tour/READ_TOUR'],
  }));

  useEffect(() => {
    dispatch(readTour(tourId));
    // 언마운트될 때 리덕스에서 포스트 데이터 없애기
    return () => {
      dispatch(unloadTour());
    };
  }, [dispatch, tourId]);

  return <TourViewer tour={tour} tourId={tourId} loading={loading} error={error} />;
};

export default withRouter(TourViewerContainer);
