import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  card: [{}],
};

const tarjetasSlice = createSlice({
  name: "tarjetas",
  initialState,
  reducers: {
    setTarjetas: (state, { payload }) => {
      state.card = payload;
    },
  },
});

export const { setTarjetas } = tarjetasSlice.actions;

export default tarjetasSlice.reducer;
