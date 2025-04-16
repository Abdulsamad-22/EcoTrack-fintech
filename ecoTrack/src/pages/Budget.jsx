import { Link } from "react-router-dom";
import TopBar from "../components/TopBar";
import OuterContainer from "../components/OuterContainer";
import InnerContainer from "../components/InnerContainer";
import Dashboard from "./Dashboard";
import SideBar from "../components/SideBar";
import UserProfile from "../components/UserProfile";
import BudgetSetting from "../components/BudgetSetting";
import BudgetSummary from "../components/BudgetSummary";
import SavingGoals from "../components/SavingGoals";
export default function Budget() {
  return (
    <div>
      <Dashboard>
        <SideBar />
        <OuterContainer>
          <InnerContainer>
            <TopBar />
            <BudgetSetting />
            <BudgetSummary />
          </InnerContainer>

          <InnerContainer>
            <SavingGoals />
          </InnerContainer>

          <InnerContainer>
            <UserProfile />
          </InnerContainer>
        </OuterContainer>
      </Dashboard>
      <Link to="/">Dashboard</Link>
    </div>
  );
}
