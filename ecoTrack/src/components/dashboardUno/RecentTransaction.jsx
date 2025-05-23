import styles from "../../../styles/dashboardStyles/recenttransaction.module.css";
export default function RecentTransaction() {
  return (
    <>
      <div className={styles.titleContainer}>
        <div className={styles.leftSide}>
          <p className={styles.recents}>Recent</p>
          <p className={styles.favourites}>Favourites</p>
        </div>

        <img
          className={styles.searchIcon}
          src="/images/Search-icon.svg"
          alt=""
        />
      </div>

      <div>
        <div className={styles.acctInfoContainer}>
          <p className={styles.acctName}>Esther Amaiho</p>
          <p className={styles.acctInfo}>
            <span>4441529872</span> MONIE POINT
          </p>
        </div>

        <div className={styles.acctInfoContainer}>
          <p className={styles.acctName}>Samuel Adetomiwa</p>
          <p className={styles.acctInfo}>
            <span>4441529872</span> OPAY
          </p>
        </div>

        <div className={styles.acctInfoContainer}>
          <p className={styles.acctName}>Chukwudi Frank</p>
          <p className={styles.acctInfo}>
            <span>4441529872</span> OPAY
          </p>
        </div>
      </div>
    </>
  );
}
