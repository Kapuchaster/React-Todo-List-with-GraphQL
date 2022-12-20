import { ReactElement } from "react";
import "./style.css";

interface Props {
  isOpen: boolean;
  side: "left" | "right";
  children: ReactElement;
  onIsOpenChange: (isOpen: boolean) => void;
}

const AsidePanel = ({ isOpen, side, children, onIsOpenChange }: Props) => {
  const isActive = isOpen ? "active" : "inActive";

  return (
    <div className={`aside__container aside__container--${side}`}>
      <button
        className={`aside__button--${side}`}
        onClick={() => {
          onIsOpenChange(!isOpen);
        }}
      >
        open/close
      </button>
      <aside
        style={{ position: "absolute" }}
        className={`aside__content aside__${side}--${isActive}`}
      >
        {children}
      </aside>
    </div>
  );
};

export default AsidePanel;
