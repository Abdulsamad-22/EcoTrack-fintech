import {
  Chart as ChartJS,
  defaults,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js/auto";
import { Bar, Doughnut } from "react-chartjs-2";
// import budget from "./data/budget.json";
import styles from "./budgetchart.module.css";

defaults.maintainAspectRatio = false;
defaults.responsive = true;
ChartJS.register(ArcElement, Tooltip, Legend);

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

export default function BudgetChart() {
  // Custom plugin to draw text in the center of the doughnut chart

  const data = {
    datasets: [
      {
        data: [100], // 100% for the base circle
        backgroundColor: "#DAE3FF", // Light blue shade
        borderWidth: 0,
        circumference: 360,

        //   cutout: "70%",
        weight: 1, // Adjust thickness of the base circle
      },
      {
        data: [20, 80], // 20% spent
        backgroundColor: ["#1C2D5E", "transparent"], // Spent portion and transparent for rest
        borderWidth: 0,
        borderRadius: 8,
        weight: 1,
        circumference: 360,
        rotation: -270,
      },
    ],
  };

  const options = {
    cutout: "80%", // Makes the doughnut chart thinner
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide legend
      },
      tooltip: {
        enabled: false, // Disable tooltips
      },
    },
  };

  return (
    <div className={styles.budgetPie}>
      <Doughnut data={data} options={options} plugins={[centerTextPlugin]} />
    </div>
  );
}
