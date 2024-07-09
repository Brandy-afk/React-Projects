import { configureStore, createSlice, createAction } from "@reduxjs/toolkit";

const reset = createAction("app/reset");

const housesSlice = createSlice({
  name: "houses",
  initialState: [],
  reducers: {
    addHouse(state, action) {
      state.push(action.payload);
    },
    removeHouse(state, action) {
      state.splice(action.payload, 1);
    },
  },
  extraReducers(builder) {
    builder.addCase("app/reset", (state, action) => {
      return [];
    });
  },
});

const Store = configureStore({
  reducer: {
    houses: housesSlice.reducer,
  },
});

export { Store };
export const { addHouse, removeHouse } = housesSlice.actions;
