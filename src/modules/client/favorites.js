import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../../lib/createRequestSaga';
import * as toursAPI from '../../lib/api/tours';
import { takeLatest } from 'redux-saga/effects';

const [
  LIST_FAVORITES,
  LIST_FAVORITES_SUCCESS,
  LIST_FAVORITES_FAILURE,
] = createRequestActionTypes('favorites/LIST_FAVORITES');

export const listFavorites = createAction(
  LIST_FAVORITES,
  ({ favorites, tag, email, page, image, price }) => ({ favorites, tag, email, page, image, price }),
);

const listFavoritesSaga = createRequestSaga(LIST_FAVORITES, toursAPI.listFavorites);
export function* favoritesSaga() {
  yield takeLatest(LIST_FAVORITES, listFavoritesSaga);
}

const initialState = {

  tours: null,
  error: null,
  lastPage: 1,
};

const favorites = handleActions(
  {
    [LIST_FAVORITES_SUCCESS]: (state, { payload: tours, meta: response }) => ({
      ...state,
      tours,
      lastPage: parseInt(response.headers['last-page'], 10), // 문자열을 숫자로 변환
    }),
    [LIST_FAVORITES_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default favorites;