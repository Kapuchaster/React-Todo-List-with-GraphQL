import { useContext, useState } from "react";
import { AsidePanel } from "../../components";
import { SettingsContext } from "../../HOC/WithSettings";
import useDetectMobile from "../../hooks/useDetectMobile";
import {
  ChatRoom,
  CreateChatRoomInput,
  CreateMessageInput,
  JoinChatRoomInput,
  useCreateChatRoomMutation,
  useCreateMessageMutation,
  useJoinChatRoomMutation,
} from "../../__generated__/operations-types";
import ChatRoomsPanel from "./ChatRoomsPanel";
import ChatWindow from "./ChatWindow";
import ProfilPanel from "./ProfilPanel";

import "./style.css";

export interface Props {
  chatRoomList: ChatRoom[];
}

const Dashboard = ({ chatRoomList }: Props) => {
  const isMobile = useDetectMobile();

  const [isPanelOpen, setPanel] = useState({
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

  const handleAsideChange = (side: "left" | "right", isOpen: boolean) => {
    if (isOpen) {
      // for mobile we want to have only 1 aside opened at a time
      if (isMobile) {
        setPanel({ left: false, right: false, [side]: true });
      } else {
        setPanel((state) => ({ ...state, [side]: true }));
      }
    } else {
      setPanel((state) => ({ ...state, [side]: false }));
    }
  };

  return (
    <div className="dashboard--container">
      <AsidePanel
        isOpen={isPanelOpen.left}
        onIsOpenChange={(isOpen) => handleAsideChange("left", isOpen)}
        side="left"
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
        isOpen={isPanelOpen.right}
        onIsOpenChange={(isOpen) => handleAsideChange("right", isOpen)}
        side="right"
      >
        <ProfilPanel />
      </AsidePanel>
    </div>
  );
};

export default Dashboard;
