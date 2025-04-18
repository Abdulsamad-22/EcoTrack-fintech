import styles from "./analysisSummary.module.css";
export default function AnalysisSummary() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.sectionContainer}>
        <div className={styles.title}>
          <h1>My Budget</h1>
          <img src="/src/images/budget-icon.svg" alt="budget-icon" />
        </div>

        <p>₦220,000</p>
      </div>

      <div className={styles.sectionContainer}>
        <div className={styles.title}>
          <h1>My Earnings</h1>
          <img src="/src/images/budget-icon.svg" alt="budget-icon" />
        </div>

        <p>₦220,000</p>
      </div>

      <div className={styles.sectionContainer}>
        <div className={styles.title}>
          <h1>My Spendings</h1>
          <img src="/src/images/spending-icon.svg" alt="budget-icon" />
        </div>

        <p>₦220,000</p>
      </div>
    </section>
  );
}
