import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import inflationData from "../data/inflationData.json";
import styles from "../../../styles/dashboardStyles/chartgraph.module.css";
import { useState } from "react";
import TimeAxis from "../utils/TimeAxis";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

export default function ChartGraph() {
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
      <div className={styles.graphCanvas}>
        <Bar
          data={{
            labels: filteredData.map((item) => item.date),
            datasets: [
              {
                label: "Budget %",
                data: [
                  40, 80, 50, 30, 54, 10, 14, 15, 17, 54, 10, 14, 15, 17, 54,
                  10, 14, 15,
                ], // Sample data for Budget
                borderColor: "#F87A54",
                backgroundColor: "#F87A54", // For shading between lines
                fill: "+1", // Fills the area between this dataset and the next
                tension: 0.4, // Smooth curve
                borderRadius: 4,
                pointRadius: 0,
                pointHoverRadius: 5,
              },

              {
                label: "Inflation Rate %",
                data: filteredData.map((item) => item.inflation), // Sample data for Inflation
                borderColor: "#1C2D5E",
                backgroundColor: "#1C2D5E", // For shading between lines
                // fill: "-1", // Fills the area between this dataset and the previous
                tension: 0.4, // Smooth curve
                borderRadius: 4,
                pointRadius: 0,
                pointHoverRadius: 5,
              },
            ],
          }}
          options={{
            elements: {
              line: {
                tension: 0.1,
              },
            },
            scales: {
              x: {
                grid: {
                  display: false, // Removes vertical grid lines
                },
                ticks: {
                  display: false,
                },
              },
              y: {
                grid: {
                  borderDash: [5, 5], // Makes horizontal grid lines dashed
                  drawBorder: false, // Removes axis border
                },
                ticks: {
                  stepSize: 10,
                  callback: function (value) {
                    return value + "%"; // Adds % to y-axis labels
                  },
                },
                min: 0,
                max: 100, // Adjust based on your data range
              },
            },
            plugins: {
              legend: {
                display: false,
                position: "top", // Legend at the top
                labels: {
                  boxWidth: 10,
                  boxHeight: 10,
                  usePointStyle: true,
                  //pointStyle: "rect",  Square legend markers
                },
              },
              tooltip: {
                displaColors: false,
                backgroundColor: "rgba (255, 255, 0, 0.2)",
                borderColor: "#666",
                titleColor: "#f9f9f9",
                cornerRadius: 8,
                borderWidth: 1,
                borderColor: "#ddd",
                padding: 8,
                position: "average",
                yAlign: "bottom",
              },
            },
          }}
        />
      </div>
      <TimeAxis filterByRange={filterByRange} />
    </div>
  );
}
