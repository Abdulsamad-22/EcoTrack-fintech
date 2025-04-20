import styles from "./itemselection.module.css";
export default function ItemSelection() {
  return (
    <>
      <div className={styles.topChartBar}>
        <div className={styles.category}>
          <div className={styles.item}>Electricity</div>
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
