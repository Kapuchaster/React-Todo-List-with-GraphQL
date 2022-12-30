import { Box, Button } from "@chakra-ui/react";
import { ReactElement } from "react";

import "./style.css";

interface Props {
  isOpen: boolean;
  side: "left" | "right";
  children: ReactElement;
  backgroundColor?: string;
}

const AsidePanel = ({
  isOpen,
  side,
  backgroundColor = "white",
  children,
}: Props) => {
  const isActive = isOpen ? "active" : "inActive";

  return (
    <Box
      position="absolute"
      top="0"
      zIndex="2"
      left={side === "left" ? 0 : "auto"}
      right={side === "left" ? "auto" : 0}
      paddingLeft={side === "left" ? "0" : "30px"}
      paddingRight={side === "left" ? "30px" : "0"}
      overflow="hidden"
    >
      <aside className={`aside aside__${side}--${isActive}`}>
        <Box backgroundColor={backgroundColor} height="100%">
          {children}
        </Box>
      </aside>
    </Box>
  );
};

export default AsidePanel;
