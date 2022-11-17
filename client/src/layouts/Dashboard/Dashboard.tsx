import { ReactElement } from "react";
import "./Dashboard.css";

interface Props {
  leftPanel: ReactElement;
  rightPanel: ReactElement;
  children: ReactElement;
}

const _asidePanel = ({ children }: { children: ReactElement }) => {
  <>
    <div>open/close</div>
    <div>children</div>
  </>;
};

const Dashboard = ({ leftPanel, rightPanel, children }: Props) => {
  return (
    <div className="dashboard--container">
      <aside>{leftPanel}</aside>
      <main>{children}</main>
      <aside>{rightPanel}</aside>
    </div>
  );
};

export default Dashboard;
