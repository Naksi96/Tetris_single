import React from 'react';

const PlayerInfo = ({ username }) => {
    return (
        <div className="playerInfo">
            <label>{username}</label>
        </div>
    );
};

export default PlayerInfo;