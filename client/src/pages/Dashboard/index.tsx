import { useState } from "react";
import { AsidePanel } from "../../components";
import {
  ChatRoom,
  useCreateChatRoomMutation,
} from "../../__generated__/operations-types";
import ChatRoomsPanel from "./ChatRoomsPanel";

import "./style.css";

interface Props {
  chatRoomList: ChatRoom[];
}

const Dashboard = ({ chatRoomList }: Props) => {
  const [isLeftPanelOpen, setLeftPanel] = useState(true);
  const [isRightPanelOpen, setRightPanel] = useState(true);

  // Mutation
  const [createChatRoomMutation] = useCreateChatRoomMutation();

  const handleAddNewRoom = (title: string, description: string) => {
    createChatRoomMutation({
      variables: {
        input: {
          title,
          description,
        },
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
      <main>main</main>
      <AsidePanel
        isOpen={isRightPanelOpen}
        onIsOpenChange={setRightPanel}
        side="right"
      >
        <>Profile-panel</>
      </AsidePanel>
    </div>
  );
};

export default Dashboard;
