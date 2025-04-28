import React, { useEffect, useState } from "react";
import fetchCSVData from "./data/Data";
import Dashboard from "./component/Dashboard";
import Footer from "./component/Footer";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchCSVData(setData);
  }, []);

  return (
    <div>
      <div className="flex shadow-2xl py-2  justify-between px-4  ">
        <img src="/datalogo.jpg" alt="datalogo" height={50} width={50} />

        <h1 className=" text-cyan-500  text-2xl font-bold ">Stock Chart</h1>
        <div></div>
      </div>
      <Dashboard companies={data} />
      <Footer />
    </div>
  );
};

export default App;
