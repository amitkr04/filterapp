// import React, { useState } from "react";
// import IntegerInput from "../IntegerInput/IntegerInput";
// import StringInput from "../StringInput/StringInput";
// import FilteredItemsDisplay from "../FilteredItemsDisplay/FilteredItemsDisplay";

// const SearchFilter = () => {
//   const [selectedDate, setSelectedDate] = useState("");
//   const [selectedItems, setSelectedItems] = useState([]);

//   const handleDateSelect = (date) => {
//     setSelectedDate(date);
//   };

//   const handleItemSelect = (item) => {
//     setSelectedItems((prev) => [...prev, item]);
//   };

//   return (
//     <div className="max-w-xl mx-auto">
//       <IntegerInput onDateSelect={handleDateSelect} />
//       <StringInput onItemSelect={handleItemSelect} />
//       <FilteredItemsDisplay selectedItems={selectedItems} />
//     </div>
//   );
// };

// export default SearchFilter;

import React, { useState } from "react";
import IntegerInput from "../IntegerInput/IntegerInput";
import StringInput from "../StringInput/StringInput";
import FilteredItemsDisplay from "../FilteredItemsDisplay/FilteredItemsDisplay";

const SearchFilter = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleItemSelect = (item) => {
    setSelectedItems((prevItems) => {
      // Prevent adding duplicate items
      if (
        !prevItems.some(
          (selectedItem) => selectedItem.companyName === item.companyName
        )
      ) {
        return [...prevItems, item];
      }
      return prevItems;
    });
  };

  return (
    <div className="max-w-xl mx-auto">
      <IntegerInput onDateSelect={handleDateSelect} />
      <StringInput onItemSelect={handleItemSelect} />

      {/* Display the selected date */}
      {selectedDate && (
        <div className="mt-4 p-2 bg-blue-100 rounded-md">
          Selected Date: {selectedDate}
        </div>
      )}

      <FilteredItemsDisplay selectedItems={selectedItems} />
    </div>
  );
};

export default SearchFilter;
