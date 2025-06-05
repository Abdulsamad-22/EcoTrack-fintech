import { useState } from "react";
import styles from "../../../styles/settingsStyles/accountSettings.module.css";

export default function PasswordSettings() {
  const [pin, setPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");
  const [error, setError] = useState("");

  function handlePinSettings(e) {
    e.preventDefault();
    if (confirmPin !== pin) {
      setError("Pin does not match try again!");
      console.log(error);
      return;
    }
    // localStorage.setItem("pin", confirmPin);
  }
  return (
    <div className={styles.accountContainer}>
      <h1 className={styles.accountHeader}>Password</h1>
      <form onSubmit={handlePinSettings}>
        <div>
          <label for="pin">Set transaction pin</label>
          <input
            className={styles.inputFields}
            onChange={(e) => setPin(e.target.value)}
            type="password"
            value={pin}
          />
        </div>

        <div>
          <label for="confirmPin">Confirm transaction pin</label>
          <input
            className={styles.inputFields}
            onChange={(e) => setConfirmPin(e.target.value)}
            maxLength={4}
            type="password"
            value={confirmPin}
          />
        </div>
        {error && <p className={styles.errorText}>{error}</p>}

        <button type="submit" className={styles.saveButton}>
          Save
        </button>
      </form>
    </div>
  );
}
