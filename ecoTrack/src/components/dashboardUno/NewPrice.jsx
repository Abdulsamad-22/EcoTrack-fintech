import styles from "./newprice.module.css";
import { useEffect, useState } from "react";
import FluctuatingPrices, { usePrice } from "./FluctuatingPrices";

export default function NewPrice() {
  const { items, setItems } = usePrice();
  {
    <FluctuatingPrices />;
  }
  return (
    <section className={styles.sideBar}>
      <div className={styles.header}>
        <select>
          <option value="food-items">Food Items</option>
          <option value="food-items">Electricity</option>
          <option value="food-items">Fuel</option>
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Current prices</th>
            <th>Rate (%)</th>
          </tr>
        </thead>
        <tbody>
          {items
            .slice()
            .sort((a, b) => b.rate - a.rate)
            .map((item) =>
              item.id <= 6 ? (
                <tr key={item.id} className="align-bottom">
                  <td className={styles.itemCol}>
                    <span className={styles.itemName}>{item.name}</span>
                    <div>
                      <span className={styles.oldPrice}>
                        ₦{item.price.toLocaleString("en-NG")}
                      </span>
                    </div>
                  </td>
                  <td className={styles.newPrice}>
                    ₦{item.newPrice.toLocaleString("en-NG")}
                  </td>
                  <td
                    className={
                      item.price < item.newPrice
                        ? styles.rateIncrease
                        : styles.rateDecrease
                    }
                  >
                    {item.price < item.newPrice ? "↑" : "↓"} {item.rate}%
                    {/* <img
                className={styles.rateIcon}
                src="/src/images/arrow-down.svg"
                alt=""
              /> */}
                  </td>
                </tr>
              ) : (
                ""
              )
            )}
        </tbody>
      </table>
    </section>
  );
}
