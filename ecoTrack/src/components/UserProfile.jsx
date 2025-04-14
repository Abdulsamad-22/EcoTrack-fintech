import styles from "./userprofile.module.css";
export default function UserProfile() {
  return (
    <div>
      <div className={styles.completeRightSide}>
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
            <div className={styles.avatarContainer}>
              <img
                className={styles.avatar}
                src="/src/images/Avatar.png"
                alt="avatar"
              ></img>
            </div>

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
      </div>
    </div>
  );
}
