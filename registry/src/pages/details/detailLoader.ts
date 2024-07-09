import { Params } from "react-router-dom";
import getPackage from "../../api/queries/getPackage";
import { PackageDetails } from "../../api/types/packageDetails";

export interface PackageLoaderResults {
  searchResults: PackageDetails;
}

interface LoaderArgs {
  params: Params;
}

export default async function detailLoader({
  params,
}: LoaderArgs): Promise<PackageLoaderResults> {
  if (!params.name) {
    throw new Error("Search term not found...");
  } else {
    const result = await getPackage(params.name);

    return {
      searchResults: result,
    };
  }
}
