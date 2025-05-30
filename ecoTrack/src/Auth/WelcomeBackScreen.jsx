import { Link } from "react-router-dom";
import styles from "../../styles/authStyles/welcomeBack.module.css";
export default function WelcomeBackScreen({ buttonLabels, message }) {
  function handleLogin() {
    console.log("login");
  }
  return (
    <div className={styles.frame}>
      <div className={styles.logo}>
        <img src="/images/logo.svg" alt="logo" />
        EcoTrack
      </div>

      <div className={styles.textContainer}>
        <h1 className={styles.headerText}>{message}</h1>
        <p className={styles.subHeader}>
          An app that helps you know how to spend and plan for future hike of
          your daily consumables
        </p>
        <Link to="/login">
          <button onClick={handleLogin} className={styles.loginBtn}>
            {buttonLabels}
          </button>
        </Link>
      </div>
    </div>
  );
}
