import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { change_username, submit_username } from '../modules/username';

import UserInfo from '../components/UserInfo';

const UserContainer = () => {
    const dispatch = useDispatch();
    const { input, username } = useSelector(state => state.username, "");
    // const [onChangeUsername, onSubmit] = useActions([change_username, submit_username],[]);

    const onChange = e => {
        dispatch(change_username(e.target.value));      
    }
        

    const onSubmitUsername = e => {
        e.preventDefault();  
        dispatch(submit_username(input));
        dispatch(change_username(''));
    }

    return (
        <UserInfo onChange={onChange} onSubmit={onSubmitUsername} username={username} input={input} />
    );
};

export default UserContainer;