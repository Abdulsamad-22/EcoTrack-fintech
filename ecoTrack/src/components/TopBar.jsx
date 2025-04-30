import { useState } from "react";
import styles from "./topbar.module.css";
import UserProfile from "./UserProfile";
import { useLocation } from "react-router-dom";

const pageTitles = {
  "/": "Dashboard",
  "/budget": "Budget",
  "/tracking": "Inflation Tracking",
};
export default function TopBar() {
  const [query, setQuery] = useState("");
  const location = useLocation();
  return (
    <div className={styles.container}>
      <div>
        <h1>{pageTitles[location.pathname] || "Dashboard"}</h1>
        {pageTitles[location.pathname] === "Budget" ? (
          <p className={styles.subHead}>Create and track budget</p>
        ) : (
          ""
        )}
      </div>

      <div className={styles.rightSideContainer}>
        <div className={styles.searchContainer}>
          <div className={styles.searchInput}>
            <input
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              placeholder="Search"
              className={styles.search}
              type="text"
            />
            <button className={styles.iconContainer}>
              <img
                className={styles.searchIcon}
                src="/src/images/Search-icon.svg"
                alt="search-icon"
              />
            </button>
          </div>
        </div>

        <UserProfile />
      </div>
    </div>
  );
}
