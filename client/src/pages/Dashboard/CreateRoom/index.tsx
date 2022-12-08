import { useState } from "react";
import Input from "../../../components/Input";
import { CreateChatRoomInput } from "../../../__generated__/operations-types";

interface Props {
  onAddNewRoom: (input: CreateChatRoomInput) => void;
}

const CreateRoom = ({ onAddNewRoom }: Props) => {
  const [newRoom, setNewRoom] = useState<CreateChatRoomInput>({
    title: "",
    description: "",
  });

  const handleChangeInput = (value: string, name: string) => {
    setNewRoom({ ...newRoom, [name]: value });
  };

  const handleAddNewRoom = () => {
    onAddNewRoom({ title: newRoom.title, description: newRoom.description });
  };

  return (
    <div>
      <Input name="title" value={newRoom.title} onChange={handleChangeInput} />
      <Input
        name="description"
        value={newRoom.description}
        onChange={handleChangeInput}
      />
      <button onClick={handleAddNewRoom}>Add New Room</button>
    </div>
  );
};

export default CreateRoom;
