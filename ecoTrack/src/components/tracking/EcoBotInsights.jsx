import BotChart from "./BotChart";
import BotSummary from "./BotSummary";
import styles from "../../../styles/trackingStyles/ecobotinsights.module.css";

export default function EcoBotInsights() {
  return (
    <section className={styles.botPredictions}>
      <BotChart />
      <BotSummary />
    </section>
  );
}
