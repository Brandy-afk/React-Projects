import { createSlice } from "@reduxjs/toolkit";
import Car from "../../classes/Car";

const honda = new Car("Honda", 20000).returnObject();
const toyate = new Car("Toyota", 34000).returnObject();

const carSlice = createSlice({
  name: "cars",
  initialState: { cars: [honda, toyate], searchTerm: "" },
  reducers: {
    addCar(state, action) {
      state.cars.push(action.payload);
    },
    removeCar(state, action) {
      const index = state.cars.findIndex((car) => car.key === action.payload);
      if (index !== -1) state.cars.splice(index, 1);
    },
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload.replace(/[0-9]/, "");
    },
  },
});

export default carSlice;
export const { addCar, removeCar, changeSearchTerm } = carSlice.actions;
