import React from "react";

const FilteredItemsDisplay = ({ selectedItems }) => {
  return (
    <div className="p-4">
      {selectedItems.length > 0 ? (
        <>
          {/* Display the total number of companies */}
          <h2 className="text-xl font-semibold mb-4">
            Total Companies: {selectedItems.length}
          </h2>
          <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-md">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="py-3 px-4 text-left font-semibold text-gray-600">
                  Company Name
                </th>
                <th className="py-3 px-4 text-left font-semibold text-gray-600">
                  Performance
                </th>
                <th className="py-3 px-4 text-left font-semibold text-gray-600">
                  Description
                </th>
                <th className="py-3 px-4 text-left font-semibold text-gray-600">
                  Last Checked
                </th>
                <th className="py-3 px-4 text-left font-semibold text-gray-600">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {selectedItems.map((item, index) => (
                <tr
                  key={index}
                  className={`text-center border-t hover:bg-gray-50 ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <td className="py-3 px-4">{item.companyName}</td>
                  <td className="py-3 px-4">{item.performance}%</td>
                  <td className="py-3 px-4">{item.description}</td>
                  <td className="py-3 px-4">{item.lastChecked}</td>
                  <td
                    className={`py-3 px-4 font-semibold ${
                      item.status === "Paid"
                        ? "text-green-500"
                        : item.status === "Pending"
                        ? "text-yellow-500"
                        : "text-red-500"
                    }`}
                  >
                    {item.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <div className="p-4 bg-yellow-100 text-yellow-800 rounded-md">
          No items selected.
        </div>
      )}
    </div>
  );
};

export default FilteredItemsDisplay;
