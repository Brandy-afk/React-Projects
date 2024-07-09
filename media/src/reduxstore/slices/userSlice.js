import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "Users",
  initialState: {
    data: [],
  },
  reducers: {},
});

export default userSlice;
export const usersReducer = userSlice.reducer;
