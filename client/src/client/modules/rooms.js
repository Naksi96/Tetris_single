const GET_ROOM = 'room/GET_ROOM';

//Action
export const get_room = rooms => (
    { 
        type: GET_ROOM,
        payload: rooms
    }
);

//Reducer
const initialState = {
    rooms: ''
};

const rooms = (state = initialState, action) => {
    switch (action.type) {
        case GET_ROOM:
            return {
                ...state,
                host: action.payload.host,
                roomid: action.payload.roomid
            };
        default: 
            return state;    
    }
}

export default rooms;