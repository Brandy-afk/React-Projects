import { useState } from "react";
import { FaSort } from "react-icons/fa";
import classNames from "classnames";

export default function Table({ data: newData, config, createKey }) {
  const [data, setData] = useState([...newData]);
  const [filterGroup, setFilterGroup] = useState("");
  const [filterType, setFilterType] = useState(null);

  const filterPressed = (col) => {
    let upcomingRender = [...data];
    if (filterGroup === col.label && filterType) {
      upcomingRender.reverse();
      setFilterType(!filterType);
    } else if (filterGroup === col.label && !filterType) {
      setFilterGroup("");
      setFilterType(null);
      upcomingRender = [...newData];
    } else {
      upcomingRender = upcomingRender.sort(col.sort);
      setFilterGroup(col.label);
      setFilterType(true);
    }
    setData(upcomingRender);
  };

  const renderedHeaders = config.map((col) => {
    const classes = classNames("w-5 h-5 cursor-pointer", {
      "fill-red-600": col.label === filterGroup && filterType === false,
      "fill-green-600": col.label === filterGroup && filterType === true,
    });

    return (
      <th className="p-3" key={col.label}>
        <div className="flex items-center gap-1">
          {col.label}
          {col.sort && (
            <FaSort className={classes} onClick={() => filterPressed(col)} />
          )}
        </div>
      </th>
    );
  });

  const renderRow = (item) =>
    config.map((col) => (
      <td key={col.label} className="p-2">
        {col.render(item)}
      </td>
    ));

  const renderedRows = data.map((rowData) => (
    <tr className="border-b" key={createKey(rowData)}>
      {renderRow(rowData)}
    </tr>
  ));

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}
