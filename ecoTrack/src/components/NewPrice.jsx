import styles from "./newprice.module.css";
export default function NewPrice() {
  return (
    <section>
      <div>
        <select>
          <option value="date">Food Item</option>
          <option value="amount">Groceries</option>
          <option value="name">Fuel</option>
        </select>
      </div>

      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Current Price</th>
            <th>Rate (%)</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className={styles.itemHead}>
              <td>
                Tomatoes <span>₦10,000</span>
              </td>
            </td>

            <td className={styles.currentPrice}>
              <td>₦10,000</td>
            </td>

            {/* <td className={styles.currentPrice}>₦10,000</td> */}
            <td>5%</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
