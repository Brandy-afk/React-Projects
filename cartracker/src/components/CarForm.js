import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost, resetForm, addCar } from "../reduxstore/index";
import Button from "./Button";
import Car from "../classes/Car";

export default function CarForm() {
  const dispatch = useDispatch();
  const formState = useSelector((state) => state.form);

  const onSubmit = (event) => {
    event.preventDefault();
    if (formState.name && formState.cost > 0) {
      dispatch(addCar(new Car(formState.name, formState.cost).returnObject()));
      dispatch(resetForm());
    }
  };

  const onNameChange = (event) => {
    event.preventDefault();
    dispatch(changeName(event.target.value));
  };

  const costChange = (event) => {
    event.preventDefault();
    dispatch(changeCost(parseInt(event.target.value)));
  };

  return (
    <div className="car-form flex justify-center border-b-2 pb-6">
      <form className="flex gap-4" onSubmit={onSubmit}>
        <div className="flex flex-col">
          <label>Car Name</label>
          <input
            className="shadow-md"
            type="text"
            value={formState.name}
            onChange={onNameChange}
          />
        </div>
        <div className="flex flex-col">
          <label>Cost</label>
          <input
            className="shadow-md"
            type="number"
            value={formState.cost}
            onChange={costChange}
          />
        </div>
        <Button primary roundedMed type="submit">
          Add Car
        </Button>
      </form>
    </div>
  );
}
