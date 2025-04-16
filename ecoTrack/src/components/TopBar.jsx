import { useState } from "react";
import styles from "./topbar.module.css";
import UserProfile from "./UserProfile";
export default function TopBar() {
  const [query, setQuery] = useState("");
  return (
    <div className={styles.container}>
      <h1>Dashboard</h1>
      <div className={styles.rightSideContainer}>
        <div className={styles.searchContainer}>
          <div className={styles.searchInput}>
            <input
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              className={styles.search}
              type="text"
            />
            <img
              className={styles.searchIcon}
              src="/src/images/Search-icon.svg"
              alt="search-icon"
            />
          </div>
        </div>

        <UserProfile />
      </div>
    </div>
  );
}
