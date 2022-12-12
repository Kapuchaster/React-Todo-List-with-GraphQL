import { useContext, useState } from "react";
import { AsidePanel } from "../../components";
import { SettingsContext } from "../../HOC/WithSettings";
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

interface Props {
  chatRoomList: ChatRoom[];
}

const Dashboard = ({ chatRoomList }: Props) => {
  const [isLeftPanelOpen, setLeftPanel] = useState(true);
  const [isRightPanelOpen, setRightPanel] = useState(true);

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
      author: settingContext.username,
      currentRoomId: settingContext?.activeRoom?.id,
    };
    const { data } = await joinChatRoomMutation({ variables: { input } });

    settingContext.setActiveRoom(data?.joinChatRoom || undefined);
  };

  return (
    <div className="dashboard--container">
      <AsidePanel
        isOpen={isLeftPanelOpen}
        onIsOpenChange={setLeftPanel}
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
        isOpen={isRightPanelOpen}
        onIsOpenChange={setRightPanel}
        side="right"
      >
        <ProfilPanel />
      </AsidePanel>
    </div>
  );
};

export default Dashboard;
