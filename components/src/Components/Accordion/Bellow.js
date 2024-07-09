import { HiOutlineChevronDown } from "react-icons/hi";
import { HiOutlineChevronUp } from "react-icons/hi";

export default function Bellow({ key, label, content, state, onToggle }) {
  const bodyText = state ? (
    <div className="body">
      <p>{content}</p>
    </div>
  ) : (
    ""
  );

  const icon = state ? (
    <HiOutlineChevronUp className="icon" onClick={onToggle} />
  ) : (
    <HiOutlineChevronDown className="icon" onClick={onToggle} />
  );

  return (
    <div className="bellow" key={key}>
      <div className="header">
        <h3>{label}</h3>
        {icon}
      </div>
      {bodyText}
    </div>
  );
}
