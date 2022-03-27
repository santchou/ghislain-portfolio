import { createSlice } from "@reduxjs/toolkit";

export const statusSlice = createSlice({
  name: "status",
  initialState: {
    navigate: false,
  },

  reducers: {
    navigateStatus: (state) => {
      state.navigate = !state.navigate;
    },
  },
});

export const { navigateStatus } = statusSlice.actions;
export default statusSlice.reducer;
