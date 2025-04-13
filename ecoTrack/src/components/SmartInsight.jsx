import styles from "./smartinsight.module.css";
export default function SmartInsight() {
  return (
    <div className={styles.smartInsightConatiner}>
      <h2 className={styles.header}>Smart Insights</h2>
      <div className={styles.insightsContainer}>
        <li className={styles.insights}>
          Cut down discretionary spending by 10% to offset rising food costs.
        </li>

        <li className={styles.insights}>
          Increase savings by 5% to prepare for energy price hike
        </li>

        <li className={styles.insights}>
          Do your food items shopping from Detyms supermarket as they sell
          cheaper than other retails stores around
        </li>

        <li className={styles.insights}>
          Do your food items shopping from Detyms supermarket as they sell
          cheaper than other retails stores around
        </li>

        <li className={styles.insights}>
          Cut down discretionary spending by 10% to offset rising food costs.
        </li>
      </div>
    </div>
  );
}
