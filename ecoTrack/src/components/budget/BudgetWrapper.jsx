import styles from "../../../styles/budgetStyles/dashboardWrapper.module.css";
export default function BudgetWrapper({ children }) {
  return <div className={styles.dashboard}>{children}</div>;
}
