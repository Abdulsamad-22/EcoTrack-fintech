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
      </div>
    </div>
  );
}
