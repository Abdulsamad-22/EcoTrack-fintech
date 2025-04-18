import { useState } from "react";
import styles from "./topbar.module.css";
import UserProfile from "./UserProfile";
export default function TopBar() {
  const [query, setQuery] = useState("");
  return (
    <div className={styles.container}>
      <div>
        <h1>Budget</h1>
      </div>

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
