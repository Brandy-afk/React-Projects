import { useSelector } from "react-redux";
import CarListItem from "./CarListItem";

export default function CarList() {
  const { cars, name: newCarName } = useSelector((state) => ({
    name: state.form.name,
    cars: state.cars,
  }));

  const renderedCars = cars.cars.map((car) => {
    if (
      !cars.searchTerm ||
      car.name.toLowerCase().startsWith(cars.searchTerm.toLowerCase())
    )
      return <CarListItem newName={newCarName} car={car} />;
  });

  return (
    <div className="car-list flex flex-col gap-4 mt-6 mb-6">{renderedCars}</div>
  );
}
