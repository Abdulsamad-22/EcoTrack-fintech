import inflationData from "../data/inflationData.json";
import TimeAxis from "../utils/TimeAxis";
import ChartGraph from "./ChartGraph";
import { useState } from "react";

const API_KEY = `
f8591f36bcb4414:6lbrl1at6hfr1fd`;
export default function InflationData() {
  const [filteredData, setFilteredData] = useState(inflationData);
  const today = new Date();

  function filterByRange(daysAgo) {
    const cutoff = new Date(today);
    cutoff.setDate(cutoff.getDate() - daysAgo);

    const filtered = inflationData.filter((entry) => {
      const entryDate = new Date(entry.date);
      return entryDate >= cutoff;
    });
    setFilteredData(filtered);
  }
  return (
    <div>
      <TimeAxis
        filterByRange={filterByRange}
        reset={() => setFilteredData(inflationData)}
      />
      <ChartGraph filteredData={filteredData} />
    </div>
  );
}
