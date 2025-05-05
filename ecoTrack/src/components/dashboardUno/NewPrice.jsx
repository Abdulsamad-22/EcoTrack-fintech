import styles from "./newprice.module.css";
import inflatedPrices from "../data/inflatedPrices.json";
import { useEffect, useState } from "react";

function getFluctuatedPrice(price) {
  const fluctuation = Math.random() * 0.15 - 0.05;
  const newPrice = price + price * fluctuation;
  return Math.round(newPrice);
}
export default function NewPrice() {
  const [items, setItems] = useState(inflatedPrices);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems((prevItems) =>
        prevItems.map((item) => ({
          ...items,
          name: item.name,
          price: getFluctuatedPrice(item.price),
          newPrice: getFluctuatedPrice(item.price),
          rate: "↑ 12%",
        }))
      );
    }, 20000);

    return () => clearInterval(interval);
  }, []);
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
          {items.map((item) => (
            <tr class="align-bottom">
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
              <td className={styles.rateDecrease}>
                {/* <img
                className={styles.rateIcon}
                src="/src/images/arrow-down.svg"
                alt=""
              /> */}
                {item.rate}
              </td>
            </tr>
          ))}

          {/* <tr class="align-bottom">
            <td className={styles.itemCol}>
              <span className={styles.itemName}>Rice</span>
              <div>
                <span className={styles.oldPrice}>₦90,000</span>
              </div>
            </td>
            <td className={styles.newPrice}>₦120,000</td>
            <td className={styles.rateIncrease}>↑ 12%</td>
          </tr>

          <tr class="align-bottom">
            <td className={styles.itemCol}>
              <span className={styles.itemName}>Noodles</span>
              <div>
                <span className={styles.oldPrice}>₦9,000</span>
              </div>
            </td>
            <td className={styles.newPrice}>₦8,000</td>
            <td className={styles.rateDecrease}>↓ 10%</td>
          </tr>

          <tr class="align-bottom">
            <td className={styles.itemCol}>
              <span className={styles.itemName}>Spaghetti</span>
              <div>
                <span className={styles.oldPrice}>₦4,000</span>
              </div>
            </td>
            <td className={styles.newPrice}>₦8,000</td>
            <td className={styles.rateIncrease}>↑ 9%</td>
          </tr>

          <tr class="align-bottom">
            <td className={styles.itemCol}>
              <span className={styles.itemName}>Potatoes</span>
              <div>
                <span className={styles.oldPrice}>₦4,000</span>
              </div>
            </td>
            <td className={styles.newPrice}>₦8,000</td>
            <td className={styles.rateIncrease}>↑ 9%</td>
          </tr>

          <tr class="align-bottom">
            <td className={styles.itemColLast}>
              <span className={styles.itemName}>Beans</span>
              <div>
                <span className={styles.oldPrice}>₦12,000</span>
              </div>
            </td>
            <td className={styles.newPriceLast}>₦8,000</td>
            <td className={styles.rateDecreaseLast}>↓ 5%</td>
          </tr> */}
        </tbody>
      </table>
    </section>
  );
}
