import { useContext } from "react";
import { Button, RoomTile } from "../../../components";
import { ModalContext } from "../../../HOC/WithModal";
import {
  ChatRoom,
  CreateChatRoomInput,
} from "../../../__generated__/operations-types";
import CreateRoom from "../../../components/CreateRoom";

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
    <div className="chatRoomPanel--container">
      <h1>ChatRoomsPanel</h1>
      <div>
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
        <Button title="Add" variant="primary" onClick={openCreateModal} />
      </div>
    </div>
  );
};

export default ChatRoomsPanel;
