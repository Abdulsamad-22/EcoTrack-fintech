// import { Link } from "react-router-dom";
import TopBar from "../components/utils/TopBar";
import OuterContainer from "../components/dashboardUno/OuterContainer";
// import Dashboard from "./Dashboard";
import SideBar from "../components/utils/SideBar";
import SavingGoals from "../components/budget/SavingGoals";
import TipsAdvice from "../components/budget/TipsAdvice";
import DashboardBody from "../components/dashboardUno/DashboardBody";

import RightSideSection from "../components/dashboardUno/RightSideSection";
import BudgetInnerContainer from "../components/budget/BudgetInnerContainer";
import InflationSummary from "../components/budget/InflationSummary";
import BudgetWrapper from "../components/budget/BudgetWrapper";
import FluctuatingPrices from "../components/dashboardUno/FluctuatingPrices";

export default function Budget() {
  return (
    <div>
      <BudgetWrapper>
        <SideBar />
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
    </div>
  );
}
