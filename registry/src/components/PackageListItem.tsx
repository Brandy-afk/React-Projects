import { PackageSummary } from "../api/types/packageSummary";
import { Link } from "react-router-dom";

export default function PackageListItem({ item }: { item: PackageSummary }) {
  const keywords = (item.keywords || []).map((word) => {
    return (
      <div
        key={word}
        className="border-slate-400 border py-0.5 px-1 text-xs rounded"
      >
        {word}
      </div>
    );
  });

  return (
    <div className="flex justify-between p-4 bg-slate-200 w-11/12 m-4 h-40 gap-5 rounded">
      <div className="flex flex-col w-96">
        <Link to={`/packages/${item.name}`} className="text-xl font-bold">
          {item.name}
        </Link>
        <h3>{item.description}</h3>
        <div className="flex flex-wrap gap-2">{keywords}</div>
      </div>
      <div className="bg-slate-600 hover:bg-slate-500 rounded flex items-center w-20 justify-center">
        <Link
          to={`/packages/${item.name}`}
          className="text-white font-semibold inset-05 cursor-pointer "
        >
          View
        </Link>
      </div>
    </div>
  );
}
