import "./App.css";
import Cards from "./components/Cards";
import Chart from "./components/Chart";
import Dashboard from "./pages/Dashboard";
import DashboardContent from "./components/DashboardContent";
import InnerContainer from "./components/InnerContainer";
import NewPrice from "./components/NewPrice";
import OuterContainer from "./components/OuterContainer";
import RightSideSection from "./components/RightSideSection";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import Transaction from "./components/Transaction";
import UserProfile from "./components/UserProfile";
import Budget from "./pages/Budget";
// import Dashboardp from "./pages/Dashboardp";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardBody from "./components/DashboardBody";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Dashboard>
              <SideBar />
              <DashboardBody>
                <TopBar />
                <OuterContainer>
                  <InnerContainer>
                    <DashboardContent />
                    <Chart />
                    <Transaction />
                  </InnerContainer>

                  <RightSideSection>
                    <Cards />
                    <NewPrice />
                  </RightSideSection>
                </OuterContainer>
              </DashboardBody>
            </Dashboard>
          }
        />
        <Route path="/budget" element={<Budget />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
