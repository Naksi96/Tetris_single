import React from 'react';
import styled from 'styled-components'
import { RefreshCcw } from 'styled-icons/feather/RefreshCcw'

const RefreshStyle = styled(RefreshCcw)`
    color: white;
    position: absolute;
    right: 10px;
    top: 15px;
    width: 20px;
    cursor: pointer;
`

const Lobby = () => {
    return (
        <div className="lobby col">
            <table> 
                <tbody>
                    <tr>
                    <th className="room">Room #</th>
                    <th className="host">Host</th>
                    <th className="type">Type</th>
                    <th className="create"><button className="create">Create</button><RefreshStyle /></th>
                    </tr>
                    <tr>
                    <td>#1</td>
                    <td>Brandon</td>
                    <td>Public</td>
                    <td><button>Join</button></td>
                    </tr>
                    <tr>
                    <td>#1</td>
                    <td>Brandon</td>
                    <td>Public</td>
                    <td><button>Join</button></td>
                    </tr>
                    <tr>
                    <td>#1</td>
                    <td>Brandon</td>
                    <td>Public</td>
                    <td><button>Join</button></td>
                    </tr>
                    <tr>
                    <td>#1</td>
                    <td>Brandon</td>
                    <td>Public</td>
                    <td><button>Join</button></td>
                    </tr>
                    <tr>
                    <td>#1</td>
                    <td>Brandon</td>
                    <td>Public</td>
                    <td><button>Join</button></td>
                    </tr>
                    <tr>
                    <td>#1</td>
                    <td>Brandon</td>
                    <td>Public</td>
                    <td><button>Join</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Lobby;