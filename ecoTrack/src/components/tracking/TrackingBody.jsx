import styles from "../../../styles/trackingStyles/trackingbody.module.css";
export default function TrackingBody({ children }) {
  return <div className={styles.container}>{children}</div>;
}
