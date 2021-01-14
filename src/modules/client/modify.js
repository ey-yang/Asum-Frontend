import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../../lib/createRequestSaga';
import * as userAPI from '../../lib/api/user';
import { takeLatest } from 'redux-saga/effects';

const INITIALIZE = 'modify/INITIALIZE';
// 프로필 이미지 업로드 액션
const CHANGE_FIELD = 'modify/CHANGE_FIELD';
const [
  WRITE_IMAGE,
  WRITE_IMAGE_SUCCESS,
  WRITE_IMAGE_FAILURE,
] = createRequestActionTypes('modify/WRITE_IMAGE');
// 유저 프로필 수정
const SET_ORIGINAL_ACCOUNT = 'modify/SET_ORIGINAL_ACCOUNT'; 
const [
  UPDATE_ACCOUNT,
  UPDATE_ACCOUNT_SUCCESS,
  UPDATE_ACCOUNT_FAILURE,
 ] = createRequestActionTypes('modify/UPDATE_ACCOUNT');


export const initialize = createAction(INITIALIZE);
// 프로필 사진
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
    key,
    value,
  }));
  // 프로필 수정
export const setOriginalAccount = createAction(SET_ORIGINAL_ACCOUNT, modify => modify);
export const updateAccount = createAction(
      UPDATE_ACCOUNT,
      ({ id, username, email }) => ({
          id,
          username,
          email,
        }),
        );
export const writeImage = createAction(WRITE_IMAGE, ({ images }) => ({ images }));
  
  
  // saga 생성
const writeImageSaga = createRequestSaga(WRITE_IMAGE, userAPI.writeImage);
const updateAccountSaga = createRequestSaga(UPDATE_ACCOUNT, userAPI.updateAccount);

export function* modifySaga() {
    yield takeLatest(WRITE_IMAGE, writeImageSaga);
    yield takeLatest(UPDATE_ACCOUNT, updateAccountSaga);
  }


const initialState = {
  images: null,
  username: '',
  email: '',
  user: null,
  originalUserId: null,
};

const modify = handleActions(
  {
      [INITIALIZE]: state => initialState,
      [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
        ...state,
        [key]: value, // 특정 key 값을 업데이트
      }),
      [WRITE_IMAGE]: state => ({
        ...state,
        // post와 postError를 초기화
        image: null,
      }),
      // 포스트 작성 성공
      [WRITE_IMAGE_SUCCESS]: (state, { payload: user }) => ({
        ...state,
        user,
      }),
      // 포스트 작성 실패
      [WRITE_IMAGE_FAILURE]: (state, { payload: Error }) => ({
        ...state,
        userError: Error,
      }),
      
      [SET_ORIGINAL_ACCOUNT]: (state, {payload: modify }) => ({
        ...state,
        username: modify.username,
        email: modify.email,
        originalUserId: modify.id,
      }),
      [UPDATE_ACCOUNT_SUCCESS]: (state, { payload: modify }) => ({
        ...state,
        modify,
      }),
      [UPDATE_ACCOUNT_FAILURE]: (state, { payload: modifyError }) => ({
        ...state,
        modifyError,
      }),
    },
    initialState,
);

export default modify;