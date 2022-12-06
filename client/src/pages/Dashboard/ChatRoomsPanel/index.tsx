import { useContext } from "react";
import { Button } from "../../../components";
import { ModalContext } from "../../../HOC/WithModal";
import { ChatRoom } from "../../../__generated__/operations-types";
import CreateRoom from "../CreateRoom";

import "./style.css";
interface Props {
  chatRoomList?: ChatRoom[];
  onAddChatRoom: (
    title: ChatRoom["title"],
    description: ChatRoom["description"]
  ) => void;
}

const ChatRoomsPanel = ({ chatRoomList = [], onAddChatRoom }: Props) => {
  const modalContext = useContext(ModalContext);

  const openCreateModal = () => {
    modalContext.open(<CreateRoom onAddNewRoom={onAddChatRoom} />);
  };

  return (
    <div className="chatRoomPanel--container">
      ChatRoomsPanel
      <div>
        {chatRoomList.map((chatRoom) => (
          <div key={chatRoom.id}>{chatRoom.title}</div>
        ))}
        <Button title="Add" variant="primary" onClick={openCreateModal} />
      </div>
    </div>
  );
};

export default ChatRoomsPanel;
