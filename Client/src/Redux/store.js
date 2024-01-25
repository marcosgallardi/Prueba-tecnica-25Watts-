import { configureStore, combineReducers } from "@reduxjs/toolkit";
import loginSlice from "./slices/loginSlice";
import tarjetasSlices from "./slices/tarjetasSlices";
import cardSelectedSlice from "./slices/cardSelectedSlice";

const reducer = combineReducers({
  login: loginSlice,
  tarjetas: tarjetasSlices,
  selected: cardSelectedSlice,
});

const store = configureStore({
  reducer: reducer,
});

export default store;
