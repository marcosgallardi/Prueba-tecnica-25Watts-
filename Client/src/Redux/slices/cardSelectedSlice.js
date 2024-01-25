import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cardSelected: { amarillo: false, rojo: false, verde: false, azul: false },
};

const cardSelectedSlice = createSlice({
  name: "cardSelected",
  initialState,
  reducers: {
    setCardSelected: (state, { payload }) => {
      state.cardSelected = payload;
    },
  },
});

export const { setCardSelected } = cardSelectedSlice.actions;

export default cardSelectedSlice.reducer;
