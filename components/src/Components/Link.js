import { useContext } from "react";
import classNames from "classnames";
import { useNavContext } from "../context/navigation";

export default function Link({ to, children, chosen }) {
  const { navigate } = useNavContext();

  const classes = classNames(
    "text-blue-400 underline hover:text-blue-700 hover:no-underline",
    {
      "text-blue-800 no-underline border-l-4 font-bold border-blue-800 pl-2":
        chosen,
    }
  );

  const onClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    navigate(to);
  };

  return (
    <a className={classes} onClick={onClick} href={to}>
      {children}
    </a>
  );
}
