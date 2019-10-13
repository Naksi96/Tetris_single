import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import { get_room } from '../modules/rooms';
import RoomCreate from './RoomCreate';
import axios from 'axios';



const Lobby = () => {
    
    const username = useSelector(state => state.username.username, []);
    const dispatch = useDispatch();
    
    const [rooms, getRooms] = useState([])
    const [redir, setRedir] = useState();
    
    const refresh = () => {
        axios
        .post('/api/room/get')
        .then(res => {
            console.log(res.data)
            getRooms(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const create = async (username) => {
        await axios
            .post('/api/room/create', {username: username})
            .then(res => {
                console.log(res.data)
                dispatch(get_room(res.data))
                setRedir(`/${res.data.roomid}[${res.data.host}]`); 
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        axios
        .post('/api/room/get')
        .then(res => {
            console.log(res.data)
            getRooms(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[])

    

    return (
        <div className="lobby col">
            {redir ? <Redirect to={redir} /> : null}
            <table> 
                <tbody>
                    <tr>
                    <th className="room">Room #</th>
                    <th className="host">Host</th>
                    <th className="type">Players</th>
                    <RoomCreate username={username} create={create} refresh={refresh}/>
                    </tr>
                    {
                        rooms.map(room => 
                        <tr>
                            <td>#{room.roomid}</td>
                            <td>{room.host}</td>
                            <td>{room.players.length}/7</td>
                            {
                                
                            }
                            <td><Link to={"/#" + room.roomid +room.host} >Join</Link></td>
                        </tr>
                            )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Lobby;