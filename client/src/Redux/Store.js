import { combineReducers, configureStore } from "@reduxjs/toolkit";

import userReducer from "./userSlice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({ user: userReducer }); //helps to combine all the reducer on a single rootReducer now the state wont chnage even after ref

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer, //we combined the reducers
  // reducer: {
  //   cart: cartReducer,
  //   user: persistedReducer,
  // },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
//the next step after the store is to wrap the App compoennt around a provider with the store set to the current deafult export of this module
