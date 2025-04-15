import "./App.css";
import Cards from "./components/Cards";
import Chart from "./components/Chart";
import Dashboard from "./components/Dashboard";
import DashboardContent from "./components/DashboardContent";
import InnerContainer from "./components/InnerContainer";
import NewPrice from "./components/NewPrice";
import OuterContainer from "./components/OuterContainer";
import RightSideSection from "./components/RightSideSection";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import Transaction from "./components/Transaction";
import UserProfile from "./components/UserProfile";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Dashboard>
        <SideBar />
        <OuterContainer>
          <InnerContainer>
            <TopBar />
            <DashboardContent />
            <Chart />
            <Transaction />
          </InnerContainer>

          <RightSideSection>
            <UserProfile />
            <Cards />
            <NewPrice />
          </RightSideSection>
        </OuterContainer>
      </Dashboard>
    </div>
  );
}

export default App;
