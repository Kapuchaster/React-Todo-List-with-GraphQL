import { useContext, useEffect, useState } from "react";
import { Button } from "../../../components";
import ChatBox from "../../../components/ChatBox";
import Input from "../../../components/Input";
import { SettingsContext } from "../../../HOC/WithSettings";
import {
  ChatRoom,
  CreateMessageInput,
  Message,
  useMessageSubscription,
} from "../../../__generated__/operations-types";

interface Props {
  chatRoom?: ChatRoom;
  onCreateMessage: (input: CreateMessageInput) => void;
}

const ChatWindow = ({ chatRoom, onCreateMessage }: Props) => {
  const [input, setInput] = useState("");
  const [messageList, setMessageList] = useState<Message[]>(
    chatRoom?.messages || []
  );

  const settingsContext = useContext(SettingsContext);

  // Subscription
  const { data: messageSubData } = useMessageSubscription();

  useEffect(() => {
    if (chatRoom) {
      setMessageList(chatRoom?.messages);
    }
  }, [chatRoom]);

  useEffect(() => {
    if (messageSubData) {
      setMessageList((state) => [...state, messageSubData?.messageCreated]);
    }
  }, [messageSubData]);

  const handleInputChange = (value: string) => {
    setInput(value);
  };

  const handleSendMessage = () => {
    if (chatRoom) {
      onCreateMessage({
        roomId: chatRoom.id,
        author: settingsContext.username,
        text: input,
      });
    }
    setInput("");
  };

  if (!chatRoom) {
    return <h1>Select or create a Chat Room</h1>;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        height: "100vh",
        width: "35rem",
      }}
    >
      <h1>{chatRoom.title}</h1>
      <ChatBox messageDataList={messageList} />
      <div>
        <Input value={input} name="messageInput" onChange={handleInputChange} />
        <Button title=">" variant="primary" onClick={handleSendMessage} />
      </div>
    </div>
  );
};

export default ChatWindow;
