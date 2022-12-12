import { useContext } from "react";
import { Button } from "../../../components";
import { ModalContext } from "../../../HOC/WithModal";
import {
  ChatRoom,
  CreateChatRoomInput,
} from "../../../__generated__/operations-types";
import CreateRoom from "../../../components/CreateRoom";

import "./style.css";
interface Props {
  chatRoomList?: ChatRoom[];
  onAddChatRoom: (input: CreateChatRoomInput) => void;
  onSelectRoom: (roomId: string) => void;
}

const ChatRoomsPanel = ({
  chatRoomList = [],
  onAddChatRoom,
  onSelectRoom,
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
          <Button
            key={chatRoom.id}
            title={chatRoom.title}
            variant="secondary"
            onClick={() => {
              onSelectRoom(chatRoom.id);
            }}
          />
        ))}
        <Button title="Add" variant="primary" onClick={openCreateModal} />
      </div>
    </div>
  );
};

export default ChatRoomsPanel;
