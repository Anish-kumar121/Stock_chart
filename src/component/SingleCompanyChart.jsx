import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const SingleCompanyChart = ({ CompanyData }) => {
  const data = {
    labels: [
      "Change (%)",
      "Closing Index Value",
      "Dividend Yield",
      "High Index Value",
      "Low Index Value",
      "Open Index Value",
      "PB Ratio",
      "PE Ratio",
      "Points Change",
      "Turnover (₹ Cr)",
    ],
    datasets: [
      {
        label: "Nifty 50 Metrics",
        data: [
          CompanyData?.change_percent,
          CompanyData?.closing_index_value,
          CompanyData?.div_yield,
          CompanyData?.high_index_value,
          CompanyData?.low_index_value,
          CompanyData?.open_index_value,
          CompanyData?.pb_ratio,
          CompanyData?.pe_ratio,
          CompanyData?.points_change,
          CompanyData?.turnover_rs_cr,
        ],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="flex flex-col items-center py-4 px-1">
      <h2 className="text-2xl sm:text-3xl md:text-4xl">
        {CompanyData?.index_name}
      </h2>
      <p className="text-lg sm:text-xl md:text-2xl ">
        Date: {CompanyData?.index_date}
      </p>

      <div className="w-full sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[450px]">
        <Pie data={data} />
      </div>
    </div>
  );
};

export default SingleCompanyChart;
