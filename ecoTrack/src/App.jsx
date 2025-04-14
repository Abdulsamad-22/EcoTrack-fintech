import "./App.css";
import BodyContent from "./components/BodyContent";
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

function App() {
  return (
    <div className="App">
      <Dashboard>
        <SideBar />
        <BodyContent>
          {/* <TopBar /> */}

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
        </BodyContent>
      </Dashboard>
    </div>
  );
}

export default App;
