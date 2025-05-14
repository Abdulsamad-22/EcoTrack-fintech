import styles from "./dashboardcontent.module.css";
export default function DashboardContent() {
  return (
    <main className={styles.container}>
      <div className={styles.imageContainer}>
        <div className={styles.overlay}></div>
        <img
          className={styles.headerImage}
          src="images/Inflation tracking board.png"
          alt=""
        />
        <h2 className={styles.headerText}>
          Potential increase in the price of commodities as the gov’t stop
          subsidizing fuel for it’s’ citizens hike prediction and recommendation
        </h2>
      </div>
    </main>
  );
}
