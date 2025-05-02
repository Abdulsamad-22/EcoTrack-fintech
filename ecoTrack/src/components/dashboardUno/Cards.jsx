import { createContext, useContext, useState } from "react";
import styles from "./cards.module.css";
import TransferAction from "./TransferAction";
import TransferMoney from "./TransferMoney";
import ConfirmAmount from "./ConfirmAmount";
import TransferSuccess from "./TransferSuccess";
// import styles from "./topbar.module.css";

export default function Cards() {
  const [originalBalance, setOriginalBalance] = useState("100,758,030.10");
  const [balance, setBalance] = useState(originalBalance);
  const [isVisible, setIsVisible] = useState(true);
  const [imageSrc, setImageSrc] = useState("/src/images/hide-icon.svg");

  const [overlayVisible, setOverlayVisible] = useState("initial");

  function handleVisibility() {
    setIsVisible(!isVisible);
    setImageSrc(
      isVisible ? "/src/images/Eye-icon.svg" : "/src/images/hide-icon.svg"
    );
    setBalance(
      isVisible ? originalBalance.replace(/[0-9]/g, "*") : originalBalance
    );
  }

  // function handleVisibility() {
  //   const unformattedBalance = balance.replace(/,/g, "");
  //   const maskedBalance = unformattedBalance.replace(/\d/g, "*");
  //   setbalance(maskedBalance);
  // }

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
            <p className={styles.balance}>₦{balance}</p>
          </div>

          <p className={styles.cardNumber}>5467*******473</p>
          <div className={styles.cardType}>
            <span>
              <img src="/src/images/Chip Card.svg" alt="chip icon" />
            </span>
            VISA
          </div>
        </div>
        <button className={styles.addCard}>
          {" "}
          <img src="/src/images/Add-icon.svg" alt="" />
          Add New Card
        </button>

        {overlayVisible !== "initial" && (
          <div className={styles.transferScreen}>
            <div className={styles.header}>
              <h1>Transfer Page</h1>
              <button onClick={() => setOverlayVisible("initial")}>X</button>
            </div>

            {overlayVisible === "transfer" && (
              <TransferMoney
                setIsVisible={setIsVisible}
                isVisible={isVisible}
                setOverlayVisible={setOverlayVisible}
              />
            )}

            {overlayVisible === "confirm" && (
              <ConfirmAmount setOverlayVisible={setOverlayVisible} />
            )}

            {overlayVisible === "success" && <TransferSuccess />}
          </div>
        )}

        {/* {!isVisible ? (
          <TransferMoney setIsVisible={setIsVisible} isVisible={isVisible} />
        ) : (
          <ConfirmAmount />
        )} */}

        <TransferAction
          overlayVisible={overlayVisible}
          setOverlayVisible={setOverlayVisible}
        />
      </div>
    </section>
  );
}
