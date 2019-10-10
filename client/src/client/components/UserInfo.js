import React from 'react';

const UserInfo = ({ input, username, onChange, onSubmit }) => {
    return (
        <div className="userInfo">
            <form className="userInfoForm" onSubmit={onSubmit}>
                <input placeholder="Enter Username" value={input} onChange={onChange} />
                <button type="submit">CHANGE</button>
            </form>
        </div>
    );
};

export default UserInfo;