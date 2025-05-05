import { useState } from "react";
import styles from "./transfermoney.module.css";
import RecentTransaction from "./RecentTransaction";

export default function TransferMoney({
  setOverlayVisible,
  accountNum,
  bankName,
  setAccountNum,
  setBankName,
}) {
  const [errors, setErrors] = useState({});

  function validateInputs() {
    const errors = {};
    accountNum.trim() === ""
      ? (errors.accountNum = "Account number cannot be empty")
      : "";

    accountNum.trim().length !== 10
      ? (errors.invalidAcct = "Check account number and try again")
      : "";

    bankName.trim() === "" ? (errors.bankName = "Enter bank name") : "";
    return errors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errors = validateInputs();
    setErrors(errors);

    if (Object.keys(errors).length > 0) {
      console.log(errors);
      return;
    }

    setOverlayVisible("confirm");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label className={styles.labelName}>Recepient Account</label>
          <input
            className={styles.inputField}
            onChange={(e) => setAccountNum(e.target.value)}
            value={accountNum}
            placeholder="Enter 10-digit account number"
            type="text"
          />
          {errors.accountNum && (
            <div style={{ color: "red", fontSize: "0.875rem" }}>
              {errors.accountNum}
            </div>
          )}
        </div>
        <div>
          <label className={styles.labelName}>Select Bank</label>
          <br />
          <input
            className={styles.inputField}
            onChange={(e) => setBankName(e.target.value)}
            value={bankName}
            placeholder="Select Bank"
            type="text"
          />
          {errors.bankName && (
            <div style={{ color: "red", fontSize: "0.875rem" }}>
              {errors.bankName}
            </div>
          )}
        </div>
        <button className={styles.ctaButton} type="submit">
          Next
        </button>
      </form>

      <div className={styles.recentContainer}>
        <RecentTransaction />
      </div>
    </div>
  );
}
