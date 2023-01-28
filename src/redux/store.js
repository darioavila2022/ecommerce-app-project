//USING ACTIONS AND REDUCERS FROM CARTREDUX.JS
//CREATING A GLOBAL STORE TO USE IT IN ALL PAGES AND COMPONENTS

import { configureStore, combineReducers } from "@reduxjs/toolkit"
import cartReducer from "./cartRedux"
import userReducer from "./userRedux"
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist'

import storage from "redux-persist/lib/storage"

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const rootReducer = combineReducers({user:userReducer, cart: cartReducer})

const persistedReducer = persistReducer(persistConfig, rootReducer)


//CREATING STORE:
export const store = configureStore({// OPENING NEW OBJECTS
    reducer: persistedReducer, 
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
})

export let persistor = persistStore(store)