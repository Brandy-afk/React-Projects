import type { PackageSummary } from "../types/packageSummary";

interface SearchReponse {
  objects: {
    package: {
      name: string;
      description: string;
      version: string;
      keywords: string[];
    };
  }[];
}

export async function searchPackages(term: string): Promise<PackageSummary[]> {
  const res = await fetch(
    `https://registry.npmjs.org/-/v1/search?text=${term}`
  );
  const data: SearchReponse = await res.json();

  return data.objects.map(
    ({ package: { name, description, keywords, version } }) => {
      return {
        name,
        description,
        version,
        keywords,
      };
    }
  );
}
