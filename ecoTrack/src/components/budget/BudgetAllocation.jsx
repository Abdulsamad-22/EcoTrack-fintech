import styles from "./budgetallocation.module.css";
import { useBudget } from "./BudgetProvider";

export const allocation = [
  {
    category: "Rent",
    spentAmount: "₦270,000",
    totalAmount: "100,000",
    status: "/src/images/check-icon-onPlain.svg",
  },
  {
    category: "Food Item",
    spentAmount: "₦270,000",
    totalAmount: "20,000",
    status: "/src/images/warning-icon.svg",
  },
  {
    category: "Transportation",
    spentAmount: "₦402,000",
    totalAmount: "70,000",
    status: "/src/images/warning-icon.svg",
  },
  {
    category: "Electricity",
    spentAmount: "₦270,000",
    totalAmount: "10,000",
    status: "/src/images/check-icon-onPlain.svg",
  },
];
export default function BudgetAllocation() {
  const { formattedTotal, newBudget } = useBudget();

  return (
    <div>
      <div className={styles.topContainer}>
        <h2>Allocation</h2>
        <div className={styles.budgetStatus}>
          <p>₦{formattedTotal}</p>
          <div className={styles.status}>
            <img src="/src/images/check-icon.svg" alt="check-icon" />
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
                {list.spentAmount}/<span>{list.totalAmount}</span>
              </p>
              <img className={styles.onTrackIcon} src={list.status} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
