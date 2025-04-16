import styles from "./dashboard.module.css";

import Cards from "../components/Cards";
import Chart from "../components/Chart";
import DashboardContent from "../components/DashboardContent";
import InnerContainer from "../components/InnerContainer";
import NewPrice from "../components/NewPrice";
import OuterContainer from "../components/OuterContainer";
import RightSideSection from "../components/RightSideSection";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import Transaction from "../components/Transaction";

import DashboardBody from "../components/DashboardBody";
export default function Dashboard() {
  return (
    <section className={styles.dashboard}>
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
    </section>
  );
}
