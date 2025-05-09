import { useState } from "react";
import styles from "./confirmamount.module.css";
import { useBudget } from "../budget/BudgetProvider";
export default function ConfirmTransaction({
  setOverlayVisible,
  accountNum,
  bankName,
}) {
  const { sentAmount, setSentAmount, setCategory, expenseBudgetCalc } =
    useBudget();
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

    expenseBudgetCalc();
    setOverlayVisible("success"); // Open transaction success screen
    setCategory("");
    setSentAmount("");
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
