import styles from "./cards.module.css";
// import styles from "./topbar.module.css";
export default function Cards() {
  return (
    <section className={styles.cardsFrame}>
      <h2>My Cards</h2>

      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <div className={styles.heading}>
            <h3>Your balance</h3>
            <span>
              <img src="/src/images/Chip Card.svg" alt="chip icon" />
            </span>
          </div>
          <p className={styles.balance}>₦100,758,030.10</p>

          <p className={styles.cardNumber}>5467*******473</p>
          <div className={styles.cardType}>VISA</div>
        </div>
        <button className={styles.addCard}>
          {" "}
          <img src="/src/images/Add-icon.svg" alt="" />
          Add New Card
        </button>

        <div className={styles.actions}>
          <div className={styles.actionItem}>
            <img src="/src/images/Transfer.svg" alt="" />
            Transfer
          </div>

          <div className={styles.actionItem}>
            <img src="/src/images/save.svg" alt="" />
            Save
          </div>

          <div className={styles.actionItem}>
            <img src="/src/images/more-icon.svg" alt="" />
            More
          </div>
        </div>
      </div>
    </section>
  );
}
