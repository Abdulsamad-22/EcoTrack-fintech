import "./App.css";
import BodyContent from "./components/BodyContent";
import Chart from "./components/Chart";
import Dashboard from "./components/Dashboard";
import DashboardContent from "./components/DashboardContent";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";

function App() {
  return (
    <div className="App">
      <Dashboard>
        <SideBar />
        <BodyContent>
          <TopBar />
          <DashboardContent />
          <Chart />
        </BodyContent>
      </Dashboard>
    </div>
  );
}

export default App;
