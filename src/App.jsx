import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchFilter from "./components/SearchFilter/SearchFilter";
import TotalCompanies from "./TotalCompanies/TotalCompanies";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow bg-slate-300">
          <Navbar />
          <TotalCompanies />
          <SearchFilter />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
