import SavingsChart from "../budget/SavingsChart";
import styles from "./botsummary.module.css";

export default function BotChart() {
  return (
    <div>
      <h1 className={styles.predictionHeader}>EcoBot Predictions</h1>
      <SavingsChart />
    </div>
  );
}
