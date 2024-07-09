import { useLoaderData } from "react-router-dom";
import { PackageDetails } from "../../api/types/packageDetails";
import { PackageLoaderResults } from "./detailLoader";

export default function DetailsPage() {
  const { searchResults } = useLoaderData() as PackageLoaderResults;

  return (
    <div>
      <h2 className="font-bold">{searchResults.name}</h2>
      <p>{searchResults.description}</p>
    </div>
  );
}
