import { createSlice } from "@reduxjs/toolkit";

export const itemSlice = createSlice({
  name: "item",
  initialState: {
    navigateItem: "",
  },

  reducers: {
    changeItem: (state, action) => {
      state.navigateItem = action.payload;
    },
  },
});

export const { changeItem } = itemSlice.actions;
export default itemSlice.reducer;
