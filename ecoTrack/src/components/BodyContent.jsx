import styles from "./bodycontent.module.css";
import TopBar from "./TopBar";
export default function BodyContent({ children }) {
  return <div className={styles.container}>{children}</div>;
}
