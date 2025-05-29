import styles from "../../styles/authStyles/welcomeBack.module.css";
export default function WelcomeBackScreen() {
  return (
    <div className={styles.frame}>
      <div className={styles.logo}>
        <img src="/images/logo.svg" alt="logo" />
        EcoTrack
      </div>

      <div className={styles.textContainer}>
        <h1 className={styles.headerText}>Welcome back</h1>
        <p className={styles.subHeader}>
          An app that helps you know how to spend and plan for future hike of
          your daily consumables
        </p>
        <button className={styles.loginBtn}>Login</button>
      </div>
    </div>
  );
}
