import { useDispatch } from "react-redux";
import { removeCar } from "../reduxstore/slices/carSlice";
import "./Button";
import Button from "./Button";

export default function CarListItem({ newName, car }) {
  const dispatch = useDispatch();

  const onDelete = (event) => {
    event.preventDefault();
    dispatch(removeCar(car.key));
  };

  return (
    <div
      key={car.key}
      className="car-list-item shadown w-full flex justify-between items-center shadow-lg p-4 outline"
    >
      <p className={`${car.name === newName && "font-bold"} text-3xl`}>
        <span>{car.name}</span> -{" "}
        <span className="text-green-700">${car.cost}</span>
      </p>
      <Button onClick={onDelete} warning>
        Delete
      </Button>
    </div>
  );
}
