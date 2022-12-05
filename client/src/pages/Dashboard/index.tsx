import { ReactElement, useState } from "react";
import { AsidePanel } from "../../layouts";
import "./style.css";

interface Props {
  leftPanel: ReactElement;
  rightPanel: ReactElement;
  children: ReactElement;
}

const Dashboard = ({ leftPanel, rightPanel, children }: Props) => {
  const [isLeftPanelOpen, setLeftPanel] = useState(true);
  const [isRightPanelOpen, setRightPanel] = useState(true);

  return (
    <div className="dashboard--container">
      <AsidePanel
        isOpen={isLeftPanelOpen}
        onIsOpenChange={setLeftPanel}
        side="left"
      >
        {leftPanel}
      </AsidePanel>
      <main>{children}</main>
      <AsidePanel
        isOpen={isRightPanelOpen}
        onIsOpenChange={setRightPanel}
        side="right"
      >
        {rightPanel}
      </AsidePanel>
    </div>
  );
};

export default Dashboard;
