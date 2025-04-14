import styles from "./transaction.module.css";
export default function Transaction() {
  return (
    <div className={styles.transactionHistory}>
      <div className={styles.header}>
        <h2>Transaction History</h2>
        <div className={styles.sort}>
          <label>Sort by</label>
          <select>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
            <option value="name">Name</option>
          </select>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Wisdom Obinna Hart</td>
            <td>Debit</td>
            <td>12 Dec, 2024</td>
            <td className={styles.amount}>₦120,000</td>
            <td>Food and Groceries</td>
            <td className={styles.statusSuccessful}>Successful</td>
          </tr>
          <tr>
            <td>Choli Frank</td>
            <td>Credit</td>
            <td>12 Dec, 2024</td>
            <td className={styles.amount}>₦120,000</td>
            <td>Food and Groceries</td>
            <td className={styles.statusSuccessful}>Successful</td>
          </tr>
          <tr>
            <td>AEDC</td>
            <td>Debit</td>
            <td>12 Dec, 2024</td>
            <td className={styles.amount}>₦120,000</td>
            <td>Food and Groceries</td>
            <td className={styles.statusPending}>Pending</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
