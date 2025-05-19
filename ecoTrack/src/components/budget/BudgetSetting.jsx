import { useState } from "react";
import styles from "./budgetsetting.module.css";
import { useBudget } from "./BudgetProvider";

export default function BudgetSetting() {
  const {
    budget,
    budgetAmount,
    setBudgetAmount,
    setBudget,
    setAmount,
    handleSubmit,
    errors,
  } = useBudget();
  const activeStyle = budgetAmount && budget === !"" ? styles.active : "";

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
          {errors.budget && (
            <div className={styles.errorText}>{errors.budget}</div>
          )}
        </div>

        <div className={styles.budgetAmountContainer}>
          <input
            onChange={(e) => setBudgetAmount(e.target.value)}
            value={budgetAmount}
            className={styles.budgetAmount}
            type="number"
            placeholder="Enter budget amount"
          />
          {errors.budgetAmount && (
            <div className={styles.errorText}>{errors.budgetAmount}</div>
          )}
        </div>

        <button type="submit" className={styles.addBudget}>
          <img src="images/Add-icon.svg" alt="add-icon" /> Add New Budget
        </button>
      </form>
    </div>
  );
}
