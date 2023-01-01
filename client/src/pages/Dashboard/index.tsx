import { Button, Flex, useColorModeValue } from "@chakra-ui/react";
import { useContext, useReducer } from "react";
import { AsidePanel } from "../../components";
import { SettingsContext } from "../../HOC/WithSettings";
import useDetectMobile from "../../hooks/useDetectMobile";
import ChatRoomsPanel from "../../views/ChatRoomsPanel";
import ChatWindow from "../../views/ChatWindow";
import ProfilPanel from "../../views/ProfilPanel";
import {
  ChatRoom,
  CreateChatRoomInput,
  CreateMessageInput,
  JoinChatRoomInput,
  useCreateChatRoomMutation,
  useCreateMessageMutation,
  useJoinChatRoomMutation,
} from "../../__generated__/operations-types";
import {
  actions as panelActions,
  reducer as panelReducer,
} from "./panelReducer";

export interface Props {
  chatRoomList: ChatRoom[];
}

const Dashboard = ({ chatRoomList }: Props) => {
  const isMobile = useDetectMobile();
  //TODO create custom Chakra Theme
  const blueBg = useColorModeValue("blue.300", "blue.800");
  const pinkBg = useColorModeValue("pink.300", "pink.800");

  const [panelState, panelDispatch] = useReducer(panelReducer, {
    left: !isMobile,
    right: !isMobile,
  });

  const settingContext = useContext(SettingsContext);

  // Mutation
  const [createChatRoomMutation] = useCreateChatRoomMutation();
  const [createMessageMutation] = useCreateMessageMutation();
  const [joinChatRoomMutation] = useJoinChatRoomMutation();

  const handleAddNewRoom = (input: CreateChatRoomInput) => {
    createChatRoomMutation({ variables: { input } });
  };

  const handleCreateMessage = (input: CreateMessageInput) => {
    createMessageMutation({ variables: { input } });
  };

  const handleSelectRoom = async (roomIdToJoin: string) => {
    const input: JoinChatRoomInput = {
      roomIdToJoin,
      authorName: settingContext.username,
      currentRoomId: settingContext?.activeRoom?.id,
    };
    const { data } = await joinChatRoomMutation({ variables: { input } });

    settingContext.setActiveRoom(data?.joinChatRoom || undefined);
  };

  const handlePanelStateChange = (side: "left" | "right", isOpen: boolean) => {
    isOpen
      ? panelDispatch(panelActions.openPanelAction(side, isMobile))
      : panelDispatch(panelActions.closePanelAction(side));
  };

  return (
    <Flex
      w="100vw"
      h="100vh"
      justifyContent="center"
      alignItems="stretch"
      bgGradient={`linear(to-r, ${blueBg}, ${pinkBg})`}
    >
      <Button
        position="absolute"
        left="0"
        top="0"
        zIndex={3}
        onClick={() => {
          handlePanelStateChange("left", !panelState.left);
        }}
      >
        Rooms
      </Button>
      <AsidePanel isOpen={panelState.left} side="left" backgroundColor={blueBg}>
        <ChatRoomsPanel
          chatRoomList={chatRoomList}
          selectedChatRoomId={settingContext.activeRoom?.id}
          onAddChatRoom={handleAddNewRoom}
          onSelectChatRoom={handleSelectRoom}
        />
      </AsidePanel>
      <Flex
        as="main"
        w={isMobile ? "100vw" : "34rem"}
        justifyContent="center"
        alignItems="center"
      >
        <ChatWindow
          chatRoom={settingContext.activeRoom}
          onCreateMessage={handleCreateMessage}
        />
      </Flex>
      <Button
        position="absolute"
        right="0"
        top="0"
        zIndex={3}
        onClick={() => {
          handlePanelStateChange("right", !panelState.right);
        }}
      >
        Profil
      </Button>
      <AsidePanel
        isOpen={panelState.right}
        side="right"
        backgroundColor={pinkBg}
      >
        <ProfilPanel />
      </AsidePanel>
    </Flex>
  );
};

export default Dashboard;
