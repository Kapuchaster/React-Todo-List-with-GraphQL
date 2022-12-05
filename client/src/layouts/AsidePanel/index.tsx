import { ReactElement } from "react";
import "./style.css";

interface Props {
  isOpen: boolean;
  side: "left" | "right";
  children: ReactElement;
  onIsOpenChange: (isOpen: boolean) => void;
}

const AsidePanel = ({ isOpen, side, children, onIsOpenChange }: Props) => {
  const asideClassName = `aside--container aside--${side}`;

  return (
    <aside className={asideClassName}>
      <button
        className={`aside__button--${side}`}
        onClick={() => {
          onIsOpenChange(!isOpen);
        }}
      >
        open/close
      </button>
      {isOpen && <div className="aside__content--container ">{children}</div>}
    </aside>
  );
};

export default AsidePanel;
