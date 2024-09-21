import React, { useState, useEffect } from "react";

const StringInput = ({ onItemSelect }) => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [data, setData] = useState([]);
  const [searchOptions, setSearchOptions] = useState([]); // Stores selected search filter options

  // Fetch data from the API
  useEffect(() => {
    fetch("https://demo-backend.durbin.co.in/get-all-dashboard-data")
      .then((response) => response.json())
      .then((result) => setData(result.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Handle input change and filter items based on company name
  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);

    // Filter data based on input while excluding already selected companies
    const filtered = data.filter(
      (item) =>
        item.companyName.toLowerCase().includes(value.toLowerCase()) &&
        !searchOptions.some((option) => option.companyName === item.companyName)
    );
    setFilteredItems(filtered);
    console.log(filtered);
  };

  // Handle item click and selection
  const handleItemClick = (item) => {
    onItemSelect(item); // Send the selected item to the parent component
    setSearchValue(""); // Clear the search input
    setFilteredItems([]); // Clear filtered items after selection

    // Add the clicked item to the search options if it's not already there
    if (
      !searchOptions.some((option) => option.companyName === item.companyName)
    ) {
      setSearchOptions((prevOptions) => [...prevOptions, item]);
    }
  };

  return (
    <div className="p-4">
      {/* Search input */}
      <input
        type="text"
        className="w-full p-2 border rounded-md mb-4"
        placeholder="Type a company name..."
        value={searchValue}
        onChange={handleInputChange}
      />

      {/* Display selected search options */}
      {searchOptions.length > 0 && (
        <div className="mt-4 mb-4">
          <h3 className="font-semibold">Selected Filters:</h3>
          <ul className="bg-gray-100 p-2 rounded-md">
            {searchOptions.map((item, index) => (
              <li key={index} className="py-1">
                {item.companyName}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Display filtered search results */}
      {filteredItems.length > 0 && (
        <ul className="bg-white border rounded-md">
          {filteredItems.map((item) => (
            <li
              key={item.companyName}
              className="p-2 cursor-pointer hover:bg-gray-200"
              onClick={() => handleItemClick(item)}
            >
              {item.companyName}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StringInput;
