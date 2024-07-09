import CarList from "./components/CarList";
import CarForm from "./components/CarForm";
import CarSearch from "./components/CarSearch";
import CarValue from "./components/CarValue";

export default function App({}) {
  return (
    <div className="container">
      <CarForm />
      <CarSearch />
      <CarList />
      <CarValue />
    </div>
  );
}
