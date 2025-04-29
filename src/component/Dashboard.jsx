import React, { useState, useEffect } from "react";
import SingleCompanyChart from "./SingleCompanyChart";

const Dashboard = ({ companies = [] }) => {
  const [selectedCompany, setSelectedCompany] = useState(
    companies.length > 0 ? companies[0] : null
  );

  useEffect(() => {
    if (companies.length > 0 && !selectedCompany) {
      setSelectedCompany(companies[0]);
    }
  }, [companies]);

  return (
    <div className="flex flex-col lg:flex-row lg:h-[90vh]">
      <aside className="w-full lg:w-64 bg-gray-800 h-[30vh] lg:h-[90vh] text-white p-4 overflow-y-auto">
        <h2 className="text-xl font-bold mb-6">Companies</h2>
        {companies.length > 0 ? (
          <ul className="space-y-4">
            {companies.map((company, idx) => (
              <li
                key={idx}
                onClick={() => setSelectedCompany(company)}
                className={`cursor-pointer hover:bg-gray-700 p-2 rounded transition-colors ${
                  selectedCompany?.index_name === company?.index_name
                    ? "bg-gray-700"
                    : ""
                }`}
              >
                {company?.index_name || "Unnamed Company"}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-300">No companies available</p>
        )}
      </aside>

      <main className="flex-1 bg-gray-100 p-4 overflow-y-auto">
        {selectedCompany ? (
          <div className="w-full max-w-6xl mx-auto">
            <SingleCompanyChart CompanyData={selectedCompany} />
          </div>
        ) : (
          <p className="text-2xl text-gray-500 text-center mt-20">
            Select a company to view its chart.
          </p>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
