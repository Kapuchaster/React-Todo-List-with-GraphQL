import { useState } from "react";

interface Props {
  onAddNewRoom: (title: string, description: string) => void;
}

const CreateRoom = ({ onAddNewRoom }: Props) => {
  // const modalContext = useContext(ModalContext);

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
