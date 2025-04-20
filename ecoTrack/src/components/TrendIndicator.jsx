import styles from "./trendindicator.module.css";
export default function TrendIndicator() {
  return (
    <>
      <div className={styles.indicatorWrapper}>
        <div className={styles.indicatorContainer}>
          <span className={styles.indicator1}></span>
          <p>Budget</p>
        </div>

        <div className={styles.indicatorContainer}>
          <span className={styles.indicator2}></span>
          <p>Inflation</p>
        </div>
      </div>
    </>
  );
}
