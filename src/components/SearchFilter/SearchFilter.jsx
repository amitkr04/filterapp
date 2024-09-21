import React, { useState } from "react";
import IntegerInput from "../IntegerInput/IntegerInput";
import StringInput from "../StringInput/StringInput";
import FilteredItemsDisplay from "../FilteredItemsDisplay/FilteredItemsDisplay";

const SearchFilter = () => {
  const [filteredResults, setFilteredResults] = useState([]);

  // Handle date selection
  const handleDateSelect = (date, filteredData) => {
    setFilteredResults((prevResults) => [
      ...prevResults.filter((item) => item.lastChecked !== date),
      ...filteredData,
    ]);
  };

  // Handle company name selection
  const handleItemSelect = (item) => {
    setFilteredResults((prevResults) => {
      if (
        !prevResults.some(
          (selectedItem) => selectedItem.companyName === item.companyName
        )
      ) {
        return [...prevResults, item];
      }
      return prevResults;
    });
  };
  // max-w-xl mx-auto, w-1/3 p-4, w-2/3 p-4
  return (
    <div className="max-w-xl mx-auto">
      <div className="">
        <IntegerInput onDateSelect={handleDateSelect} />
        <StringInput onItemSelect={handleItemSelect} />
      </div>
      <div className="">
        <FilteredItemsDisplay selectedItems={filteredResults} />
      </div>
    </div>
  );
};

export default SearchFilter;
