import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as toursAPI from '../lib/api/tours';
import { takeLatest } from 'redux-saga/effects';

const INITIALIZE = 'write/INITIALIZE'; // 모든 내용 초기화
const CHANGE_FIELD = 'write/CHANGE_FIELD'; // 특정 key 값 바꾸기
const [
  WRITE_TOUR,
  WRITE_TOUR_SUCCESS,
  WRITE_TOUR_FAILURE,
] = createRequestActionTypes('write/WRITE_TOUR'); // 포스트 작성
const SET_ORIGINAL_TOUR = 'write/SET_ORIGINAL_TOUR';
const [
  UPDATE_TOUR,
  UPDATE_TOUR_SUCCESS,
  UPDATE_TOUR_FAILURE,
] = createRequestActionTypes('write/UPDATE_TOUR'); // 포스트 수정

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));
export const writeTour = createAction(WRITE_TOUR, ({ title, about, tags, images, price }) => ({
  title,
  about,
  tags,
  images,
  price,
}));
export const setOriginalTour = createAction(SET_ORIGINAL_TOUR, tour => tour);
export const updateTour = createAction(
  UPDATE_TOUR,
  ({ id, title, about, tags, images, price }) => ({
    id,
    title,
    about,
    tags,
    images,
    price,
  }),
);

// saga 생성
const writePostSaga = createRequestSaga(WRITE_TOUR, toursAPI.writeTour);
const updatePostSaga = createRequestSaga(UPDATE_TOUR, toursAPI.updateTour);

export function* writeSaga() {
  yield takeLatest(WRITE_TOUR, writePostSaga);
  yield takeLatest(UPDATE_TOUR, updatePostSaga);
}

const initialState = {
  title: '',
  about: '',
  tags: [],
  images: [],
  price: '',
  tour: null,
  postError: null,
  originalPostId: null,
};

const write = handleActions(
  {
    [INITIALIZE]: state => initialState, // initialState를 넣으면 초기상태로 바뀜
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value, // 특정 key 값을 업데이트
    }),
    [WRITE_TOUR]: state => ({
      ...state,
      // post와 postError를 초기화
      tour: null,
      postError: null,
    }),
    // 포스트 작성 성공
    [WRITE_TOUR_SUCCESS]: (state, { payload: tour }) => ({
      ...state,
      tour,
    }),
    // 포스트 작성 실패
    [WRITE_TOUR_FAILURE]: (state, { payload: postError }) => ({
      ...state,
      postError,
    }),
    [SET_ORIGINAL_TOUR]: (state, { payload: tour }) => ({
      ...state,
      title: tour.title,
      about: tour.about,
      tags: tour.tags,
      originalPostId: tour.id,
    }),
    [UPDATE_TOUR_SUCCESS]: (state, { payload: tour }) => ({
      ...state,
      tour,
    }),
    [UPDATE_TOUR_FAILURE]: (state, { payload: postError }) => ({
      ...state,
      postError,
    }),
  },
  initialState,
);

export default write;