import styles from "./newprice.module.css";
export default function NewPrice() {
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
          <tr class="align-bottom">
            <td className={styles.itemCol1}>
              <span class="item-name">Tomatoes</span>
              <div class="price-container">
                <span className={styles.oldPrice}>₦12,000</span>
              </div>
            </td>
            <td className={styles.newPrice1}>₦8,000</td>
            <td className={styles.rateDecrease1}>↓ 5%</td>
          </tr>

          <tr class="align-bottom">
            <td className={styles.itemCol}>
              <span class="item-name">Rice</span>
              <div class="price-container">
                <span className={styles.oldPrice}>₦90,000</span>
              </div>
            </td>
            <td className={styles.newPrice}>₦120,000</td>
            <td className={styles.rateIncrease}>↑ 12%</td>
          </tr>

          <tr class="align-bottom">
            <td className={styles.itemCol}>
              <span class="item-name">Noodles</span>
              <div class="price-container">
                <span className={styles.oldPrice}>₦9,000</span>
              </div>
            </td>
            <td className={styles.newPrice}>₦8,000</td>
            <td className={styles.rateDecrease}>↓ 10%</td>
          </tr>

          <tr class="align-bottom">
            <td className={styles.itemCol}>
              <span class="item-name">Spaghetti</span>
              <div class="price-container">
                <span className={styles.oldPrice}>₦4,000</span>
              </div>
            </td>
            <td className={styles.newPrice}>₦8,000</td>
            <td className={styles.rateIncrease}>↑ 9%</td>
          </tr>

          <tr class="align-bottom">
            <td className={styles.itemCol}>
              <span class="item-name">potatoes</span>
              <div class="price-container">
                <span className={styles.oldPrice}>₦4,000</span>
              </div>
            </td>
            <td className={styles.newPrice}>₦8,000</td>
            <td className={styles.rateIncrease}>↑ 9%</td>
          </tr>

          <tr class="align-bottom">
            <td className={styles.itemColLast}>
              <span class="item-name">Beans</span>
              <div class="price-container">
                <span className={styles.oldPrice}>₦12,000</span>
              </div>
            </td>
            <td className={styles.newPriceLast}>₦8,000</td>
            <td className={styles.rateDecreaseLast}>↓ 5%</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
