import { useState, useEffect, useRef } from "react";
import { HiMenu } from "react-icons/hi";

export default function DropDown({ options }) {
  const [toggled, setToggle] = useState(false);
  const [option, setOption] = useState({
    label: "Value...",
    value: "Value...",
  });
  const divEl = useRef();

  const onOptionPressed = (option) => {
    setOption(option);
    setToggle(false);
  };

  const renderedOptions = options.map((ele, i) => (
    <div
      className="hover:bg-sky-100 rounded cursor-pointer p-1"
      key={ele.value}
      onClick={() => onOptionPressed(ele)}
    >
      {ele.label}
    </div>
  ));

  useEffect(() => {
    const handler = (event) => {
      if (divEl.current && !divEl.current.contains(event.target)) {
        setToggle(false);
      }
    };
    document.addEventListener("click", handler, true);

    return () => document.removeEventListener("click", handler, true);
  }, []);

  return (
    <div ref={divEl} className="w-48 relative">
      <div
        onClick={() => setToggle(!toggled)}
        className="border-2 border-black max-w-32 flex items-center cursor-pointer justify-between p-2 rounded shadow bg-white w-full"
      >
        <span>{option.label}</span>
        <HiMenu className="w-6 h-6" />
      </div>
      {toggled && (
        <div
          className="absolute top-full shadow border-2 border-t-0 border-black max-w-32 bg-gray-100 w-full
        "
        >
          {renderedOptions}
        </div>
      )}
    </div>
  );
}
