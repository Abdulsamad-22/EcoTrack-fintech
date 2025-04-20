import styles from "./timeaxis.module.css";
export default function TimeAxis() {
  return (
    <>
      <div className={styles.category2}>
        <div className={styles.label}>2 Weeks</div>
        <div className={styles.label}>1 Month</div>
        <div className={styles.label}>3 Month</div>
        <div className={styles.label}>6 Month</div>
        <div className={styles.label}>1 Year</div>
      </div>
    </>
  );
}
