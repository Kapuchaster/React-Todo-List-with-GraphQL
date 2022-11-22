import { ChatRoom } from "../../__generated__/operations-types";

interface Props {
  chatRoomList?: ChatRoom[];
  onAddNewRoom?: () => void;
}

const ChatRoomsPanel = ({ chatRoomList = [], onAddNewRoom }: Props) => {
  return (
    <div>
      ChatRoomsPanel
      <div>
        {chatRoomList.map((chatRoom) => (
          <div key={chatRoom.id}>{chatRoom.title}</div>
        ))}
      </div>
      <button onClick={onAddNewRoom}>Add New Room</button>
    </div>
  );
};

export default ChatRoomsPanel;
