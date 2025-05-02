import { useState, createContext, useContext } from "react";
import styles from "./transfermoney.module.css";

export default function TransferMoney({ setOverlayVisible }) {
  const [accountNum, setAccountNum] = useState("");
  const [bankName, setBankName] = useState("");
  const [errors, setErrors] = useState({});

  //   const [amount, setAmount] = useState(false);

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
        <div className={styles.titleContainer}>
          <div className={styles.leftSide}>
            <p>Recent</p>
            <p>Favourites</p>
          </div>

          <img
            className={styles.searchIcon}
            src="/src/images/Search-icon.svg"
            alt=""
          />
        </div>

        <div>
          <div className={styles.acctInfoContainer}>
            <p className={styles.acctName}>Esther Amaiho</p>
            <p className={styles.acctInfo}>
              <span>4441529872</span> MONIE POINT
            </p>
          </div>

          <div className={styles.acctInfoContainer}>
            <p className={styles.acctName}>Choli Frank</p>
            <p className={styles.acctInfo}>
              <span>4441529872</span> OPAY
            </p>
          </div>

          <div className={styles.acctInfoContainer}>
            <p className={styles.acctName}>Suberu Frank</p>
            <p className={styles.acctInfo}>
              <span>4441529872</span> OPAY
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
