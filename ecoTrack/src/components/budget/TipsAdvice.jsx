import { useState } from "react";
import styles from "../../../styles/budgetStyles/tipsadvice.module.css";
export default function TipsAdvice() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <section className={styles.tipsAdviceContainer}>
      <h4>Tips and Advice</h4>

      <p className={styles.subHeading}>
        Reduce Food by 13% to increase savings by 15% that is 6000/month and 3%
        from Food will cover Electricity
      </p>

      <form onSubmit={handleSubmit}>
        <div className={styles.allocationContainer}>
          <input
            className={styles.name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            value={name}
            placeholder="Enter Allocation"
          />
        </div>

        <div>
          <input
            className={styles.name}
            onChange={(e) => setAmount(e.target.value)}
            type="text"
            value={amount}
            placeholder="Enter Amount"
          />
        </div>

        <button className={styles.newBudget} type="submit">
          Save New Budget
        </button>
      </form>
    </section>
  );
}
