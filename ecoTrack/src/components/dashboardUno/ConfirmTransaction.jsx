import { useState } from "react";
import styles from "../../../styles/dashboardStyles/confirmamount.module.css";
import { useBudget } from "../budget/BudgetProvider";
import { useTransfer } from "./TransactionProvider";

export default function ConfirmTransaction({
  setOpenTransfer,
  accountNum,
  selectedBankName,
}) {
  const { transaction, setTransaction } = useTransfer();
  const {
    sentAmount,
    setSentAmount,
    setCategory,
    category,
    expenseBudgetCalc,
  } = useBudget();
  const [pin, setPin] = useState("");
  const [error, setError] = useState({});
  const savedPin = localStorage.getItem("pin");

  function validatePin() {
    const error = {};
    pin === ""
      ? (error.pin = "Please Enter your pin")
      : savedPin === ""
      ? (error.pin = "Set transaction pin and try again")
      : pin.length !== 4 || pin !== savedPin
      ? (error.pin = "Incorrect pin, try again")
      : "";
    return error;
  }
  function handleSubmit(e) {
    e.preventDefault();
    const error = validatePin();
    setError(error);
    if (Object.keys(error).length > 0) {
      return;
    }
    const date = new Date(); // Ensure date is defined
    const day = date.getDate(); // Get the day of the month (1–31)
    const month = date.toLocaleString("en-NG", { month: "short" }); // Get short month name (e.g., "May")
    const year = date.getFullYear(); // Get the full year (e.g., 2025)
    const formattedDate = `${day} ${month}, ${year}`;
    setTransaction((prevTransfer) => [
      {
        name: selectedBankName,
        type: "Debit",
        date: formattedDate,
        amount: sentAmount.toLocaleString("en-NG"),
        category: category,
        status: "Successful",
      },
      ...prevTransfer,
    ]);
    expenseBudgetCalc();
    setOpenTransfer("success"); // Open transaction success screen
    setCategory("");
    setSentAmount("");
  }

  return (
    <div>
      <p className={styles.recepient}>
        {`₦${sentAmount.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`} is on the way
        to
        <span className={styles.bankDetails}>
          {accountNum} {selectedBankName}
        </span>
      </p>
      <form className={styles.confirmTransfer} onSubmit={handleSubmit}>
        <label>Enter Pin</label>
        <br />
        <input
          onChange={(e) => setPin(e.target.value)}
          className={styles.inputField}
          value={pin}
          type="password"
          pattern="[0-9]*"
          maxLength={4}
          placeholder="Enter 4 digit pin"
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
