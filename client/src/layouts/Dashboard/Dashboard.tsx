import { ReactElement, useState } from "react";
import "./Dashboard.css";

interface Props {
  leftPanel: ReactElement;
  rightPanel: ReactElement;
  children: ReactElement;
}

const AsidePanel = ({
  children,
  side,
}: {
  children: ReactElement;
  side: "left" | "right";
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const asideClassName = `dashboard__aside--container dashboard__aside--${side}`;

  return (
    <aside className={asideClassName}>
      <button
        className={`dashboard__aside__button--${side}`}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        open/close
      </button>
      {isOpen && (
        <div className="dashboard__aside__content--container ">{children}</div>
      )}
    </aside>
  );
};

const Dashboard = ({ leftPanel, rightPanel, children }: Props) => {
  return (
    <div className="dashboard--container">
      <AsidePanel side="left">{leftPanel}</AsidePanel>
      <main>{children}</main>
      <AsidePanel side="right">{rightPanel}</AsidePanel>
    </div>
  );
};

export default Dashboard;
