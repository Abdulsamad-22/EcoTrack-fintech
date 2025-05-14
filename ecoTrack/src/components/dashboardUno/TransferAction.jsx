import { useState } from "react";
import styles from "./transferaction.module.css";
import Cards from "./Cards";
export default function TransferAction({ setOverlayVisible, overlayVisible }) {
  //   const [isVisible, setIsVisible] = useState(false);

  function handleTransfer() {
    setOverlayVisible("transfer");
  }
  return (
    <div>
      <div className={styles.actions}>
        <div onClick={handleTransfer} className={styles.actionItem}>
          <img src="src/images/Transfer.svg" alt="" />
          Transfer
        </div>

        <div className={styles.actionItem}>
          <img src="src/images/save.svg" alt="" />
          Save
        </div>

        <div className={styles.actionItem}>
          <img src="src/images/more-icon.svg" alt="" />
          More
        </div>
      </div>
    </div>
  );
}
