import { useBudget } from "../budget/BudgetProvider";
import styles from "./topexpense.module.css";
export default function TopExpense() {
  const { newBudget, spentAmount } = useBudget();
  // const expenses = [
  //   { icon: "images/House.svg", title: "Rent", amount: 420000 },
  //   ,
  //   {
  //     icon: "images/food-icon.svg",
  //     title: "Food Item",
  //     amount: 220000,
  //   },
  //   {
  //     icon: "images/transport-icon.svg",
  //     title: "Transportation",
  //     amount: 120000,
  //   },
  //   { icon: "images/fuel-icon.svg", title: "Fuel", amount: 120000 },
  // ];
  return (
    <div className={styles.topExpense}>
      <h2>Top Expense</h2>

      <div className={styles.wrapper}>
        {newBudget.map((item) => (
          <div key={item.category} className={styles.expenseContainer}>
            <div className={styles.heading}>
              <img src={item.icon} alt="" />
              {item.category}
            </div>
            <p>₦{item.spentAmount.toLocaleString("en-NG")}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
