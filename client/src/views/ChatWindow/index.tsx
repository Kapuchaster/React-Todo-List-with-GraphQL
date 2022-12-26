import { ArrowRightIcon } from "@chakra-ui/icons";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  useContext,
  useEffect,
  useState,
} from "react";
import ChatBox from "../../components/ChatBox";
import { SettingsContext } from "../../HOC/WithSettings";
import TEMP_USER_ID from "../../services/auth";
import {
  ChatRoom,
  CreateMessageInput,
  Message,
  useMessageSubscription,
} from "../../__generated__/operations-types";

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

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInput(value);
  };

  const handleEnterKey = (
    event: DetailedHTMLProps<
      InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >
  ) => {
    event.key === "Enter" && handleSendMessage();
  };

  const handleSendMessage = () => {
    if (chatRoom) {
      onCreateMessage({
        roomId: chatRoom.id,
        authorId: TEMP_USER_ID,
        authorName: settingsContext.username,
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
      <div style={{ height: "80vh" }}>
        <ChatBox messageDataList={messageList} userId={TEMP_USER_ID} />
      </div>
      <div style={{ display: "flex" }}>
        <InputGroup size="lg">
          <Input
            value={input}
            name="messageInput"
            onChange={handleInputChange}
            onKeyUp={handleEnterKey}
          />
          <InputRightElement>
            <Button variant='ghost' onClick={handleSendMessage}>
              <ArrowRightIcon />
            </Button>
          </InputRightElement>
        </InputGroup>
      </div>
    </div>
  );
};

export default ChatWindow;
