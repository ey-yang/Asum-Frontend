import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { takeLatest }  from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../../lib/createRequestSaga';
import * as hostToursCreateAPI from '../../lib/api/host/hostToursCreate';


const CHANGE_FIELD = 'hostToursCreate/CHANGE_FIELD';
const INITIALIZE_FORM = 'hostToursCreate/INITIALIZE_FORM';
const SET_ORIGINAL_CREATE = 'hostToursCreate/SET_ORIGINAL_CREATE';

const [CREATE, CREATE_SUCCESS, CREATE_FAILURE] = createRequestActionTypes(
    'hostToursCreate/CREATE',
);

const [UPDATE_CREATE, UPDATE_CREATE_SUCCESS, UPDATE_CREATE_FAILURE] = createRequestActionTypes('hostToursCreate/UPDATE_CREATE');

export const changeField = createAction(CHANGE_FIELD, ({ form, key, value }) => ({
    form,
    key,
    value,
}));

export const initializeForm = createAction(INITIALIZE_FORM, form => form);

export const create = createAction(CREATE, ({ title, images, price, closedDays, option, tags, refund_type, about }) => ({
    title,
    images,
    price,
    closedDays,
    option,
    tags,
    refund_type,
    about,
}));

export const setOriginalCreate = createAction(SET_ORIGINAL_CREATE, hostToursCreate => hostToursCreate);

export const updateCreate = createAction(
    UPDATE_CREATE,
    ({ id, title, price, closedDays, option, tags, refund_type, about }) => ({
        id, title, price, closedDays, option, tags, refund_type, about
    }),
);

const createSaga = createRequestSaga(CREATE, hostToursCreateAPI.create);
const updateCreateSaga = createRequestSaga(UPDATE_CREATE, hostToursCreateAPI.updateCreate);

export function* hostToursCreateSaga() {
    yield takeLatest(CREATE, createSaga);
    yield takeLatest(UPDATE_CREATE, updateCreateSaga);
}



const initialState = {
    form: {
        title: '',
        images: null,
        price: null,
        closedDays: null,
        option: '',
        tags: null,
        refund_type: '가능',
        about: '',
    },
    hostToursCreate: null,
    hostToursCreateError: null,
    orignalCreateId: null,
}

const hostToursCreate = handleActions(
    {
        [CHANGE_FIELD]: (state, { payload: {form, key, value} }) =>
            produce(state, draft => {
                draft[form][key] = value;
        }),
        [INITIALIZE_FORM]: (state, { payload: form }) => ({
            ...state,
            [form]: initialState[form],
            hostToursCreateError: null,
        }),
        [CREATE]: state => ({
            ...state,
            hostToursCreate: null,
            hostToursCreateError: null,
        }),
        [CREATE_SUCCESS]: (state, { payload: hostToursCreate }) => ({
            ...state,
            hostToursCreate,
        }),
        [CREATE_FAILURE]: (state, { payload: hostToursCreateError }) => ({
            ...state,
            hostToursCreateError,
        }),
        [SET_ORIGINAL_CREATE]: (state, { payload: hostToursCreate }) => ({
            ...state,
            form: hostToursCreate,
            orignalCreateId: hostToursCreate.id
        }),
        [UPDATE_CREATE_SUCCESS]: (state, { payload: hostToursCreate }) => ({
            ...state,
            hostToursCreate,
        }),
        [UPDATE_CREATE_FAILURE]: (state, { payload: hostToursCreateError }) => ({
            ...state,
            hostToursCreateError,
        }),
    },
    initialState,
);

export default hostToursCreate;
