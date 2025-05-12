import styles from "./smartinsight.module.css";
export default function SmartInsight() {
  const insights = [
    {
      id: 1,
      content: `Cut down discretionary spending by 10% to offset rising food costs.`,
    },
    {
      id: 2,
      content: ` Increase savings by 5% to prepare for energy price hike.`,
    },
    {
      id: 3,
      content: `Do your food items shopping from Detyms supermarket as they sell
            cheaper than other retails stores around.`,
    },
    {
      id: 4,
      content: `Do your food items shopping from Detyms supermarket as they sell
            cheaper than other retails stores around.`,
    },
    {
      id: 5,
      content: `Cut down discretionary spending by 10% to offset rising food costs.`,
    },
  ];
  return (
    <div className={styles.smartInsightConatiner}>
      <h2 className={styles.header}>Smart Insights</h2>
      <div className={styles.insightsContainer}>
        <ul>
          {insights.map((list) => (
            <li key={list.id}>{list.content}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
