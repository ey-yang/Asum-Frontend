import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../../lib/createRequestSaga';
import * as hostAPI from '../../lib/api/host/host';

const CHANGE_FIELD = 'host/CHANGE_FIELD';
const INITIALIZE_FORM = 'host/INITIALIZE_FORM';

const [APPLY, APPLY_SUCCESS, APPLY_FAILURE] = createRequestActionTypes(
    'host/APPLY',
  );

const [ACCOUNT, ACCOUNT_SUCCESS, ACCOUNT_FAILURE] = createRequestActionTypes(
    'host/ACCOUNT',
);

export const changeField = createAction(
    CHANGE_FIELD,
    ({ form, key, value }) => ({
        form,
        key,
        value,
    }),
);

export const initializeForm = createAction(INITIALIZE_FORM, form => form);

export const apply = createAction(APPLY, 
    ({ host_name, host_phone, business_type, about, contract, personal_information }) => ({
            host_name, host_phone, business_type, about, contract, personal_information}));

export const account = createAction( ACCOUNT,
    ({ host_name, host_phone, business_type, about, contract, personal_information}) => ({
         host_name, host_phone, business_type, about, contract, personal_information
        }));




        //사가생성
const applySaga = createRequestSaga(APPLY, hostAPI.apply);
const accountSaga = createRequestSaga(ACCOUNT, hostAPI.account);
export function* hostSaga() {
    yield takeLatest(APPLY, applySaga);
    yield takeLatest(ACCOUNT, accountSaga);
}
        

const initialState = {
    apply: {
        host_name: '',
        host_phone: '',
        business_type: '개인',
        about: '',
        contract: false,
        personal_information: false,
    },
    account: {
        host_name: '',
        host_phone: '',
        business_type: '개인',
        about: '',
        contract: false,
        personal_information: false,
    },
    host: null,
    hostError: null,
};

const host = handleActions(
    {
        [CHANGE_FIELD]: (state, {payload: {form, key, value}})=>
        produce(state, draft => {
            draft[form][key] = value;
        }),
        [INITIALIZE_FORM]: (state, {payload: form}) => ({
            ...state,
            [form]: initialState[form],
            hostError: null,
        }),
        [APPLY_SUCCESS]: (state, { payload: host }) => ({
            ...state,
            hostError: null,
            host,
        }),
        [APPLY_FAILURE]: (state,  {payload: error }) => ({
            ...state,
            hostError: error,
        }),
        [ACCOUNT_SUCCESS]: (state, { payload: host }) => ({
            ...state,
            hostError: null,
            host,
        }),
        [ACCOUNT_FAILURE]: (state,  {payload: error }) => ({
            ...state,
            hostError: error,
        }),
    },
    initialState,
)

export default host;