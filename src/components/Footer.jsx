import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-700 text-white py-5 mt-auto">
      <div className="container mx-auto flex flex-col items-center justify-between">
        <p className="text-sm">
          Copyright © {new Date().getFullYear()} - All right reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
