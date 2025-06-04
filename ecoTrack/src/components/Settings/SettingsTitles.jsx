import { useState } from "react";
import styles from "../../../styles/settingsStyles/settingsTitles.module.css";

export default function SettingsTitle({ setActiveButton, activeButton }) {
  const buttons = ["Account", "Password", "Notification"];

  function handleButtonClick(buttonName) {
    setActiveButton(buttonName);
  }
  return (
    <div className={styles.settingsNav}>
      {buttons.map((btn) => (
        <button
          key={btn}
          onClick={() => handleButtonClick(btn)}
          className={`${styles.buttons} ${
            activeButton === btn ? styles.activeButton : ""
          }`}
        >
          {btn}
        </button>
      ))}
    </div>
  );
}
