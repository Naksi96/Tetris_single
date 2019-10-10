import React from 'react';
import styled from 'styled-components'
import {Settings} from 'styled-icons/feather/Settings'
import { submit_username } from '../modules/username';
import { useDispatch } from 'react-redux';

const WhiteSettings = styled(Settings)`
  color: white;
  position: absolute;
  right: 10px;
  top: 5px;
  width: 14px;
  cursor: pointer;
`



const PlayerInfo = ({ username }) => {
    const dispatch = useDispatch();

    const onClick = (e) => {
        e.preventDefault();  
        dispatch(submit_username(''));
    }

    return (
        <div className="playerInfo">
            <label>{username}</label><WhiteSettings onClick={onClick}/>
        </div>
    );
};

export default PlayerInfo;