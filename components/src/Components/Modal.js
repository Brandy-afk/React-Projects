import Button from "./Button";
import ReactDOM from "react-dom";
import { useEffect } from "react";

export default function Modal({ onInteraction, children, actionBar }) {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return ReactDOM.createPortal(
    <div>
      <div
        className="fixed inset-0 bg-gray-300 opacity-80"
        onClick={onInteraction}
      ></div>
      <div className="fixed inset-40 p-10 bg-white flex flex-col border-2 border-green-800 p-2 justify-between">
        <p className="text-clip">{children}</p>
        <Button
          className={"self-end"}
          onClick={onInteraction}
          success
          roundedMed
        >
          {actionBar}
        </Button>
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
}
