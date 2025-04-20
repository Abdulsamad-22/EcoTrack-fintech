import styles from "./trendchartcontainer.module.css";
import ChartGraph from "../dashboardUno/ChartGraph";
import ItemSelection from "../ItemSelection";
import TimeAxis from "../TimeAxis";
import TrendIndicator from "../TrendIndicator";

export default function TrendChartContainer() {
  return (
    <div className={styles.trendContainer}>
      <ItemSelection />
      <TrendIndicator />
      <ChartGraph />
      <TimeAxis />
    </div>
  );
}
