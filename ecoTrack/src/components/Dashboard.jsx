import styles from "./dashboard.module.css";
export default function Dashboard({ children }) {
  return <section className={styles.dashboard}>{children}</section>;
}
