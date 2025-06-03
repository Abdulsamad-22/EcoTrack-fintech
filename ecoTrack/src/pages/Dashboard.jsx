import styles from "./dashboard.module.css";

import Cards from "../components/dashboardUno/Cards";
import Chart from "../components/dashboardUno/Chart";
import DashboardContent from "../components/dashboardUno/DashboardContent";
import InnerContainer from "../components/dashboardUno/InnerContainer";
import NewPrice from "../components/dashboardUno/NewPrice";
import OuterContainer from "../components/dashboardUno/OuterContainer";
import RightSideSection from "../components/dashboardUno/RightSideSection";
import SideBar from "../components/utils/SideBar";
import TopBar from "../components/utils/TopBar";
import Transaction from "../components/dashboardUno/Transaction";

import DashboardBody from "../components/dashboardUno/DashboardBody";
import TransactionProvider from "../components/dashboardUno/TransactionProvider";
import FluctuatingPrices from "../components/dashboardUno/FluctuatingPrices";

import { useState } from "react";
import { useBudget } from "../components/budget/BudgetProvider";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [openTransfer, setOpenTransfer] = useState("initial");
  const [confirmLogout, setConfirmLogout] = useState(false);
  const { setSentAmount, setCategory, setAccountNum } = useBudget();
  const navigate = useNavigate();

  const handleLogout = async () => {
    const auth = getAuth();
    try {
      signOut(auth);
      navigate("/login");
    } catch (error) {
      console.log("error log out", error);
    }
  };
  return (
    <section className={styles.dashboard}>
      {showOverlay && (
        <div
          onClick={() => {
            setOpenTransfer("initial");
            setShowOverlay(false);
            setCategory("");
            setSentAmount("");
            setAccountNum("");
          }}
          className={styles.overlayContainer}
        ></div>
      )}

      {confirmLogout && (
        <div className={styles.logOutContainer}>
          <h1 className={styles.logOutHeader}>
            Are you sure you want to log out?
          </h1>
          <div className={styles.buttonContainer}>
            <button
              onClick={() => {
                setShowOverlay(false);
                setConfirmLogout(false);
              }}
              className={styles.cancelButton}
            >
              Cancel
            </button>
            <button onClick={handleLogout} className={styles.logoutButton}>
              Log out
            </button>
          </div>
        </div>
      )}

      <SideBar
        setConfirmLogout={setConfirmLogout}
        confirmLogout={confirmLogout}
        setShowOverlay={setShowOverlay}
        showOverlay={showOverlay}
      />
      <DashboardBody>
        <TopBar />
        <TransactionProvider>
          <OuterContainer>
            <InnerContainer>
              <DashboardContent />
              <Chart />
              <Transaction />
            </InnerContainer>

            <RightSideSection>
              <Cards
                openTransfer={openTransfer}
                setOpenTransfer={setOpenTransfer}
                setShowOverlay={setShowOverlay}
                showOverlay={showOverlay}
              />
              <FluctuatingPrices>
                <NewPrice />
              </FluctuatingPrices>
            </RightSideSection>
          </OuterContainer>
        </TransactionProvider>
      </DashboardBody>
    </section>
  );
}
