import { useQuery, gql } from "@apollo/client";

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

  return <div>init</div>;
}

export default App;
