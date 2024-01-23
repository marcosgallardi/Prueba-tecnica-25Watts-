import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loged: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLogin: (state, { payload }) => {
      state.loged = payload;
    },
    setLogout:(state, { payload }) => {
      state.loged = payload;
    },
  },
});


export const { setLogin,setLogout } = loginSlice.actions;

export default loginSlice.reducer;