import { color } from "chart.js/helpers";
import styles from "../../../styles/trackingStyles/cheaperstore.module.css";
export default function CheaperStore() {
  const stores = [
    {
      image: "/images/BowlSteam.svg",
      alt: "item-image",
      text: "Fresh food items at Die-Die market on Tuesdays",
    },
    {
      image: "/images/Tote.svg",
      alt: "item-image",
      text: `Get your foodstuff at Detyms supermarket they offer 10% for Easter
            sales.`,
    },
    {
      image: "/images/GasPump.svg",
      alt: "item-image",
      text: `Refuel From any MRS Fuel Station sells @870/liter.`,
    },
  ];
  return (
    <div className={styles.cheapStoreContainer}>
      <div className={styles.topContainer}>
        <h1>Get Cheaper Products Here</h1>
      </div>

      <div className={styles.storeWrapper}>
        {stores.map((store) => (
          <div key={store.text} className={styles.storeContainer1}>
            <img src={store.image} alt={store.alt} />
            <p>{store.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
