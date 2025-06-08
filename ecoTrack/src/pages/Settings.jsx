import { useState } from "react";
import BudgetWrapper from "../components/budget/BudgetWrapper";
import DashboardBody from "../components/dashboardUno/DashboardBody";
import AccountSettings from "../components/Settings/AccountSettings";
import SettingsContainer from "../components/Settings/SettingsContainer";
import SettingsTitle from "../components/Settings/SettingsTitles";
import SideBar from "../components/utils/SideBar";
import TopBar from "../components/utils/TopBar";
import PasswordSettings from "../components/Settings/PasswordSettings";
import Logout from "../components/logout/Logout";
import styles from "./dashboard.module.css";

export default function Settings({
  confirmLogout,
  setConfirmLogout,
  setShowOverlay,
  showOverlay,
}) {
  const [activeButton, setActiveButton] = useState("Account");
  return (
    <div>
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
          confirmLogout={confirmLogout}
        />
      )}

      <BudgetWrapper>
        <SideBar
          setConfirmLogout={setConfirmLogout}
          confirmLogout={confirmLogout}
          setShowOverlay={setShowOverlay}
        />
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
