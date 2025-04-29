import Papa from "papaparse";

/**
 * Function to fetch and parse CSV data
 * @param {function} setData - callback to set parsed data
 */
function fetchCSVData(setData) {
  Papa.parse("/data/dump.csv", {
    download: true,
    header: true,
    complete: (results) => {
      setData(results.data.slice(0, 100));
    },
    error: (error) => {
      console.error("Error parsing CSV:", error);
    },
  });
}
export default fetchCSVData;
