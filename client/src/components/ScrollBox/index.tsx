import { Flex } from "@chakra-ui/react";
import { forwardRef, ReactElement } from "react";

interface Props {
  children: ReactElement;
}

const ScrollBox = forwardRef<HTMLDivElement, Props>(({ children }, ref) => {
  return (
    <Flex flex="1" flexDirection="column" ref={ref} overflow="scroll">
      {children}
    </Flex>
  );
});

export default ScrollBox;
