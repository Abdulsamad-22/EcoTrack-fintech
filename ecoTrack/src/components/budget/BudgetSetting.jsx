import { useState } from "react";
import styles from "../../../styles/budgetStyles/budgetsetting.module.css";
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

  function capitalizeFirstLetter(str) {
    return str.toLowerCase().replace(/\b\w/g, (match) => match.toUpperCase());
  }

  function handleBudget(e) {
    const value = e.target.value;
    setBudget(capitalizeFirstLetter(value));
  }

  return (
    <div>
      <form className={styles.budgetForm} onSubmit={handleSubmit}>
        <h1 className={styles.header}>Start New Budget</h1>
        <div className={styles.budgetNameContainer}>
          <input
            onChange={handleBudget}
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
