import { useState } from "react";
import styles from "./itemselection.module.css";
export default function ItemSelection() {
  const [active, setActive] = useState(false);
  function activeState() {
    if (active) {
      return styles.active;
    }
    setActive(true);
  }

  return (
    <>
      <div className={styles.topChartBar}>
        <div className={styles.category}>
          <div onClick={activeState} className={styles.item}>
            Electricity
          </div>
          <div className={styles.item}>Food Items</div>
          <div className={styles.item}>Fuel</div>
        </div>

        <button className={styles.alertButton}>
          <img src="/src/images/bell2.svg" alt="bell icon" />
          Set Alert
        </button>
      </div>
    </>
  );
}
