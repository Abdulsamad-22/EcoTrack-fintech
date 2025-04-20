import styles from "./topexpense.module.css";
export default function TopExpense() {
  const expenses = [
    { icon: "/src/images/House.svg", title: "Rent", amount: "₦420,000" },
    ,
    {
      icon: "/src/images/food-icon.svg",
      title: "Food Item",
      amount: "₦220,000",
    },
    {
      icon: "/src/images/transport-icon.svg",
      title: "transportation",
      amount: "₦120,000",
    },
    { icon: "/src/images/fuel-icon.svg", title: "Fuel", amount: "₦120,000" },
  ];
  return (
    <div className={styles.topExpense}>
      <h2>Top Expense</h2>

      <div className={styles.wrapper}>
        {expenses.map((item) => (
          <div className={styles.expenseContainer}>
            <div className={styles.heading}>
              <img src={item.icon} alt="" />
              {item.title}
            </div>
            <p>{item.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
