import client from '../client';

// 호스트 등록  host_image,
export const apply = ({  host_name, host_phone, business_type, about, contract, personal_information }) =>
    client.post('/api/host/apply', { host_name, host_phone, business_type, about, contract, personal_information });

// 호스트 계정관리
export const account = ({ host_name, host_phone, business_type, about, contract, personal_information }) =>
    client.post('/api/host/account', { host_name, host_phone, business_type, about, contract, personal_information });

// 호스트 상품등록
// export const hostToursCreate = ({ name, images, price, closedDays, option, tags, refund_type, about }) =>
//     client.post('/api/host/tours/create', { name, images, price, closedDays, option, tags, refund_type, about });

// 로그아웃
// export const logout = () => client.post('/api/auth/logout');