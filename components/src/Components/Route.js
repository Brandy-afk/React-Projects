import { useNavContext } from "../context/navigation";

export default function Route({ path, children }) {
  const { currentPath } = useNavContext();

  if (path === currentPath) {
    return children;
  }
  return null;
}
