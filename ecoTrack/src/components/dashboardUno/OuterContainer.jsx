import styles from "../../../styles/dashboardStyles/outercontainer.module.css";
export default function OuterContainer({ children }) {
  return <div className={styles.outerContainer}>{children}</div>;
}
