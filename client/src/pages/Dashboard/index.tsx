import { useState } from "react";
import { AsidePanel } from "../../components";
import {
  ChatRoom,
  CreateChatRoomInput,
  CreateMessageInput,
  useCreateChatRoomMutation,
  useCreateMessageMutation,
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

  // Mutation
  const [createChatRoomMutation] = useCreateChatRoomMutation();
  const [createMessageMutation] = useCreateMessageMutation();

  const handleAddNewRoom = (input: CreateChatRoomInput) => {
    createChatRoomMutation({
      variables: {
        input,
      },
    });
  };

  const handleCreateMessage = (input: CreateMessageInput) => {
    createMessageMutation({
      variables: {
        input,
      },
    });
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
          onAddChatRoom={handleAddNewRoom}
        />
      </AsidePanel>
      <main>
        <ChatWindow
          chatRoom={chatRoomList[0]}
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
