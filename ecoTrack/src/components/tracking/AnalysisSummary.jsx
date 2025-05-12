import { useBudget } from "../budget/BudgetProvider";
import styles from "./analysisSummary.module.css";
export default function AnalysisSummary() {
  const { formattedTotal, formattedSpent } = useBudget();
  const analysis = [
    {
      title: "My Budget",
      icon: "/src/images/budget-icon.svg",
      amount: formattedTotal,
    },
    {
      title: "My Earnings",
      icon: "/src/images/savings-icon.svg",
      amount: "220,000",
    },
    {
      title: "My Spendings",
      icon: "/src/images/spending-icon.svg",
      amount: formattedSpent,
    },
  ];

  return (
    <section className={styles.wrapper}>
      {analysis.map((info) => (
        <div key={info.title} className={styles.sectionContainer}>
          <div className={styles.title}>
            <h1>{info.title}</h1>
            <div className={styles.icon}>
              <img src={info.icon} alt="budget-icon" />
            </div>
          </div>
          <p>₦{info.amount.toLocaleString("en-NG")}</p>
        </div>
      ))}
    </section>
  );
}
