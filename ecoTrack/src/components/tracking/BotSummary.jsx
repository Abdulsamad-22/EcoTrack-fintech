import styles from "../../../styles/trackingStyles/botsummary.module.css";
export default function BotSummary() {
  return (
    <div>
      <h2 className={styles.header}>A 3% rise in the next quarter</h2>
      <p className={styles.subHeading}>
        Most affected items: Food, Housing, Fuel, Transportation
      </p>

      <ul className={styles.list}>
        <li>
          Cut down discretionary spending by 10% to offset rising food costs.
        </li>
        <li>Increase savings by 5% to prepare for energy price hike</li>
        <li>
          Do your food items shopping from Detyms supermarket as they sell
          cheaper than other retails stores around.
        </li>
      </ul>
    </div>
  );
}
