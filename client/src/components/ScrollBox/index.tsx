import { ReactElement } from "react";
import "./style.css";

interface Props {
  children: ReactElement;
}

const ScrollBox = ({ children }: Props) => {
  return <div className="scrollBox--container">{children}</div>;
};

export default ScrollBox;
