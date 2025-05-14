import styles from "./budgetallocation.module.css";
import { useBudget } from "./BudgetProvider";

// export const allocation = [
//   {
//     icon: "/src/images/House.svg",
//     category: "Rent",
//     spentAmount: 70000,
//     totalAmount: 320000,
//     status: "/src/images/check-icon-onPlain.svg",
//   },
//   {
//     icon: "/src/images/food-icon.svg",
//     category: "Food Item",
//     spentAmount: 155000,
//     totalAmount: 200000,
//     status: "/src/images/warning-icon.svg",
//   },
//   {
//     icon: "/src/images/transport-icon.svg",
//     category: "Transportation",
//     spentAmount: 92000,
//     totalAmount: 170000,
//     status: "/src/images/warning-icon.svg",
//   },
//   {
//     icon: "/src/images/fuel-icon.svg",
//     category: "Electricity",
//     spentAmount: 20000,
//     totalAmount: 100000,
//     status: "/src/images/check-icon-onPlain.svg",
//   },
// ];
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
            <img src="images/check-icon.svg" alt="check-icon" />
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
                <span>{list.totalAmount}</span>
              </p>
              <img className={styles.onTrackIcon} src={list.status} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
