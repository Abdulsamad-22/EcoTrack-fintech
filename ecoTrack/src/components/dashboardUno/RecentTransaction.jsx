import styles from "./recenttransaction.module.css";
export default function RecentTransaction() {
  return (
    <>
      <div className={styles.titleContainer}>
        <div className={styles.leftSide}>
          <p>Recent</p>
          <p>Favourites</p>
        </div>

        <img
          className={styles.searchIcon}
          src="/src/images/Search-icon.svg"
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
          <p className={styles.acctName}>Choli Frank</p>
          <p className={styles.acctInfo}>
            <span>4441529872</span> OPAY
          </p>
        </div>

        <div className={styles.acctInfoContainer}>
          <p className={styles.acctName}>Suberu Frank</p>
          <p className={styles.acctInfo}>
            <span>4441529872</span> OPAY
          </p>
        </div>
      </div>
    </>
  );
}
