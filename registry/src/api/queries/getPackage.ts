import { PackageDetails } from "../types/packageDetails";

export default async function getPackage(
  term: string
): Promise<PackageDetails> {
  if (!term) {
    throw new Error("No term detected...");
  } else {
    const response = await fetch(`https://registry.npmjs.org/${term}`);
    const data = await response.json();

    return data as PackageDetails;
  }
}
