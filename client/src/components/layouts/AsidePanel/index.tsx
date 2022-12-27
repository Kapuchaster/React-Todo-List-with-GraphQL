import { Box, Button } from "@chakra-ui/react";
import { ReactElement } from "react";

import "./style.css";

interface Props {
  isOpen: boolean;
  side: "left" | "right";
  children: ReactElement;
  backgroundColor?: string;
  onIsOpenChange: (isOpen: boolean) => void;
}

const AsidePanel = ({
  isOpen,
  side,
  backgroundColor = "white",
  children,
  onIsOpenChange,
}: Props) => {
  const isActive = isOpen ? "active" : "inActive";
  console.log(backgroundColor);

  return (
    <Box
      position="absolute"
      top="0"
      zIndex="2"
      left={side === "left" ? 0 : "auto"}
      right={side === "left" ? "auto" : 0}
    >
      <Box
        position="absolute"
        zIndex="1"
        left={side === "left" ? 0 : "auto"}
        right={side === "left" ? "auto" : 0}
      >
        <Button
          onClick={() => {
            onIsOpenChange(!isOpen);
          }}
        >
          open/close
        </Button>
      </Box>
      <aside className={`aside aside__${side}--${isActive}`}>
        <Box backgroundColor={backgroundColor} height="100%">
          {children}
        </Box>
      </aside>
    </Box>
  );
};

export default AsidePanel;
