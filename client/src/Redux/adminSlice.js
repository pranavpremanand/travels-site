import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admins",
  initialState: { admins: [] },
  reducers: {
    setData: (state, action) => {
      state.admins = action.payload;
    },
    addData: (state, action) => {
      state.admins.unshift(action.payload);
    },
  },
});

export const { setData, addData } = adminSlice.actions;
export default adminSlice.reducer;
