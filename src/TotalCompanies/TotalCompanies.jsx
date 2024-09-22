import React, { useState, useEffect } from "react";
import axios from "axios";

const TotalCompanies = () => {
  const [totalCompanies, setTotalCompanies] = useState(0);

  useEffect(() => {
    axios
      .get("https://demo-backend.durbin.co.in/get-all-dashboard-data")
      .then((response) => {
        setTotalCompanies(response.data.data.length);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="bg-blue-100 p-4 text-center">
      <h1 className="text-2xl font-semibold text-blue-700">
        Total Companies Available: {totalCompanies}
      </h1>
    </div>
  );
};

export default TotalCompanies;
