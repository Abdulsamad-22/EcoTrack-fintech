import styles from "../../../styles/budgetStyles/budgetallocation.module.css";
import { useBudget } from "./BudgetProvider";

export default function BudgetAllocation() {
  const { formattedTotal, newBudget } = useBudget();

  const topBudget = newBudget
    .filter((item) => item.totalAmount > 0) // Only include non-zero total amounts
    .sort((a, b) => b.totalAmount - a.totalAmount) // Sort by spentAmount in descending order
    .slice(0, 6);

  return (
    <div>
      <div className={styles.topContainer}>
        <h2>Allocation</h2>
        <div className={styles.budgetStatus}>
          <p>₦{formattedTotal.toLocaleString("en-NG")}</p>
          <div className={styles.status}>
            <img src="/images/check-icon.svg" alt="check-icon" />
            On track
          </div>
        </div>
      </div>

      <div className={styles.allocationWrapper}>
        {topBudget.length === 0 ? (
          <h1
            style={{
              textAlign: "center",
              margin: "0 auto",
              width: "80%",
              fontSize: "1.25rem",
            }}
          >
            You have no Budget Allocation, Make New Budget
          </h1>
        ) : (
          topBudget.map((list, index) => (
            <div key={index} className={styles.allocatioContainer}>
              <div className={styles.allocationName}>
                <div className={styles.allocationRent}></div>
                <h3>{list.category}</h3>
              </div>
              <div className={styles.amountContainer}>
                <p className={styles.allocationAmount}>
                  ₦{list.spentAmount.toLocaleString("en-NG")}/
                  <span>{list.totalAmount.toLocaleString("en-NG")}</span>
                </p>
                <img className={styles.onTrackIcon} src={list.status} alt="" />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
