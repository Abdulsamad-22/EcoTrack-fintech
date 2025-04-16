import styles from "./budgetsummary.module.css";
import BudgetChart from "./BudgetChart";
export default function BudgetSummary() {
  return (
    <section className={styles.summaryContainer}>
      <h2 className={styles.summaryHeader}>Budget Summary</h2>

      <BudgetChart />
    </section>
  );
}
