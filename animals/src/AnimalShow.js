import { useState } from "react";
import bird from "./img/bird.svg";
import cat from "./img/cat.svg";
import cow from "./img/cow.svg";
import dog from "./img/dog.svg";
import gator from "./img/gator.svg";
import heart from "./img/heart.svg";
import horse from "./img/horse.svg";

const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  heart,
  horse,
};

export default function AnimalShow({ type, index }) {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div onClick={handleClick} className="animal">
      <img alt="animal-" className="animal-img" src={svgMap[type]} />
      <img
        alt="heart"
        src={heart}
        className="heart"
        style={{ width: 10 + 10 * clicks + "px" }}
      />
    </div>
  );
}
