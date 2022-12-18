import { useEffect, useState } from "react";
import { WithModalContext } from "./HOC/WithModal";
import { WithSettingsContext } from "./HOC/WithSettings";
import { WithThemeContext } from "./HOC/WithTheme";
import Dashboard from "./pages/Dashboard";

import {
  ChatRoom,
  useChatRoomSubscription,
  useGetChatRoomListLazyQuery,
} from "./__generated__/operations-types";

import "./theme/colors.css";

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

  useEffect(() => {
    if (chatRoomSubData) {
      setChatRoomList((state) => [...state, chatRoomSubData?.chatRoomCreated]);
    }
  }, [chatRoomSubData]);

  return (
    <WithSettingsContext>
      <WithThemeContext>
        <WithModalContext>
          <Dashboard chatRoomList={chatRoomList} />
        </WithModalContext>
      </WithThemeContext>
    </WithSettingsContext>
  );
}

export default App;
