import ChatRoomsPanel from "./layouts/ChatRoomsPanel/ChatRoomsPanel";
import Dashboard from "./layouts/Dashboard/Dashboard";
import {
  ChatRoom,
  useChatRoomSubscription,
  useGetChatRoomListQuery,
} from "./__generated__/operations-types";

function App() {
  const { data: data2 } = useChatRoomSubscription();

  console.log(data2);

  const { data, loading, error } = useGetChatRoomListQuery();

  if (loading) console.log("loading");
  if (error) console.log("loading");

  console.log(data?.chatRoomList);

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
