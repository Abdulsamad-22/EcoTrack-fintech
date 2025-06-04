import styles from "../../../styles/settingsStyles/settingsContainer.module.css";
export default function SettingsContainer({ children }) {
  return <div className={styles.container}>{children}</div>;
}
