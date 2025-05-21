import styles from "../../../styles/budgetStyles/inflationsummary.module.css";
import inflatedPrices from "../data/inflatedPrices.json";
import { useEffect, useState } from "react";
import FluctuatingPrices, { usePrice } from "../dashboardUno/FluctuatingPrices";

export default function InflationSummary() {
  const { items, setItems } = usePrice();
  {
    <FluctuatingPrices />;
  }
  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <h1>Inflation Summary</h1>

        <div>
          {/* <label>Sort by</label> */}
          <select>
            <option value="date">Oct</option>
            <option value="amount">Dec</option>
            <option value="name">Jan</option>
          </select>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th className={styles.head}>Current prices</th>
            <th>Rate (%)</th>
          </tr>
        </thead>
        <tbody>
          {items
            .slice()
            .sort((a, b) => b.rate - a.rate)
            .map((item) => (
              <tr key={item.id} class="align-bottom">
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
            ))}
        </tbody>
      </table>

      <button className={styles.cta}>See Best Alternatives</button>
    </div>
  );
}
