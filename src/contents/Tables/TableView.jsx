import React, { useState } from "react";
import "./scroll.css"

const TableView = ({ data }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const customOrder = ["just now", "min", "hour"];

  const sortData = (data, sortConfig) => {
    if (sortConfig.key !== null) {
      return [...data].sort((a, b) => {
        const keyA = a[sortConfig.key];
        const keyB = b[sortConfig.key];
        if (sortConfig.key === "Age") {
          if (sortConfig.direction === "asc") {
            return customOrder.indexOf(keyA) - customOrder.indexOf(keyB);
          }
        }
        if (typeof keyA === "string" && typeof keyB === "string") {
          return sortConfig.direction === "asc"
            ? keyA.localeCompare(keyB)
            : keyB.localeCompare(keyA);
        } else if (typeof keyA === "string" && typeof keyB === "number") {
          return sortConfig.direction === "asc" ? -1 : 1;
        } else if (typeof keyA === "number" && typeof keyB === "string") {
          return sortConfig.direction === "asc" ? 1 : -1;
        } else {
          return sortConfig.direction === "asc" ? keyA - keyB : keyB - keyA;
        }
      });
    }
    return data;
  };

  const sortedData = sortData(data, sortConfig);

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const handleRowClick = (row) => {
    return "/data";
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="shadow-md rounded-lg overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-200 bg-yellow-300 cursor-pointer">
          <thead>
            <tr className="bg-grey-200 border-b border-gray-300 ">
              {Object.keys(data[0]).map((column, index) => (
                <th
                  key={index}
                  className="px-4 py-2 text-left text-gray-700 "
                  onClick={() => handleSort(column)}
                >
                  {column}
                  {sortConfig.key === column && (
                    <span className="ml-1">
                      {sortConfig.direction === "asc" ? "↑" : "↓"}
                    </span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
        </table>
      </div>
      <div className="custom-scrollbar" style={{ maxHeight: "580px", overflowY: "scroll" }}>
        <table className="table-auto w-full border-collapse border border-gray-200 bg-white cursor-pointer">
          <tbody>
            {sortedData.map((row, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-100"
                onClick={() => {
                  const redirectUrl = validateAndHandleRedirectUrl(
                    handleRowClick(row)
                  );
                  if (redirectUrl) {
                    window.location.href = redirectUrl;
                  }
                }}
              >
                {Object.keys(row).map((column, index) => (
                  <td key={index} className="px-4 py-2">
                    {row[column]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

function validateAndHandleRedirectUrl(redirectUrl) {
  if (!redirectUrl || typeof redirectUrl !== "string") {
    console.warn(
      "Invalid redirect URL provided. Please return a valid string."
    );
    return null;
  }
  return redirectUrl;
}

export default TableView;
