import DashboardBody from "../components/dashboardUno/DashboardBody";
import OuterContainer from "../components/dashboardUno/OuterContainer";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import AnalysisSummary from "../components/tracking/AnalysisSummary";
import TrackingBody from "../components/tracking/TrackingBody";
import TrackingContentHolder from "../components/tracking/TrackingContentHolder";
import ChartGraph from "../components/dashboardUno/ChartGraph";
import CheaperStore from "../components/tracking/CheaperStore";
import EcoBotInsights from "../components/tracking/EcoBotInsights";

export default function Tracking() {
  return (
    <div>
      <TrackingBody>
        <SideBar />

        <DashboardBody>
          <TopBar />
          <OuterContainer>
            <TrackingContentHolder>
              <AnalysisSummary />
              <ChartGraph />
              <CheaperStore />
            </TrackingContentHolder>

            <TrackingContentHolder>
              <EcoBotInsights />
            </TrackingContentHolder>
          </OuterContainer>
        </DashboardBody>
        {/* <DashboardBody>
          <TopBar />
          <OuterContainer>
            <AnalysisSummary />
          </OuterContainer>
        </DashboardBody> */}
      </TrackingBody>
    </div>
  );
}
