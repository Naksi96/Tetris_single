import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./client/modules";

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage
};

const enhancedReducer = persistReducer(persistConfig, rootReducer);

const initialState = {};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
    const store = createStore(
        enhancedReducer,
        initialState,
        composeEnhancer(applyMiddleware(thunk))
    );
    const persistor = persistStore(store);
    return { store, persistor }
}
