import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setOriginalAccount } from '../../../modules/client/modify'
import { readAccount, unloadAccount } from '../../../modules/account';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import AccountTemplate from '../../../components/client/user/AccountTemplate';
import Profile from '../../../components/client/user/Profile';


const AccountContainer = ({ match, history, children }) => {

    

    // 프로필 사진 등록
    const [profileImage, setProfileImage] = useState(null);
    const onChangeImage = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if(reader.readyState === 2){
                setProfileImage(reader.result);
                }
            }
            console.log(e.target.files[0])
        reader.readAsDataURL(e.target.files[0])
        const formData = new FormData();
        formData.append('image', e.target.files[0]);
        
        return axios.post("/api/user/profile", formData).then(res => {
            window.location.reload();
          }).catch(err => {
            alert('실패')
          })
    };

    const dispatch = useDispatch();
    const { user } = useSelector(
        ({ user }) => ({
            user: user.user,
        }),
    );

    useEffect(() => {
        dispatch(readAccount(user));
        // 언마운트될 때 리덕스에서 포스트 데이터 없애기
        return () => {
          dispatch(unloadAccount());
        }; 
      }, [dispatch, user]);
      

    return (
        <>
            <AccountTemplate
                onChangeImage={onChangeImage}
                profileImage={profileImage}
                children={children}
                user={user}
                
            />
        </>
    )
}

export default withRouter(AccountContainer);