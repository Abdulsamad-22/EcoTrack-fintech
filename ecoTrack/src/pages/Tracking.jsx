import DashboardBody from "../components/dashboardUno/DashboardBody";
import OuterContainer from "../components/dashboardUno/OuterContainer";
import SideBar from "../components/utils/SideBar";
import TopBar from "../components/utils/TopBar";
import AnalysisSummary from "../components/tracking/AnalysisSummary";
import TrackingBody from "../components/tracking/TrackingBody";
import TrackingContentHolder from "../components/tracking/TrackingContentHolder";
import CheaperStore from "../components/tracking/CheaperStore";
import EcoBotInsights from "../components/tracking/EcoBotInsights";
import DefenseExpenseContainer from "../components/tracking/DefenseExpenseContainer";
import TrendChartContainer from "../components/tracking/TrendChartContainer";
import Logout from "../components/logout/Logout";
import styles from "./dashboard.module.css";

export default function Tracking({
  confirmLogout,
  setConfirmLogout,
  setShowOverlay,
  showOverlay,
}) {
  return (
    <section>
      {showOverlay && (
        <div
          onClick={() => {
            setShowOverlay(false);
            setConfirmLogout(false);
          }}
          className={styles.overlayContainer}
        ></div>
      )}

      {confirmLogout && (
        <Logout
          setConfirmLogout={setConfirmLogout}
          setShowOverlay={setShowOverlay}
        />
      )}

      <TrackingBody>
        <SideBar
          setConfirmLogout={setConfirmLogout}
          confirmLogout={confirmLogout}
          setShowOverlay={setShowOverlay}
        />
        <DashboardBody>
          <TopBar />
          <OuterContainer>
            <TrackingContentHolder>
              <AnalysisSummary />
              <TrendChartContainer />
              <CheaperStore />
            </TrackingContentHolder>

            <TrackingContentHolder>
              <EcoBotInsights />
              <DefenseExpenseContainer />
            </TrackingContentHolder>
          </OuterContainer>
        </DashboardBody>
      </TrackingBody>
    </section>
  );
}
