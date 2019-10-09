//Action Type
const CHANGE_USERNAME = 'username/CHANGE_USERNAME';
const SUBMIT_USERNAME = 'username/SUBMIT_USERNAME';

//Action Functions
export const change_username = input => ({ type: CHANGE_USERNAME, payload: input });
export const submit_username = username => ({ type: SUBMIT_USERNAME, payload: username });

const initialState = {
    username: ''
};

const username = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_USERNAME:
            return {
                ...state,
                input: action.payload
            };
        case SUBMIT_USERNAME:
            return {
                ...state,
                username: action.payload
            }
        default:
            return state;
    }
};

export default username;