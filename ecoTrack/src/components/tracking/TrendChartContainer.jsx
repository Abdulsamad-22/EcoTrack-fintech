import styles from "./trendchartcontainer.module.css";
import ChartGraph from "../dashboardUno/ChartGraph";
import ItemSelection from "../ItemSelection";
import TrendIndicator from "../TrendIndicator";

export default function TrendChartContainer() {
  return (
    <div className={styles.trendContainer}>
      <ItemSelection />
      <TrendIndicator />
      <ChartGraph />
    </div>
  );
}
