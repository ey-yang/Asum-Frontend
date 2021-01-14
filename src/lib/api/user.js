import client from './client';



// 프로필 사진 업로드
export const writeImage = () => client.post('/api/user/profile')

// 유저 계정 정보 읽어오기
export const readAccount = id => client.get(`/api/user/account`);

export const updateAccount = ({ username, email }) =>
    client.put(`/api/user/account/`, {
        username,
        email,
    });