import { configureStore, combineReducers } from "@reduxjs/toolkit";

import userReducer from "../reducers/userReducer";
import { persistReducer, PersistStore } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import localStorage from "redux-persist/es/storage";

const persistConfig = {
  key: "root",
  storage: localStorage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_SECRET_KEY,
    }),
  ],
};
