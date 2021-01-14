import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as userAPI from '../lib/api/user';
import { takeLatest } from 'redux-saga/effects';


const [
  WRITE_IMAGE,
  WRITE_IMAGE_SUCCESS,
  WRITE_IMAGE_FAILURE,
] = createRequestActionTypes('account/WRITE_IMAGE');
// 유저 정보 읽어오는 액션
const [
  READ_ACCOUNT,
  READ_ACCOUNT_SUCCESS,
  READ_ACCOUNT_FAILURE,
] = createRequestActionTypes('account/READ_ACCOUNT');
const UNLOAD_ACCOUNT = 'account/UNLOAD_ACCOUNT';



export const writeImage = createAction(WRITE_IMAGE, ({ images }) => ({ images }));

// 계정 정보
export const readAccount = createAction(READ_ACCOUNT, id => id);
export const unloadAccount = createAction(UNLOAD_ACCOUNT);


  
  
  // saga 생성
const writeImageSaga = createRequestSaga(WRITE_IMAGE, userAPI.writeImage);
const readAccountSaga = createRequestSaga(READ_ACCOUNT, userAPI.readAccount);

export function* accountSaga() {
    yield takeLatest(WRITE_IMAGE, writeImageSaga);
    yield takeLatest(READ_ACCOUNT, readAccountSaga);
  }


const initialState = {
  user: null,
  originalUserId: null,
};

const account = handleActions(
  {
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

      [READ_ACCOUNT_SUCCESS]: (state, {payload: user }) => (
        {
          ...state,
          user,
        }),
      [READ_ACCOUNT_FAILURE]: (state, { payload: error }) => ({
        ...state,
        error,
      }), 
      [UNLOAD_ACCOUNT]: () => initialState,
    },
    initialState,
);

export default account;