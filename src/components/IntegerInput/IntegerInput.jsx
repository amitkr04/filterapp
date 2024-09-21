import React, { useState, useEffect } from "react";
import axios from "axios";

const IntegerInput = ({ onDateSelect }) => {
  const [inputType, setInputType] = useState("text");
  const [searchValue, setSearchValue] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [data, setData] = useState([]);
  const [dateFilters, setDateFilters] = useState([]);

  useEffect(() => {
    axios
      .get("https://demo-backend.durbin.co.in/get-all-dashboard-data")
      .then((response) => {
        console.log("API Data:", response.data.data);
        setData(response.data.data); // Set the data
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Handle input change to determine whether it should be a text or date input
  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);

    if (!isNaN(value) && value !== "") {
      // If it's an integer, set the input type to date
      setInputType("date");
    } else {
      setInputType("text");
      setSelectedDate(""); // Reset date if it's not an integer
    }
  };

  // Function to format a date from 'yyyy-MM-dd' to 'Month Day, Year'
  const formatDate = (dateValue) => {
    const date = new Date(dateValue);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  // Handle date change and filter the data based on the selected date
  const handleDateChange = (e) => {
    const dateValue = e.target.value;
    const formattedDate = formatDate(dateValue);
    setSelectedDate(formattedDate);

    // Filter data based on the formatted date
    const filtered = data.filter((item) => item.lastChecked === formattedDate);
    setFilteredData(filtered);

    // Add selected date to the date filters list if it's not already there
    if (!dateFilters.includes(formattedDate)) {
      setDateFilters((prevDates) => [...prevDates, formattedDate]);
    }

    // Optionally pass the formatted date back to the parent
    onDateSelect && onDateSelect(formattedDate);
  };

  // Handle removing a date filter
  const handleRemoveDateFilter = (date) => {
    setDateFilters((prevDates) => prevDates.filter((d) => d !== date));
    // Clear filtered data if the removed filter is the currently selected one
    if (selectedDate === date) {
      setFilteredData([]);
      setSelectedDate("");
    }
  };

  return (
    <div className="p-4">
      {/* Search input */}
      <input
        type={inputType}
        className="w-full p-2 border rounded-md mb-4"
        placeholder="Type a number to choose a date..."
        value={searchValue}
        onChange={handleInputChange}
        onBlur={inputType === "date" ? handleDateChange : null}
      />
      {selectedDate && (
        <div className="mt-2 p-2 bg-blue-100 rounded-md">
          Selected Date: {selectedDate}
        </div>
      )}

      {/* Display selected date filters with remove option */}
      {dateFilters.length > 0 && (
        <div className="mt-4 mb-4">
          <h3 className="font-semibold">Selected Date Filters:</h3>
          <ul className="bg-gray-100 p-2 rounded-md">
            {dateFilters.map((date, index) => (
              <li
                key={index}
                className="flex justify-between items-center py-1"
              >
                <span>{date}</span>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => handleRemoveDateFilter(date)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Display filtered data based on the selected date */}
      {filteredData.length > 0 ? (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Filtered Data</h3>
          <table className="min-w-full bg-white mt-2">
            <thead>
              <tr>
                <th className="py-2">Company Name</th>
                <th className="py-2">Performance</th>
                <th className="py-2">Description</th>
                <th className="py-2">Last Checked</th>
                <th className="py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((company, index) => (
                <tr key={index} className="text-center">
                  <td className="py-2">{company.companyName}</td>
                  <td className="py-2">{company.performance}%</td>
                  <td className="py-2">{company.description}</td>
                  <td className="py-2">{company.lastChecked}</td>
                  <td className="py-2">{company.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        selectedDate && <p>No matching data for the selected date.</p>
      )}
    </div>
  );
};

export default IntegerInput;
