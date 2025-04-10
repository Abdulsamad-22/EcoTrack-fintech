import styles from "./sidebar.module.css";
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
          <div>
            <img
              className={styles.icons}
              src="/src/images/List.svg"
              alt="logo"
            ></img>
          </div>

          <div>
            <img
              className={styles.icons}
              src="/src/images/SquaresFour.svg"
              alt="logo"
            ></img>
          </div>

          <div>
            <img
              className={styles.icons}
              src="/src/images/database.svg"
              alt="logo"
            ></img>
          </div>
          <div>
            <img
              className={styles.icons}
              src="/src/images/ChartLine.svg"
              alt="logo"
            ></img>
          </div>
          <div>
            <img
              className={styles.icons}
              src="/src/images/card.svg"
              alt="logo"
            ></img>
          </div>
        </div>

        <div className={styles.bottomContainer}>
          <div>
            <img
              className={styles.icons}
              src="/src/images/Gear.svg"
              alt="logo"
            ></img>
          </div>

          <div>
            <img
              className={styles.icons}
              src="/src/images/Question.svg"
              alt="logo"
            ></img>
          </div>

          <div>
            <img
              className={styles.icons}
              src="/src/images/SignOut.svg"
              alt="logo"
            ></img>
          </div>
        </div>
      </div>
    </nav>
  );
}
