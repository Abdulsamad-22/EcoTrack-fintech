import { useState } from "react";
import BudgetWrapper from "../components/budget/BudgetWrapper";
import DashboardBody from "../components/dashboardUno/DashboardBody";
import OuterContainer from "../components/dashboardUno/OuterContainer";
import AccountSettings from "../components/Settings/AccountSettings";
import SettingsContainer from "../components/Settings/SettingsContainer";
import SettingsTitle from "../components/Settings/SettingsTitles";
import SideBar from "../components/utils/SideBar";
import TopBar from "../components/utils/TopBar";
import PasswordSettings from "../components/Settings/PasswordSettings";

export default function Settings() {
  const [activeButton, setActiveButton] = useState("Account");
  return (
    <div>
      <BudgetWrapper>
        <SideBar />
        <DashboardBody>
          <TopBar />
          <SettingsContainer>
            <SettingsTitle
              activeButton={activeButton}
              setActiveButton={setActiveButton}
            />
            {activeButton === "Account" && (
              <AccountSettings activeButton={activeButton} />
            )}
            {activeButton === "Password" && <PasswordSettings />}
          </SettingsContainer>
        </DashboardBody>
      </BudgetWrapper>
    </div>
  );
}
