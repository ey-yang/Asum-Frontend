import { createAction, handleActions } from 'redux-actions';
import { takeLatest }  from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../../lib/createRequestSaga';
import * as hostToursCreateAPI from '../../lib/api/host/hostToursCreate';

const [TOURS_LIST, TOURS_LIST_SUCCESS, TOURS_LIST_FAILURE, ] = createRequestActionTypes('hostToursList/TOURS_LIST');

export const toursList = createAction(
    TOURS_LIST,
    ({ title, image, price }) => ({ title, image, price }),
);

const toursListSaga = createRequestSaga(TOURS_LIST, hostToursCreateAPI.toursList);
export function* hostListSaga() {
    yield takeLatest(TOURS_LIST, toursListSaga);
}

const initialState = {
    hostToursList: null,
    hostToursListError: null,
};

const hostToursList = handleActions (
    {
        [TOURS_LIST_SUCCESS]: (state, { payload: hostToursList }) => ({
            ...state,
            hostToursList,
        }),
        [TOURS_LIST_FAILURE]: (state, { payload: hostToursListError }) => ({
            ...state,
            hostToursListError,
        }),
    },
    initialState,
)

export default hostToursList;