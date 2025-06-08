import TopBar from "../components/utils/TopBar";
import OuterContainer from "../components/dashboardUno/OuterContainer";
import SideBar from "../components/utils/SideBar";
import SavingGoals from "../components/budget/SavingGoals";
import TipsAdvice from "../components/budget/TipsAdvice";
import DashboardBody from "../components/dashboardUno/DashboardBody";

import RightSideSection from "../components/dashboardUno/RightSideSection";
import BudgetInnerContainer from "../components/budget/BudgetInnerContainer";
import InflationSummary from "../components/budget/InflationSummary";
import BudgetWrapper from "../components/budget/BudgetWrapper";
import FluctuatingPrices from "../components/dashboardUno/FluctuatingPrices";
import Logout from "../components/logout/Logout";
import styles from "./dashboard.module.css";

export default function Budget({
  confirmLogout,
  setConfirmLogout,
  setShowOverlay,
  showOverlay,
}) {
  return (
    <section>
      {showOverlay && (
        <div
          onClick={() => {
            setShowOverlay(false);
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

      <BudgetWrapper>
        <SideBar
          setConfirmLogout={setConfirmLogout}
          confirmLogout={confirmLogout}
          setShowOverlay={setShowOverlay}
        />
        <DashboardBody>
          <TopBar />
          <OuterContainer>
            <BudgetInnerContainer />

            <RightSideSection>
              <SavingGoals />
              <TipsAdvice />
            </RightSideSection>

            <RightSideSection>
              <FluctuatingPrices>
                <InflationSummary />
              </FluctuatingPrices>
            </RightSideSection>
          </OuterContainer>
        </DashboardBody>
      </BudgetWrapper>
    </section>
  );
}
