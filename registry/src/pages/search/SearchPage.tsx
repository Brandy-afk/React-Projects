import { useLoaderData } from "react-router-dom";
import { SearchLoaderResult } from "./searchLoader";
import PackageListItem from "../../components/PackageListItem";

export default function SearchPage() {
  const data = useLoaderData() as SearchLoaderResult;
  console.log(data.searchResults);

  const renderedItems = data.searchResults.map((item) => {
    return <PackageListItem key={item.name} item={item} />;
  });

  return <div className="flex flex-col items-center">{renderedItems}</div>;
}
