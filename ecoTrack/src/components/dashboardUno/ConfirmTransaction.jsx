import { useState } from "react";
import styles from "./confirmamount.module.css";
export default function ConfirmTransaction({ setOverlayVisible }) {
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
    setOverlayVisible("success");
  }
  return (
    <div>
      Pay out
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
