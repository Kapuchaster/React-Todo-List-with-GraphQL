import { useContext, useReducer } from "react";
import { AsidePanel } from "../../components";
import { SettingsContext } from "../../HOC/WithSettings";
import useDetectMobile from "../../hooks/useDetectMobile";
import ChatWindow from "../../views/ChatWindow";
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
import ChatRoomsPanel from "../../views/ChatRoomsPanel";
import ProfilPanel from "../../views/ProfilPanel";

import { Flex, useColorModeValue } from "@chakra-ui/react";

export interface Props {
  chatRoomList: ChatRoom[];
}

const Dashboard = ({ chatRoomList }: Props) => {
  const isMobile = useDetectMobile();
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
      w="100%"
      h="100vh"
      justifyContent="center"
      alignItems="center"
      bgGradient={`linear(to-r, ${blueBg}, ${pinkBg})`}
    >
      <AsidePanel
        isOpen={panelState.left}
        onIsOpenChange={(isOpen) => handlePanelStateChange("left", isOpen)}
        side="left"
        backgroundColor={blueBg}
      >
        <ChatRoomsPanel
          chatRoomList={chatRoomList}
          selectedChatRoomId={settingContext.activeRoom?.id}
          onAddChatRoom={handleAddNewRoom}
          onSelectChatRoom={handleSelectRoom}
        />
      </AsidePanel>
      <main>
        <ChatWindow
          chatRoom={settingContext.activeRoom}
          onCreateMessage={handleCreateMessage}
        />
      </main>
      <AsidePanel
        isOpen={panelState.right}
        onIsOpenChange={(isOpen) => handlePanelStateChange("right", isOpen)}
        side="right"
        backgroundColor={pinkBg}
      >
        <ProfilPanel />
      </AsidePanel>
    </Flex>
  );
};

export default Dashboard;
