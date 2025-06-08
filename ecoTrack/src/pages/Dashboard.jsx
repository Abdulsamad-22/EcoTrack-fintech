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
import Logout from "../components/logout/Logout";

export default function Dashboard({
  confirmLogout,
  setConfirmLogout,
  setShowOverlay,
  showOverlay,
}) {
  const [openTransfer, setOpenTransfer] = useState("initial");
  const { setSentAmount, setCategory, setAccountNum } = useBudget();

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
            setConfirmLogout(false);
          }}
          className={styles.overlayContainer}
        ></div>
      )}

      {confirmLogout && (
        <Logout
          setConfirmLogout={setConfirmLogout}
          setShowOverlay={setShowOverlay}
        />
      )}

      <SideBar
        setConfirmLogout={setConfirmLogout}
        confirmLogout={confirmLogout}
        setShowOverlay={setShowOverlay}
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
