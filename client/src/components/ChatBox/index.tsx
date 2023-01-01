import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { createRef, useEffect } from "react";
import getMessageFormatTime from "../../services/time";
import { Message } from "../../__generated__/operations-types";
import ScrollBox from "../ScrollBox";

const MessageTile = ({
  text,
  author,
  timestamp,
  isMine,
}: Message & { isMine: boolean }) => {
  const formattedTime = getMessageFormatTime(timestamp);
  const borderRadius = isMine ? "1rem 0 0 1rem" : "0 1rem 1rem 0";
  const marginLeft = isMine ? "auto" : 0;
  //TODO create custom Chakra Theme
  const greenLeftThemed = useColorModeValue("green.300", "green.800");
  const greenRightThemed = useColorModeValue("green.200", "green.700");
  const blueLeftThemed = useColorModeValue("blue.300", "blue.800");
  const blueRightThemed = useColorModeValue("blue.200", "blue.700");

  const bgGradient = isMine
    ? `linear(to-l, ${greenLeftThemed}, ${greenRightThemed})`
    : `linear(to-l, ${blueLeftThemed}, ${blueRightThemed})`;

  return (
    <Box
      w="90%"
      p="0.5rem"
      mb="0.5rem"
      ml={marginLeft}
      borderRadius={borderRadius}
      bgGradient={bgGradient}
    >
      <Flex fontSize="0.8rem" justifyContent="space-between">
        <Text>{author.name}</Text>
        <Box>{formattedTime}</Box>
      </Flex>
      <Text>{text}</Text>
    </Box>
  );
};

interface Props {
  userId: string;
  messageDataList: Message[];
}

const ChatBox = ({ userId, messageDataList }: Props) => {
  const scrollBoxRef = createRef<HTMLDivElement>();

  const scrollToBottom = () => {
    scrollBoxRef.current?.scrollTo(0, scrollBoxRef.current.scrollHeight);
  };

  useEffect(() => {
    scrollToBottom();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messageDataList]);

  return (
    <Flex flex="1" p="1rem">
      <ScrollBox ref={scrollBoxRef}>
        <>
          {messageDataList.map(({ id, text, author, timestamp }) => {
            return (
              <MessageTile
                key={id}
                id={id}
                text={text}
                author={author}
                timestamp={timestamp}
                isMine={userId === author.id}
              />
            );
          })}
        </>
      </ScrollBox>
    </Flex>
  );
};

export default ChatBox;
