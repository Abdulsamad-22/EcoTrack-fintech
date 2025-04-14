import styles from "./dashboard.module.css";
export default function Dashboard({ children }) {
  return (
    <section className={styles.dashboard}>
      {children}

      {/* <tbody>
            <tr className={styles.alignBottom}>
              <td className={styles.itemColumn}>
                <span className={styles.itemName}>Tomatoes</span>
                <div className={styles.priceContainer}>
                  <span className={styles.oldPrice}>₦12,000</span>
                </div>
              </td>
              <td>₦8,000</td>
              <td className={styles.rateDecrease}>↓ 5%</td>
            </tr>
  
            <tr className={styles.alignBottom}>
              <td className={styles.itemColumn}>
                <span className={styles.itemName}>Tomatoes</span>
                <div className={styles.priceContainer}>
                  <span className={styles.oldPrice}>₦12,000</span>
                </div>
              </td>
              <td>₦8,000</td>
              <td className={styles.rateIncrease}>↑ 5%</td>
            </tr>
  
            <tr className={styles.alignBottom}>
              <td className={styles.itemColumn}>
                <span className={styles.itemName}>Tomatoes</span>
                <div className={styles.priceContainer}>
                  <span className={styles.oldPrice}>₦12,000</span>
                </div>
              </td>
              <td>₦8,000</td>
              <td className={styles.rateDecrease}>↓ 5%</td>
            </tr>
  
            <tr className={styles.alignBottom}>
              <td className={styles.itemColumn}>
                <span className={styles.itemName}>Tomatoes</span>
                <div className={styles.priceContainer}>
                  <span className={styles.oldPrice}>₦12,000</span>
                </div>
              </td>
              <td>₦8,000</td>
              <td className={styles.rateIncrease}>↑ 5%</td>
            </tr>
  
            <tr className={styles.alignBottom}>
              <td className={styles.itemColumn}>
                <span className={styles.itemName}>Tomatoes</span>
                <div className={styles.priceContainer}>
                  <span className={styles.oldPrice}>₦12,000</span>
                </div>
              </td>
              <td>₦8,000</td>
              <td className={styles.rateIncrease}>↑ 5%</td>
            </tr>
  
            <tr className={styles.alignBottom}>
              <td className={styles.itemColumn}>
                <span className={styles.itemName}>Tomatoes</span>
                <div className={styles.priceContainer}>
                  <span className={styles.oldPrice}>₦12,000</span>
                </div>
              </td>
              <td>₦8,000</td>
              <td className={styles.rateDecrease}>↓ 5%</td>
            </tr>
          </tbody> */}
    </section>
  );
}
