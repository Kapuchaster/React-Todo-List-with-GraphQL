import { Box, Button, Flex, Heading, Spacer, Stack } from "@chakra-ui/react";
import { useContext } from "react";
import CreateRoom from "../../components/CreateRoom";
import ScrollBox from "../../components/ScrollBox";
import { ModalContext } from "../../HOC/WithModal";
import {
  ChatRoom,
  CreateChatRoomInput,
} from "../../__generated__/operations-types";

interface Props {
  chatRoomList?: ChatRoom[];
  selectedChatRoomId?: string;
  onAddChatRoom: (input: CreateChatRoomInput) => void;
  onSelectChatRoom: (roomId: string) => void;
}

const ChatRoomsPanel = ({
  chatRoomList = [],
  selectedChatRoomId,
  onAddChatRoom,
  onSelectChatRoom,
}: Props) => {
  const modalContext = useContext(ModalContext);

  const openCreateModal = () => {
    modalContext.open(<CreateRoom onAddNewRoom={onAddChatRoom} />);
  };

  return (
    <Flex pt="4rem" height="100%" flexDir="column">
      <Heading textAlign="center" size="lg">
        ChatRoomsPanel
      </Heading>
      <Spacer />
      <Box height="60%">
        <ScrollBox>
          <Stack direction="column" spacing="2" align="stretch">
            {chatRoomList.map((chatRoom) => (
              <Button
                key={chatRoom.id}
                colorScheme={
                  chatRoom.id === selectedChatRoomId ? "green" : "blue"
                }
                height="4rem"
                onClick={() => {
                  onSelectChatRoom(chatRoom.id);
                }}
              >
                {chatRoom.title}
              </Button>
            ))}
          </Stack>
        </ScrollBox>
      </Box>
      <Spacer />
      <Button onClick={openCreateModal}>ADD</Button>
    </Flex>
  );
};

export default ChatRoomsPanel;
