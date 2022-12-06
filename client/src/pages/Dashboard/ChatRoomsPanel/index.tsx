import { useContext } from "react";
import { ModalContext } from "../../../HOC/WithModal";
import { ChatRoom } from "../../../__generated__/operations-types";
import CreateRoom from "../CreateRoom";

interface Props {
  chatRoomList?: ChatRoom[];
}

const ChatRoomsPanel = ({ chatRoomList = [] }: Props) => {
  const modalContext = useContext(ModalContext);

  const openCreateModal = () => {
    modalContext.open(<CreateRoom />);
  };
  // Mutation
  // const [createChatRoomMutation] = useCreateChatRoomMutation();
  // const handleAddNewRoom = (title: string, description: string) => {
  //   createChatRoomMutation({
  //     variables: {
  //       input: {
  //         title,
  //         description,
  //       },
  //     },
  //   });
  // };

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
