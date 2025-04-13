import styles from "./chart.module.css";
import ChartGraph from "./ChartGraph";
export default function Chart() {
  return (
    <section className={styles.chartFrame}>
      <div className={styles.topChartBar}>
        <div className={styles.category}>
          <div className={styles.item}>Electricity</div>
          <div className={styles.item}>Food Items</div>
          <div className={styles.item}>Transportation</div>
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
    </section>
  );
}
