import styles from "../../../styles/dashboardStyles/dashboardbody.module.css";
export default function DashboardBody({ children }) {
  return <div className={styles.bodyContainer}>{children}</div>;
}
