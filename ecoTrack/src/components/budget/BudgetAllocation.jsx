import styles from "../../../styles/budgetStyles/budgetallocation.module.css";
import { useBudget } from "./BudgetProvider";

export default function BudgetAllocation() {
  const { formattedTotal, newBudget, categoryTotalSpent, budgetBalance } =
    useBudget();
  return (
    <div>
      {/* {console.log(formattedSpent)} */}
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
        {newBudget.map((list, index) => (
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
        ))}
      </div>
    </div>
  );
}
