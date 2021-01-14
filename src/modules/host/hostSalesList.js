import { createAction, handleActions } from 'redux-actions';
import { takeLatest }  from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../../lib/createRequestSaga';
import * as hostSalesAPI from '../../lib/api/host/hostSales';

const [SALES_LIST, SALES_LIST_SUCCESS, SALES_LIST_FAILURE, ] = createRequestActionTypes('hostSalesList/SALES_LIST');

export const salesList = createAction(
    SALES_LIST,
    ({ id, title, qty, tour_date, option, price, username,total_price, email }) =>
    ({     id, title, qty, tour_date, option, price, username,total_price, email }),
);

const salesListSaga = createRequestSaga(SALES_LIST, hostSalesAPI.salesList);
export function* hostSalesListSaga() {
    yield takeLatest(SALES_LIST, salesListSaga);
}

const initialState = {
    hostSalesList: null,
    hostSalesListError: null,
};

const hostSalesList = handleActions (
    {
        [SALES_LIST_SUCCESS]: (state, { payload: hostSalesList }) => ({
            ...state,
            hostSalesList,
        }),
        [SALES_LIST_FAILURE]: (state, { payload: hostSalesListError }) => ({
            ...state,
            hostSalesListError,
        }),
    },
    initialState,
)

export default hostSalesList;