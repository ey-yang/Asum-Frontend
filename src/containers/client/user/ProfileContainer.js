import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOriginalAccount } from '../../../modules/client/modify'
import { readAccount, unloadAccount } from '../../../modules/account';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import AccountTemplate from '../../../components/client/user/AccountTemplate';
import Profile from '../../../components/client/user/Profile';

const ProfileContainer = ({ match, history }) => {

// user 계정 읽기 API 요청
    /* const { userId } = match.params; */
    const dispatch = useDispatch();
    const { user, error, loading } = useSelector(
        ({ user, loading }) => ({
            user: user.user,
            error: user.error,
            loading: loading['account/READ_ACCOUNT'],
        }),
    );

    useEffect(() => {
        dispatch(readAccount(user));
        // 언마운트될 때 리덕스에서 포스트 데이터 없애기
        return () => {
          dispatch(unloadAccount());
        }; 
      }, [dispatch, user]);
    
    const onEdit = () => {
        dispatch(setOriginalAccount(user));
        history.push('/account/modify');
    };


    return (
        <Profile 
            user={user}
            onEdit={onEdit} 
            loading={loading}
            error={error}
        />
    )
}

export default withRouter(ProfileContainer);