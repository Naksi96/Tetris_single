import { combineReducers } from 'redux';
import username from './username';
import rooms from './rooms';

const rootReducer = combineReducers({
    username,
    rooms
});

export default rootReducer;