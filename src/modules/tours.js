import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as toursAPI from '../lib/api/tours';
import { takeLatest } from 'redux-saga/effects';

const [
  LIST_TOURS,
  LIST_TOURS_SUCCESS,
  LIST_TOURS_FAILURE,
] = createRequestActionTypes('tours/LIST_TOURS');

export const listTours = createAction(
  LIST_TOURS,
  ({ tag, email, page, image, price }) => ({ tag, email, page, image, price }),
);

const listToursSaga = createRequestSaga(LIST_TOURS, toursAPI.listTours);
export function* toursSaga() {
  yield takeLatest(LIST_TOURS, listToursSaga);
}

const initialState = {

  tours: null,
  error: null,
  lastPage: 1,
};

const tours = handleActions(
  {
    [LIST_TOURS_SUCCESS]: (state, { payload: tours, meta: response }) => ({
      ...state,
      tours,
      lastPage: parseInt(response.headers['last-page'], 10), // 문자열을 숫자로 변환
    }), 
    
    [LIST_TOURS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  }, 
  initialState,
);

export default tours;