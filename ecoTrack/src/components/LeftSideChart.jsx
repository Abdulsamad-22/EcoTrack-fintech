import styles from "./leftsidechart.module.css";
import ChartGraph from "./ChartGraph";

export default function LeftSideChart() {
  return (
    <div className={styles.leftFrame}>
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

      {/* <div className={styles.indicatorWrapper}>
        <div className={styles.indicatorContainer}>
          <span className={styles.indicator1}></span>
          <p>Budget</p>
        </div>

        <div className={styles.indicatorContainer}>
          <span className={styles.indicator2}></span>
          <p>Inflation</p>
        </div>
      </div> */}

      <div>
        <ChartGraph />
      </div>

      <div className={styles.category2}>
        <div className={styles.label}>2 Weeks</div>
        <div className={styles.label}>1 Month</div>
        <div className={styles.label}>3 Month</div>
        <div className={styles.label}>6 Month</div>
        <div className={styles.label}>1 Year</div>
      </div>
    </div>
  );
}
