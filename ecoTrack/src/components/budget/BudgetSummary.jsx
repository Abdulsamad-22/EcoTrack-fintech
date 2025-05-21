import styles from "../../../styles/budgetStyles/budgetsummary.module.css";
import BudgetChart from "./BudgetChart";
import BudgetAllocation from "./BudgetAllocation";
export default function BudgetSummary() {
  return (
    <section className={styles.summaryContainer}>
      <h2 className={styles.summaryHeader}>Budget Summary</h2>

      <BudgetChart />
      <BudgetAllocation />
    </section>
  );
}
