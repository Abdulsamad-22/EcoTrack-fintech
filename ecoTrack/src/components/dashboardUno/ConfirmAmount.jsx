import { useState } from "react";
import styles from "./confirmamount.module.css";
import ConfirmTransaction from "./ConfirmTransaction";
import { useBudget } from "../budget/BudgetProvider";
import TransactionProvider from "./TransactionProvider";

export default function ConfirmAmount({ setOpenTransfer, selectedBankName }) {
  const {
    category,
    setCategory,
    sentAmount,
    setSentAmount,
    newBudget,
    accountNum,
  } = useBudget();
  const [confirmTransfer, setConfirmTransfer] = useState(false);
  const [errors, setErrors] = useState({});

  function validateAmount() {
    const errors = {};
    sentAmount === "" ? (errors.sentAmount = "Enter amount") : "";
    if (category.trim() === "") {
      errors.category = "Enter category";
    } else {
      const matchedCategory = newBudget.find(
        (item) => item.category.toLowerCase() === category.trim().toLowerCase()
      );

      if (!matchedCategory) {
        errors.category = "Category does not exist in budget, start new";
      } else if (matchedCategory.totalAmount < Number(sentAmount)) {
        errors.sentAmount = "Insufficient budget for this category";
      }
    }

    return errors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errors = validateAmount();
    setErrors(errors);
    if (Object.keys(errors).length > 0) {
      return;
    }
    setConfirmTransfer(!confirmTransfer);
  }
  return (
    <div>
      <form className={styles.amountForm} onSubmit={handleSubmit}>
        <input
          className={styles.inputField}
          onChange={(e) => setSentAmount(e.target.value)}
          value={sentAmount}
          placeholder="Set amount"
          type="number"
        />
        {errors.sentAmount && (
          <div className={styles.errorText}>{errors.sentAmount}</div>
        )}
        <div className={styles.descriptionContainer}>
          <label>Category</label>
          <br />
          <textarea
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            className={styles.categoryInput}
            placeholder="Enter category..."
          ></textarea>

          {errors.category && (
            <div className={styles.errorText}>{errors.category}</div>
          )}
        </div>

        <button className={styles.payButton} type="submit">
          Confirm
        </button>
      </form>
      {confirmTransfer && (
        <ConfirmTransaction
          selectedBankName={selectedBankName}
          setOpenTransfer={setOpenTransfer}
          accountNum={accountNum}
        />
      )}
    </div>
  );
}
