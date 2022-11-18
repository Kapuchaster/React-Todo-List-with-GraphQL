import { ChatRoom } from "../../types";

interface Props {
  chatRoomList: ChatRoom[];
}

const ChatRoomsPanel = ({ chatRoomList = [] }: Props) => {
  return (
    <div>
      ChatRoomsPanel
      <div>
        {chatRoomList.map((chatRoom) => (
          <div key={chatRoom.id}>{chatRoom.title}</div>
        ))}
      </div>
    </div>
  );
};

export default ChatRoomsPanel;
