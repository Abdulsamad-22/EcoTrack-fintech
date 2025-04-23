import styles from "./budgetallocation.module.css";
export default function BudgetAllocation() {
  const allocation = [
    {
      category: "Rent",
      mainAmount: "₦270,000",
      spanAmount: "700, 000",
      status: "/src/images/check-icon-onPlain.svg",
    },
    {
      category: "Food Item",
      mainAmount: "₦270,000",
      spanAmount: "700, 000",
      status: "/src/images/warning-icon.svg",
    },
    {
      category: "Transportation",
      mainAmount: "₦402,000",
      spanAmount: "700, 000",
      status: "/src/images/warning-icon.svg",
    },
    {
      category: "Electricity",
      mainAmount: "₦270,000",
      spanAmount: "700, 000",
      status: "/src/images/check-icon-onPlain.svg",
    },
  ];
  return (
    <div>
      <div className={styles.topContainer}>
        <h2>Allocation</h2>
        <div className={styles.budgetStatus}>
          <p>₦740,000</p>
          <div className={styles.status}>
            <img src="/src/images/check-icon.svg" alt="check-icon" />
            On track
          </div>
        </div>
      </div>

      <div className={styles.allocationWrapper}>
        {allocation.map((list, index) => (
          <div key={index} className={styles.allocatioContainer}>
            <div className={styles.allocationName}>
              <div className={styles.allocationRent}></div>
              <h3>{list.category}</h3>
            </div>
            <div className={styles.amountContainer}>
              <p className={styles.allocationAmount}>
                {list.mainAmount}/<span>{list.spanAmount}</span>
              </p>
              <img className={styles.onTrackIcon} src={list.status} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
