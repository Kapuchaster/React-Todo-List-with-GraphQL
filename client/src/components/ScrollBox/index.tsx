import { forwardRef, ReactElement } from "react";

import "./style.css";

interface Props {
  children: ReactElement;
}

const ScrollBox = forwardRef<HTMLDivElement, Props>(({ children }, ref) => {
  return (
    <div ref={ref} className="scrollBox">
      {children}
    </div>
  );
});

export default ScrollBox;
