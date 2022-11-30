import { useState } from "react";
import { ChatRoom } from "../../__generated__/operations-types";

interface Props {
  chatRoomList?: ChatRoom[];
  onAddNewRoom?: (title: string, description: string) => void;
}

const ChatRoomsPanel = ({ chatRoomList = [], onAddNewRoom }: Props) => {
  const [newRoom, setNewRoom] = useState({ title: "", description: "" });

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewRoom({ ...newRoom, [name]: value });
  };

  const handleAddNewRoom = () => {
    onAddNewRoom?.(newRoom.title, newRoom.description);
  };

  return (
    <div>
      ChatRoomsPanel
      <div>
        {chatRoomList.map((chatRoom) => (
          <div key={chatRoom.id}>{chatRoom.title}</div>
        ))}
      </div>
      <input name="title" value={newRoom.title} onChange={handleChangeInput} />
      <input
        name="description"
        value={newRoom.description}
        onChange={handleChangeInput}
      />
      <button onClick={handleAddNewRoom}>Add New Room</button>
    </div>
  );
};

export default ChatRoomsPanel;
