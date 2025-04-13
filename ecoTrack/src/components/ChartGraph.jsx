import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import budget from "./data/budget.json";

defaults.maintainAspectRatio = false;
defaults.responsive = true;
export default function ChartGraph() {
  return (
    <div>
      <div style={{ height: 300, marginTop: "40px" }}>
        <Line
          data={{
            labels: budget.map((time) => time.label),
            datasets: [
              {
                label: "Budget",
                data: [40, 80, 50, 30, 54], // Sample data for Budget
                borderColor: "#F87A54",
                backgroundColor: "rgba(255, 165, 0, 0.1)", // For shading between lines
                fill: "+1", // Fills the area between this dataset and the next
                tension: 0.4, // Smooth curve
                pointRadius: 0,
                pointHoverRadius: 5,
              },

              {
                label: "Inflation",
                data: [50, 60, 70, 40, 77], // Sample data for Inflation
                borderColor: "#1C2D5E",
                backgroundColor: "rgba(0, 0, 255, 0.1)", // For shading between lines
                // fill: "-1", // Fills the area between this dataset and the previous
                tension: 0.4, // Smooth curve
                // pointRadius: 0,
                // pointHoverRadius: 5,
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
                  stepSize: 20,
                  callback: function (value) {
                    return value + "%"; // Adds % to y-axis labels
                  },
                },
                min: 20,
                max: 100, // Adjust based on your data range
              },
            },
            plugins: {
              legend: {
                position: "top", // Legend at the top
                labels: {
                  boxWidth: 10,
                  boxHeight: 10,
                  usePointStyle: true,
                  //pointStyle: "rect",  Square legend markers
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
}
