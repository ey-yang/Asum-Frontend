import React, { useEffect } from 'react';
import qs from 'qs';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import HostToursList from '../../components/host/HostToursList';
import { toursList } from '../../modules/host/hostToursList';
import { setOriginalCreate } from '../../modules/host/hostToursCreate';
import { removeCreate } from '../../lib/api/host/hostToursCreate';

const HostToursListContainer = ({ location, match, history }) => {
    const dispatch = useDispatch();
    const { hostToursList, hostToursListError, loading, user } = useSelector(
        ({ hostToursList, loading, user }) => ({
            hostToursList: hostToursList.hostToursList,
            hostToursListError: hostToursList.hostToursListError,
            loading: loading['hostToursList/TOURS_LIST'],
            user: user.user,
        }),
    );

    
    useEffect(() => {
        const { email } = match.params;
        const { title, image, price } = qs.parse(location.search, {
            ignoreQueryPrefix: true,
        });
        dispatch(toursList({ title, image, price, email }));
    }, [dispatch, location.search, match.params]);
    
    const onEdit = (e) => {
        e.preventDefault();
        const number = (num) => num.id == e.target.value;

        console.log(hostToursList.findIndex(number))
        
        dispatch(setOriginalCreate(hostToursList[hostToursList.findIndex(number)]));
        history.push('/host/tours/create');
    }

    const onRemove = async (deleteNumber) => {
        try {
            await removeCreate(deleteNumber);
            history.push('/host/tours')
        }
        catch (e) {
            console.log(e);
        }
    };

    return (
        <>
        <HostToursList
        loading={loading}
        hostToursListError={hostToursListError}
        hostToursList={hostToursList}
        onEdit={onEdit}
        onRemove={onRemove}
        />
        </>
    )
}

export default withRouter(HostToursListContainer);