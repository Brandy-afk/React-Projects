import { useState } from "react";
import AnimalShow from "./AnimalShow";
import "./css/styles.css";

function getRandomAnimal() {
  const animals = ["bird", "cat", "dog", "cow", "gator", "horse"];
  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
    console.log(animals);
  };

  const renderedAnimals = animals.map((type, index) => {
    return <AnimalShow type={type} index={index} />;
  });

  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
      <div className="animal-container">{renderedAnimals}</div>
    </div>
  );
}

export default App;
