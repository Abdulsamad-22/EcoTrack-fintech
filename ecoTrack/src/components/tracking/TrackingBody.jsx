import styles from "./trackingbody.module.css";
export default function TrackingBody({ children }) {
  return <div className={styles.container}>{children}</div>;
}
