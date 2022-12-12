import { ReactElement } from "react";
import "./style.css";

interface Props {
  height: string;
  children: ReactElement;
}

const ScrollBox = ({ height, children }: Props) => {
  return (
    <div className="scrollBox--container" style={{ height }}>
      {children}
    </div>
  );
};

export default ScrollBox;
