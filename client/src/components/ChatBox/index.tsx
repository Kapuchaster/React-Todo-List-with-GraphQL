import getMessageFormatTime from "../../services/time";
import { Message } from "../../__generated__/operations-types";
import ScrollBox from "../ScrollBox";

import "./style.css";

const MessageTile = ({
  text,
  author,
  timestamp,
  isMine,
}: Message & { isMine: boolean }) => {
  const isRight = isMine ? "chatBox__message--right" : "chatBox__message--left";
  const formattedTime = getMessageFormatTime(timestamp);

  return (
    <div className={`chatBox__message--container ${isRight}`}>
      <div className="chatBox__message--info">
        <div>{author.name}</div>
        <div>{formattedTime}</div>
      </div>
      <div className="chatBox__message">{text}</div>
    </div>
  );
};

interface Props {
  userId: string;
  messageDataList: Message[];
}

const ChatBox = ({ userId, messageDataList }: Props) => {
  return (
    <div className="chatBox--container">
      <ScrollBox>
        <>
          {messageDataList.map(({ id, text, author, timestamp }) => {
            return (
              <MessageTile
                key={id}
                id={id}
                text={text}
                author={author}
                timestamp={timestamp}
                isMine={userId === author.id}
              />
            );
          })}
        </>
      </ScrollBox>
    </div>
  );
};

export default ChatBox;
