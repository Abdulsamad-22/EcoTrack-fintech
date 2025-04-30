import { useState } from "react";
import styles from "./confirmamount.module.css";

export default function ConfirmAmount() {
  const [amount, setAmount] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.inputField}
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
          placeholder="Set amount"
          type="number"
        />
        <button className={styles.payButton} type="submit">
          Pay
        </button>
      </form>
    </div>
  );
}
