import React from 'react';

import styled from 'styled-components'
import { RefreshCcw } from 'styled-icons/feather/RefreshCcw';

const RefreshStyle = styled(RefreshCcw)`
    color: white;
    position: absolute;
    right: 10px;
    top: 15px;
    width: 20px;
    cursor: pointer;
`

const RoomCreate = ({ username, create, refresh }) => {

    return (
        <th className="create">
            <button className="create" onClick={e => create(username)}>Create</button>
            <RefreshStyle onClick={e => refresh()}/>
        </th>

    );
};

export default RoomCreate;