import { useState } from "react";
import styles from "./confirmamount.module.css";
import ConfirmTransaction from "./ConfirmTransaction";

export default function ConfirmAmount({
  accountNum,
  bankName,
  setOverlayVisible,
}) {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [confirmTransfer, setConfirmTransfer] = useState(false);
  const [errors, setErrors] = useState({});

  function validateAmount() {
    const errors = {};
    amount === "" ? (errors.amount = "Enter amount") : "";
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
      {bankName} {accountNum}
      <form onSubmit={handleSubmit}>
        <input
          className={styles.inputField}
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
          placeholder="Set amount"
          type="number"
        />
        {errors.amount && (
          <div style={{ color: "red", fontSize: "0.875rem" }}>
            {errors.amount}
          </div>
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
            <div style={{ color: "red", fontSize: "0.875rem" }}>
              {errors.category}
            </div>
          )}
        </div>

        <button className={styles.payButton} type="submit">
          Confirm
        </button>
      </form>
      {confirmTransfer && (
        <ConfirmTransaction setOverlayVisible={setOverlayVisible} />
      )}
    </div>
  );
}
