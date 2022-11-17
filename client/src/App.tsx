import { useQuery, gql } from "@apollo/client";
import Dashboard from "./layouts/Dashboard/Dashboard";

function App() {
  const GET_TASK_LIST = gql`
    query GetTaskList {
      taskList {
        title
        description
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_TASK_LIST);

  if (loading) console.log("loading");
  if (error) console.log("loading");

  console.log(data);

  return (
    <Dashboard leftPanel={<>lp</>} rightPanel={<>rp</>}>
      <>main</>
    </Dashboard>
  );
}

export default App;
