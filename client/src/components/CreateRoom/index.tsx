import { Box, Button, Input, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";
import { CreateChatRoomInput } from "../../__generated__/operations-types";

interface Props {
  onAddNewRoom: (input: CreateChatRoomInput) => void;
}

const CreateRoom = ({ onAddNewRoom }: Props) => {
  const [newRoom, setNewRoom] = useState<CreateChatRoomInput>({
    title: "",
    description: "",
  });

  const handleAddNewRoom = () => {
    if (!newRoom.title || !newRoom.description) {
      console.log("Implement Alerts");
      return;
    }
    onAddNewRoom({ title: newRoom.title, description: newRoom.description });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewRoom({ ...newRoom, [name]: value });
  };

  return (
    <Box>
      <Input
        name="title"
        placeholder="title"
        value={newRoom.title}
        onChange={handleInputChange}
      />
      <Input
        name="description"
        placeholder="description"
        value={newRoom.description}
        onChange={handleInputChange}
      />
      <Button onClick={handleAddNewRoom}>Add New Room</Button>
    </Box>
  );
};

export default CreateRoom;
