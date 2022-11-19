import { gql, useQuery } from "@apollo/client";
import ChatRoomsPanel from "./layouts/ChatRoomsPanel/ChatRoomsPanel";
import Dashboard from "./layouts/Dashboard/Dashboard";
import { ChatRoom } from "./types";

function App() {
  const GET_CHAT_ROOM_LIST = gql`
    query GetChatRoomList {
      chatRoomList {
        id
        title
        description
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_CHAT_ROOM_LIST);

  if (loading) console.log("loading");
  if (error) console.log("loading");

  console.log(data);

  const mockedChatRoomList: ChatRoom[] = [
    { id: "1", title: "title", description: "description" },
    { id: "2", title: "title1", description: "description1" },
    { id: "3", title: "title2", description: "description2" },
  ];

  const DashboardLeftPanel = () => (
    <ChatRoomsPanel chatRoomList={mockedChatRoomList} />
  );

  return (
    <Dashboard leftPanel={<DashboardLeftPanel />} rightPanel={<>right-panel</>}>
      <>main</>
    </Dashboard>
  );
}

export default App;
