import styles from "../../../styles/utilsStyles/userprofile.module.css";
import { useAuth } from "../../Auth/AuthProvider";
export default function UserProfile() {
  const { currentUser } = useAuth();
  return (
    <div>
      <div className={styles.completeRightSide}>
        <div className={styles.leftSideContainer}>
          <div className={styles.chatIcon}>
            <img
              className={styles.chat}
              src="/images/ChatCircle.svg"
              alt="chat icon"
            />
          </div>

          <div className={styles.bellIcon}>
            <img
              className={styles.bell}
              src="/images/bell.svg"
              alt="notification icon"
            />
          </div>
        </div>

        <div className={styles.completeProfile}>
          <div className={styles.userProfile}>
            <div className={styles.avatarContainer}>
              <img
                className={styles.avatar}
                src="/images/Avatar.png"
                alt="avatar"
              ></img>
            </div>

            <div className={styles.nameInfo}>
              <p className={styles.userName}>Daniel Frank</p>
              <p className={styles.userMail}>
                {currentUser.email.length > 21
                  ? currentUser.email.slice(0, 21) + "..."
                  : currentUser.email}
              </p>
            </div>
          </div>

          <div>
            <img
              className={styles.dropDown}
              src="/images/icon-chevron-down.svg"
              alt="arrow down icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
