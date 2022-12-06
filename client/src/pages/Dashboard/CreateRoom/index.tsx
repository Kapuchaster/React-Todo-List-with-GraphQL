import { useContext, useState } from "react";
import { ModalContext } from "../../../HOC/WithModal";
import { ChatRoom } from "../../../__generated__/operations-types";

interface Props {
  chatRoomList?: ChatRoom[];
  onAddNewRoom?: (title: string, description: string) => void;
}

const CreateRoom = ({ chatRoomList = [], onAddNewRoom }: Props) => {
  const modalContext = useContext(ModalContext);

  const [newRoom, setNewRoom] = useState({ title: "", description: "" });

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewRoom({ ...newRoom, [name]: value });
  };

  const handleAddNewRoom = () => {
    modalContext.open(<>Modal</>);
    // onAddNewRoom?.(newRoom.title, newRoom.description);
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
