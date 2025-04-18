import styles from "./trackingcontentholder.module.css";
export default function TrackingContentHolder({ children }) {
  return <div className={styles.bodyContainer}>{children}</div>;
}
