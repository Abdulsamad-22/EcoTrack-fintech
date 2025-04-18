import { Link } from "react-router-dom";
import TopBar from "../components/TopBar";
import OuterContainer from "../components/dashboardUno/OuterContainer";
// import Dashboard from "./Dashboard";
import SideBar from "../components/SideBar";
import BudgetSetting from "../components/budget/BudgetSetting";
import BudgetSummary from "../components/budget/BudgetSummary";
import SavingGoals from "../components/budget/SavingGoals";
import TipsAdvice from "../components/budget/TipsAdvice";
import DashboardBody from "../components/dashboardUno/DashboardBody";

import RightSideSection from "../components/dashboardUno/RightSideSection";
import BudgetInnerContainer from "../components/budget/BudgetInnerContainer";
import InflationSummary from "../components/budget/InflationSummary";
import BudgetWrapper from "../components/budget/BudgetWrapper";

export default function Budget() {
  return (
    <div>
      <BudgetWrapper>
        <SideBar />
        <DashboardBody>
          <TopBar />
          <OuterContainer>
            <BudgetInnerContainer>
              <BudgetSetting />
              <BudgetSummary />
            </BudgetInnerContainer>

            <RightSideSection>
              <SavingGoals />
              <TipsAdvice />
            </RightSideSection>

            <RightSideSection>
              <InflationSummary />
            </RightSideSection>
          </OuterContainer>
        </DashboardBody>
      </BudgetWrapper>
    </div>
  );
}
