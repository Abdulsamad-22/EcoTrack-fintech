import styles from "./cheaperstore.module.css";
export default function CheaperStore() {
  return (
    <div className={styles.cheapStoreContainer}>
      <div className={styles.topContainer}>
        <h1>Get Cheaper Products Here</h1>
        <div>
          {/* <label>Sort by</label> */}
          <select>
            <option value="date">Sort by</option>
            <option value="amount">Dec</option>
            <option value="name">Jan</option>
          </select>
        </div>
      </div>

      <div className={styles.storeWrapper}>
        <div className={styles.storeContainer1}>
          <img src="/src/images/BowlSteam.svg" alt="item-image" />
          <p>Fresh food items at Die-Die market on Tuesdays</p>
        </div>

        <div className={styles.storeContainer2}>
          <img src="/src/images/Tote.svg" alt="item-image" />
          <p>
            Get your foodstuff at Detyms supermarket they offer 10% for Easter
            sales.
          </p>
        </div>

        <div className={styles.storeContainer3}>
          <img src="/src/images/GasPump.svg" alt="item-image" />
          <p>Refuel From any MRS Fuel Station sells @870/liter</p>
        </div>
      </div>
    </div>
  );
}
