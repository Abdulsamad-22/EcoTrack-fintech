import { useState } from "react";
import styles from "../../../styles/settingsStyles/accountSettings.module.css";
export default function AccountSettings({ activeButton }) {
  const [displayName, setDisplayName] = useState("");
  const [fullname, setFullName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  function handleAccountSetting(e) {
    e.preventDefault();
    localStorage.setItem("displayName", displayName);
  }
  return (
    <div className={styles.accountContainer}>
      <h2 className={styles.accountHeader}>{activeButton}</h2>

      <div className={styles.avatarContainer}>
        <div className={styles.avatar}>A</div>
        <h3 className={styles.profile}>Profile</h3>
        {/* <div>
          <button className={styles.removeBtn}>Remove</button>{" "}
          <button className={styles.uploadBtn}>Upload</button>
        </div> */}
      </div>

      <form onSubmit={handleAccountSetting}>
        <div className={styles.formGroup}>
          <label htmlFor="displayName">Display Name</label>
          <input
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            value={fullname}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phoneNo">Phone Number</label>
          <input
            type="tel"
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
          />
        </div>

        <button type="submit" className={styles.saveButton}>
          Save Changes
        </button>
      </form>
    </div>
  );
}
