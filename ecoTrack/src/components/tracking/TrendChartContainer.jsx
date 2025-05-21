import styles from "../../../styles/trackingStyles/trendchartcontainer.module.css";
import ChartGraph from "../dashboardUno/ChartGraph";
import ItemSelection from "../utils/ItemSelection";
import TrendIndicator from "../utils/TrendIndicator";

export default function TrendChartContainer() {
  return (
    <div className={styles.trendContainer}>
      <ItemSelection />
      <TrendIndicator />
      <ChartGraph />
    </div>
  );
}
