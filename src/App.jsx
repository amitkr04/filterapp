import React from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchFilter from "./components/SearchFilter/SearchFilter";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow bg-slate-300">
          <Navbar />
          <SearchFilter />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
