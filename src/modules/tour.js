import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as toursAPI from '../lib/api/tours';
import { takeLatest } from 'redux-saga/effects';

const [
  READ_TOUR,
  READ_TOUR_SUCCESS,
  READ_TOUR_FAILURE,
] = createRequestActionTypes('tour/READ_TOUR');
const UNLOAD_TOUR = 'tour/UNLOAD_TOUR'; // 포스트 페이지에서 벗어날 때 데이터 비우기

export const readTour = createAction(READ_TOUR, id => id);
export const unloadTour = createAction(UNLOAD_TOUR);

const readTourSaga = createRequestSaga(READ_TOUR, toursAPI.readTour);
export function* tourSaga() {
  yield takeLatest(READ_TOUR, readTourSaga);
}

const initialState = {
  tour: null,
  error: null,
};

const tour = handleActions(
  {
    [READ_TOUR_SUCCESS]: (state, { payload: tour }) => ({
      ...state,
      tour,
    }),
    [READ_TOUR_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [UNLOAD_TOUR]: () => initialState,
  },
  initialState,
);

export default tour;