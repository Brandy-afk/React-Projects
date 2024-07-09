import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    cost: 0,
  },
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changeCost(state, action) {
      state.cost = action.payload;
    },
    resetForm(state, action) {
      return { name: "", cost: 0 };
    },
  },
});

export default formSlice;
export const { changeName, changeCost, resetForm } = formSlice.actions;
