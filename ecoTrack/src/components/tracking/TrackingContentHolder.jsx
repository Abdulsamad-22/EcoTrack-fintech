import styles from "../../../styles/trackingStyles/trackingcontentholder.module.css";
export default function TrackingContentHolder({ children }) {
  return <div className={styles.bodyContainer}>{children}</div>;
}
