import styles from "./dashboardbody.module.css";
export default function DashboardBody({ children }) {
  return <div className={styles.bodyContainer}>{children}</div>;
}
