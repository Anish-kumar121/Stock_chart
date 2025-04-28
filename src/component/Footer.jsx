import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-500 py-4">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} StockCharts | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
