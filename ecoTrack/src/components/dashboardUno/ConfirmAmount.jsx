import { useState } from "react";
import styles from "./confirmamount.module.css";
import ConfirmTransaction from "./ConfirmTransaction";
import { useBudget } from "../budget/BudgetProvider";
import TransactionProvider from "./TransactionProvider";

export default function ConfirmAmount({
  setOpenTransfer,
  bankName,
  accountNum,
}) {
  const { category, setCategory, sentAmount, setSentAmount } = useBudget();
  const [confirmTransfer, setConfirmTransfer] = useState(false);
  const [errors, setErrors] = useState({});

  function validateAmount() {
    const errors = {};
    sentAmount === "" ? (errors.sentAmount = "Enter amount") : "";
    category === "" ? (errors.category = "Enter category") : "";
    return errors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errors = validateAmount();
    setErrors(errors);
    if (Object.keys(errors).length > 0) {
      console.log(errors);
      return;
    }
    setConfirmTransfer(!confirmTransfer);
  }
  return (
    <div>
      {/* {accountNum} {bankName} */}
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
          setOpenTransfer={setOpenTransfer}
          // amount={amount}
          bankName={bankName}
          accountNum={accountNum}
        />
      )}
    </div>
  );
}
