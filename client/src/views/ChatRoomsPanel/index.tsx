import { useContext } from "react";
import { Button, RoomTile } from "../../components";
import CreateRoom from "../../components/CreateRoom";
import ScrollBox from "../../components/ScrollBox";
import { ModalContext } from "../../HOC/WithModal";
import {
  ChatRoom,
  CreateChatRoomInput,
} from "../../__generated__/operations-types";

import "./style.css";

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
    <div className="chatRoomPanel">
      <h1>ChatRoomsPanel</h1>
      <ScrollBox>
        <>
          {chatRoomList.map((chatRoom) => (
            <RoomTile
              key={chatRoom.id}
              title={chatRoom.title}
              isActive={chatRoom.id === selectedChatRoomId}
              onClick={() => {
                onSelectChatRoom(chatRoom.id);
              }}
            />
          ))}
        </>
      </ScrollBox>
      <Button title="Add" variant="primary" onClick={openCreateModal} />
    </div>
  );
};

export default ChatRoomsPanel;
