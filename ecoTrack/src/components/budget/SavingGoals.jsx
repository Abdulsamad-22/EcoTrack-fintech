import styles from "../../../styles/budgetStyles/savinggoals.module.css";
import SavingsChart from "./SavingsChart";
export default function SavingGoals() {
  return (
    <section className={styles.savingsContainer}>
      <div>
        <div className={styles.title}>
          <h1>Saving Goals</h1>
          <img src="/images/Trophy.png" alt="target icon" />
        </div>

        <p className={styles.subHeading}>
          Yayyy!! you have doubled your savings this month compared to last
          month
        </p>
      </div>

      <div className={styles.targetHeader}>
        <div className={styles.target}>
          <h2>Target Savings</h2>
          <img src="/images/target.png" alt="target icon" />
        </div>

        <p className={styles.targetAmount}>₦270,000</p>
      </div>

      <SavingsChart />

      <div className={styles.weeksX}>
        <div>Week 1</div>
        <div>Week 2</div>
        <div>Week 3</div>
        <div>Week 4</div>
      </div>

      <p className={styles.monthlySaving}>₦70,000 Monthly Savings</p>

      <button className={styles.goalButton}>Set Next Goal</button>
    </section>
  );
}
