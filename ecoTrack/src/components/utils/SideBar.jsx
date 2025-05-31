import { useRef, useState, useEffect } from "react";
import styles from "../../../styles/utilsStyles/sidebar.module.css";
import { Link, useLocation } from "react-router-dom";
import { useBudget } from "../budget/BudgetProvider";
export default function SideBar() {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(location.pathname);
  const [expanded, setExpanded] = useState(false);
  const sidebarRef = useRef();
  useBudget();

  const navItems = [
    {
      id: 1,
      icon: "/images/List.svg",
      onClick: () => setExpanded(!expanded),
      toolTip: "Open navigation",
    },
    {
      id: 2,
      icon: "/images/SquaresFour.svg",
      path: "/dashboard",
      label: "Dashboard",
      toolTip: "Dashboard",
    },
    {
      id: 3,
      icon: "/images/database.svg",
      path: "/budget",
      label: "Budget",
      toolTip: "Budget",
    },
    {
      id: 4,
      icon: "/images/ChartLine.svg",
      path: "/tracking",
      label: "Analytics",
      toolTip: "Analytics",
    },
    {
      id: 5,
      icon: "/images/card.svg",
      label: "Savings",
      toolTip: "Savings",
    },
    {
      id: 6,
      icon: "/images/Gear.svg",
      label: "Settings",
      toolTip: "Settings",
    },
    {
      id: 7,
      icon: "/images/Question.svg",
      label: "Help Center",
      toolTip: "Help Center",
    },
    {
      id: 8,
      icon: "/images/SignOut.svg",
      // path: "/logOut",
      label: "Log Out",
      toolTip: "Log Out",
    },
  ];

  function handleClick(index) {
    setActiveItem(index);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setExpanded(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={`${styles.sideBar} ${expanded ? styles.expand : "collapsed"}`}
      ref={sidebarRef}
    >
      <div className={styles.logoContainer}>
        <img className={styles.logo} src="/images/logo.svg" alt="logo"></img>
        {expanded && <p>EcoTrack</p>}
      </div>

      <div className={styles.sideBarWrapper}>
        <div className={styles.topContainer}>
          {navItems.map((item, index) =>
            item.id <= 5 ? (
              <Link
                key={index}
                to={item.path}
                className={`${styles.navIcons}`}
                onClick={item.onClick}
              >
                <div
                  className={`${styles.navContainer} ${
                    activeItem === item.path ? styles.active : ""
                  }`}
                >
                  <img
                    className={styles.navIcon}
                    src={item.icon}
                    alt="nav-bar"
                  />
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
              <Link
                key={item.id}
                to={item.path}
                className={styles.navIcons}
                onClick={() => handleClick(item.id)}
              >
                <div
                  className={`${styles.navContainer} ${
                    activeItem === item.path ? styles.active : ""
                  }`}
                >
                  <img
                    className={styles.navIcon}
                    src={item.icon}
                    alt="nav-bar"
                  />
                  {expanded && <p>{item.label}</p>}
                </div>
              </Link>
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </nav>
  );
}
