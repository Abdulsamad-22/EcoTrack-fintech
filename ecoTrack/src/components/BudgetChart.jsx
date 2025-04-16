import {
  Chart as ChartJS,
  defaults,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js/auto";
import { Bar, Doughnut } from "react-chartjs-2";
import { useEffect } from "react";
import budget from "./data/budget.json";

defaults.maintainAspectRatio = false;
defaults.responsive = true;
ChartJS.register(ArcElement, Tooltip, Legend);
export default function BudgetChart() {
  // Custom plugin to draw text in the center of the doughnut chart
  const centerTextPlugin = {
    id: "centerText",
    beforeDraw: (chart) => {
      const ctx = chart.ctx;
      const width = chart.width;
      const height = chart.height;

      ctx.save();
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      // Draw "20% Spent"
      ctx.font = "400 16px Arial";
      ctx.fillStyle = "#615E5E";
      ctx.fillText("20% Spent", width / 2, height / 2 - 10);

      // Draw "₦250,000"
      ctx.font = "bold 20px Arial";
      ctx.fillStyle = "#444242";
      ctx.fillText("₦250,000", width / 2, height / 2 + 20);

      ctx.restore();
    },
  };

  // Register the custom plugin
  useEffect(() => {
    ChartJS.register(centerTextPlugin);
    return () => {
      ChartJS.unregister(centerTextPlugin); // Cleanup on unmount
    };
  }, []);

  return (
    <div style={{ width: "200px", height: "200px", margin: "0 auto" }}>
      <Doughnut
        data={{
          datasets: [
            {
              data: [100], // 100% for the base circle
              backgroundColor: "rgba(144, 202, 249, 0.3)", // Light blue shade
              borderWidth: 0,

              //   cutout: "70%",
              weight: 1, // Adjust thickness of the base circle
            },
            {
              data: [20, 80], // 20% spent
              backgroundColor: ["#0D1B75", "transparent"], // Spent portion and transparent for rest
              borderWidth: 0,
              borderRadius: 8,
              //   cutout: "90%",
              weight: 1,
              circumference: 360,
              rotation: -270,
            },
          ],
        }}
        options={{
          cutout: "70%", // Makes the doughnut chart thinner
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false, // Hide legend
            },
            tooltip: {
              enabled: true, // Disable tooltips
            },
          },
        }}
      />
    </div>
  );
}
