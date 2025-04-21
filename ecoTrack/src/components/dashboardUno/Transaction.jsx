import styles from "./transaction.module.css";
export default function Transaction() {
  const transaction = [
    {
      name: "Wisdom Obinna Hart",
      type: "Debit",
      date: "12 Dec, 2024",
      amount: "₦120,000",
      category: "Food and Groceries",
      status: "Successful",
    },
    {
      name: "Choli Frank",
      type: "Credit",
      date: "12 Dec, 2024",
      amount: "₦120,000",
      category: "Food and Groceries",
      status: "Successful",
    },
    {
      name: "AEDC",
      type: "Debit",
      date: "12 Dec, 2024",
      amount: "₦120,000",
      category: "Food and Groceries",
      status: "Pending",
    },
  ];
  const status = (transaction.status = "Successful"
    ? styles.statusSuccessful
    : styles.statusPending);
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
          {transaction.map((info) => (
            <tr>
              <td>{info.name}</td>
              <td>{info.type}</td>
              <td>{info.date}</td>
              <td className={styles.amount}>{info.amount}</td>
              <td>{info.category}</td>
              <td className={status}>{info.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
