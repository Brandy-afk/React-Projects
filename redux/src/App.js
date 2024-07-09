import { useState } from "react";
import { addHouse } from "./Store";
import { useDispatch, useSelector } from "react-redux";

export default function App() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const onInputChanged = (event) => {
    setInput(event.target.value.replace(/[0-9]/, ""));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!input) return;
    dispatch(addHouse(input));
    setInput("");
  };

  const houses = useSelector((state) => {
    return state.houses;
  });

  console.log(houses);

  const renderedHouses = houses.map((house) => (
    <div className="house">
      <h2>{house}</h2>
    </div>
  ));

  return (
    <div>
      <div>
        <form onSubmit={onSubmit}>
          <label style={{ margin: "5px" }}>House Name</label>
          <input value={input} onChange={onInputChanged} />
        </form>
      </div>
      <div className="ml-4 text-emerald-950">{renderedHouses}</div>
    </div>
  );
}
