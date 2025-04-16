import styles from "./sidebar.module.css";
import { Link } from "react-router-dom";
export default function SideBar() {
  return (
    <nav className={styles.sideBar}>
      <div>
        <img
          className={styles.logo}
          src="/src/images/logo.svg"
          alt="logo"
        ></img>
      </div>

      <div className={styles.sideBarWrapper}>
        <div className={styles.topContainer}>
          <div className={styles.navInactive}>
            <img
              className={styles.icons}
              src="/src/images/List.svg"
              alt="menu"
            ></img>
          </div>

          <Link to="/">
            <div className={styles.navIcons}>
              <img
                className={styles.icons}
                src="/src/images/SquaresFour.svg"
                alt="dashboard icon"
              ></img>
            </div>
          </Link>

          <Link to="/budget">
            <div className={styles.navInactive}>
              <img
                className={styles.icons}
                src="/src/images/database.svg"
                alt="budget icon"
              ></img>
            </div>
          </Link>

          <div className={styles.navInactive}>
            <img
              className={styles.icons}
              src="/src/images/ChartLine.svg"
              alt="analytics icon"
            ></img>
          </div>

          <div className={styles.navInactive}>
            <img
              className={styles.icons}
              src="/src/images/card.svg"
              alt="savings icon"
            ></img>
          </div>
        </div>

        <div className={styles.bottomContainer}>
          <div className={styles.navInactive}>
            <img
              className={styles.icons}
              src="/src/images/Gear.svg"
              alt="settings icon"
            ></img>
          </div>

          <div className={styles.navInactive}>
            <img
              className={styles.icons}
              src="/src/images/Question.svg"
              alt="help icon"
            ></img>
          </div>

          <div className={styles.navInactive}>
            <img
              className={styles.icons}
              src="/src/images/SignOut.svg"
              alt="logOut icon"
            ></img>
          </div>
        </div>
      </div>
    </nav>
  );
}
