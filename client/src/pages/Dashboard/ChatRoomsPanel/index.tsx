import { useContext } from "react";
import { ModalContext } from "../../../HOC/WithModal";
import { ChatRoom } from "../../../__generated__/operations-types";
import CreateRoom from "../CreateRoom";

interface Props {
  chatRoomList?: ChatRoom[];
  onAddChatRoom: (title: string, description: string) => void;
}

const ChatRoomsPanel = ({ chatRoomList = [], onAddChatRoom }: Props) => {
  const modalContext = useContext(ModalContext);

  const openCreateModal = () => {
    modalContext.open(<CreateRoom onAddNewRoom={onAddChatRoom} />);
  };

  return (
    <div>
      ChatRoomsPanel
      <div>
        {chatRoomList.map((chatRoom) => (
          <div key={chatRoom.id}>{chatRoom.title}</div>
        ))}
        <button onClick={openCreateModal}>Add</button>
      </div>
    </div>
  );
};

export default ChatRoomsPanel;
