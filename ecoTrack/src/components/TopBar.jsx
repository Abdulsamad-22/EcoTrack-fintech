import styles from "./topbar.module.css";
export default function TopBar() {
  return (
    <div className={styles.container}>
      <h1>Dashboard</h1>
      <div className={styles.rightSideContainer}>
        <div className={styles.searchContainer}>
          <div className={styles.searchInput}>
            <input className={styles.search} type="text" />
            <img
              className={styles.searchIcon}
              src="/src/images/Search-icon.svg"
              alt="search-icon"
            />
          </div>
        </div>

        {/* <div className={styles.completeRightSide}>
          <div className={styles.leftSideContainer}>
            <div>
              <img src="/src/images/ChatCircle.svg" alt="chat icon" />
            </div>

            <div>
              <img src="/src/images/bell.svg" alt="notification icon" />
            </div>
          </div>

          <div className={styles.completeProfile}>
            <div className={styles.userProfile}>
              <span>
                <img src="/src/images/Avatar.png" alt="avatar"></img>
              </span>

              <div className={styles.nameInfo}>
                <p className={styles.userName}>Daniel Frank</p>
                <p className={styles.userMail}>danielfrank@gmail.com</p>
              </div>
            </div>

            <div>
              <img
                className={styles.dropDown}
                src="/src/images/icon-chevron-down.svg"
                alt="arrow down icon"
              />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
