import { Link } from "react-router-dom";
import TopBar from "../components/TopBar";
import OuterContainer from "../components/OuterContainer";
import Dashboard from "./Dashboard";
import SideBar from "../components/SideBar";
import BudgetSetting from "../components/BudgetSetting";
import BudgetSummary from "../components/BudgetSummary";
import SavingGoals from "../components/SavingGoals";
import TipsAdvice from "../components/TipsAdvice";
import DashboardBody from "../components/DashboardBody";

import RightSideSection from "../components/RightSideSection";
import BudgetInnerContainer from "../components/BudgetInnerContainer";
import InflationSummary from "../components/InflationSummary";
export default function Budget() {
  return (
    <div>
      <Dashboard>
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
      </Dashboard>
      <Link to="/">Dashboard</Link>
    </div>
  );
}
