import { Box } from "@chakra-ui/react";
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
      as="aside"
      position="absolute"
      h="100vh"
      top="0"
      zIndex="2"
      paddingLeft={side === "left" ? "0" : "30px"}
      paddingRight={side === "left" ? "30px" : "0"}
      className={`aside__${side}--${isActive}`}
    >
      <Box
        boxShadow='2xl'
        bg={backgroundColor}
        height="100%"
        width="20rem"
      >
        {children}
      </Box>
    </Box>
  );
};

export default AsidePanel;
