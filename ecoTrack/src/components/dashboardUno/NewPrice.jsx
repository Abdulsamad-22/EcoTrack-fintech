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
              <span className={styles.itemName}>Tomatoes</span>
              <div>
                <span className={styles.oldPrice}>₦12,000</span>
              </div>
            </td>
            <td className={styles.newPrice1}>₦8,000</td>
            <td className={styles.rateDecrease1}>
              <img
                className={styles.rateIcon}
                src="/src/images/arrow-down.svg"
                alt=""
              />
              5%
            </td>
          </tr>

          <tr class="align-bottom">
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
          </tr>
        </tbody>
      </table>
    </section>
  );
}
