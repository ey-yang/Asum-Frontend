import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/common/Header/Header';
import HeaderAvatar from '../../components/common/Header/HeaderAvatar';
import { logout } from '../../modules/user';

const HeaderContainer = () => {
    const { user } = useSelector(({ user }) => ({ 
        user: user.user,
        
    }));
    /* console.log(user); */
    const dispatch = useDispatch();
    const onLogout = () => {
        dispatch(logout());
    };
    return <Header user={user} /* image={image} */ onLogout={onLogout} />;
};

export default HeaderContainer;