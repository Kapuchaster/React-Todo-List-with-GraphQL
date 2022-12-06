import { useState } from "react";
import { ChatRoom } from "../../../__generated__/operations-types";

interface Props {
  onAddNewRoom: (
    title: ChatRoom["title"],
    description: ChatRoom["description"]
  ) => void;
}

const CreateRoom = ({ onAddNewRoom }: Props) => {
  const [newRoom, setNewRoom] = useState({ title: "", description: "" });

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewRoom({ ...newRoom, [name]: value });
  };

  const handleAddNewRoom = () => {
    onAddNewRoom(newRoom.title, newRoom.description);
  };

  return (
    <div>
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

export default CreateRoom;
