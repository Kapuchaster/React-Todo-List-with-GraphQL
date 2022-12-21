import { createRef, useEffect } from "react";
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
      <p className="chatBox__message">{text}</p>
    </div>
  );
};

interface Props {
  userId: string;
  messageDataList: Message[];
}

const ChatBox = ({ userId, messageDataList }: Props) => {
  const scrollBoxRef = createRef<HTMLDivElement>();

  const scrollToBottom = () => {
    scrollBoxRef.current?.scrollTo(0, scrollBoxRef.current.scrollHeight);
  };

  useEffect(() => {
    scrollToBottom();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messageDataList]);

  return (
    <div className="chatBox--container">
      <ScrollBox ref={scrollBoxRef}>
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
