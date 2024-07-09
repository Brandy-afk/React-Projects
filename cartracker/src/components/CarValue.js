import { useSelector } from "react-redux";

export default function CarValue() {
  const carState = useSelector((state) => state.cars);

  let cost = 0;
  carState.cars.forEach((car) => {
    if (car.name.toLowerCase().startsWith(carState.searchTerm.toLowerCase()))
      cost += car.cost;
  });

  return (
    <div className="car-value mt-6 border-t-2 flex justify-end pt-4 pr-4">
      <p className="text-xl font-semibold">
        Total Cost - <span className="text-3xl text-green-700">${cost}</span>
      </p>
    </div>
  );
}
