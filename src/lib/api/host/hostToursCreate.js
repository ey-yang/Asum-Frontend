import client from '../client';
import qs from 'qs';
// import hostToursList from '../../../modules/host/hostToursList';

// 호스트 상품등록
export const create = ({ title, image, price, closedDays, option, tags, refund_type, about }) =>
    client.post('/api/host/tours/create', { title, image, price, closedDays, option, tags, refund_type, about });

//호스트 상품관리
export const toursList = ({ title, image, price, email, id, about }) => {
    const queryString = qs.stringify({
        title,
        image,
        price,
        email,
        id,
        about,
    })
    return client.get(`/api/host/tours`);
};

export const updateCreate = ({ id, title, price, closedDays, option, tags, refund_type, about }) =>
    client.put(`/api/host/tour/${id}`, {
        id, title, price, closedDays, option, tags, refund_type, about
    });

export const removeCreate = id => client.delete(`/api/host/tour/${id}`);