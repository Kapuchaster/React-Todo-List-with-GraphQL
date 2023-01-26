import { Box, Flex } from "@chakra-ui/react";
import { ReactElement } from "react";

import styles from "./style.module.css";

interface Props {
  isOpen: boolean;
  side: "left" | "right";
  testName: string;
  children: ReactElement;
  backgroundColor?: string;
}

const AsidePanel = ({
  isOpen,
  side,
  testName,
  backgroundColor = "white",
  children,
}: Props) => {
  const isActive = isOpen ? "active" : "inActive";

  return (
    <Flex
      as="aside"
      pos="absolute"
      overflow="hidden"
      top="0"
      h="100vh"
      width="22rem"
      zIndex="2"
      left={side === "left" ? 0 : "auto"}
      right={side === "left" ? "auto" : 0}
      paddingLeft={side === "left" ? "0" : "30px"}
      paddingRight={side === "left" ? "30px" : "0"}
      pointerEvents="none"
      data-testid={`aside-${testName}`}
    >
      <Box
        pos="absolute"
        h="100%"
        className={styles[`aside__${side}--${isActive}`]}
        boxShadow="2xl"
        bg={backgroundColor}
        width="20rem"
        pointerEvents="auto"
      >
        {children}
      </Box>
    </Flex>
  );
};

export default AsidePanel;
