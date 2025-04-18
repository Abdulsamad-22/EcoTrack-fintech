import { useState } from "react";
import styles from "./sidebar.module.css";
import { Link, useLocation } from "react-router-dom";
export default function SideBar() {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(location.pathname);

  const navItems = [
    { id: 1, icon: "/src/images/List.svg" },
    { id: 2, icon: "/src/images/SquaresFour.svg", path: "/" },
    { id: 3, icon: "/src/images/database.svg", path: "/budget" },
    { id: 4, icon: "/src/images/ChartLine.svg", path: "/tracking" },
    { id: 5, icon: "/src/images/card.svg" },
    { id: 6, icon: "/src/images/Gear.svg" },
    { id: 7, icon: "/src/images/Question.svg" },
    { id: 8, icon: "/src/images/SignOut.svg" },
  ];

  function handleClick(id) {
    setActiveItem(id);
  }
  // const active = activeItem === navItems.id ? styles.active : "";
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
          {navItems.map((item) =>
            item.id <= 5 ? (
              <Link
                key={item.id}
                to={item.path}
                className={`${styles.navIcons} ${
                  activeItem === item.path ? styles.active : ""
                }`}
                onClick={() => handleClick(item.id)}
              >
                <img src={item.icon} alt="" />
              </Link>
            ) : (
              ""
            )
          )}
        </div>

        <div className={styles.bottomContainer}>
          {navItems.map((item) =>
            item.id > 5 ? (
              <div
                key={item.id}
                className={styles.navIcons}
                onClick={() => handleClick(item.id)}
              >
                <img src={item.icon} alt="" />
              </div>
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </nav>
  );
}
