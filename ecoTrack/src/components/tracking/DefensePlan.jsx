import styles from "./defenseplan.module.css";
export default function DefensePlan() {
  const defensePlan = [
    {
      id: 1,
      icon: "/src/images/Tote-plan.png",
      text: "Cut Food Spending by 5%",
    },
    {
      id: 2,
      icon: "/src/images/LightbulbFilament.svg",
      text: "Switch Electricity Provider",
    },
    { id: 3, icon: "/src/images/PiggyBank.svg", text: "Boost Savings" },
    { id: 4, icon: "/src/images/PiggyBank.svg", text: "Boost Savings" },
  ];
  return (
    <div className={styles.inflationWrapper}>
      <h1>Inflation Defense Plan</h1>
      <div className={styles.planContainer}>
        {defensePlan.map((plan) => (
          <div key={plan.id} className={styles.plan}>
            <img src={plan.icon} alt="" />
            <p>{plan.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
