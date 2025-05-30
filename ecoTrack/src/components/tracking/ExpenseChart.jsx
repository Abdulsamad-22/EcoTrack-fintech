import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
// import styles from "../../../styles/trackingStyles/expenses.module.css";
import { useBudget } from "../budget/BudgetProvider";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

// ChartJS.register(ArcElement, Tooltip, Legend);

export default function ExpenseChart() {
  const { formattedSpent, newBudget } = useBudget();
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
      ctx.font = "200 0.75rem Arial";
      ctx.fillStyle = "#615E5E";
      ctx.fillText("Total Expenses", width / 2, height / 2 - 10);

      // Draw total amount spent
      ctx.font = "700 18px Arial";
      ctx.fillStyle = "#444242";
      ctx.fillText(
        `₦${formattedSpent.toLocaleString("en-NG")}`,
        width / 2,
        height / 2 + 20
      );

      ctx.restore();
    },
  };

  const data = {
    labels: newBudget.map((title) => title.category),
    datasets: [
      {
        data:
          formattedSpent > 0
            ? newBudget.map((amount) =>
                ((amount.spentAmount / formattedSpent) * 100).toFixed(2)
              )
            : [100, 0], // Sample data for Budget
        borderColor: ["#f9f9f9"],
        borderWidth: 2,
        backgroundColor: [
          // "DAE3FF",
          "#F39C12",
          "#003CBE",
          "#2ECC71",
          "#E30000",
          "#8505BB",
        ], // For shading between lines
        fill: false,
        // pointRadius: 0,
        // pointHoverRadius: 5,
        borderRadius: 8,
      },
    ],
  };
  return (
    <>
      <Doughnut
        data={data}
        plugins={[centerTextPlugin]}
        options={{
          cutout: "80%",
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
      />
    </>
  );
}
