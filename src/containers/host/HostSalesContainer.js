import React, { useEffect } from 'react';
import qs from 'qs';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import HostSales from '../../components/host/HostSales';
import { salesList } from '../../modules/host/hostSalesList';

const HostSalesContainer = ({ location, match }) => {
    const dispatch = useDispatch();
    const { hostSalesList, hostSalesListError, loading } = useSelector(
      ({ hostSalesList, loading }) => ({
          hostSalesList: hostSalesList.hostSalesList,
          hostSalesListError: hostSalesList.hostSalesListError,
          loading: loading['hostSalesList/SALES_LIST'],
      }),
    );
    useEffect(() => {
        const { email } = match.params;
        const { id, title, qty, tour_date, option, price, username,total_price } = qs.parse(location.search, {
            ignoreQueryPrefix: true,
        });
        dispatch(salesList({ id, title, qty, tour_date, option, price, username,total_price, email }));
    }, [dispatch, location.search, match.params]);

    
    return (
        <>
            <HostSales
            loading={loading}
            hostSalesListError={hostSalesListError}
            hostSalesList={hostSalesList}
            />
        </>
    )
}

export default withRouter(HostSalesContainer);