import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";

export default function Header() {
  return (
    <header className="flex w-full justify-between items-center px-4 border-b h-14">
      <Link to="/" className="text-xl font-bold">
        NPM Registry
      </Link>
      <SearchInput />
    </header>
  );
}
