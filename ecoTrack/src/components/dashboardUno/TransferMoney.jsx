import { useState } from "react";
import styles from "./transfermoney.module.css";

export default function TransferMoney({
  setIsVisible,
  isVisible,
  setOverlayVisible,
}) {
  const [accountNum, setAccountNum] = useState("");
  const [bankName, setBankName] = useState("");
  //   const [amount, setAmount] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setOverlayVisible("confirm");
    // console.log(amount);
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
            type="number"
          />
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
        </div>
        <button className={styles.ctaButton} type="submit">
          Next
        </button>
      </form>
      {/* {!isVisible && <h1>This is where you enter amount</h1>} */}
      <div>
        <p>Recent</p>
      </div>
    </div>
  );
}
