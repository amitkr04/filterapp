import React, { useState, useEffect } from "react";
import axios from "axios";

const StringInput = ({ onItemSelect }) => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [data, setData] = useState([]);
  const [searchOptions, setSearchOptions] = useState([]);

  useEffect(() => {
    axios
      .get("https://demo-backend.durbin.co.in/get-all-dashboard-data")
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
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
  };

  // Handle item click and selection
  const handleItemClick = (item) => {
    onItemSelect(item);
    setSearchValue("");
    setFilteredItems([]);
    if (
      !searchOptions.some((option) => option.companyName === item.companyName)
    ) {
      setSearchOptions((prevOptions) => [...prevOptions, item]);
    }
  };

  return (
    <div className="p-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Search by Company Name
      </label>
      <input
        type="text"
        className="w-full p-2 border rounded-md mb-4"
        placeholder="Type a company name..."
        value={searchValue}
        onChange={handleInputChange}
      />
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
