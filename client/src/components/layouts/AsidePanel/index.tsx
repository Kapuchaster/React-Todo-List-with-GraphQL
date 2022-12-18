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
  const asideClassName = `aside__container aside__${side}`;

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
      <div className={`aside__content aside__${side}--${isActive}`}>{children}</div>
    </aside>
  );
};

export default AsidePanel;
