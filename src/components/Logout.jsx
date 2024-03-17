
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../reducers/users';
import { changeSelectedTab } from '../reducers/global';


const Logout = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(logout());
        navigate('/');
        dispatch(changeSelectedTab(0));
    });

    return <></>;
};

export default Logout;
