import { Box, Button } from "@chakra-ui/react";
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
      <Box className={`aside__button--${side}`}>
        <Button
          onClick={() => {
            onIsOpenChange(!isOpen);
          }}
        >
          open/close
        </Button>
      </Box>
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
