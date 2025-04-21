import styles from "./smartinsight.module.css";
export default function SmartInsight() {
  const insights = [
    {
      content: `Cut down discretionary spending by 10% to offset rising food costs.`,
    },
    { content: ` Increase savings by 5% to prepare for energy price hike.` },
    {
      content: `Do your food items shopping from Detyms supermarket as they sell
            cheaper than other retails stores around.`,
    },
    {
      content: `Do your food items shopping from Detyms supermarket as they sell
            cheaper than other retails stores around.`,
    },
    {
      content: `Cut down discretionary spending by 10% to offset rising food costs.`,
    },
  ];
  return (
    <div className={styles.smartInsightConatiner}>
      <h2 className={styles.header}>Smart Insights</h2>
      <div className={styles.insightsContainer}>
        <ul>
          {insights.map((list) => (
            <li>{list.content}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
