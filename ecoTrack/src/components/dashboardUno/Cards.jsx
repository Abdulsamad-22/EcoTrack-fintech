import { useState } from "react";
import styles from "../../../styles/dashboardStyles/cards.module.css";
import TransferAction from "./TransferAction";
import TransferMoney from "./TransferMoney";
import ConfirmAmount from "./ConfirmAmount";
import TransferSuccess from "./TransferSuccess";
import { useBudget } from "../budget/BudgetProvider";
// import styles from "./topbar.module.css";

export default function Cards({
  setShowOverlay,
  showOverlay,
  setOpenTransfer,
  openTransfer,
}) {
  const {
    setOriginalBalance,
    originalBalance,
    setBalance,
    balance,
    accountNum,
    setAccountNum,
  } = useBudget();
  const [isVisible, setIsVisible] = useState(true);
  const [imageSrc, setImageSrc] = useState("/images/hide-icon.svg");

  const { setSentAmount, setCategory } = useBudget();
  const [selectedBankName, setSelectedBankName] = useState("");

  function handlePrevious() {
    if (openTransfer === "confirm") {
      setOpenTransfer("transfer");
    } else if (openTransfer === "transfer") {
      setOpenTransfer("initial");
      setShowOverlay(false);
    }
    setSentAmount("");
    setCategory("");
  }

  function handleVisibility() {
    setIsVisible((prevVisible) => {
      const newVisible = !prevVisible;
      setImageSrc(
        newVisible ? "/images/hide-icon.svg" : "/images/Eye-icon.svg"
      );
      setBalance(newVisible ? originalBalance : "*****"); // Number when visible, string when masked
      return newVisible;
    });
  }

  return (
    <section className={styles.cardsFrame}>
      <h2>My Cards</h2>

      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <div className={styles.heading}>
            <div className={styles.balanceContainer}>
              <h3>My balance</h3>

              <button onClick={handleVisibility} className={styles.hideButton}>
                <img src={imageSrc} alt="" />
              </button>
            </div>
          </div>

          <div>
            <p className={styles.balance}>
              ₦{balance.toLocaleString("en-NG", { minimumFractionDigits: 2 })}
            </p>
          </div>

          <p className={styles.cardNumber}>5467*******473</p>
          <div className={styles.cardType}>
            <span>
              <img src="/images/Chip Card.svg" alt="chip icon" />
            </span>
            VISA
          </div>
        </div>
        <button className={styles.addCard}>
          {" "}
          <img src="/images/Add-icon.svg" alt="" />
          Add New Card
        </button>

        {openTransfer !== "initial" && (
          <div className={styles.transferScreen}>
            <div className={styles.header}>
              <button onClick={handlePrevious}>
                <img src="/images/icon-previous.svg" alt="" />
              </button>
              <h1>Transfer to Bank Account</h1>

              {openTransfer === "confirm" && (
                <button
                  onClick={() => {
                    setOpenTransfer("initial");
                    setShowOverlay(false);
                    setAccountNum("");
                    setCategory("");
                    setSentAmount("");
                  }}
                >
                  <img src="/images/icon-close.svg" alt="" />
                </button>
              )}
            </div>

            {openTransfer === "transfer" && (
              <TransferMoney
                accountNum={accountNum}
                setAccountNum={setAccountNum}
                setIsVisible={setIsVisible}
                isVisible={isVisible}
                setOpenTransfer={setOpenTransfer}
                selectedBankName={selectedBankName}
                setSelectedBankName={setSelectedBankName}
              />
            )}

            {openTransfer === "confirm" && (
              <ConfirmAmount
                selectedBankName={selectedBankName}
                setSelectedBankName={setSelectedBankName}
                setOpenTransfer={setOpenTransfer}
                accountNum={accountNum}
              />
            )}

            {openTransfer === "success" && <TransferSuccess />}
          </div>
        )}

        {/* {!isVisible ? (
          <TransferMoney setIsVisible={setIsVisible} isVisible={isVisible} />
        ) : (
          <ConfirmAmount />
        )} */}

        <TransferAction
          showOverlay={showOverlay}
          setShowOverlay={setShowOverlay}
          openTransfer={openTransfer}
          setOpenTransfer={setOpenTransfer}
        />
      </div>
    </section>
  );
}
