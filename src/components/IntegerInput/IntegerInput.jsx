import React, { useState, useEffect } from "react";
import axios from "axios";

const IntegerInput = ({ onDateSelect }) => {
  const [inputType, setInputType] = useState("text");
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://demo-backend.durbin.co.in/get-all-dashboard-data")
      .then((response) => {
        console.log("API Data:", response.data.data);
        setData(response.data.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const formatDateIntoString = (dateString) => {
    const date = new Date(dateString);
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    // Get the year, month, and day
    const year = date.getFullYear();
    const month = months[date.getMonth()];
    const day = date.getDate();

    // Return the formatted date as a string
    return `${month} ${day}, ${year}`;
  };

  // Handle input change and filtering by date
  const handleInputChange = (e) => {
    const value = e.target.value;
    const formattedDate = formatDateIntoString(value);
    const filtered = data.filter((item) => item.lastChecked === formattedDate);
    setFilteredData(filtered);
    onDateSelect && onDateSelect(formattedDate, filtered);
    setSearchValue(value);

    if (!isNaN(value) && value !== "") {
      setInputType("date");
    } else {
      setInputType("text");
    }
  };

  return (
    <div className="p-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Search by Date
      </label>
      <input
        type={inputType}
        className="w-full p-2 border rounded-md mb-4"
        placeholder="Type a number to choose a date..."
        value={searchValue}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default IntegerInput;
