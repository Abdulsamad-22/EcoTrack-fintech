import styles from "./dashboard.module.css";

import Cards from "../components/dashboardUno/Cards";
import Chart from "../components/dashboardUno/Chart";
import DashboardContent from "../components/dashboardUno/DashboardContent";
import InnerContainer from "../components/dashboardUno/InnerContainer";
import NewPrice from "../components/dashboardUno/NewPrice";
import OuterContainer from "../components/dashboardUno/OuterContainer";
import RightSideSection from "../components/dashboardUno/RightSideSection";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import Transaction from "../components/dashboardUno/Transaction";

import DashboardBody from "../components/dashboardUno/DashboardBody";
import TransactionProvider from "../components/dashboardUno/TransactionProvider";
export default function Dashboard() {
  return (
    <section className={styles.dashboard}>
      <SideBar />
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
              <Cards />
              <NewPrice />
            </RightSideSection>
          </OuterContainer>
        </TransactionProvider>
      </DashboardBody>
    </section>
  );
}
