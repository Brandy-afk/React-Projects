import Bellow from "./Bellow";
import { useState } from "react";
import "./accordion.css";

export default function Accordion({ items }) {
  const [index, setIndex] = useState(0);

  const onInteraction = (i) => {
    setIndex(index === i ? -1 : i);
  };

  const bellows = items.map((element, i) => (
    <Bellow
      key={element.id}
      label={element.label}
      content={element.content}
      state={index === i}
      onToggle={() => onInteraction(i)}
    />
  ));

  return <div className="container">{bellows}</div>;
}
