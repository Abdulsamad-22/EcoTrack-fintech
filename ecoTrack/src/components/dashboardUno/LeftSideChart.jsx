import styles from "./leftsidechart.module.css";
import ChartGraph from "./ChartGraph";
import TimeAxis from "../TimeAxis";
// import ItemSelection from "../ItemSelection";
import InflationData from "./InflationData";

export default function LeftSideChart() {
  return (
    <div className={styles.leftFrame}>
      {/* <InflationData /> */}
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
      {/* <ItemSelection /> */}

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

      <div>
        <ChartGraph />
      </div>
      {/* <TimeAxis /> */}
    </div>
  );
}
