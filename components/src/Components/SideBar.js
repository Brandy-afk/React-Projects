import { render } from "@testing-library/react";
import { useNavContext } from "../context/navigation";
import Link from "./Link";

export default function SideBar({ paths }) {
  const number = 0;
  const { currentPath: current } = useNavContext();
  const renderedLinks = paths.map((path) => (
    <div key={path.path}>
      <Link to={path.path} chosen={current === path.path}>
        {path.body}
      </Link>
    </div>
  ));

  return <div className="flex flex-col gap-1">{renderedLinks}</div>;
}
