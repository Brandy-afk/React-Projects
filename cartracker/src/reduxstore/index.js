import { configureStore, createAction } from "@reduxjs/toolkit";
import carSlice from "./slices/carSlice";
import formSlice from "./slices/formSlice";
import { addCar, changeSearchTerm, removeCar } from "./slices/carSlice";
import { changeCost, changeName, resetForm } from "./slices/formSlice";

const store = configureStore({
  reducer: {
    cars: carSlice.reducer,
    form: formSlice.reducer,
  },
});

export default store;
export {
  addCar,
  changeCost,
  removeCar,
  changeSearchTerm,
  changeName,
  resetForm,
};
