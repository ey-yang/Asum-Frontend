import qs from 'qs';
import client from './client';

export const writeTour = ({ title, about, tags, images, price }) =>
    client.post('/api/user/landing', {title, about, tags, images, price });

export const readTour = id => client.get(`/api/tours/${id}`);

export const listTours = ({ page, email, tag, image, price }) => {
    const queryString = qs.stringify({
        page,
        email,
        tag,
        image,
        price,
    });
    return client.get(`/api/user/landing?${queryString}`);
};

export const updateTour = ({ id, title, about, tags, images, price }) =>
    client.patch(`/api/user/landing/${id}`, {
        title,
        about,
        tags,
        images,
        price,
    });

export const removeTour = id => client.delete(`/api/user/landing/${id}`);


export const listFavorites = ({ favorites, page, email, tag, image, price }) => {
    const queryString = qs.stringify({
        favorites,
        page,
        email,
        tag,
        image,
        price,
    });
    return client.post(`/api/favorites/list`);
};