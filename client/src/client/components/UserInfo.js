import React from 'react';

const UserInfo = ({ input, username, onChange, onSubmit }) => {
    return (
        <div>
            <label>{username}</label>
            <form onSubmit={onSubmit}>
                <input value={input} onChange={onChange} />
                <button type="submit">CHANGE</button>
            </form>
        </div>
    );
};

export default UserInfo;