import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../reduxstore/slices/carSlice";

export default function CarSearch() {
  const dispatch = useDispatch();

  const onChange = (event) => {
    dispatch(changeSearchTerm(event.target.value));
  };

  const searchValue = useSelector((state) => {
    return state.cars.searchTerm;
  });

  return (
    <div className="car-search flex justify-between items-center mt-6 mb-6">
      <h1 className="font-bold text-3xl">My Cars</h1>
      <form>
        <label style={{ marginRight: "8px" }}>Search</label>
        <input className="shadow-md" value={searchValue} onChange={onChange} />
      </form>
    </div>
  );
}
