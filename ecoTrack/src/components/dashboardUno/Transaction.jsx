import { createContext, useContext, useState } from "react";
import styles from "./transaction.module.css";
import { useTransfer } from "./TransactionProvider";

export default function Transaction() {
  const { transaction } = useTransfer();
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
          {transaction.slice(0, 4).map((info, index) => (
            <tr key={index}>
              <td>{info.name.toUpperCase()}</td>
              <td>{info.type}</td>
              <td>{info.date}</td>
              <td className={styles.amount}>
                ₦{info.amount.toLocaleString("en-NG")}
              </td>
              <td>{info.category}</td>
              <td
                className={
                  info.status === "Successful"
                    ? styles.statusSuccessful
                    : styles.statusPending
                }
              >
                {info.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
