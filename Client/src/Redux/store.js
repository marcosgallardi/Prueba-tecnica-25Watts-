import { configureStore, combineReducers } from "@reduxjs/toolkit";
import loginSlice from "./slices/loginSlice";
import tarjetasSlices from "./slices/tarjetasSlices";

const reducer = combineReducers({
  login: loginSlice,
  tarjetas: tarjetasSlices,
});

const store = configureStore({
  reducer: reducer,
});

export default store;
