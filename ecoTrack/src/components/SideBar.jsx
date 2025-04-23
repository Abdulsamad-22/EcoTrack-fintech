import { useState } from "react";
import styles from "./sidebar.module.css";
import { Link, useLocation } from "react-router-dom";
export default function SideBar() {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(location.pathname);
  const [expanded, setExpanded] = useState(false);

  const navItems = [
    {
      id: 1,
      icon: "/src/images/List.svg",
      onClick: () => setExpanded(!expanded),
    },
    {
      id: 2,
      icon: "/src/images/SquaresFour.svg",
      path: "/",
      label: "Dashboard",
    },
    {
      id: 3,
      icon: "/src/images/database.svg",
      path: "/budget",
      label: "Budget",
    },
    {
      id: 4,
      icon: "/src/images/ChartLine.svg",
      path: "/tracking",
      label: "Analytics",
    },
    { id: 5, icon: "/src/images/card.svg", label: "Savings" },
    { id: 6, icon: "/src/images/Gear.svg", label: "Settings" },
    { id: 7, icon: "/src/images/Question.svg", label: "Help Center" },
    { id: 8, icon: "/src/images/SignOut.svg", label: "Log Out" },
  ];

  function handleClick(index) {
    setActiveItem(index);
  }

  return (
    <nav
      className={`${styles.sideBar} ${expanded ? styles.expand : "collapsed"}`}
    >
      <div className={styles.logoContainer}>
        <img
          className={styles.logo}
          src="/src/images/logo.svg"
          alt="logo"
        ></img>
        {expanded && <p>EcoTrack</p>}
      </div>

      <div className={styles.sideBarWrapper}>
        <div className={styles.topContainer}>
          {navItems.map((item, index) =>
            item.id <= 5 ? (
              <Link
                key={index}
                to={item.path}
                className={`${styles.navIcons} ${
                  activeItem === item.path && !expanded ? styles.active : ""
                }`}
                onClick={item.onClick}
              >
                <div className={styles.navContainer}>
                  <img src={item.icon} alt="nav-bar" />
                  {expanded && <p>{item.label}</p>}
                </div>
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
                <div className={styles.navContainer}>
                  <img src={item.icon} alt="nav-bar" />
                  {expanded && <p>{item.label}</p>}
                </div>
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
