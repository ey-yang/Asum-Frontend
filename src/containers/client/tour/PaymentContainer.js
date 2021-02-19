import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { readTour, unloadTour, readTourInfo, unloadTourInfo, changeField } from '../../../modules/tour';
import Payment from '../../../components/client/tour/Payment';



const PaymentContainer = () => {
  const dispatch = useDispatch();
  const { tour, date, number, error, loading, user } = useSelector(({ tour, loading, user, counter }) => ({
    tour: tour.tour,
    date: tour.date,
    number: counter.number,
    error: tour.error,
    loading: loading['tour/READ_TOUR'],
    user: user.user
  }));

  console.log(tour)

  useEffect(() => {
    // dispatch(readTour());
    // 언마운트될 때 리덕스에서 포스트 데이터 없애기
    return () => {
      dispatch(unloadTour());
    };
  }, [dispatch]);

  

  return (
    <Payment
      tour={tour}
      date={date}
      number={number}
      user={user}
    />
  );
};

export default PaymentContainer;
