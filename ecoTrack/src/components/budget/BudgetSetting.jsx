import { useState } from "react";
import styles from "./budgetsetting.module.css";
export default function BudgetSetting() {
  const [budget, setBudget] = useState("");
  const [amount, setAmount] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div>
      <form className={styles.budgetForm} onSubmit={handleSubmit}>
        <div className={styles.budgetNameContainer}>
          <input
            onChange={(e) => setBudget(e.target.value)}
            value={budget}
            className={styles.budgetName}
            type="text"
            placeholder="Enter category name"
          />
        </div>

        <div className={styles.budgetAmountContainer}>
          <input
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
            className={styles.budgetAmount}
            type="text"
            placeholder="Enter budget amount"
          />
        </div>

        <button type="submit" className={styles.addBudget}>
          <img src="/src/images/Add-icon.svg" alt="add-icon" /> Add New Budget
        </button>
      </form>
    </div>
  );
}
