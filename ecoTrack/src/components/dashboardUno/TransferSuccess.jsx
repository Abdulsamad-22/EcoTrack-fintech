import styles from "./transactionsuccess.module.css";
export default function TransferSuccess() {
  return (
    <div className={styles.successContainer}>
      <img
        className={styles.successIcon}
        src="/src/images/transaction-success.svg"
        alt=""
      />
      <h1>Transfer Successful</h1>
    </div>
  );
}
