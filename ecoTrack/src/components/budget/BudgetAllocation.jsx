import styles from "./budgetallocation.module.css";
export default function BudgetAllocation() {
  return (
    <div>
      <div className={styles.topContainer}>
        <h2>Allocation</h2>
        <div className={styles.budgetStatus}>
          <p>₦740,000</p>
          <div className={styles.status}>
            <img src="/src/images/check-icon.svg" alt="check-icon" />
            On track
          </div>
        </div>
      </div>

      <div>
        <div className={styles.allocationWrapper}>
          <div className={styles.allocatioContainer}>
            <div className={styles.allocationName}>
              <div className={styles.allocationRent}></div> <h3>Rent</h3>
            </div>

            <div className={styles.amountContainer}>
              <p className={styles.allocationAmount}>
                ₦270,000/<span>700, 000</span>
              </p>{" "}
              <img
                className={styles.onTrackIcon}
                src="/src/images/check-icon-onPlain.svg"
                alt=""
              />
            </div>
          </div>

          <div className={styles.allocatioContainer}>
            <div className={styles.allocationName}>
              <div className={styles.allocationRent}></div> <h3>Food Item</h3>
            </div>

            <div className={styles.amountContainer}>
              <p className={styles.allocationAmount}>
                ₦270,000/<span>700, 000</span>
              </p>{" "}
              <img
                className={styles.onTrackIcon}
                src="/src/images/warning-icon.svg"
                alt=""
              />
            </div>
          </div>

          <div className={styles.allocatioContainer}>
            <div className={styles.allocationName}>
              <div className={styles.allocationRent}></div>{" "}
              <h3>Transportation</h3>
            </div>

            <div className={styles.amountContainer}>
              <p className={styles.allocationAmount}>
                ₦27,000/<span>700, 000</span>
              </p>{" "}
              <img
                className={styles.onTrackIcon}
                src="/src/images/warning-icon.svg"
                alt=""
              />
            </div>
          </div>

          <div className={styles.allocatioContainer}>
            <div className={styles.allocationName}>
              <div className={styles.allocationRent}></div> <h3>Electricty</h3>
            </div>

            <div className={styles.amountContainer}>
              <p className={styles.allocationAmount}>
                ₦270,000/<span>700, 000</span>
              </p>{" "}
              <img
                className={styles.onTrackIcon}
                src="/src/images/check-icon-onPlain.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
