import ExpenseChart from "./ExpenseChart";
import styles from "../../../styles/trackingStyles/expenses.module.css";
import TopExpense from "./TopExpense";
export default function Expenses() {
  return (
    <div className={styles.expenseContainer}>
      <div className={styles.topContainer}>
        <h1>Expenses</h1>

        {/* <div>
          <select>
            <option value="">Oct</option>
            <option value="">Sept</option>
            <option value="">Nov</option>
          </select>
        </div> */}
      </div>

      <div className={styles.expenseNSummary}>
        <ExpenseChart />
      </div>

      <TopExpense />
    </div>
  );
}
