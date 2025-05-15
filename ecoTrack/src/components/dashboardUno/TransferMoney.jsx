import { useState } from "react";
import styles from "./transfermoney.module.css";
import RecentTransaction from "./RecentTransaction";

export default function TransferMoney({
  setOpenTransfer,
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
      : accountNum.trim().length !== 10
      ? (errors.accountNum = "Check account number and try again")
      : "";

    // accountNum.trim().length !== 10
    //   ? (errors.accountNum = "Check account number and try again")
    //   : "";

    bankName.trim() === "" ? (errors.bankName = "Enter bank name") : "";
    return errors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errors = validateInputs();
    setErrors(errors);

    if (Object.keys(errors).length > 0) {
      return;
    }

    setOpenTransfer("confirm");
  }

  return (
    <div>
      <form className={styles.accountDetailsForm} onSubmit={handleSubmit}>
        <div className={styles.acctNumInput}>
          <label className={styles.labelName}>Recepient Account</label>
          <input
            className={styles.inputField}
            onChange={(e) => setAccountNum(e.target.value)}
            value={accountNum}
            placeholder="Enter 10-digit account number"
            type="number"
          />
          {errors.accountNum && (
            <div className={styles.errorText}>{errors.accountNum}</div>
          )}
        </div>
        <div className={styles.bankNameInput}>
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
            <div className={styles.errorText}>{errors.bankName}</div>
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
