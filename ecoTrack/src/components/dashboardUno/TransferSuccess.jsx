import styles from "../../../styles/dashboardStyles/transactionsuccess.module.css";
export default function TransferSuccess() {
  return (
    <div className={styles.successContainer}>
      <img
        className={styles.successIcon}
        src="/images/transaction-success.svg"
        alt=""
      />
      <h1>Transfer Successful</h1>
    </div>
  );
}
