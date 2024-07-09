import { useState } from "react";
import Modal from "../Components/Modal";
import Button from "../Components/Button";

export default function ModalPage({}) {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(!showModal);
  };
  return (
    <div className="relative">
      <Button onClick={handleClick} primary roundedFull>
        Open Modal
      </Button>
      {showModal && (
        <Modal onInteraction={handleClick} actionBar={"M O N E Y"}>
          I make big money, not small. MOoooooo ooooooooo oooooooooooooooo
          oooooooooooooooo oooooooooooooooney
        </Modal>
      )}
    </div>
  );
}
