import styles from "../../../styles/dashboardStyles/rightsidesection.module.css";
export default function RightSideSection({ children }) {
  return <div className={styles.rightSide}>{children}</div>;
}
