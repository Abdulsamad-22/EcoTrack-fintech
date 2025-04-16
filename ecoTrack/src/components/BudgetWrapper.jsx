import styles from "../pages/dashboard.module.css";
export default function BudgetWrapper({ children }) {
  return <div className={styles.dashboard}>{children}</div>;
}
