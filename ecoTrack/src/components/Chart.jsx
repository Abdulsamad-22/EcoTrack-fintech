import LeftSideChart from "./LeftSideChart";
import SmartInsight from "./SmartInsight";
import styles from "./chart.module.css";

export default function Chart() {
  return (
    <section className={styles.chartFrame}>
      <LeftSideChart />
      <SmartInsight />
    </section>
  );
}
