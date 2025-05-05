import { useState } from "react";
import styles from "./confirmamount.module.css";
import { useBudget } from "../budget/BudgetProvider";
export default function ConfirmTransaction({
  setOverlayVisible,
  accountNum,
  bankName,
}) {
  const {
    newBudget,
    setNewBudget,
    budget,
    percentageSpent,
    formattedTotal,
    category,
    sentAmount,
    expenseBudgetCalc,
  } = useBudget();
  const [pin, setPin] = useState("");
  const [error, setError] = useState({});
  function validatePin() {
    const error = {};
    pin === "" ? (error.pin = "Enter your pin") : "";
    return error;
  }
  function handleSubmit(e) {
    e.preventDefault();
    const error = validatePin();
    setError(error);
    if (Object.keys(error).length > 0) {
      return;
    }

    const matchedCategory = newBudget.find(
      (item) => item.category === category
    );

    if (matchedCategory) {
      console.log(matchedCategory);
      const totalAmount = parseFloat(
        matchedCategory.totalAmount.replace(/,/g, "")
      );
      const spentCategoryAmount = parseFloat(sentAmount);

      const budgetBalance = totalAmount - spentCategoryAmount;

      // matchedCategory.totalAmount = budgetBalance;
      console.log(budgetBalance);

      const totalSpent = parseFloat(
        matchedCategory.spentAmount.replace(/,/g, "")
      );
      const categoryTotalSpent = totalSpent + spentCategoryAmount;

      // matchedCategory.spentAmount = categoryTotalSpent;
      console.log(categoryTotalSpent);
      // setBudgetState({ categoryTotalSpent, budgetBalance });
      // return { categoryTotalSpent };

      setNewBudget((prev) => [
        ...prev,
        {
          category: budget,
          spentAmount: "00",
          totalAmount: budgetBalance,
        },
      ]);
    }

    // expenseBudgetCalc();
    setOverlayVisible("success"); // Open transaction success screen
  }
  return (
    <div>
      Pay out {`₦${sentAmount.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`} to
      {accountNum} {bankName.toUpperCase()}
      <form onSubmit={handleSubmit}>
        <label>Enter Pin</label>
        <br />
        <input
          onChange={(e) => setPin(e.target.value)}
          className={styles.inputField}
          value={pin}
          type="text"
          placeholder="Pin"
        />
        {error.pin && (
          <div style={{ color: "red", fontSize: "0.875rem" }}>{error.pin}</div>
        )}
        <button className={styles.payButton} type="submit">
          Pay
        </button>
      </form>
    </div>
  );
}
