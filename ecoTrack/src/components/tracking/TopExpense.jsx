import { useBudget } from "../budget/BudgetProvider";
import styles from "../../../styles/trackingStyles/topexpense.module.css";
export default function TopExpense() {
  const { newBudget, spentAmount } = useBudget();

  const topExpenses = newBudget
    .filter((item) => item.spentAmount > 0) // Only include non-zero spent amounts
    .sort((a, b) => b.spentAmount - a.spentAmount) // Sort by spentAmount in descending order
    .slice(0, 4);
  return (
    <div className={styles.topExpense}>
      <h2>Top Expense</h2>

      <div className={styles.wrapper}>
        {topExpenses.length === 0 ? (
          <h1
            style={{
              textAlign: "center",
              margin: "0 auto",
              fontSize: "1.25rem",
            }}
          >
            You have no Expenses yet!
          </h1>
        ) : (
          topExpenses.map((item) => (
            <div key={item.category} className={styles.expenseContainer}>
              <div className={styles.heading}>
                <img src={item.icon} alt="" />
                {item.category}
              </div>
              <p>₦{item.spentAmount.toLocaleString("en-NG")}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
