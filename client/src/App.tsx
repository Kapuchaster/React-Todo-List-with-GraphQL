import { useEffect, useState } from "react";
import { WithModalContext } from "./HOC/WithModal";
import Dashboard from "./pages/Dashboard";

import {
  ChatRoom,
  useChatRoomSubscription,
  useGetChatRoomListLazyQuery,
} from "./__generated__/operations-types";

function App() {
  const [chatRoomList, setChatRoomList] = useState<ChatRoom[]>([]);

  // Query
  const [getChatRoomList] = useGetChatRoomListLazyQuery();
  // Subscription
  const { data: chatRoomSubData } = useChatRoomSubscription();

  useEffect(() => {
    getChatRoomList().then((response) =>
      setChatRoomList(response.data?.chatRoomList ?? [])
    );
  }, [getChatRoomList]);
  console.log(chatRoomList);

  useEffect(() => {
    if (chatRoomSubData) {
      setChatRoomList((state) => [...state, chatRoomSubData?.chatRoomCreated]);
    }
  }, [chatRoomSubData]);

  return (
    <WithModalContext>
      <Dashboard chatRoomList={chatRoomList} />
    </WithModalContext>
  );
}

export default App;
