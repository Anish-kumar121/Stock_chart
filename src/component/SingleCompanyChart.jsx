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
    <div style={{ textAlign: "center", padding: "5px" }}>
      <h2 style={{ fontSize: "30px" }}>{CompanyData?.index_name}</h2>
      <p style={{ fontSize: "20px", paddingTop: "5px" }}>
        Date: {CompanyData?.index_date}
      </p>

      <Pie data={data} />
    </div>
  );
};

export default SingleCompanyChart;
